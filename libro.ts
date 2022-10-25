import { autor } from "./autor";
export class libro extends autor{

protected titulo: string= "";
protected tipo: string = "";
protected año : number= 0;
protected editorial : string = "";
protected Autor:any =[]

constructor(name: string, nacionalidad: string, fechadenacimiento: number, fechadefallecimiento: number, titulo: string, tipo: string, año: number, _editorial: string){
    super(name,nacionalidad,fechadefallecimiento,fechadenacimiento)
    this.año = año;
    this.tipo = tipo;
    this.titulo = titulo;
    this.editorial = this.editorial;

}
public get_editorial():string{
    return this.editorial;
}
public get_año():number {
    return this.año;
}
public get_tipo():string {
    return this.tipo;
}
public get_titulo():string{
    return this.titulo;
}



}