function menuDesplegable(){
    var x = document.getElementById("topnav");
    if (x.className === "nav"){
        x.className += " responsive";
    }else{
        x.className = "nav";
    }
}

function agregarALaCesta() {
    var nombreProducto = "RADIO BIKES REVO PRO";
    var precioProducto = 239;

    alert("Producto añadido a la cesta:\n\nNombre: " + nombreProducto + "\nPrecio: " + precioProducto + "€");
}
