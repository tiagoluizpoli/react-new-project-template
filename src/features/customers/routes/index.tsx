import { Customers } from './Customers';

import { Route, Routes } from 'react-router-dom';

export const CustomersRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={<Customers />}
      />
    </Routes>
  );
};
