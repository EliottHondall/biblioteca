export class leector {

private socio: number =0;
private nombre: string="";
private telefono: number =0;
private direccion: string ="";
private TC: number =0;

constructor(socio: number,nombre:string,telefono:number,direccion:string,TC:number){
    this.socio = socio;
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
    this.TC = TC;
}

public get_socio():number{
    return this.socio 
}
public get_nombre():string{
    return this.nombre
}
public get_telefono():number{
    return this.telefono
}
public get_direccion():string{
    return this.direccion
}
public get_TC():number{
    return this.TC 
}
public set_sicio(socio:number){
    this.socio = socio;
}
public set_nombre(nombre:string){
    this.nombre = nombre;
}
public set_telefono(telefono:number){
    this.telefono = telefono;
}
public set_direccion(direccion:string){
    this.direccion = direccion;
}
public set_TC(TC:number){
    this.TC = TC;
}
public multa(){}
public prestar (){}
public devolver (){}


}