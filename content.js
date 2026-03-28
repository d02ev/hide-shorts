const hideShorts = () => {
  const style = document.createElement('style');
  style.textContent = `
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
  document.head.appendChild(style);

  const observer = new MutationObserver(() => {
    document.head.appendChild(style);
  });

  observer.observe(document.head, { childList: true, subtree: true });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hideShorts);
} else {
  hideShorts();
}

let lastUrl = location.href;
new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    hideShorts();
  }
}).observe(document.body, { childList: true, subtree: true });
