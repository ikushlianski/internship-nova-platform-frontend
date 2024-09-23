import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';

interface CreateDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}
const CreateDialog: React.FC<CreateDialogProps> = ({ open, onClose, title, children }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CreateDialog;
