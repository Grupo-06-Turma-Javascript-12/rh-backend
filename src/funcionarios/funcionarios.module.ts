import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionarios } from 'src/funcionarios/entities/funcionarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionarios])],
  controllers: [],
  providers: [],
  exports: [],
})
export class FuncionariosModule {}
