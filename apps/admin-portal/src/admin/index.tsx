import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { dataProvider } from '@/mocks';
import { authProvider } from '@/features';
import NotFound from '@/not-found.tsx';
import { LoginPage } from '@/features/auth/ui/LoginPage.tsx';

const entities = [
  'users',
  'students',
  'teachers',
  'paths',
  'classes',
  'admins',
  'managers',
  'spectators',
  'noRoles',
  'sales',
];

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={LoginPage}
    catchAll={NotFound}
  >
    {entities.map((entity) => (
      <Resource
        key={entity}
        name={entity}
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
    ))}
  </Admin>
);

export default App;
