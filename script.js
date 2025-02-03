function nextPage() {
    window.location.href = "yes.html"; // Redirect to yes.html when Yes is clicked
}

function moveButton(event) {
    const button = document.getElementById("noButton");

    // Prevent focus issues by removing focus immediately
    button.blur();

    // Ensure the button is positioned absolutely
    button.style.position = "absolute";

    // Get the viewport size to keep the button within bounds
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    // Generate random positions within the viewport
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new position
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Ensure button is re-clickable even if it's hovered (removes focus lock)
    setTimeout(() => button.style.pointerEvents = "auto", 50);
}
