import { Admin, CustomRoutes, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { BrowserRouter, Route } from 'react-router-dom';
import { authProvider, LoginPage, UserList } from '@/features';
import { InitNotification } from '../hooks/useInitNotification.tsx';
import { AppRoutes } from '@/shared';
import { UserRole as Role } from '@repo/shared-types/user';
import { CustomLayout } from '../components/CustomLayout.tsx';
import { roleToResourceMap } from '../utils/Utils.ts';
import { StageBanner } from '../utils/stageBanner.component.tsx';
import { dataProvider } from '@/mocks';
import NotFound from '@/not-found.tsx';

const AdminPortal = () => {
  return (
    <>
      <BrowserRouter>
        <InitNotification />
        {import.meta.env.VITE_APP_ENV !== 'prod' && <StageBanner />}
        <Admin
          dataProvider={dataProvider}
          authProvider={authProvider}
          layout={CustomLayout}
          loginPage={LoginPage}
          catchAll={NotFound}
        >
          <Resource name="users" list={UserList}>
            <Route path={AppRoutes.User} element={<div>user by id</div>} />
            <Route path={AppRoutes.UserEdit} element={<div>edit user by id</div>} />
            <Route path={AppRoutes.UserCreate} element={<div>create new user</div>} />
          </Resource>
          {Object.values(Role).flatMap((role) => {
            const resourceName = roleToResourceMap[role];
            if (resourceName === 'users') return [];
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
          <CustomRoutes>
            <Route path={AppRoutes.Courses}>
              <Route path={AppRoutes.Courses} index element={<div>courses list</div>} />
              <Route path={AppRoutes.Course} element={<div>course by id</div>} />
              <Route path={AppRoutes.CourseManage} element={<div>manage course by id</div>} />
              <Route path={AppRoutes.CourseCreate} element={<div>create new course</div>} />
            </Route>
            <Route path={AppRoutes.Classes}>
              <Route path={AppRoutes.Classes} index element={<div>classes list</div>} />
              <Route path={AppRoutes.Class} element={<div>class by id</div>} />
              <Route path={AppRoutes.ClassManage} element={<div>manage class by id</div>} />
              <Route path={AppRoutes.ClassCreate} element={<div>create new class</div>} />
            </Route>
            <Route path={AppRoutes.Leads}>
              <Route path={AppRoutes.Leads} index element={<div>leads list</div>} />
            </Route>
          </CustomRoutes>
        </Admin>
      </BrowserRouter>
    </>
  );
};

export default AdminPortal;
