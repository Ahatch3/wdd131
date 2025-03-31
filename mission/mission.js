const themeSelector = document.querySelector('#color-select'); // Assuming the dropdown has an ID of "theme-selector"

function changeTheme() {
  if (themeSelector.value === 'dark') 
    {
    document.body.classList.add('dark');
    document.querySelector('#logo').src = 'byui-logo_white.png'; // Replace with the actual path
    } 
  else 
  {
    document.body.classList.remove('dark');
    document.querySelector('#logo').src = 'byui-logo_blue.webp'; // Replace with the actual path
  }
}

themeSelector.addEventListener('change', changeTheme);