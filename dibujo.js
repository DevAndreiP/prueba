var d;
var lienzo;

d = document.getElementById("dibujito")
lienzo = d.getContext("2d")
var lineas = 30
var l = 0;
var yi,xf
var xi,yf;
var l_2

while(l < lineas){
    yi = 10 * l;
    xf = 10 * (l+1)
    xi = 300 - (l*10)
    yf = 300 - (l*10)
    dibujarLineas("blue",0,yi,xf,300)
    dibujarLineas("red",xi,0,300,yf)
    console.log("linea = " + l)
    l = l +0.5
}

dibujarLineas("black",1,1,1,299)
dibujarLineas("black",299,1,1,0)
dibujarLineas("black",299,299,299,1)
dibujarLineas("black",1,299,299,299)

function dibujarLineas(color,xinicial,yinicial,xfinal,yfinal){
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial,yinicial)
    lienzo.lineTo(xfinal,yfinal)
    lienzo.stroke()
    lienzo.closePath()
}

dibujarLineas("grey",0,0,10,300)
dibujarLineas("grey",0,10,20,300)
dibujarLineas("grey",0,20,30,300)
