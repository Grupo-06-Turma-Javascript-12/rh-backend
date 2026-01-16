import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
// import { Funcionarios } from './funcionarios/entities/funcionarios.entity';
// import { FuncionariosModule } from './funcionarios/funcionarios.module';
=======
import { Funcionarios } from './funcionarios/entities/funcionarios.entity';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
>>>>>>> 75a9967 (Atualizações pasta Entities)
// import { Tema } from './tema/entities/tema.entity';
// import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rh_backend',
      entities: [Funcionarios],
      synchronize: true,
      logging: true,
    }),
<<<<<<< HEAD
      FuncionarioModule,
      TemaModule
=======
    FuncionariosModule,
    //TemaModule
>>>>>>> 75a9967 (Atualizações pasta Entities)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
