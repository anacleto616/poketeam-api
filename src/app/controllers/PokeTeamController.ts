import { Request, Response } from 'express';
import PokeTeamsRepository from '../repositories/PokeTeamsRepository';
import { PokeTeamType } from '../types/PokeTeamType';

class PokeTeamController {
  async index(request: Request, response: Response) {
    const poketeams = await PokeTeamsRepository.findAll();

    response.json(poketeams);
  }

  async store(request: Request, response: Response) {
    const {
      name, pokemons
    }: PokeTeamType = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required.' });
    }

    const nameBeUse = await PokeTeamsRepository.findByName(name);

    if (nameBeUse) {
      return response.status(400).json({ error: 'This name is already in use.' });
    }

    if (pokemons.length === 0) {
      return response.status(400).json({ error: 'In this list there must be at least one pokemon.' });
    }

    if (pokemons.length > 6) {
      return response.status(400).json({ error: 'This list cannot exceed six registered pokemons.' });
    }

    const equalPokemons = (new Set(pokemons)).size !== pokemons.length;

    if (equalPokemons) {
      return response.status(400).json({ error: 'In this list there are similar pokemons.' });
    }

    const poketeam = await PokeTeamsRepository.create({
      name, pokemons,
    });

    response.json(poketeam);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await PokeTeamsRepository.delete(id);

    response.sendStatus(204);
  }
}

export default new PokeTeamController();
