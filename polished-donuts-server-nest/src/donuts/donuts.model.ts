import * as mongoose from 'mongoose';

export const DonutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  background: { type: String, required: true },
  description: { type: String, required: true },
});

export interface Donut {
  id: string;
  name: string;
  background: string;
  description: string;
}
