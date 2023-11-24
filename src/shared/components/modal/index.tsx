import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ModalProps {
  open: boolean;
  handleClose?: () => void;
  name: string;
  description?: string;
  image?: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '10px solid #fdd406',
  boxShadow: 24,
  p: 4,
};

const CustomModal: React.FC<ModalProps> = ({ open, handleClose, name, description, image }) => {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="custom-modal-title"
        aria-describedby="custom-modal-description"
      >
        <Box sx={style}>
          <Typography id="custom-modal-title" variant="h4" component="h2">
            {name}
          </Typography>
          <Typography id="custom-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <img src={image} alt={name} style={{ maxWidth: '100%', margin: '20px', marginLeft: '80px' }} />
          <Button onClick={handleClose} style={{ marginTop: '10px', color: '#fdd406' }}>Fechar</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
