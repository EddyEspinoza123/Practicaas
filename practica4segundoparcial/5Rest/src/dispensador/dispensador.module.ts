import { Module } from '@nestjs/common';
import { DispensadorService } from './dispensador.service';
import { DispensadorController } from './dispensador.controller';

@Module({
  controllers: [DispensadorController],
  providers: [DispensadorService]
})
export class DispensadorModule {}
