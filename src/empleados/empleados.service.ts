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
 agregarEmpleado(modelo: ProductModel) {
        let ind ={
            "id":modelo.id,
            "nombre": modelo.nombre,
            "salario": modelo.salario
        } 
        this.empleados.push(ind);
return "Se ha agregado un nuevo empleado exitosamente";
    }
 modificarSalario (id:string, modelo: ProductModel) {
        var i
        for(i=0;i<this.empleados.length;i++) {
if (this.empleados[i].id==id) {
    this.empleados[i].salario=modelo.salario
 return "El salario ha sido modificado correctamente"
     }
}
       
    }
eliminarEmpleado(id:string){
        if((parseInt(id)>0) && (parseInt(id)<this.empleados.length)){
            this.empleados.splice(parseInt(id)-1,1)
            return this.empleados
        } else{
            return "No existe el empleado"
        }
       
    }
    
}
