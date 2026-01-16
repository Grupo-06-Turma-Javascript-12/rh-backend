import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionariosController } from './controller/funcionarios.controller';
import { Funcionarios } from './entities/funcionarios.entity';
import { FuncionarioService } from './services/funcionario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionarios])],
  controllers: [FuncionariosController],
  providers: [FuncionarioService],
  exports: [FuncionarioService],
})
export class FuncionariosModule {}
