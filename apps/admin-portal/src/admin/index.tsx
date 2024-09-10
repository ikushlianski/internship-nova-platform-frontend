/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Layout,
} from "react-admin";
import dataProvider from "../mocks/dataProvider";
import { InitNotification } from "../components/InitNotification";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useState } from "react";
import UserCreateForm from "../components/UserCreateForm";
import NotFound from "../not-found.tsx";

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
          position: "fixed",
          right: 30,
          bottom: 30,
          backgroundColor: "#CCC",
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
        <Resource
          name="users"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="students"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="teachers"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="paths"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="classes"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="admins"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="managers"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="spectators"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="noRoles"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="sales"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
      </Admin>
    </>
  );
};

export default App;
