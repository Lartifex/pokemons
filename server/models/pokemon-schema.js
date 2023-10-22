import mongoose from "../main.js";

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  _id: String,
  id: String,
  identifier: String,
  name: String,
  species_id: Number,
  height: Number,
  weight: Number,
  base_experience: Number,
  order: Number,
  is_default: Number,
  // types: [Type],
  // moves: [Move],
  evolves_to: Number,
  url: String,
  front_pic: String,
  // back_pic: String,
});

export const Pokemon = mongoose.model('pokemons', pokemonSchema);