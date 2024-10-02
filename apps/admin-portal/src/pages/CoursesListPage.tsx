import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const CoursesListPage = () => {
  return (
    <div>
      <Button
        component={Link}
        to="/courses/create"
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          marginLeft: '1075px',
          width: '150px',
          height: '40px',
          marginTop: '10px',
        }}
      >
        New Course
      </Button>
    </div>
  );
};
