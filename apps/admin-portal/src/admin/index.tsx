import { Admin, CustomRoutes, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { BrowserRouter, Route } from 'react-router-dom';
import dataProvider from '../mocks/dataProvider';
import NotFound from '../not-found.tsx';
import { CustomLayout } from '../components/CustomLayout.tsx';
import { AppRoutes } from '../shared';

const entities = [
  'students',
  'teachers',
  'paths',
  'admins',
  'managers',
  'spectators',
  'noRoles',
  'sales',
];

const App = () => (
  <BrowserRouter>
    <Admin dataProvider={dataProvider} layout={CustomLayout} catchAll={NotFound}>
      {entities.map((entity) => (
        <Resource
          key={entity}
          name={entity}
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
      ))}
      <CustomRoutes>
        <Route path={AppRoutes.Users}>
          <Route path={AppRoutes.Users} index element={<div>users list</div>} />
          <Route path={AppRoutes.User} element={<div>user by id</div>} />
          <Route path={AppRoutes.UserEdit} element={<div>edit user by id</div>} />
          <Route path={AppRoutes.UserCreate} element={<div>create new user</div>} />
        </Route>
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
);

export default App;
