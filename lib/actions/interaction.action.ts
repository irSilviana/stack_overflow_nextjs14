'use server';

import Question from '@/database/question.model';
import { connectToDatabase } from '../mongoose';
import { ViewQuestionParams } from './shared.types';
import Interaction from '@/database/interaction.model';

export async function viewQuestion(params: ViewQuestionParams) {
  try {
    connectToDatabase();

    const { questionId, userId } = params;

    // update the interaction collection with the user's view action
    // update view count for the question
    await Question.findByIdAndUpdate(questionId, { $inc: { views: 1 } });

    // if the user has already viewed the question, update the timestamp
    if (userId) {
      const existingInteraction = await Interaction.findOne({
        user: userId,
        question: questionId,
        action: 'view',
      });

      if (existingInteraction) {
        return console.log('User has already viewed this question');
      }
    }

    // if not, create a new document in the interaction collection
    await Interaction.create({
      user: userId,
      question: questionId,
      action: 'view',
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
