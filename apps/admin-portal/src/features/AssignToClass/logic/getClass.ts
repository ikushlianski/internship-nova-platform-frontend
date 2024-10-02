import { classes as mockClasses } from '../../../mocks/handlers';

export function getClass(className: string) {
  return mockClasses.filter((item) => item.name.toLowerCase().includes(className.toLowerCase()));
}
