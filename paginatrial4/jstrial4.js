function menuDesplegable(){
    var x = document.getElementById("topnav");
    if (x.className === "nav"){
        x.className += " responsive";
    }else{
        x.className = "nav";
    }
}

function agregarALaCesta() {
    var nombreProducto = "JITSIE RACE 20";
    var precioProducto = 1859;

    alert("Producto añadido a la cesta:\n\nNombre: " + nombreProducto + "\nPrecio: " + precioProducto + "€");
}