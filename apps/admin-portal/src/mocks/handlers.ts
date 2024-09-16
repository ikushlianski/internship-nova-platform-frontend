/* eslint-disable prefer-const */
import { http } from 'msw'
import { Users, Students, Teachers, Paths, Classes, Admins, Managers, Sales, Spectators, NoRoles } from './data/entities.json'
import { IUser } from '../types/User'
import { IStudent } from '../types/Student'
import { ITeacher } from '../types/Teacher'
import { IPath } from '../types/Path'
import { IClass } from '../types/Class'
import { IAdmin } from '../types/Admin'
import { IManager } from '../types/Manager'
import { ISales } from '../types/Sales'
import { ISpectator } from '../types/Spectator'
import { INoRole } from '../types/NoRole'
import { handleGetRequest } from '../utils/Utils'
import { handlePostRequest } from '../utils/Utils'
import { handlePutRequest } from '../utils/Utils'
import { handleDeleteRequest } from '../utils/Utils'
import { handleGetIdRequest } from '../utils/Utils'

let users = [...(Users as IUser[])];
let students = [...(Students as IStudent[])];
let teachers = [...(Teachers as ITeacher[])];
let paths = [...(Paths as IPath[])];
let classes = [...(Classes as IClass[])];
let admins = [...(Admins as IAdmin[])];
let managers = [...(Managers as IManager[])];
let sales = [...(Sales as ISales[])];
let spectators = [...(Spectators as ISpectator[])];
let noRoles = [...(NoRoles as INoRole[])];
const usersPost = new Map<number, IUser>();
const studentsPost = new Map<number, IStudent>();
const teachersPost = new Map<number, ITeacher>();
const pathsPost = new Map<number, IPath>();
const classesPost = new Map<number, IClass>();
const adminsPost = new Map<number, IAdmin>();
const managersPost = new Map<number, IManager>();
const salesPost = new Map<number, ISales>();
const spectatorsPost = new Map<number, ISpectator>();
const noRolesPost = new Map<number, INoRole>();


