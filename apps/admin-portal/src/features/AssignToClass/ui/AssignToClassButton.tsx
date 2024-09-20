import { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

export const AssignToClassButton = () => {
  const [classes, setClasses] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setClasses(event.target.value as string);
  };

  const mockClasses = ['devOps', 'FrontEnd', 'Backend', 'QA'];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Assign to classes</InputLabel>
        <Select value={classes} onChange={handleChange}>
          {mockClasses.map((item) => (
            <MenuItem>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
