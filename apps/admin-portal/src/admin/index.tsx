import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import dataProvider from '../mocks/dataProvider';
import { InitNotification } from '../hooks/useInitNotification.tsx';
import NotFound from '../not-found.tsx';
import { UserRole as Role } from '@repo/shared-types/user';
import { CustomLayout } from '../components/CustomLayout.tsx';
import { roleToResourceMap } from '../utils/Utils.ts';
const AdminPortal = () => {
  return (
    <>
      <InitNotification />
      <Admin dataProvider={dataProvider} layout={CustomLayout} catchAll={NotFound}>
        {Object.values(Role).map((role) => {
          const resourceName = roleToResourceMap[role];
          return (
            <Resource
              key={role}
              name={resourceName}
              list={ListGuesser}
              edit={EditGuesser}
              show={ShowGuesser}
            />
          );
        })}
      </Admin>
    </>
  );
};

export default AdminPortal;
