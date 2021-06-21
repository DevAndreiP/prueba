var imagenes = [];
imagenes["cauchin"] =
  "https://raw.githubusercontent.com/tito026/platzi/master/progbasica/villaPlatzi/vaca.png";
imagenes["pokacho"] =
  "https://raw.githubusercontent.com/tito026/platzi/master/progbasica/villaPlatzi/pollo.png";
imagenes["tocinauro"] =
  "https://raw.githubusercontent.com/tito026/platzi/master/progbasica/villaPlatzi/cerdo.png";



class pakiman {
  constructor(nombre, vida, ataque) {
    (this.imagen = new Image()),
      (this.nombre = nombre),
      (this.vida = vida),
      (this.ataque = ataque),
      (this.imagen.src = imagenes[this.nombre]);
  }
  hablar() {
    // alert(this.nombre)
  }
  mostrar() {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong> <br>");
    document.write("<strong> <p> Vida :" + this.vida + "<br/> Ataque: " +  this.ataque +" </p></strong> ");
    document.write("</p>");
  }
}

var cauchin = new pakiman("cauchin", 100, 20);
var pokacho = new pakiman("pokacho", 120, 30);
var tocinauro = new pakiman("tocinauro", 100, 20);

var coleccion = []
coleccion.push(new pakiman("cauchin", 100, 20))
coleccion.push(new pakiman("pokacho", 120, 30))
coleccion.push(new pakiman("tocinauro", 100, 20))

for (var paki of coleccion){
    paki.mostrar()
}
cauchin.hablar();
pokacho.mostrar();
