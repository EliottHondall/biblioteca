export class autor{

protected name: string = "";
protected nacionalidad: string = "";
protected fechadenacimiento: number = 0;
protected fechadefallecimiento: number= 0;
constructor(name: string, nacionalidad: string, fechadenacimiento: number, fechadefallecimiento: number){
    this.fechadefallecimiento = fechadefallecimiento;
    this.fechadenacimiento = fechadenacimiento;
    this.nacionalidad = nacionalidad;
    this.name = name;
}
public get_name():string{
    return this.name
}
public get_nacionalidad():string{
    return this.nacionalidad
}
public get_fechadenacimiento():number{
    return this.fechadenacimiento
}
public get_fechadefallecimiento():number{
    return this.fechadefallecimiento
}
public set_name(name:string){
    this.name = name;
}
public set_nacionalidad(nacionalidad:string){
    this.nacionalidad = nacionalidad;
}
public set_fechadefallecimiento(fechadefallecimiento:number){
    this.fechadefallecimiento = this.fechadefallecimiento;
    }
    public set_fechadenacimiento(fechadenacimiento:number){
        this.fechadenacimiento =fechadenacimiento;
        }
        

}