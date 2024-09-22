import { http, HttpResponse } from 'msw';

import { IAdmin } from '../types/Admin';
import { IClass } from '../types/Class';
import { IManager } from '../types/Manager';
import { INoRole } from '../types/NoRole';
import { IPath } from '../types/Path';
import { ISales } from '../types/Sales';
import { ISpectator } from '../types/Spectator';
import { IStudent } from '../types/Student';
import { ITeacher } from '../types/Teacher';
import { IUser } from '../types/User';

import {
  Users,
  Students,
  Teachers,
  Paths,
  Classes,
  Admins,
  Managers,
  Sales,
  Spectators,
  NoRoles,
} from './data/entities.json';

let users = [...(Users as IUser[])];
let students = [...(Students as IStudent[])];
let teachers = [...(Teachers as ITeacher[])];
let paths = [...(Paths as IPath[])];
export let classes = [...(Classes as IClass[])];
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
  http.get('/users', () => HttpResponse.json(users)),
  http.get('/students', () => HttpResponse.json(students)),
  http.get('/teachers', () => HttpResponse.json(teachers)),
  http.get('/paths', () => HttpResponse.json(paths)),
  http.get('/classes', () => HttpResponse.json(classes)),
  http.get('/admins', () => HttpResponse.json(admins)),
  http.get('/managers', () => HttpResponse.json(managers)),
  http.get('/sales', () => HttpResponse.json(sales)),
  http.get('/spectators', () => HttpResponse.json(spectators)),
  http.get('/noRoles', () => HttpResponse.json(noRoles)),

  // POST request
  http.post('/users', async ({ request }) => {
    try {
      const newUser = (await request.json()) as IUser;

      if (!newUser || typeof newUser.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      usersPost.set(newUser.id, newUser);
      return HttpResponse.json(newUser, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.post('/students', async ({ request }) => {
    try {
      const newStudent = (await request.json()) as IStudent;

      if (!newStudent || typeof newStudent.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      studentsPost.set(newStudent.id, newStudent);
      return HttpResponse.json(newStudent, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.post('/teachers', async ({ request }) => {
    try {
      const newTeacher = (await request.json()) as ITeacher;

      if (!newTeacher || typeof newTeacher.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      teachersPost.set(newTeacher.id, newTeacher);
      return HttpResponse.json(newTeacher, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.post('/paths', async ({ request }) => {
    try {
      const newPath = (await request.json()) as IPath;

      if (!newPath || typeof newPath.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      pathsPost.set(newPath.id, newPath);
      return HttpResponse.json(newPath, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.post('/classes', async ({ request }) => {
    try {
      const newClass = (await request.json()) as IClass;

      if (!newClass || typeof newClass.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      classesPost.set(newClass.id, newClass);
      return HttpResponse.json(newClass, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.post('/admins', async ({ request }) => {
    try {
      const newAdmin = (await request.json()) as IAdmin;

      if (!newAdmin || typeof newAdmin.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      adminsPost.set(newAdmin.id, newAdmin);
      return HttpResponse.json(newAdmin, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.post('/managers', async ({ request }) => {
    try {
      const newManager = (await request.json()) as IManager;

      if (!newManager || typeof newManager.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      managersPost.set(newManager.id, newManager);
      return HttpResponse.json(newManager, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.post('/sales', async ({ request }) => {
    try {
      const newSale = (await request.json()) as ISales;

      if (!newSale || typeof newSale.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      salesPost.set(newSale.id, newSale);
      return HttpResponse.json(newSale, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.post('/spectators', async ({ request }) => {
    try {
      const newSpectator = (await request.json()) as ISpectator;

      if (!newSpectator || typeof newSpectator.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      spectatorsPost.set(newSpectator.id, newSpectator);
      return HttpResponse.json(newSpectator, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.post('/noRoles', async ({ request }) => {
    try {
      const newNoRole = (await request.json()) as INoRole;

      if (!newNoRole || typeof newNoRole.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      noRolesPost.set(newNoRole.id, newNoRole);
      return HttpResponse.json(newNoRole, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),

  // PUT request
  http.put('/users/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedUser = (await request.json()) as IUser;

      if (!updatedUser || typeof updatedUser.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      users = users.map((user) => (user.id === Number(id) ? updatedUser : user));
      return HttpResponse.json(updatedUser);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.put('/students/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedStudent = (await request.json()) as IStudent;

      if (!updatedStudent || typeof updatedStudent.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      students = students.map((student) => (student.id === Number(id) ? updatedStudent : student));
      return HttpResponse.json(updatedStudent);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.put('/teachers/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedTeacher = (await request.json()) as ITeacher;

      if (!updatedTeacher || typeof updatedTeacher.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      teachers = teachers.map((teacher) => (teacher.id === Number(id) ? updatedTeacher : teacher));
      return HttpResponse.json(updatedTeacher);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.put('/paths/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedPath = (await request.json()) as IPath;

      if (!updatedPath || typeof updatedPath.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      paths = paths.map((path) => (path.id === Number(id) ? updatedPath : path));
      return HttpResponse.json(updatedPath);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.put('/classes/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedClass = (await request.json()) as IClass;

      if (!updatedClass || typeof updatedClass.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      classes = classes.map((classItem) =>
        classItem.id === Number(id) ? updatedClass : classItem,
      );
      return HttpResponse.json(updatedClass);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.put('/admins/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedAdmin = (await request.json()) as IAdmin;

      if (!updatedAdmin || typeof updatedAdmin.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      admins = admins.map((admin) => (admin.id === Number(id) ? updatedAdmin : admin));
      return HttpResponse.json(updatedAdmin);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.put('/managers/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedManager = (await request.json()) as IManager;

      if (!updatedManager || typeof updatedManager.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      managers = managers.map((manager) => (manager.id === Number(id) ? updatedManager : manager));
      return HttpResponse.json(updatedManager);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.put('/sales/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedSale = (await request.json()) as ISales;

      if (!updatedSale || typeof updatedSale.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      sales = sales.map((sale) => (sale.id === Number(id) ? updatedSale : sale));
      return HttpResponse.json(updatedSale);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.put('/spectators/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedSpectator = (await request.json()) as ISpectator;

      if (!updatedSpectator || typeof updatedSpectator.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      spectators = spectators.map((spectator) =>
        spectator.id === Number(id) ? updatedSpectator : spectator,
      );
      return HttpResponse.json(updatedSpectator);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),
  http.put('/noRoles/:id', async ({ params, request }) => {
    try {
      const { id } = params;
      const updatedNoRole = (await request.json()) as INoRole;

      if (!updatedNoRole || typeof updatedNoRole.id !== 'number') {
        return HttpResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      noRoles = noRoles.map((noRole) => (noRole.id === Number(id) ? updatedNoRole : noRole));
      return HttpResponse.json(updatedNoRole);
    } catch (error) {
      return HttpResponse.json({ error: 'Failed to parse request body' }, { status: 400 });
    }
  }),

  // DELETE request
  http.delete('/users/:id', (req) => {
    const { id } = req.params;
    users = users.filter((user) => String(user.id) !== id);
    return HttpResponse.json({ id });
  }),
  http.delete('/students/:id', (req) => {
    const { id } = req.params;
    students = students.filter((student) => String(student.id) !== id);
    return HttpResponse.json({ id });
  }),
  http.delete('/teachers/:id', (req) => {
    const { id } = req.params;
    teachers = teachers.filter((teacher) => String(teacher.id) !== id);
    return HttpResponse.json({ id });
  }),
  http.delete('/paths/:id', (req) => {
    const { id } = req.params;
    paths = paths.filter((path) => String(path.id) !== id);
    return HttpResponse.json({ id });
  }),
  http.delete('/classes/:id', (req) => {
    const { id } = req.params;
    classes = classes.filter((classItem) => String(classItem.id) !== id);
    return HttpResponse.json({ id });
  }),
  http.delete('/admins/:id', (req) => {
    const { id } = req.params;
    admins = admins.filter((admin) => String(admin.id) !== id);
    return HttpResponse.json({ id });
  }),
  http.delete('/managers/:id', (req) => {
    const { id } = req.params;
    managers = managers.filter((manager) => String(manager.id) !== id);
    return HttpResponse.json({ id });
  }),
  http.delete('/sales/:id', (req) => {
    const { id } = req.params;
    sales = sales.filter((sale) => String(sale.id) !== id);
    return HttpResponse.json({ id });
  }),
  http.delete('/spectators/:id', (req) => {
    const { id } = req.params;
    spectators = spectators.filter((spectator) => String(spectator.id) !== id);
    return HttpResponse.json({ id });
  }),
  http.delete('/noRoles/:id', (req) => {
    const { id } = req.params;
    noRoles = noRoles.filter((noRole) => String(noRole.id) !== id);
    return HttpResponse.json({ id });
  }),
];
