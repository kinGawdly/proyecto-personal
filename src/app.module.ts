import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FiltroDeCompraModule } from './filtro-de-compra/filtro-de-compra.module';

@Module({
  imports: [FiltroDeCompraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
