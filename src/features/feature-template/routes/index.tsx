import { Feature } from './Feature';

import { Navigate, Route, Routes } from 'react-router-dom';

export const FeatureRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Navigate
            to="/app/feature/newfeature"
            replace
          />
        }
      />
      <Route
        path="/newfeature"
        element={<Feature />}
      />
    </Routes>
  );
};
