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
    if (open.src == "./assets/images/direito.png") {
        open.src = "./assets/images/seta-para-baixo.png";
    } else {
        open.src = "./assets/images/direito.png";
    }
}
        
function openEquipe() {
    var openEquipe = document.querySelector(".open-equipe");
    if (openEquipe.src == "./assets/images/direito.png") {
        openEquipe.src = "./assets/images/seta-para-baixo.png";
    } else {
        openEquipe.src = "./assets/images/direito.png";
    }

}