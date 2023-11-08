import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import {ProductModel} from './empleadosModel';

@Controller('empleados')
export class EmpleadosController {
    empleadosService: any;
    constructor(private readonly servicio: EmpleadosService) {}
@Get()
getEmpleado() {
    return this.servicio.getEmpleados();
}
@Get(':id')
getEmpleadoPorId(@Param('id') id:number) {
    return this.servicio.getEmpleadosPorId(id)
}
@Post()
agregarEmpleado(@Body() modelo: ProductModel) {
    return this.servicio.agregarEmpleado(modelo);
}
@Put(':salario')
modificarProducto(@Body() modelo: ProductModel, @Param('id') id: string){
    return this.servicio.modificarSalario(id, modelo);
}
@Delete(':id')
eliminarEmpleado(@Param('id') id: string) {
    return this.servicio.eliminarEmpleado(id);
}
}
