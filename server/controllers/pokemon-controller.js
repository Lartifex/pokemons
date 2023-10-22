import { Pokemon } from "../models/pokemon-schema.js";

export async function getAllPokemon (ctx, next) {
  try {
    const pokemons = await Pokemon.find({});
    ctx.body = pokemons;
  } catch (err) {
    ctx.throw(400, err);
  }
}