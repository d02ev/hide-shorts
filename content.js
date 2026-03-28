const HIDE_SHORTS_CSS = `
  ytd-rich-shelf-renderer[dismissible] {
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

let styleInjected = false;

const injectStyle = () => {
  if (styleInjected) return;
  const style = document.createElement('style');
  style.id = 'hide-shorts-styles';
  style.textContent = HIDE_SHORTS_CSS;
  document.head.appendChild(style);
  styleInjected = true;
};

const hideShorts = () => {
  injectStyle();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hideShorts);
} else {
  hideShorts();
}

window.addEventListener('yt-navigate-start', () => {
  styleInjected = false;
});

window.addEventListener('yt-navigate-finish', hideShorts);
