import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppRedirectionHandler = ({ redirectTo }: { redirectTo: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(redirectTo);
  }, []);
  return <div>AppRedirectionHandler</div>;
};
