export interface IMentor {
    id: number
    name: string
    expertise: string
    userId: number //пользователь, который является ментором
    pathIds: number[]
    classIds: number[]
    studentIds: number[]
}