import { IUser } from "../types/User"
import { Users, Students, Teachers, Paths, Classes, Admins, Managers, Sales, Spectators, NoRoles } from '../mocks/data/entities.json'

// A user can have multiple roles in ecosystem applications, with 
// the most powerful role being dominant.
type Role = 'Admin' | 'Manager' | 'Sales' | 'Teacher' | 'Student' | 'Spectator' | 'No role'

export function getPrimaryRole(user: IUser): string {
    const rolePriority: Record<Role, number> = {
        'Admin': 6,
        'Manager': 5,
        'Sales': 4,
        'Teacher': 3,
        'Student': 2,
        'Spectator': 1,
        'No role': 0
    };

    return user.roles.reduce((prev, curr) => {
        return rolePriority[curr] > rolePriority[prev] ? curr : prev;
    })
}

//Function for gettin data from `entities.json` file
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDataForResource = (resource: string): any[] => {
    switch (resource) {
        case 'users':
            return Users;
        case 'students':
            return Students;
        case 'teachers':
            return Teachers;
        case 'paths':
            return Paths;
        case 'classes':
            return Classes;
        case 'admins':
            return Admins;
        case 'managers':
            return Managers;
        case 'sales':
            return Sales;
        case 'spectators':
            return Spectators;
        case 'noRoles':
            return NoRoles;
        default:
            throw new Error(`Unknown resource: ${resource}`);
    }
}

//Function for "UpdateMany "to update data in the `entities.json` file
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateResourceData = (resource: string, updatedData: any[]): void => {
    switch (resource) {
        case 'users':
            Users.splice(0, Users.length, ...updatedData)
            break
        case 'students':
            Students.splice(0, Students.length, ...updatedData)
            break
        case 'teachers':
            Teachers.splice(0, Teachers.length, ...updatedData)
            break
        case 'paths':
            Paths.splice(0, Paths.length, ...updatedData)
            break
        case 'classes':
            Classes.splice(0, Classes.length, ...updatedData)
            break
        case 'admins':
            Admins.splice(0, Admins.length, ...updatedData)
            break
        case 'managers':
            Managers.splice(0, Managers.length, ...updatedData)
            break
        case 'sales':
            Sales.splice(0, Sales.length, ...updatedData)
            break
        case 'spectators':
            Spectators.splice(0, Spectators.length, ...updatedData)
            break
        case 'noRoles':
            NoRoles.splice(0, NoRoles.length, ...updatedData)
            break
        default:
            throw new Error(`Unknown resource: ${resource}`)
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateNewId = (data: any[]): number => {
    return data.length ? Math.max(...data.map(item => item.id)) + 1 : 1;
};
