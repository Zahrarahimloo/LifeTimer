function calculateLife() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const now = new Date();
    
    // Check if the input is valid
    if (!birthdate || birthdate > now) {
        alert("Please enter a valid birthdate!");
        return;
    }

    // Calculate the difference in milliseconds
    const diffMs = now - birthdate;

    // Convert milliseconds to days, minutes, and seconds
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const minutes = Math.floor(diffMs / (1000 * 60));
    const seconds = Math.floor(diffMs / 1000);

    // Display the results
    document.getElementById("days").textContent = `Days lived: ${days}`;
    document.getElementById("minutes").textContent = `Minutes lived: ${minutes}`;
    document.getElementById("seconds").textContent = `Seconds lived: ${seconds}`;
}