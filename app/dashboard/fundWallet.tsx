import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import React, { useState } from 'react';
import { Styles } from './home/styles';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import DropdownPicker from './DropdownPicker';
import { OutlineButton } from '@component/general/OutlineButton';
import { CustomTextInput } from '@component/form/CustomInput';
import { TextInput } from 'react-native';
import { SubmitButton } from '@component/form/CustomButton';
import { router } from 'expo-router';

function fundWallet() {
  const [amount, setAmount] = useState('');

  return (
    <SafeAreaView>
      <Box style={Styles.fundWallet}>
        <Box paddingRight={'xl'} paddingTop={'3xl'}>
          <Ionicons name="arrow-back-outline" size={35} />
          <CustomText variant={'subheader'} fontSize={20}>
            How much do you want to fund?
          </CustomText>
        </Box>

        <Box style={Styles.amountCont}>
          <Box style={Styles.amount}>
            <CustomText variant={'header'} fontSize={48} lineHeight={56}>
              ₦
            </CustomText>
            <TextInput
              style={[Styles.amountValue]}
              value={amount}
              onChangeText={setAmount}
              placeholder="0.00"
              keyboardType="decimal-pad"
              maxLength={9}
            />
          </Box>
        </Box>

        <Box style={Styles.method}>
          <CustomText variant={'subheader'} fontWeight={'800'} fontSize={14}>
            Selected method
          </CustomText>

          <Box>
            <DropdownPicker />
          </Box>
        </Box>
        {/* <SubmitButton  label={'Submit'} width={'90'}/> */}
      </Box>
    </SafeAreaView>
  );
}

export default fundWallet;
