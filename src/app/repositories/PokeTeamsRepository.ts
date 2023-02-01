import { PrismaClient } from '@prisma/client';
import { PokeTeamType } from '../types/PokeTeamType';

const prisma = new PrismaClient();

class PokeTeamsRepository {
  async findAll() {
    const rows = await prisma.pokeTeam.findMany({
      orderBy: [
        {
          name: 'asc'
        }
      ]
    });

    return rows;
  }

  async findByName(name: string) {
    const row = await prisma.pokeTeam.findUnique({
      where: {
        name
      }
    });

    return row;
  }

  async create({ name, pokemons }: PokeTeamType) {
    const row = await prisma.pokeTeam.create({
      data: {
        name,
        pokemons,
      }
    });

    return row;
  }

  async delete(id: string) {
    const deleteOp = await prisma.pokeTeam.delete({
      where: {
        id: id
      }
    });

    return deleteOp;
  }

}

export default new PokeTeamsRepository();
