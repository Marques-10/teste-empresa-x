window.onhashchange = function (e) {
    const oldURL = e.oldURL.split("#")[1];
    const newURL = e.newURL.split("#")[1];

    const oldMenu = document.querySelector(`.itens-menu a[href='#${oldURL}']`);
    const newMenu = document.querySelector(`.itens-menu a[href='#${newURL}']`);

    oldMenu && oldMenu.classList.remove('selected');
    newMenu && newMenu.classList.add('selected');
}

function changeImg() {
    var open = document.querySelector(".open");
    if (open.src == "file:///C:/Users/xjmar/Desktop/teste-empresa-x/assets/images/direito.png") {
        open.src = "file:///C:/Users/xjmar/Desktop/teste-empresa-x/assets/images/seta-para-baixo.png";
    } else {
        open.src = "file:///C:/Users/xjmar/Desktop/teste-empresa-x/assets/images/direito.png";
    }
}
        
function openEquipe() {
    var openEquipe = document.querySelector(".open-equipe");
    if (openEquipe.src == "file:///C:/Users/xjmar/Desktop/teste-empresa-x/assets/images/direito.png") {
        openEquipe.src = "file:///C:/Users/xjmar/Desktop/teste-empresa-x/assets/images/seta-para-baixo.png";
    } else {
        openEquipe.src = "file:///C:/Users/xjmar/Desktop/teste-empresa-x/assets/images/direito.png";
    }

}