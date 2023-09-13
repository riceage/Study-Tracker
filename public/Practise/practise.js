// JavaScript code to handle session box selection

// Function to toggle the selected class for a session box and un-toggle the other
function toggleSessionBoxSelection(boxId) {
    const sessionBox = document.getElementById(boxId);

    // Check if the session box exists
    if (sessionBox) {
        // Remove 'selected' class from both boxes
        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');
        box1.classList.remove('selected');
        box2.classList.remove('selected');

        // Toggle 'selected' class for the clicked box
        sessionBox.classList.toggle('selected');
    }
}

// Event listeners for session box clicks
document.getElementById('box1').addEventListener('click', function () {
    toggleSessionBoxSelection('box1');
});

document.getElementById('box2').addEventListener('click', function () {
    toggleSessionBoxSelection('box2');
});
