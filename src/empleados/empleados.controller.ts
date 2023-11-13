import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import {ProductModel} from './empleadosModel';

@Controller('empleados')
export class EmpleadosController {
    empleadosService: any;
    constructor(private readonly servicio: EmpleadosService) {}
@Get()
getEmpleado() {
    return this.servicio.getEmpleado();
}
@Get(':id')
getEmpleadoPorId(@Param('id') id:number) {
    return this.servicio.getEmpleadoPorId(id)
}
@Post()
agregarEmpleado(@Body() modelo: ProductModel) {
    return this.servicio.agregarEmpleado(modelo);
}
@Put(':salario')
modificarSalario(@Body() salario: number, @Param('id') id: number){
    return this.servicio.modificarSalario(id, salario);
}
@Delete(':id')
eliminarEmpleado(@Param('id') id: number) {
    return this.servicio.eliminarEmpleado(id);
}
}
