import React, {useState, useEffect} from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { bodyPartList, searchExercises } from '../service/exercise';

const Calories = () => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const fetchExercisesData = async () => {
    const bodyPartsData = await bodyPartList();
    // console.log(bodyPartsData);
    setBodyParts(['all', ...bodyPartsData]);
  }

  useEffect(() => {
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await searchExercises();

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      
      // setExercises(searchedExercises);
    }
  };
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
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button 
            variant="contained" 
            color="error" 
            sx={{ marginLeft: 1 }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Calories;

