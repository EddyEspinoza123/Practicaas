import * as mongoose from 'mongoose';

export const PacienteSchema = new mongoose.Schema(
  {
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    tipo: { type: Number, required: true },
  },
  { timestamps: true },
);

PacienteSchema.index({ nombre: 1 }, { unique: true });
PacienteSchema.index({ identificacion: 1 }, { unique: true });
