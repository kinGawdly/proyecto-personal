import { Controller, Get } from '@nestjs/common';

@Controller('filtro-de-compra')
export class FiltroDeCompraController {
  @Get()
  getAllPurchases() {
    return ['filtro de compra'];
  }
}
