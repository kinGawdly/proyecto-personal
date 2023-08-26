import { Module } from '@nestjs/common';
import { FiltroDeCompraController } from './filtro-de-compra.controller';

@Module({
  controllers: [FiltroDeCompraController],
})
export class FiltroDeCompraModule {}
