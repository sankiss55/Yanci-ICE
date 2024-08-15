let botonida = document.getElementById("botonida");
let botonregreso = document.getElementById("botonregreso");
let productos = document.querySelectorAll("#productos div");
let cantidaddeproductos = productos.length;
let cuantotrasform = 0;
let veces_todo_menu = 0;

botonida.addEventListener("click", function() {
    cuantotrasform -= 100;
    dondeir();
});

botonregreso.addEventListener("click", function() {
    cuantotrasform += 100;
    dondeir();
});

function dondeir() {
    if (cuantotrasform > 0) {
        cuantotrasform -= 500;
        for (let i = 0; i < cantidaddeproductos; i++) {
            productos[i].style.transform = 'translate(-400%)';
        }
    } else if (cuantotrasform <= -500) {
        cuantotrasform = 0;
        for (let i = 0; i < cantidaddeproductos; i++) {
            productos[i].style.transform = `translate(${cuantotrasform}%)`;
        }
    } else {
        for (let i = 0; i < cantidaddeproductos; i++) {
            productos[i].style.transform = `translate(${cuantotrasform}%)`;
        }
    }
}

window.addEventListener("load", function() {
    quitar_nav();
});
window.addEventListener("resize", function() {
    quitar_nav();
});
function quitar_nav() {
    if (window.innerWidth <= 600) {
        document.querySelector("nav").remove();
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
                    <button>servicio</button>
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
}

setInterval(() => {
    cuantotrasform -= 100;
    dondeir();
}, 3000);
