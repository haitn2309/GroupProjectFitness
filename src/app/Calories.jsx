import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const CaloriesP = () => {
  return (
    <div>
      {/* Typography for Heading with minimal margin bottom */}
      <Typography 
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          mb: '10px', // Reduced margin bottom to bring the heading closer to the search bar
          textAlign: 'center'
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      {/* Box for Search Bar, keeping it centered */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '10vh' // Full view height to center vertically
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          width: '50%', // Width of the search bar
        }}>
          <TextField 
            label="Search Excercise" 
            variant="outlined" 
            fullWidth  // Make TextField take full width of parent Box
          />
          <Button 
            variant="contained" 
            color="error" 
            sx={{ marginLeft: 1 }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default CaloriesP;
