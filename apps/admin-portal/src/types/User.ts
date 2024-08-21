export interface IUser {
    id: number
    name: string
    role: 'student' | 'mentor' | 'admin'
    studentId?: number
    mentorId?: number
    adminId?: number
}