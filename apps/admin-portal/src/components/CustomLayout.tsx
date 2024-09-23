import { useState } from 'react';
import { InitNotification } from '../hooks/useInitNotification';
import { Layout, LayoutProps } from 'react-admin';
import { Button } from '@mui/material';
import dataProvider from '../mocks/dataProvider';
import CreateDialog from './CreateDialog';
import StudentOrMentorCreateForm from './StudentOrMentorCreateForm';
import { UserRole as Role } from '@repo/shared-types/user';
export const CustomLayout = (props: LayoutProps) => {
  const [openMetnorDialog, setOpenMetnorDialog] = useState(false);
  const [openStudentDialog, setOpenStudentDialog] = useState(false);

  const handleOpenMetnorDialog = () => {
    setOpenMetnorDialog(true);
  };

  const handleCloseMetnorDialog = () => {
    setOpenMetnorDialog(false);
  };
  const handleOpenStudentDialog = () => {
    setOpenStudentDialog(true);
  };

  const handleCloseStudentDialog = () => {
    setOpenStudentDialog(false);
  };

  return (
    <>
      <InitNotification />
      <Layout {...props} />
      <Button
        onClick={handleOpenMetnorDialog}
        style={{
          position: 'fixed',
          right: 180,
          bottom: 30,
          backgroundColor: '#CCC',
          zIndex: 2000,
        }}
      >
        Create Mentor
      </Button>
      <Button
        onClick={handleOpenStudentDialog}
        style={{
          position: 'fixed',
          right: 30,
          bottom: 30,
          backgroundColor: '#CCC',
          zIndex: 2000,
        }}
      >
        Create Student
      </Button>
      <CreateDialog open={openMetnorDialog} onClose={handleCloseMetnorDialog} title="Create Mentor">
        <StudentOrMentorCreateForm dataProvider={dataProvider} role={Role.Teacher} {...props} />
        {/* <MentorCreateForm dataProvider={dataProvider} {...props} /> */}
      </CreateDialog>
      <CreateDialog
        open={openStudentDialog}
        onClose={handleCloseStudentDialog}
        title="Create Student"
      >
        <StudentOrMentorCreateForm dataProvider={dataProvider} role={Role.Student} {...props} />
        {/* <StudentCreateForm dataProvider={dataProvider} {...props} /> */}
      </CreateDialog>
    </>
  );
};
