export interface IStudent {
    id: number
    name: string
    userId: number //пользователь, который является студентом
    pathId: number //курс этого студента
    mentorId: number //ментор этого студента
}