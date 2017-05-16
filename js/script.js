var toggle = document.getElementsByClassName('mobile-menu__toggle')[0];
var menu = document.getElementsByClassName('mobile-menu')[0];
var html = document.getElementsByTagName('html')[0];
toggle.onclick = function () {
    if (menu.classList.contains('mobile-menu_active')) {
        menu.classList.remove('mobile-menu_active');
        html.removeAttribute('style');
    } else {
        menu.classList.add('mobile-menu_active');
        html.setAttribute('style', 'overflow:hidden');
    }
};

var menuLink = document.getElementsByClassName('mobile-menu__link');
for (var i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {
        menu.classList.remove('mobile-menu_active');
        html.removeAttribute('style');
    }
}
