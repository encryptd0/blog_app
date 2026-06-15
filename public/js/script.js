const searchBtn = document.querySelector('.searchBtn');
const searchBar = document.querySelector('.searchBar');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

function openSearch() {
  searchBar.classList.add('open');
  searchBtn.setAttribute('aria-expanded', 'true');
  searchInput.focus();            // cursor lands in the box, ready to type
}

function closeSearch() {
  searchBar.classList.remove('open');
  searchBtn.setAttribute('aria-expanded', 'false');
}

searchBtn.addEventListener('click', openSearch);
searchClose.addEventListener('click', closeSearch);

// Press Escape to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSearch();
});



// document.addEventListener('DOMContentLoaded', function(){

//   const allButtons = document.querySelectorAll('.searchBtn');
//   const searchBar = document.querySelector('.searchBar');
//   const searchInput = document.getElementById('searchInput');
//   const searchClose = document.getElementById('searchClose');

//   for (var i = 0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener('click', function() {
//       searchBar.style.visibility = 'visible';
//       searchBar.classList.add('open');
//       this.setAttribute('aria-expanded', 'true');
//       searchInput.focus();
//     });
//   }

//   searchClose.addEventListener('click', function() {
//     searchBar.style.visibility = 'hidden';
//     searchBar.classList.remove('open');
//     this.setAttribute('aria-expanded', 'false');
//   });


// });