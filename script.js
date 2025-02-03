function nextPage() {
    window.location.href = "yes.html"; // Redirect to yes.html when Yes is clicked
}

function moveButton() {
    const button = document.getElementById("noButton");

    // Ensure the button is always clickable by resetting its focus
    button.blur();

    // Set absolute positioning so it can move freely
    button.style.position = "absolute";

    // Get the viewport size to prevent the button from going off-screen
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    // Generate random positions within the viewport
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the button to a random position
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Ensure the button remains clickable even after clicking while hovered
    button.style.pointerEvents = "none";  // Temporarily disable pointer events
    setTimeout(() => button.style.pointerEvents = "auto", 100);  // Re-enable after 100ms
}
