// Existing code...

// Add event listeners for import and export buttons
document.getElementById('export-log').addEventListener('click', exportLog);
document.getElementById('import-log').addEventListener('click', () => {
    document.getElementById('file-input').click();
});
document.getElementById('file-input').addEventListener('change', importLog);

// Export logs to a file
function exportLog() {
    const logs = JSON.parse(localStorage.getItem('logs')) || [];
    const logsJSON = JSON.stringify(logs, null, 2);
    const blob = new Blob([logsJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'logs.json';
    link.click();

    URL.revokeObjectURL(url);
}

// Import logs from a file
async function importLog(event) {
    const file = event.target.files[0];
    if (!file) return;

    const fileContent = await file.text();
    const logs = JSON.parse(fileContent);
    localStorage.setItem('logs', JSON.stringify(logs));

    // Clear and render the imported logs
    const responseArea = document.getElementById('response-area');
    responseArea.innerHTML = '';
    logs.forEach((log) => renderResponse(log));
}
