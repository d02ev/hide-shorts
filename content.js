const HIDE_SHORTS_CSS = `
  #dismissible.ytd-rich-shelf-renderer {
    display: none !important;
  }
  ytd-guide-entry-renderer:has([title="Shorts"]),
  ytd-guide-entry-renderer:has([title="Shorts"]) + li {
    display: none !important;
  }
  ytd-guide-entry-renderer:nth-child(2) {
    display: none !important;
  }
  ytd-reel-shelf-renderer {
    display: none !important;
  }
  ytd-search-filter-group-renderer:has(ytd-search-filter-renderer:has([title="Shorts"])) {
    display: none !important;
  }
`;

let isEnabled = true;

const hideShorts = () => {
  if (!isEnabled) return;

  const style = document.createElement('style');
  style.id = 'hide-shorts-styles';
  style.textContent = HIDE_SHORTS_CSS;
  document.head.appendChild(style);

  const shelves = document.querySelectorAll('#dismissible.ytd-rich-shelf-renderer');
  console.log(`[Hide Shorts] Active - Hiding ${shelves.length} Shorts sections`);
};

const removeStyles = () => {
  const style = document.getElementById('hide-shorts-styles');
  if (style) {
    style.remove();
    console.log('[Hide Shorts] Disabled - Shorts are now visible');
  }
};

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggle') {
    isEnabled = message.enabled;
    if (isEnabled) {
      hideShorts();
    } else {
      removeStyles();
    }
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hideShorts);
} else {
  hideShorts();
}

window.addEventListener('yt-navigate-start', () => {
  const style = document.getElementById('hide-shorts-styles');
  if (style) style.remove();
});

window.addEventListener('yt-navigate-finish', hideShorts);
