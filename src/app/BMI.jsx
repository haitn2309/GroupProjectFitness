import React from 'react';
import Background from './images/Background.png';
import ChartImage from './images/ChartImage.png';

const BMI = () => {
  // This container is now only for the background image and text overlay
  const backgroundImageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "496px", // The fixed height of your image
    width: "100%", // Full width
    overflow: "hidden",
    position: "relative", // Relative for absolute positioning of the text
  };

  const imageStyle = {
    width: "1715px",
    height: "496px",
    flexShrink: 0,
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
  };

  // Section for the form and chart columns
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto', // Center the section
  };

  const columnStyle = {
    flex: 1,
    margin: '0 10px',
    // Add additional styles if needed
  };
  const formHeadingStyle = {
    color: '#524FF5',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '110%', // This will be 22px
    letterSpacing: '8px',
    textTransform: 'uppercase',
  };
  const bmiHeadingStyle = {
    color: '#1C2129',
    fontFamily: 'Inter',
    fontSize: '45px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '110%', // Equivalent to 49.5px for 45px font-size
    // Add letterSpacing or textTransform if needed
  };
  const buttonStyle = {
    display: 'flex',
    padding: '19px 60px 20px 60px', // Custom padding
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    background: '#1B2129', // Dark background color
    color: 'white', // Text color, assuming you want white text
    border: 'none', // Remove default border
    cursor: 'pointer', // Cursor change on hover
    fontSize: '16px', // Font size, adjust as needed
    borderRadius: '4px', // Rounded corners, adjust as needed
    // Add any other styles you need for the button
  };

  // The form column
  const formColumn = (
    <div style={columnStyle}>
      <h2 style={formHeadingStyle}>Fill details and Receive Email</h2>
      <p>Body mass index is a value derived from the mass and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m², resulting from mass in kilograms and height in metres.</p>
      <h3 style={bmiHeadingStyle}>Your BMI</h3>
      <input type="text" placeholder="Height / cm" />
      <input type="text" placeholder="Weight / kg" />
      <input type="text" placeholder="Age"/>
      <input type="text" placeholder="Sex"/>
      {/* Add other form fields here */}
      <button style={buttonStyle}>Submit Now</button>
    </div>
  );
  
  const h2Style = {
    color: '#1C2129',
    fontFamily: 'Inter',
    fontSize: '45px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '110%', // This is equivalent to 49.5px if the font-size is 45px
  };

  // The BMI chart column
  const chartColumn = (
    <div style={columnStyle}>
      <h2 style={h2Style}>BMI Chart</h2>
      <img src={ChartImage} alt="BMI Chart" style={{ width: '100%', height: 'auto' }} />
    </div>
  );

  

  return (
    <div>
      <div style={backgroundImageContainerStyle}>
        <img src={Background} alt="Background" style={imageStyle} />
        <span style={textStyle}>BMI Calculator</span>
      </div>
      <div style={sectionStyle}>
        {formColumn}
        {chartColumn}
      </div>
    </div>
  );
}

export default BMI;
