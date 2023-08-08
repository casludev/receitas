// importa o mongoose
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://casludev:@cluster0.bkdd5kw.mongodb.net/receitas"
);
// conecta e exporta o mongoose
let db = mongoose.connection;

export default db;
