import { useState } from 'react';
import { InitNotification } from '../hooks/useInitNotification';
import { Layout, LayoutProps } from 'react-admin';
import { Button } from '@mui/material';
import MentorCreateForm from './MentorCreateForm';
import StudentCreateForm from './StudentCreateForm';
import dataProvider from '../mocks/dataProvider';
import CreateDialog from './CreateDialog';

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
        <MentorCreateForm dataProvider={dataProvider} {...props} />
      </CreateDialog>
      <CreateDialog
        open={openStudentDialog}
        onClose={handleCloseStudentDialog}
        title="Create Student"
      >
        <StudentCreateForm dataProvider={dataProvider} {...props} />
      </CreateDialog>
    </>
  );
};
