import { Module } from '@nestjs/common';
import { ListaDeProductosController } from './lista-de-productos.controller';

@Module({
  controllers: [ListaDeProductosController]
})
export class ListaDeProductosModule {}
