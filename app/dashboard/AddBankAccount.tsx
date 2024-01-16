import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './home/styles';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { PrimaryButton } from '@component/general/CustomButton';
import DropdownPicker from './DropdownPicker';
import { CustomTextInput } from '@component/form/CustomInput';

const AddBankAccount = () => {
  return (
    <SafeAreaView>
      <Box style={[Styles.addBankAcctCnt]}>
        <Box justifyContent={'center'} padding={'xl'} paddingTop={'3xl'}>
          <Box style={[Styles.balanceAlert]}>
            <Ionicons
              name="arrow-back-outline"
              size={35}
              onPress={() => router.back()}
            />
          </Box>
          <CustomText variant={'subheader'} fontSize={20}>
            Add Bank Account
          </CustomText>

          <CustomText>
            Link your bank account to withdraw your funds with ease.
          </CustomText>
        </Box>

        <Box style={[Styles.bnk]}>
          <CustomText
            variant={'xs'}
            fontSize={16}
            paddingLeft={'xl'}
            paddingBottom={'xs'}
          >
            Select Bank
          </CustomText>
          <Box style={[Styles.selectBank]}>
            <Box>
              <TextInput
                style={[Styles.accountDetail]}
                // value={amount}
                // onChangeText={setAmount}
                keyboardType="numeric"
                maxLength={9}
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <CustomText
            variant={'xs'}
            fontSize={16}
            paddingLeft={'xl'}
            paddingBottom={'xs'}
          >
            Account Number
          </CustomText>
          <Box style={[Styles.selectBank]}>
            <Box>
              <TextInput
                style={[Styles.accountDetail]}
                // value={amount}
                // onChangeText={setAmount}
                keyboardType="numeric"
                maxLength={9}
              />
            </Box>


          </Box>

          <Box>
            
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default AddBankAccount;

const styles = StyleSheet.create({});
