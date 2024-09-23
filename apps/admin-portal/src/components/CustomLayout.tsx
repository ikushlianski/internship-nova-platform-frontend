import { useState } from 'react';
import { InitNotification } from '../hooks/useInitNotification';
import { Layout, LayoutProps } from 'react-admin';
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UserCreateForm from './UserCreateForm';
import dataProvider from '../mocks/dataProvider';

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
      <Dialog open={openMetnorDialog} onClose={handleCloseMetnorDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          Create Mentor
          <IconButton
            aria-label="close"
            onClick={handleCloseMetnorDialog}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <UserCreateForm dataProvider={dataProvider} {...props} />
        </DialogContent>
      </Dialog>
      <Dialog open={openStudentDialog} onClose={handleCloseStudentDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          Create Student
          <IconButton
            aria-label="close"
            onClick={handleCloseStudentDialog}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <UserCreateForm dataProvider={dataProvider} {...props} />
        </DialogContent>
      </Dialog>
    </>
  );
};
