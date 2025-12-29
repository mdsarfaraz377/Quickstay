import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/hotelOwner/Navbar';
import Sidebar from '../../components/hotelOwner/Sidebar';
import { useAppContext } from '../../context/AppContext';
import { useAuth } from '@clerk/clerk-react'; // ✅ import Clerk auth

const Layout = () => {
  const { isOwner, navigate } = useAppContext();
  const { isLoaded, userId } = useAuth(); // ✅ wait for auth to load
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded) return; // ✅ wait until Clerk is ready

    if (!userId || !isOwner) {
      navigate('/');
    } else {
      setLoading(false);
    }
  }, [isLoaded, userId, isOwner]);

  if (loading) return null; // ✅ don't render anything until verified

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

