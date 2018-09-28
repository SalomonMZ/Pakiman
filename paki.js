var imagenes = []; // Array Asociativo
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
imagenes["Megaratamon"] = "ratking.png";

var coleccion = []; // Array Numerico
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
coleccion.push(new Pakiman("Megaratamon", 300, 150));

for(var pakiman of coleccion)
{
  pakiman.mostrar();
}
