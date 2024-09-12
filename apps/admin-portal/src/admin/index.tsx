/* eslint-disable @typescript-eslint/no-explicit-any */
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, Layout } from 'react-admin';
import dataProvider from '../mocks/dataProvider';
import { InitNotification } from '../components/InitNotification';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useState } from 'react';
import UserCreateForm from '../components/UserCreateForm';
import NotFound from '../not-found.tsx';
import { UserRole as Role } from '@repo/shared-types/user';

const CustomLayout = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <InitNotification />
      <Layout {...props} />
      <Button
        onClick={handleOpen}
        style={{
          position: 'fixed',
          right: 30,
          bottom: 30,
          backgroundColor: '#CCC',
          zIndex: 2000,
        }}
      >
        Create User
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Create User</DialogTitle>
        <DialogContent>
          <UserCreateForm dataProvider={dataProvider} {...props} />
        </DialogContent>
      </Dialog>
    </>
  );
};

const App = () => {
  return (
    <>
      <InitNotification />
      <Admin dataProvider={dataProvider} layout={CustomLayout} catchAll={NotFound}>
        {Object.values(Role).map((name) => (
          <Resource
            key={name}
            name={name.charAt(0).toLowerCase() + name.slice(1)}
            list={ListGuesser}
            edit={EditGuesser}
            show={ShowGuesser}
          />
        ))}
      </Admin>
    </>
  );
};

export default App;
