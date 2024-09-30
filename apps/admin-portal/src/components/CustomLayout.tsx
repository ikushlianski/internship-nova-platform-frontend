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
          padding: '4px 5px',
          position: 'fixed',
          left: 300,
          top: 55,
          backgroundColor: '#CCC',
          zIndex: 1,
        }}
      >
        Create Mentor
      </Button>
      <Button
        onClick={handleOpenStudentDialog}
        style={{
          padding: '4px 5px',
          position: 'fixed',
          left: 445,
          top: 55,
          backgroundColor: '#CCC',
          zIndex: 1,
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
