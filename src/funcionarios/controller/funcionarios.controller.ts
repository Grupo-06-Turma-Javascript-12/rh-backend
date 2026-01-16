import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Funcionarios } from '../entities/funcionarios.entity';
import { FuncionarioService } from '../services/funcionario.service';

@Controller('/funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionarioService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Funcionarios[]> {
    return this.funcionariosService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Funcionarios> {
    return this.funcionariosService.findById(id);
  }
  @Get('/cpf/:cpf')
  @HttpCode(HttpStatus.OK)
  findByCPF(@Param('cpf') cpf: string): Promise<Funcionarios> {
    return this.funcionariosService.findByCPF(cpf);
  }
  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByNome(@Param('nome') nome: string): Promise<Funcionarios[]> {
    return this.funcionariosService.findAllByNome(nome);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() funcionarios: Funcionarios): Promise<Funcionarios> {
    return this.funcionariosService.create(funcionarios);
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() funcionarios: Funcionarios): Promise<Funcionarios> {
    return this.funcionariosService.update(funcionarios);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.funcionariosService.delete(id);
  }
}
