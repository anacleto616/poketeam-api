import { PrismaClient } from '@prisma/client';
import { PokeTeamType } from '../types/PokeTeamType';

const prisma = new PrismaClient();

class PokeTeamsRepository {
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

}

export default new PokeTeamsRepository();
