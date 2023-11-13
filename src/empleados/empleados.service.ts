import { Injectable } from '@nestjs/common';
import { EmpleadoModel } from './empleadosModel';

@Injectable()
export class EmpleadosService {
    empleados=[];
    constructor(){
    let empleado={
        id:1,
        nombre:"Juan",
        salario: 22
    }
    this.empleados.push(empleado);
    empleado={
        id:2,
        nombre:"Franco",
        salario:23
    }
    this.empleados.push(empleado);
    empleado={
        id:3,
        nombre:"Mateo",
        salario:24
    }
    this.empleados.push(empleado)
    }

getEmpleados(){
        return this.empleados
    }

    getEmpleadoPorId(id: number) {
        for (let empleado of this.empleados) {
          if (empleado.id == id) {
            return empleado;
          }
        }
        return 'Empleado no encontrado.';
      }

 agregarEmpleado(empleadomodel: EmpleadoModel) {
        let ind ={
            id:empleadomodel.id,
            nombre: empleadomodel.nombre,
            salario: empleadomodel.salario
        } 
        this.empleados.push(ind);
return "Se ha agregado un nuevo empleado exitosamente";
    }

 modificarSalario (id:number, modelo: EmpleadoModel) {
   
        for( let i=0;i< this.empleados.length;i++) {
            if (this.empleados[i].id == id) {
                this.empleados[i].salario = modelo.salario;
                return 'El salario fue modificado';
              }
            }
            return 'El empleado no existe';
          }

       
eliminarEmpleado(id){
    let listaDeEmpleados = this.empleados.findIndex((e) => e.id == id);
        if(listaDeEmpleados !== -1){
           this.empleados.splice(listaDeEmpleados, 1);
     return this.empleados;
        } else {
            return "El empleado no existe";
        }
    
}}