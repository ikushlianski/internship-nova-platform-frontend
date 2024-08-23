export interface IPath {
    id: number
    name: string
    description?: string
    classIds: number[] //classes on this course
    studentIds: number[] //students on this course
    teacherIds: number[] //teachers on this courrse
}