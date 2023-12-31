import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route';
import { Toaster } from 'react-hot-toast';

function BasicExample() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default BasicExample;