import { Schema, model, models, Document } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture?: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

// 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true, unique: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String },
  bio: { type: String, trim: true },
  picture: { type: String },
  location: { type: String, trim: true },
  portfolioWebsite: { type: String, trim: true },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  joinedAt: { type: Date, default: Date.now },
});

// 3. Create a Model.
const User = models.User || model<IUser>('User', UserSchema);

export default User;
