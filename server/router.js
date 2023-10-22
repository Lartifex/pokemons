import Router from 'koa-router'
import { getAllPokemon } from './controllers/pokemon-controller.js'

const router = new Router();
router.get('/pokemon', getAllPokemon);


export default router