import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
