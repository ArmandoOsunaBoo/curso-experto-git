//Mejoras a las literales de objetos - codigo simple y limpio
const num=69;
const str="Hola mundo";
const bool = false;
var modelo="asdasd";
const miObj={
  num,
  str,
  bool,
}


const miCarro= (modelo,año)=>{
  return {
    modelo,
    año,
    info(precio) {
      return `${this.modelo} cuesta ${precio}`;
    }
  }
}

const nuevoCarro = miCarro("Telsa",2020);
console.log(nuevoCarro.info(5000));



var BG_COLOR_ATRIB = "backgroundColor";

const btn = {
  nombre:"Boton1",
  [BG_COLOR_ATRIB] :"Azul"
};
const select ={
  options:["opc1","opc2"],
  [BG_COLOR_ATRIB] :"Rojo"
};

console.log(btn);
console.log(select);
