
import CL_Ingreso from "./CL_Ingreso.js";
import CL_Persona from "./CL_Persona.js";

let persona1= new CL_Persona("Mary",150);
let persona2= new CL_Persona("Jose",135);
let persona3= new CL_Persona("Carlos",160);
let persona4= new CL_Persona("Pedro",75);

let ingreso= new CL_Ingreso();

ingreso.procesarIngreso(persona1);
ingreso.procesarIngreso(persona2);  
ingreso.procesarIngreso(persona3);
ingreso.procesarIngreso(persona4);
 let salida = document.getElementById("salida");
 salida.innerHTML= `
 <br> Monto del ingreso menor: ${(ingreso.montoMenor()).toFixed(2)}$
 <br> ingreso promedio: ${(ingreso.promedioIngreso()).toFixed(2)}$
 `