let cuantotrasform = 0;
let veces_todo_menu = 0;
window.addEventListener("load", function() {
    quitar_nav();
});
window.addEventListener("resize", function() {
    quitar_nav();
});
function quitar_nav() {
    if (window.innerWidth <= 600) {
        document.getElementById("nav_principal").style.display="none";
        if(document.querySelectorAll("nav").length==1){

        
        let nav = document.createElement("nav");
        nav.innerHTML = `<div id="div_menu"><h1>Yanci Ice</h1><button id="menu_hamburgesa">&#9776;</button></div>`;
        nav.id = "nav_cel";
        document.querySelector("header").parentNode.insertBefore(nav, document.querySelector("header"));

        document.getElementById("menu_hamburgesa").addEventListener("click", function() {
            if (veces_todo_menu == 0) {
                let opcionesMenu = document.createElement("div");
                opcionesMenu.id = "div_opciones_menu";
                opcionesMenu.innerHTML = `
                    <button style="color: #DA9F5B;">hogar</button>
                    <button>productos</button>
                    <button>Nuestra historia</button>
                    <button>Contactanos</button>
                `;
                nav.appendChild(opcionesMenu);
                veces_todo_menu = 1;
            } else if (veces_todo_menu == 1) {
                document.getElementById("div_opciones_menu").remove();
                veces_todo_menu = 0;
            }
        });
    }
    }else{
        document.getElementById("nav_principal").style.display="grid";
        if(document.querySelectorAll("nav").length==2){
            
        document.getElementById("nav_cel").remove();
        }
        
    }
}
