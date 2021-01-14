const switchMenu = () => {
    const nav = document.querySelector('.hide-menu');

    if(nav.classList.contains("hide-menu-visible")) nav.classList.remove("hide-menu-visible");
    else nav.classList.add("hide-menu-visible");
}