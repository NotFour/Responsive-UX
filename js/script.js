var toggle = document.getElementsByClassName('menu__toggle')[0];
var menu = document.getElementsByClassName('menu')[0];
var menuList = document.getElementsByClassName('menu__list')[0];
var toggleInner = document.getElementsByClassName('menu__toggle-label')[0];
var html = document.getElementsByName('html');
toggle.onclick = function () {
    if (menu.classList.contains('menu_active')) {
        menuList.classList.remove('menu__list_active');
        toggleInner.classList.remove('menu__toggle-label_active');
        this.classList.remove('menu__toggle_active');
        menu.classList.remove('menu_active');
        html.
        html.setAttribute('style', 'overflow:hidden');
    } else {
        menu.classList.add('menu_active');
        this.classList.add('menu__toggle_active');
        toggleInner.classList.add('menu__toggle-label_active');
        menuList.classList.add('menu__list_active');
        html.removeAttribute('style');
    }
};

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
}