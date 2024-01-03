//your JS code here. If required.
function activateSearch() {
  const searchDiv = document.getElementById('searchDiv');
  const searchInput = document.getElementById('searchInput');

  searchDiv.classList.add('active');
  searchInput.focus();
}