import { useState, useEffect } from 'react';

function useService() {
  const [searching, setSearching] = useState(true);
  const [providerDetails, setProviderDetails] = useState({});
  const [otp, setOTP] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);

  useEffect(() => {
    const  timer = null;
    handleSearching(timer);

    return () => clearTimeout(timer);
  }, []);

  const handleSearching = (timer) => {
    

    timer = setTimeout(() => {
      /* Real Time pusher service to get provider details */
      console.log('entered')
      console.log('searching before ', searching);
      setSearching(false);
      console.log('searching after ', searching);
      
    }, 5000);
    console.log('exited')


   

    /* API Call to fetch the service provider details */
    setProviderDetails({
      _id: '123456',
      name: 'Test Provider',
      rating: 4,
      workshopName: 'Test Workshop',
      photo:
        'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=634&q=80',
      location: { latitude: 80, longitude: 80 },
    });

    /* API Call to fetch OTP */
    setOTP(4256);

    listenForOtpVerification(timer);
  };

  const listenForOtpVerification = (timer) => {
    /* Real time pusher service to listen for updates */
   timer = setTimeout(() => {
      /* Real Time pusher service to get provider details */
      setOtpVerified(true);
    }, 13000);
  };

  return {
    searching,
    setSearching,
    providerDetails,
    otp,
    otpVerified,
    setOtpVerified,
  };
}

export default useService;
