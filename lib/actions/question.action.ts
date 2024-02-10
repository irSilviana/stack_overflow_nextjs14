'use server';

import Question from '@/database/question.model';
import { connectToDatabase } from '../mongoose';
import Tag from '@/database/tag.model';

export async function createQuestion(params: any) {
  try {
    // connect to the database
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    // create a question

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];
    //  create tags or find existing tags
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);

      // update the question with the tags
      await Question.findByIdAndUpdate(question._id, {
        $push: { tags: { $each: tagDocuments } },
      });
    }

    //  Create an interaction record for the user's ask_question action

    // Increment author's reputation by +5 points for asking a question
  } catch (error) {}
}
