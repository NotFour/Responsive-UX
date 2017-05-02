var toggle = document.getElementsByClassName('mobile__toggle')[0];
var menu = document.getElementsByClassName('mobile')[0];
var html = document.getElementsByTagName('html')[0];
toggle.onclick = function () {
    if (menu.classList.contains('mobile_active')) {
        menu.classList.remove('mobile_active');
        html.removeAttribute('style');
    } else {
        menu.classList.add('mobile_active');
        html.setAttribute('style', 'overflow:hidden');
    }
};
/*
var menuLink = document.getElementsByClassName('menu__list-link');
for (var i = 0; i < menuLink.size; i++) {
    menuLink[i].onclick = function () {
        alert("click");
        if (menu.classList.contains('menu_active')) {
            menuList.classList.remove('menu__list_active');
            toggleInner.classList.remove('menu__toggle-label_active');
            this.classList.remove('menu__toggle_active');
            menu.classList.remove('menu_active');
        }
    }
}*/
