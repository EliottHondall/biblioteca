export class copia  {

private id: number = 0;
private estado: string ="";
constructor(id:number, estado:string){

    this.id = id;
    this.estado = estado;

}
public get_id():number{
    return this.id
    
}
public get_estado():string{
    return this.estado
}
public set_id(id:number ){
    this.id = id;
}
public set_estado(estado:string){
    this.estado = estado;
}

}