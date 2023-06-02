import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DispensadorService } from './dispensador.service';
import { CreateDispensadorDto } from './dto/create-dispensador.dto';
import { UpdateDispensadorDto } from './dto/update-dispensador.dto';
import { Dispensador } from './entities/dispensador.entity';

@Controller('dispensador')
export class DispensadorController {
  constructor(private readonly dispensadorService: DispensadorService) {}

  @Post()
  create(@Body() createDispensadorDto: CreateDispensadorDto) {
    return this.dispensadorService.create(createDispensadorDto);
  }

  @Get()
  findAll() : Dispensador[] {
    return this.dispensadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dispensadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDispensadorDto: UpdateDispensadorDto) {
    return this.dispensadorService.update(+id, updateDispensadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dispensadorService.remove(+id);
  }
}
