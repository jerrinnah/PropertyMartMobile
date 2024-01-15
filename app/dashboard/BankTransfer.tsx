import { Pressable, StyleSheet, Image, TextInput, View } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { Styles } from './home/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PrimaryButton } from '@component/general/CustomButton'
import { OutlineButtonTrans } from '@component/general/OutlineButtonTrans'
import { router } from 'expo-router'

const logo = require('../../assets/images/capitalLogo.png')

const BankTransfer = () => {
  return (
  
    <SafeAreaView>
    <Box style={[Styles.cardCont]}>
    <Box justifyContent={'center'} padding={'xl'} paddingTop={'3xl'}>
      <Box style={[Styles.balanceAlert]}>
        
        <Ionicons
          name="arrow-back-outline"
          size={35}
          onPress={() => router.back()}
        />
               
      </Box>
      <CustomText variant={'subheader'} fontSize={20}>
        Bank Transfer
      </CustomText>
    </Box>

        <Box style={[Styles.cardDt]}>
          
          <Box>
            <Image source={logo} />
          </Box>
  

      <PrimaryButton
        onPress={() => router.push('/dashboard/BankTransfer')}
        label={'Fund Wallet (#100,000)'}
        width={'100%'}
        height={50}
      />

      <Box style={[Styles.imgContainer]}>
        {/* <Image style={Styles.img} source={paystack} /> */}
      </Box>
      {/* <OutlineButtonTrans
        onPress={() => setModalVisible(!modalVisible)}
        label={' what is Paystack'}
        width={200}
      /> */}
    </Box>
      </Box>
      </SafeAreaView>

  )
}

export default BankTransfer

const styles = StyleSheet.create({})