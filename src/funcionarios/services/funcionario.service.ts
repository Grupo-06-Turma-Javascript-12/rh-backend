import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Funcionarios } from '../entities/funcionarios.entity';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionarios)
    private funcionarioRepository: Repository<Funcionarios>,
  ) {}

  async findAll(): Promise<Funcionarios[]> {
    return await this.funcionarioRepository.find();
  }

  async findById(id: number): Promise<Funcionarios> {
    const funcionario = await this.funcionarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!funcionario)
      throw new HttpException(
        'Funcionario não encontrado!',
        HttpStatus.NOT_FOUND,
      );

    return funcionario;
  }

  async findAllByNome(nome: string): Promise<Funcionarios[]> {
    return await this.funcionarioRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async findByCPF(cpf: string): Promise<Funcionarios> {
    const funcionario = await this.funcionarioRepository.findOne({
      where: {
        cpf,
      },
    });

    if (!funcionario)
      throw new HttpException(
        'Funcionario não encontrado!',
        HttpStatus.NOT_FOUND,
      );

    return funcionario;
  }

  async create(funcionario: Funcionarios): Promise<Funcionarios> {
    return await this.funcionarioRepository.save(funcionario);
  }

  async update(funcionario: Funcionarios): Promise<Funcionarios> {
    await this.findById(funcionario.id);

    return await this.funcionarioRepository.save(funcionario);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.funcionarioRepository.delete(id);
  }
}
