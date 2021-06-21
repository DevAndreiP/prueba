class Billete{
    constructor(valor,cantidad){
        this.valor = valor,
        this.cantidad =  cantidad
    }
}

function entregarDinero(){
    var t = document.getElementById("dinero")
    dinero = parseInt(t.value)

    for(var bi of caja){//bi de billetes
   if(dinero > 0 ){

       div = Math.floor(dinero / bi.valor)

       if(div > bi.cantidad){
           papeles = bi.cantidad
       }else{
           papeles = div
       }

       entregado.push(new Billete(bi.valor,papeles))
       dinero -= (bi.valor * papeles)

   }

    }
    if(dinero > 0){
        resultado.innerHTML= "Soy un cajero que no tiene ese cupo"
    }else{
        for(var e of entregado){
            if(e.cantidad > 0){
                resultado.innerHTML += e.cantidad + " billetes de $ " + e.valor + "<br/>"
            }
           
        }
    }
    console.log(entregado)
}
var caja = [] //caja de cajero automatico.
var entregado = []//una coleccion de billetes, los que entrego al usuario que será modificada.
caja.push( new Billete(100,30))
caja.push( new Billete(50,30))
caja.push( new Billete(20,20))
caja.push( new Billete(10,20))
caja.push( new Billete(5,30))

var dinero = 0
var div = 0
var papeles = 0
var resultado = document.getElementById("resultado")
var b = document.getElementById("extraer")
b.addEventListener("click",entregarDinero)