import { View, Text } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { OutlineButton } from '@component/general/OutlineButton'
import { PrimaryButton } from '@component/general/CustomButton'
import {
  useRouter  
} from 'expo-router';


const Home = () => {
  const router = useRouter();
  return (
    <Box flex={1} backgroundColor={'background'}>
      <Box width='100%' height={'60%'} backgroundColor={'secondaryBackgroundColor'}></Box>
      <Box width={'100%'} height={'50%'} padding='md'>
        <CustomText variant={'subheader'} fontSize={36} lineHeight={44} color={'black'}>Find Your Perfect Property Match</CustomText>
        <CustomText marginTop={'sm'} variant={'body'}>Discover, invest and claim your space in the real estate market</CustomText>

        <Box width='100%' height={50} flexDirection={'row'} marginTop={'lg'} justifyContent={'space-between'}>
          <Box width={'48%'}>
            <OutlineButton width={'100%'} isDisabled={false} label='Login' onPress={() => router.push('/auth/login')} />
          </Box>

          <Box width={'48%'}>
            <PrimaryButton width={'100%'} isDisabled={false} label='Create account' onPress={() => router.push('/auth/signup')} />
          </Box>
        </Box>

        <Box flexDirection={'row'} justifyContent={'center'} marginTop={'3xl'}>
          <CustomText marginRight={'md'}>Terms & conditions</CustomText>
          <CustomText>Privacy policy</CustomText>
        </Box>
      </Box>
    </Box>
  )
}

export default Home