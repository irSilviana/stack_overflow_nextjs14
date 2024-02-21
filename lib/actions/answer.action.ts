'use server';

import Answer from '@/database/answer.model';
import { connectToDatabase } from '../mongoose';
import { CreateAnswerParams, GetAnswersParams } from './shared.types';
import { revalidatePath } from 'next/cache';
import Question from '@/database/question.model';
import console from 'console';

export async function createAnswer(params: CreateAnswerParams) {
  try {
    // connect to the database
    connectToDatabase();

    const { content, author, question, path } = params;

    // create an answer
    const newAnswer = await Answer.create({ content, author, question });

    //  populate the Question model with the newly created answer
    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    // TODO: Add interaction

    // revalidate the path
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAnswers(params: GetAnswersParams) {
  try {
    connectToDatabase();

    const { questionId } = params;

    const answers = await Answer.find({ question: questionId })
      .populate('author', '_id clerkId name picture')
      .sort({ createdAt: -1 });

    return { answers };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
