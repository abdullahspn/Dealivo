function searchProduct() {
  const query = document.getElementById('searchInput').value;
  const resultsDiv = document.getElementById('results');

  if (!query) {
    resultsDiv.innerHTML = "<p>Please enter a product name.</p>";
    return;
  }

  resultsDiv.innerHTML = `<p>Searching for "<strong>${query}</strong>"...</p>`;

  // Simulated response
  setTimeout(() => {
    resultsDiv.innerHTML = `
      <p>Here are the best prices for <strong>${query}</strong>:</p>
      <ul>
        <li>Amazon: $99.99</li>
        <li>eBay: $95.50</li>
        <li>Walmart: $97.00</li>
      </ul>
    `;
  }, 1000);
}
