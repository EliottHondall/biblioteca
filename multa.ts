export class multa{

private fechainicio: number =0;
private fechafin: number =0;

constructor(fechainicio:number,fechafin:number){

    this.fechainicio = fechainicio;
    this.fechafin = fechafin;

}
public get_fechainicio(){
    return this.fechainicio
}
public get_fechafin(){
    return this.fechafin 
}
public set_fechainicio(fechainicio:number){
    this.fechainicio = fechainicio;
}
public set_fechafin(fechafin:number){
    this.fechafin = fechafin;
}



}