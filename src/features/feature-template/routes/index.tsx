import { Navigate, Route, Routes } from 'react-router-dom';
import { Feature } from './Feature';

export const FeatureRoutes = () => {
  return (
    <Routes>
      {/* <Route path='' element={<Navigate to='/app/feature/newfeature' replace />} /> */}
      <Route path='/newfeature' element={<Feature />} />
    </Routes>
  );
};
