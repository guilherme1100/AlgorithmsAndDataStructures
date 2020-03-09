inputBox = document.querySelector(".input-box")
searchInput = document.querySelector(".search-input")

searchInput.addEventListener('focusin', (event) => {
  inputBox.style.border = '0.5px solid #38a9f0';
  inputBox.style.webkitBoxShadow = '0px 0px 5px rgba(56, 169, 240, 0.75)';
  inputBox.style.mozBoxShadow = '0px 0px 5px rgba(56, 169, 240, 0.75)';
  inputBox.style.boxShadow = '0px 0px 5px rgba(56, 169, 240, 0.75)';
});

searchInput.addEventListener('focusout', (event) => {
  inputBox.style.border = '1px solid #dfe1e5';
  inputBox.style.webkitBoxShadow = 'none';
  inputBox.style.mozBoxShadow = 'none';
  inputBox.style.boxShadow = 'none';
});
