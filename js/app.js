cont_mas=0;
cont_menos=0;
function bigger() {
    elemento = document.getElementsByTagName("main")[0];
    estilo = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    fuente =parseFloat(estilo);
    console.log(estilo);
    document.getElementsByTagName("main")[0].style.fontSize = (fuente + 2) + "px";
    cont_mas = cont_mas + 1;
    if (cont_mas==2) {
        for (let i = 0; i < 5; i++) {
            elemento = document.getElementsByClassName("product-item")[i];
            caja = window.getComputedStyle(elemento, null).getPropertyValue('width');
            nueva_caja = parseFloat(caja);
            document.getElementsByClassName("product-item")[i].style.width = (nueva_caja + 50) + 'px';
        }
        cont_mas=0;        
    }
    
}
function smaller() {
    elemento = document.getElementsByTagName("main")[0];
    estilo = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    fuente =parseFloat(estilo);
    console.log(estilo);
    document.getElementsByTagName("main")[0].style.fontSize = (fuente - 2) + "px";
    cont_menos = cont_menos + 1;
    if (cont_menos==2) {
        for (let i = 0; i < 5; i++) {
            elemento = document.getElementsByClassName("product-item")[i];
            caja = window.getComputedStyle(elemento, null).getPropertyValue('width');
            nueva_caja = parseFloat(caja);
            document.getElementsByClassName("product-item")[i].style.width = (nueva_caja - 50) + 'px';
        }
        cont_menos=0;        
    }    
}
function contraste() {
    elemento = document.getElementsByTagName("body")[0];
    color = window.getComputedStyle(elemento, null).getPropertyValue('color');
    console.log(color);
    if (color = '#000000') {
        document.getElementsByTagName("body")[0].style.backgroundColor = '#000000'; 
        document.getElementsByTagName("body")[0].style.color = '#ffffff';
    } 
}  
function claro() {
    elemento = document.getElementsByTagName("body")[0];
    color = window.getComputedStyle(elemento, null).getPropertyValue('color');
    console.log(color);
    if (color = '#ffffff') {
        document.getElementsByTagName("body")[0].style.backgroundColor = '#ffffff'; 
        document.getElementsByTagName("body")[0].style.color = '#000000';
    }  
}
