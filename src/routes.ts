import { Router } from 'express';
import PokeTeamController from './app/controllers/PokeTeamController';

const router = Router();

router.post('/poketeams', PokeTeamController.store);

export default router;
