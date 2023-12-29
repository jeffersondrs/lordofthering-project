import { Schema, model } from 'mongoose';
import { RingOfPower } from '../types/global-types';

const ringOfPowerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'O anel precisa ter um nome'],
  },
  description: {
    type: String,
    required: [true, 'O anel precisa ter uma descrição'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const RingOfPowerModel = model<RingOfPower>('RingOfPower', ringOfPowerSchema);

export { RingOfPowerModel };
