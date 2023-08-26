import { Controller, Get } from '@nestjs/common';

@Controller('lista-de-productos')
export class ListaDeProductosController {
  @Get()
  getAllProducts() {
    return ['lista de productos'];
  }
}
