document.getElementById('colorButton').addEventListener('click', function() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Set the background color
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});