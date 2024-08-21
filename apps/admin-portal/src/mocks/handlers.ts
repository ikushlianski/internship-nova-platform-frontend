import { http, HttpResponse } from 'msw'
import  {users, students, mentors, paths, classes}  from './data/entities.json'
import {IUser} from '../types/User'
import { IStudent } from '../types/Student'
import { IMentor } from '../types/Mentor'
import { IPath } from '../types/Path'
import { IClass } from '../types/Class'

export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json(users as IUser[])
    }),
    http.get('https://jsonplaceholder.typicode.com/students', () => {
        return HttpResponse.json(students as IStudent[])
    }),
    http.get('https://jsonplaceholder.typicode.com/mentors', () => {
        return HttpResponse.json(mentors as IMentor[])
    }),
    http.get('https://jsonplaceholder.typicode.com/paths', () => {
        return HttpResponse.json(paths as IPath[])
    }),
    http.get('https://jsonplaceholder.typicode.com/classes', () => {
        return HttpResponse.json(classes as IClass[])
    }),
]
