import { Router } from 'express';
import { getDomains, getModels } from './controllers';
import { signUp, logIn } from './controllers/authController';
import { getServices } from './controllers/serviceController';
import { getDatabases } from './controllers/databaseController';
import { trainModel, testModel } from './controllers/modelController';

const router = Router();

router.get('/domains', getDomains);
router.get('/models', getModels);
router.post('/signup', signUp);
router.post('/login', logIn);
router.get('/services', getServices);
router.get('/databases', getDatabases);
router.post('/train', trainModel);
router.get('/test', testModel);

export default router;
