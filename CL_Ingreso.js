export default class CL_Ingreso {
    constructor(){
        this.ingresMenor = 9999;
        this.acIngreso = 0;
        this.contIngreso = 0;
    }
    promedioIngreso() {
        return this.acIngreso / this.contIngreso;
    }
    montoMenor() {
        return this.ingresMenor;
    }       

    procesarIngreso(ingres) {
           
        this.contIngreso++;
        this.acIngreso += ingres.ingreso;


        if (ingres.ingreso < this.ingresMenor) {
            this.ingresMenor = ingres.ingreso;
        }


    }
}