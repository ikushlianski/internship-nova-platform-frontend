import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import dataProvider from '../mocks/dataProvider';
import NotFound from '../not-found.tsx';
// import { StageBanner } from '../utils/stageBanner.component.tsx';

const App = () => (
  <>
    {/*{import.meta.env.VITE_APP_ENV !== 'prod' && <StageBanner />}*/}
    <Admin dataProvider={dataProvider} catchAll={NotFound}>
      <Resource name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="students" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="teachers" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="paths" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="classes" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="admins" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="managers" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="spectators" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="noRoles" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="sales" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
  </>
);

export default App;
