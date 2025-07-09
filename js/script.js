
function highlightStates(brand) {
  const allStates = document.querySelectorAll('#us-map [id]');
  allStates.forEach(state => {
    state.classList.remove('woodmode', 'stoll', 'bridgewood', 'danver');
  });
  const states = document.querySelectorAll(`#us-map .${brand}`);
  states.forEach(state => {
    state.classList.add(brand);
  });
}
