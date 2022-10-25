export class prestamo{

private inicio: number = 0;
private fin: number =0;

constructor(inicio:number,fin:number){
    this.inicio = inicio;
    this.fin = fin;
}
public get_inicio(){
    return this.inicio 
}
public set_inicio(inicio:number){
    this.inicio = inicio;
}
public get_fin(){
    return this.fin
}
public set_fin(fin:number){
    this.fin = fin;
}


}