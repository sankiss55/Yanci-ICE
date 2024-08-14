let botonida=document.getElementById("botonida");
let botonregreso=document.getElementById("botonregreso");
let productos=document.querySelectorAll("#productos div");
let cantidaddeproductos=document.querySelectorAll("#productos div").length;
let cuantotrasform=0;
botonida.addEventListener("click", function(){
    cuantotrasform+=-100;
    dondeir();
});
botonregreso.addEventListener("click", function(){
    cuantotrasform+=+100;
    dondeir();
});
function dondeir(){
    if(cuantotrasform>0){
        cuantotrasform+=-500;
        for(let i=0; i<cantidaddeproductos;i++){
            productos[i].style.transform= `translate(-400%)`;
        }
    }else if(cuantotrasform<=-500){
        cuantotrasform=0;
        for(let i=0; i<cantidaddeproductos;i++){
            productos[i].style.transform= `translate(${cuantotrasform}%)`;
        }
    }else{
        for(let i=0; i<cantidaddeproductos;i++){
            productos[i].style.transform= `translate(${cuantotrasform}%)`;
        }
    }
}
setInterval(() => {
    cuantotrasform+=-100;
    dondeir();
}, 3000);