import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import dataProvider from '../mocks/dataProvider';
import { InitNotification } from '../components/InitNotification';
import NotFound from '../not-found.tsx';
import { UserRole as Role } from '@repo/shared-types/user';
import { CustomLayout } from '../components/CustomLayout.tsx';

const AdminPortal = () => {
  return (
    <>
      <InitNotification />
      <Admin dataProvider={dataProvider} layout={CustomLayout} catchAll={NotFound}>
        {Object.values(Role).map((name) => (
          <Resource
            key={name}
            name={name.toLowerCase()}
            list={ListGuesser}
            edit={EditGuesser}
            show={ShowGuesser}
          />
        ))}
      </Admin>
    </>
  );
};

export default AdminPortal;
