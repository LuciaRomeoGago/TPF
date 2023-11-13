import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import {ProductModel} from './empleadosModel';

@Controller('empleados')
export class EmpleadosController {
    empleadosService: any;
    constructor(private readonly empleados: EmpleadosService) {}
@Get()
getEmpleado() {
    return this.empleados.getEmpleado();
}
@Get(':id')
getEmpleadoPorId(@Param('id') id:number) {
    return this.empleados.getEmpleadoPorId(id)
}
@Post()
agregarEmpleado(@Body() modelo: ProductModel) {
    return this.empleados.agregarEmpleado(modelo);
}
@Put(':salario')
modificarSalario(@Body() salario: number, @Param('id') id: number){
    return this.empleados.modificarSalario(id, salario);
}
@Delete(':id')
eliminarEmpleado(@Param('id') id: number) {
    return this.empleados.eliminarEmpleado(id);
}
}
