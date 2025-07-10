const brandStates = {
  woodmode: ["TN", "KY", "OH", "MI", "IN", "IL", "WI", "MO", "IA", "MN", "ND", "SD", "NE", "WY", "MT", "AZ", "UT", "ID", "NV", "OR", "WA", "CA", "AK", "HI"],
  bridgewood: ["TN", "KY", "OH", "MI", "IN", "IL", "WI", "MO", "IA", "MN", "ND", "SD", "NE", "MT", "AZ", "UT", "ID", "NV", "OR", "WA", "CA", "AK", "HI"],
  stoll: ["AZ", "CA", "CO", "HI", "TN", "ID", "IL", "IN", "IA", "KS", "KY", "MI", "MN", "MT", "MO", "NE", "ND", "SD", "NV", "OH", "OR", "WA", "WI", "WY", "UT"],
  danver: ["IA", "IL", "IN", "KS", "MI", "MO", "MN", "ND", "NE", "SD", "WI", "OH"]
};
function highlightStates(brand) {
  const allStates = document.querySelectorAll("#usamap [id]");
  
  // Remove all brand highlight classes from all states
  allStates.forEach(el => {
    el.classList.remove("highlight-woodmode", "highlight-bridgewood", "highlight-stoll", "highlight-danver");
  });

  const states = brandStates[brand];
  if (!states) return;

  states.forEach(state => {
    const el = document.getElementById(state);
    if (el) {
      el.classList.add(`highlight-${brand}`);
    }
  });
}
