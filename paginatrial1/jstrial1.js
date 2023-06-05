function menuDesplegable(){
    var x = document.getElementById("topnav");
    if (x.className === "nav"){
        x.className += " responsive";
    }else{
        x.className = "nav";
    }
}

function agregarALaCesta() {
    var nombreProducto = "CLEAN K1 BC EDITION";
    var precioProducto = 3750;

    alert("Producto añadido a la cesta:\n\nNombre: " + nombreProducto + "\nPrecio: " + precioProducto + "€");
}
