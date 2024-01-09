import React from 'react';
import { Box } from '@mui/material';

import gym from './images/gym.png';

const customScrollBar = {
  display: 'flex',
  justifyContent: 'center', // Căn giữa theo chiều ngang
  alignItems: 'center', // Căn giữa theo chiều dọc
  height: '100vh', // Chiều cao của Box là 100% chiều cao của viewport
  overflowX: 'auto',
  whiteSpace: 'normal',
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    height: '10px',
    width: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
};

const imageContainerStyle = {
  display: 'inline-block',
  marginRight: '20px',
  textAlign: 'center',
};

const smallImageStyle = {
  width: '40px',
  height: '40px',
  cursor: 'pointer', // Thêm con trỏ là pointer khi di chuột qua hình ảnh
  transition: 'transform 0.2s', // Thêm transition cho hiệu ứng smooth
};

const textStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'Alegreya',
  color: '#3A1212',
  textTransform: 'capitalize',
};

const GymScrollBar = () => {
  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.2)'; // Hiệu ứng phóng to khi hover
  };

  const handleLeave = (event) => {
    event.target.style.transform = 'scale(1)'; // Reset kích thước khi di chuột ra khỏi hình ảnh
  };

  return (
    <Box sx={customScrollBar}>
      <div style={imageContainerStyle}>
        <img
          src={gym}
          alt="gym"
          style={{ ...smallImageStyle, transition: 'transform 0.2s' }}
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
        />
        <div style={textStyle}>Abs</div>
      </div>

      <div style={imageContainerStyle}>
        <img
          src={gym}
          alt="gym"
          style={{ ...smallImageStyle, transition: 'transform 0.2s' }}
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
        />
        <div style={textStyle}>Chest</div>
      </div>

      <div style={imageContainerStyle}>
        <img
          src={gym}
          alt="gym"
          style={{ ...smallImageStyle, transition: 'transform 0.2s' }}
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
        />
        <div style={textStyle}>Back</div>
      </div>

      <div style={imageContainerStyle}>
        <img
          src={gym}
          alt="gym"
          style={{ ...smallImageStyle, transition: 'transform 0.2s' }}
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
        />
        <div style={textStyle}>Arm</div>
      </div>

      <div style={imageContainerStyle}>
        <img
          src={gym}
          alt="gym"
          style={{ ...smallImageStyle, transition: 'transform 0.2s' }}
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
        />
        <div style={textStyle}>Leg</div>
      </div>
    </Box>
  );
};

export default GymScrollBar;
