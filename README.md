# Hide YouTube Shorts

A Chrome extension that hides the Shorts button and Shorts section from YouTube.

## Features

- Hides the Shorts shelf from the YouTube homepage
- Hides the Shorts button from the sidebar navigation
- Hides Shorts from search results
- Works with YouTube's dynamic content loading (SPA)
- Minimal, silent operation - no popup or UI

## Installation

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode** (toggle in the top right)
3. Click **Load unpacked**
4. Select the `hide-shorts` folder
5. The extension will automatically hide Shorts on YouTube

## Updating

If you make changes to the extension files:
1. Go to `chrome://extensions`
2. Find "Hide YouTube Shorts"
3. Click the refresh icon 🔄

## Files

```
hide-shorts/
├── manifest.json   ← Extension configuration
├── content.js      ← Hide logic (runs on YouTube pages)
├── icons/          ← Extension icons
└── README.md       ← This file
```

## How It Works

The extension uses a `MutationObserver` to detect when YouTube loads new content and applies CSS rules to hide Shorts-related elements:
- `#dismissible.ytd-rich-shelf-renderer` (Shorts shelf on homepage)
- `ytd-guide-entry-renderer` elements containing Shorts
- Shorts shelf in search results

## Troubleshooting

If Shorts are still visible:
1. Refresh the YouTube page
2. Make sure the extension is enabled in `chrome://extensions`
3. Try reloading the extension

## License

MIT