export const handlers = [
  // GET request
  http.get('/users', () => handleGetRequest(users, usersPost, 'users')),
  http.get('/students', () => handleGetRequest(students, studentsPost, 'students')),
  http.get('/teachers', () => handleGetRequest(teachers, teachersPost, 'teachers')),
  http.get('/paths', () => handleGetRequest(paths, pathsPost, 'paths')),
  http.get('/classes', () => handleGetRequest(classes, classesPost, 'classes')),
  http.get('/admins', () => handleGetRequest(admins, adminsPost, 'admins')),
  http.get('/managers', () => handleGetRequest(managers, managersPost, 'managers')),
  http.get('/sales', () => handleGetRequest(sales, salesPost, 'sales')),
  http.get('/spectators', () => handleGetRequest(spectators, spectatorsPost, 'spectators')),
  http.get('/noRoles', () => handleGetRequest(noRoles, noRolesPost, 'noRoles')),

  // GET by Id request function
  http.get('/users/:id', ({ params }) => handleGetIdRequest(params, users, 'User')),
  http.get('/students/:id', ({ params }) => handleGetIdRequest(params, students, 'Students')),
  http.get('/teachers/:id', ({ params }) => handleGetIdRequest(params, teachers, 'Teachers')),
  http.get('/paths/:id', ({ params }) => handleGetIdRequest(params, paths, 'Paths')),
  http.get('/classes/:id', ({ params }) => handleGetIdRequest(params, classes, 'Classes')),
  http.get('/admins/:id', ({ params }) => handleGetIdRequest(params, admins, 'Admins')),
  http.get('/managers/:id', ({ params }) => handleGetIdRequest(params, managers, 'Managers')),
  http.get('/sales/:id', ({ params }) => handleGetIdRequest(params, sales, 'Sales')),
  http.get('/spectators/:id', ({ params }) => handleGetIdRequest(params, spectators, 'Spectators')),
  http.get('/noRoles/:id', ({ params }) => handleGetIdRequest(params, noRoles, 'NoRoles')),

  // POST request
  http.post('/users', ({ request }) => handlePostRequest<IUser>(request, usersPost, 'user')),
  http.post('/students', ({ request }) => handlePostRequest<IStudent>(request, studentsPost, 'students')),
  http.post('/teachers', ({ request }) => handlePostRequest<ITeacher>(request, teachersPost, 'teachers')),
  http.post('/paths', ({ request }) => handlePostRequest<IPath>(request, pathsPost, 'paths')),
  http.post('/classes', ({ request }) => handlePostRequest<IClass>(request, classesPost, 'classes')),
  http.post('/admins', ({ request }) => handlePostRequest<IAdmin>(request, adminsPost, 'admins')),
  http.post('/managers', ({ request }) => handlePostRequest<IManager>(request, managersPost, 'managers')),
  http.post('/sales', ({ request }) => handlePostRequest<ISales>(request, salesPost, 'sales')),
  http.post('/spectators', ({ request }) => handlePostRequest<ISpectator>(request, spectatorsPost, 'spectators')),
  http.post('/noRoles', ({ request }) => handlePostRequest<INoRole>(request, noRolesPost, 'noRoles')),

  // PUT request
  http.put('/users/:id', ({ params, request }) => handlePutRequest<IUser>(params, request, users, usersPost, 'user')),
  http.put('/students/:id', ({ params, request }) => handlePutRequest<IStudent>(params, request, students, studentsPost, 'student')),
  http.put('/teachers/:id', ({ params, request }) => handlePutRequest<ITeacher>(params, request, teachers, teachersPost, 'teacher')),
  http.put('/paths/:id', ({ params, request }) => handlePutRequest<IPath>(params, request, paths, pathsPost, 'path')),
  http.put('/classes/:id', ({ params, request }) => handlePutRequest<IClass>(params, request, classes, classesPost, 'classe')),
  http.put('/admins/:id', ({ params, request }) => handlePutRequest<IAdmin>(params, request, admins, adminsPost, 'admin')),
  http.put('/managers/:id', ({ params, request }) => handlePutRequest<IManager>(params, request, managers, managersPost, 'manager')),
  http.put('/sales/:id', ({ params, request }) => handlePutRequest<ISales>(params, request, sales, salesPost, 'sale')),
  http.put('/spectators/:id', ({ params, request }) => handlePutRequest<ISpectator>(params, request, spectators, spectatorsPost, 'spectator')),
  http.put('/noRoles/:id', ({ params, request }) => handlePutRequest<INoRole>(params, request, noRoles, noRolesPost, 'noRole')),

  // DELETE request
  http.delete('/users/:id', ({ params }) => handleDeleteRequest<IUser>(params, users, 'user')),
  http.delete('/students/:id', ({ params }) => handleDeleteRequest<IStudent>(params, students, 'student')),
  http.delete('/teachers/:id', ({ params }) => handleDeleteRequest<ITeacher>(params, teachers, 'teacher')),
  http.delete('/paths/:id', ({ params }) => handleDeleteRequest<IPath>(params, paths, 'path')),
  http.delete('/classes/:id', ({ params }) => handleDeleteRequest<IClass>(params, classes, 'classe')),
  http.delete('/admins/:id', ({ params }) => handleDeleteRequest<IAdmin>(params, admins, 'admin')),
  http.delete('/managers/:id', ({ params }) => handleDeleteRequest<IManager>(params, managers, 'manager')),
  http.delete('/sales/:id', ({ params }) => handleDeleteRequest<ISales>(params, sales, 'sale')),
  http.delete('/spectators/:id', ({ params }) => handleDeleteRequest<ISpectator>(params, spectators, 'spectator')),
  http.delete('/noRoles/:id', ({ params }) => handleDeleteRequest<INoRole>(params, noRoles, 'noRole')),
]
