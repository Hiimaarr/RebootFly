// App.js
import React from 'react';
import { FlightProvider } from './Context/FlightContext';
import { RouterProvider } from 'react-router-dom';
import router from './Router';


function App() {
  return (
    <FlightProvider>
      <RouterProvider router={router} />
    </FlightProvider>
  );
}

export default App;
