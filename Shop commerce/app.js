//Copy menu for mobile
function copyMenu() {
    //copy inside .dpt-cat to department
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navplace = document.querySelector('.off-canvas nav');
    navplace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop
    var topnav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topnav.innerHTML;
}
copyMenu();

//Show mobile menu 
const menuButton = document.querySelector('.trigger');
    closeButton = document.querySelector('.t-close');
    addClass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addClass.classList.toggle('showmenu');

})
closeButton.addEventListener('click', function() {
    addClass.classList.remove('showmenu');
})



//show sub menu on mobile 
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}


// slider

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
});


// show search 
const searchButton = document.querySelector('.t-search');
      tclose = document.querySelector('.search-close');
      showclass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showclass.classList.toggle('showsearch');
})
tclose.addEventListener('click', function() {
    showclass.classList.remove('showsearch')
})