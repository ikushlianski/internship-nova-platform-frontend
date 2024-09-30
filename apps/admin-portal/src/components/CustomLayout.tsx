import { useState } from 'react';
import { InitNotification } from '../hooks/useInitNotification';
import { Layout, LayoutProps } from 'react-admin';
import { Button } from '@mui/material';
import dataProvider from '../mocks/dataProvider';
import CreateDialog from './CreateDialog';
import MentorCreateForm from './MentorCreateForm';
import StudentCreateForm from './StudentCreateForm';

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
          left: 248,
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
          left: 390,
          top: 55,
          backgroundColor: '#CCC',
          zIndex: 1,
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
