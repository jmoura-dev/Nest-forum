import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class AnswerPresenter {
  static toHTTP(answers: Answer) {
    return {
      id: answers.id.toString(),
      content: answers.content,
      createdAt: answers.createdAt,
      updatedAt: answers.updatedAt,
    }
  }
}
