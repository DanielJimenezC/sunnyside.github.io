document.addEventListener("DOMContentLoaded", function() {
  main()
});

const navButton = document.getElementById('nav-button'),
      navMenu = document.getElementById('nav-menu')

function load() {
  const load = document.getElementById("load");
  setTimeout(() => { 
    load.classList.add("load-end") 
  }, 2500)
}

function main() {
  load()
  if (navButton) {
    navButton.addEventListener('click', () => {
      const isOpen = !navMenu.classList.contains('open')
      if (isOpen) {
        navMenu.classList.toggle('open')
       setTimeout(() => {
        navMenu.classList.toggle('nav-menu-open')
      }, 50);
      } else {
        navMenu.classList.toggle('nav-menu-open')
        setTimeout(() => {
          navMenu.classList.toggle('open')
        }, 90);
      }
    })
  }
  window.addEventListener('scroll', onScrollNav)
}

function onScrollNav() {
  const navbar = document.getElementsByClassName('header-container')[0]
  if (this.scrollY >= 50) navbar.classList.add('header-scroll') 
  else navbar.classList.remove('header-scroll')
}