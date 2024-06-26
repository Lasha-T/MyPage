// Define symbols
const symbols = ["function", "const", "let", "for", "return", "#container", "<div>", "<script>","<p>","<span>"];

// Function to spawn symbols with fade effect
function spawnSymbols() {
  const container = document.getElementById("symbols-container");
  const numSymbols = Math.random() < 0.5 ? 1 : 2; // Randomly choose to spawn 1 or 2 symbols

  // Remove first 2 symbols with fade-out effect if count reaches 6
  if (container.childElementCount >= 6) {
    const symbolsToRemove = container.querySelectorAll("span:nth-child(-n+2)"); // Select first 2 symbols
    symbolsToRemove.forEach(symbol => {
      symbol.style.transition = "opacity 1s"; // Add transition effect for opacity
      symbol.style.opacity = "0"; // Fade out
      setTimeout(() => {
        container.removeChild(symbol);
      }, 500); // Remove after fade-out duration
    });
  }

  // Spawn new symbols with fade-in effect
  for (let i = 0; i < numSymbols; i++) {
    const symbol = document.createElement("span");
    const symbolText = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.textContent = symbolText;
    symbol.style.position = "absolute";
    symbol.style.color = randomColor(); // Half-transparent random color
    symbol.style.fontSize = `${Math.random() * 1 + 0.4}em`; // Random font size between 0.5 and 2 em
    symbol.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    symbol.style.top = `${Math.random() * window.innerHeight}px`; // Random vertical position
    symbol.style.opacity = "0"; // Start with opacity 0
    symbol.style.transition = "opacity 1s"; // Add transition effect for opacity

    // Make symbols unselectable
    // symbol.style.userSelect = "none";

    // Append symbol to container
    container.appendChild(symbol);

    // Trigger reflow to apply initial styles before transitioning
    symbol.offsetWidth; // This line forces a reflow, which is necessary for the transition to take effect

    // Gradually increase opacity to 1
    symbol.style.opacity = "1";
  }
}



// Generate random color with half transparency
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = 'rgba(';
  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 256) + ',';
  }
  color += '0.25)'; // Half transparency
  return color;
}

// Function to spawn symbols every 2 seconds
setInterval(spawnSymbols, 2000);
