import { Schema, model, models, Document } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IInteraction extends Document {
  user: Schema.Types.ObjectId; // reference to User
  action: string;
  question: Schema.Types.ObjectId; // reference to Question
  answer: Schema.Types.ObjectId; // reference to Answer
  tag: Schema.Types.ObjectId[]; // reference to Tag
  createdAt: Date;
}

// 2. Create a Schema corresponding to the document interface.
const InteractionSchema = new Schema<IInteraction>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },
  question: { type: Schema.Types.ObjectId, ref: 'Question' },
  answer: { type: Schema.Types.ObjectId, ref: 'Answer' },
  tag: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  createdAt: { type: Date, default: Date.now },
});

// 3. Create a Model.
const Interaction =
  models.Interaction || model<IInteraction>('Interaction', InteractionSchema);

export default Interaction;
