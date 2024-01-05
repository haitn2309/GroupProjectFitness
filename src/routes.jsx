import {Routes, Route} from 'react-router-dom'; // react-router-dom
import React from 'react'; // react

// Authenticated
// import {useAuth} from '../hooks/useAuth.jsx';

// Router
import Calories from './app/Calories.jsx';
import Layout from './Layout.jsx';
import BMI from './app/BMI.jsx'
import Home from './app/Home.jsx';


const AppRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="calories" element={<Calories />} />
          <Route path="bmi" element={<BMI />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
