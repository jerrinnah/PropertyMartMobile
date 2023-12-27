import { View, Text } from 'react-native';
import React, {useEffect, useState} from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { OutlineButton } from '@component/general/OutlineButton'
import { PrimaryButton } from '@component/general/CustomButton'
import {
  useRouter  
} from 'expo-router';

import LandingPage from './splash/landingPage';
import Onboarding from './splash/onboarding';

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Set a timeout to change the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setLoading(!true);
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures that the effect runs only once on component mount
  return (
    <Box>
      {
        loading &&
        <LandingPage/>
      }
     {
      !loading &&
      <Onboarding/>
     }
    </Box>
  )
}

export default Home;