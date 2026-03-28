const toggle = document.getElementById('toggle');
const status = document.getElementById('status');

chrome.storage.local.get(['enabled'], (result) => {
  const enabled = result.enabled !== false;
  toggle.checked = enabled;
  updateStatus(enabled);
});

toggle.addEventListener('change', () => {
  const enabled = toggle.checked;
  chrome.storage.local.set({ enabled });
  updateStatus(enabled);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle', enabled });
  });
});

function updateStatus(enabled) {
  if (enabled) {
    status.textContent = 'Hiding Shorts';
    status.className = 'status enabled';
  } else {
    status.textContent = 'Shorts visible';
    status.className = 'status disabled';
  }
}
