import { Router } from 'express';
import PokeTeamController from './app/controllers/PokeTeamController';

const router = Router();

router.post('/poketeams', PokeTeamController.store);
router.delete('/poketeams/:id', PokeTeamController.delete);

export default router;
