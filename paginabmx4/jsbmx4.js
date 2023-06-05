function menuDesplegable(){
    var x = document.getElementById("topnav");
    if (x.className === "nav"){
        x.className += " responsive";
    }else{
        x.className = "nav";
    }
}

function agregarALaCesta() {
    var nombreProducto = "BMX RADIO BIKES REVO PRO LIMITED EDITION";
    var precioProducto = 239;

    alert("Producto añadido a la cesta:\n\nNombre: " + nombreProducto + "\nPrecio: " + precioProducto + "€");
}
