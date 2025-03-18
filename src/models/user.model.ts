import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  calle: { type: String, required: true },
  ciudad: { type: String, required: true },
  pais: { type: String, required: true },
  codigo_postal: { type: String, required: true },
});

const userSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    edad: { type: Number },
    fecha_creacion: { type: Date, default: Date.now },
    direcciones: { type: [addressSchema], required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
