const brandStates = {
  woodmode: ['TN','KY','OH','MI','IN','IL','WI','MO','IA','MN','ND','SD','NE','WY','MT','AZ','UT','ID','NV','OR','WA','CA','AK','HI'],
  bridgewood: ['TN','KY','OH','MI','IN','IL','WI','MO','IA','MN','ND','SD','NE','MT','AZ','UT','ID','NV','OR','WA','CA','AK','HI'],
  stoll: ['AZ','CA','CO','HI','TN','ID','IL','IN','IA','KS','KY','MI','MN','MT','MO','NE','ND','SD','NV','OH','OR','WA','WI','WY','UT'],
  danver: ['IA','IL','IN','KS','MO','ND','NE','SD','WI','OH']
};

function highlightStates(brand) {
  document.querySelectorAll('#usamap path').forEach(path => {
    path.classList.remove('woodmode', 'bridgewood', 'stoll', 'danver');
  });

  brandStates[brand].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add(brand);
  });
}
