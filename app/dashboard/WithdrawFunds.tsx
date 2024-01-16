import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { router } from 'expo-router';
import { Styles } from './home/styles';
import { PrimaryButton } from '@component/general/CustomButton';

const emptyBin = require('../../assets/images/emptyIcon.png');

const WithdrawFunds = () => {
  return (
    <SafeAreaView>
      <Box justifyContent={'center'} padding={'xl'} paddingTop={'3xl'}>
        <Box>
          <Ionicons
            name="arrow-back-outline"
            size={35}
            onPress={() => router.back()}
          />
        </Box>
        <CustomText variant={'subheader'} fontSize={20}>
          How much do you want to withdraw?
        </CustomText>
      </Box>

      <Box style={[Styles.emptyBank]}>
        <Box style={[Styles.banks]}>
          <Image style={[Styles.binImg]} source={emptyBin} />
          <CustomText variant={'medium'}>No Banks Linked</CustomText>
              </Box>
              <CustomText variant={'xs'} fontSize={16} style={[Styles.emptyDetails]}>
              No banks linked to your account yet. Add one now for easy transactions
              </CustomText>

              <PrimaryButton onPress={() => router.push('/dashboard/AddBankAccount')} label={'Add Bank Account'} width={'95%'}/>
      </Box>
    </SafeAreaView>
  );
};

export default WithdrawFunds;
