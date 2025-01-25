// JavaScript to handle output based on input
document.getElementById('submit-button').addEventListener('click', function() {
    // Get the input value
    const inputText = document.getElementById('text-input').value;
    let outputText;

    // Determine the output based on the input
    if (inputText === "passcode") {
        outputText = `
            <p>Great Job!!</p>
            <p>Let's see what's next <br><br><a href="home.html">Let's Go!!</a></p>
        `;
    } else {
        outputText = `
            <p>Oops! Looks like you missed something.</p>
            <p>Try again</p>
        `;
    }

    // Update the output section with HTML content
    document.getElementById('output-text').innerHTML = outputText;
    // Optionally, clear the input field after submission
    document.getElementById('text-input').value = '';
});
