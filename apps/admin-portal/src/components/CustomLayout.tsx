import { useState } from 'react';
import { Layout, LayoutProps } from 'react-admin';
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UserCreateForm from './UserCreateForm';
import dataProvider from '../mocks/dataProvider';

export const CustomLayout = (props: LayoutProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
        <DialogTitle>
          Create User
          <IconButton
            aria-label="close"
            onClick={handleClose}
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
