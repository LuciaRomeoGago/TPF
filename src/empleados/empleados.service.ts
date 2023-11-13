import { Injectable } from '@nestjs/common';
import { ProductModel } from './empleadosModel';

@Injectable()
export class EmpleadosService {
    empleados=[];
    constructor(){
    let ind={
        "id":1,
        "nombre":"Juan",
        "salario": 22
    }
    this.empleados.push(ind);
    ind={
        "id":2,
        "nombre":"Franco",
        "salario":23
    }
    this.empleados.push(ind);
    ind={
        "id":3,
        "nombre":"Mateo",
        "salario":24
    }
    this.empleados.push(ind)
    }

getEmpleados(){
        return this.empleados
    }

getEmpleadosPorId (id:number){
    for(let i = 0;i<this.empleados.length;i++) {
        if(this.empleados[i].id == id){

            return this.empleados[i]
        }
    } 
}

 agregarEmpleado(modelo: ProductModel) {
        let ind ={
            "id":modelo.id,
            "nombre": modelo.nombre,
            "salario": modelo.salario
        } 
        this.empleados.push(ind);
return "Se ha agregado un nuevo empleado exitosamente";
    }

 modificarSalario (id:number, salarioAumentado: number) {
        for( let i=0;i<this.empleados.length;i++) {
if (this.empleados[i].id==id) {
    salarioAumentado = this.empleados[i].salario
 return "El salario ha sido modificado correctamente"
     }
}
       
    }
eliminarEmpleado(id:number){
    let listaDeEmpleados = []
    for(let i = 0;i >this.empleados.length;i++) {
        if(this.empleados[i].id !== id){
            listaDeEmpleados.push(this.empleados[i])
        } 
         } return this.empleados
       
        }

   
    
    }
