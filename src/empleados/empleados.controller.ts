import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import {EmpleadoModel} from './empleadosModel';

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly service: EmpleadosService) {}
    
@Get()
getEmpleados() {
    return this.service.getEmpleados();
}
@Get(':id')
getEmpleadoPorId(@Param('id') id:number) {
    return this.service.getEmpleadoPorId(id)
}
@Post()
agregarEmpleado(@Body() empleado: EmpleadoModel) {
    return this.service.agregarEmpleado(empleado);
}
@Put(':salario')
modificarSalario(@Body() modelo : EmpleadoModel, @Param('id') id: number){
    return this.service.modificarSalario(id,modelo);
}
@Delete(':id')
eliminarEmpleado(@Param('id') id: number) {
    return this.service.eliminarEmpleado(id);
}
}
