// JavaScript to handle output based on input
document.getElementById('submit-button').addEventListener('click', function() {
    // Get the input value
    const inputText = document.getElementById('text-input').value;
    let outputText;

    // Determine the output based on the input
    if (inputText === "righthere") {
        outputText = `
            <p>You got me.</p>
            <p>Here is your flag: {flag_soc532}</p>
        `;
    } else {
        outputText = `
            <p>Come On!</p>
            <p> It's righthere on your screen</p>
        `;
    }

    // Update the output section with HTML content
    document.getElementById('output-text').innerHTML = outputText;
    // Optionally, clear the input field after submission
    document.getElementById('text-input').value = '';
});