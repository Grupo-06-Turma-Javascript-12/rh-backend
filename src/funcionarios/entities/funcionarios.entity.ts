//import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_funcionarios' })
export class Funcionarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  nome: string;

  @Column({ length: 255, nullable: false })
  cargo: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  salario: number;

  @Column({ type: 'timestamp', nullable: false })
  dataAdmissao: Date;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
