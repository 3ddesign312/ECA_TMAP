function showBrand(brand) {
  // Clear all fills
  document.querySelectorAll('path').forEach(path => {
    path.style.fill = '#ccc'; // default gray
  });

  // Set the brand-specific color
  const colors = {
    woodmode: '#006892',
    stoll: '#a51f44',
    bridgewood: '#08877b',
    danver: '#d9df2d'
  };

  // Highlight states belonging to the selected brand
  document.querySelectorAll(`.${brand}`).forEach(path => {
    path.style.fill = colors[brand];
  });
}
