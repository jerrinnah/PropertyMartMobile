import { Pressable, StyleSheet, Image, TextInput, View } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Styles } from './home/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '@component/general/CustomButton';
import { OutlineButtonTrans } from '@component/general/OutlineButtonTrans';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

const logo = require('../../assets/images/capitalLogo.png');
const copyIcon = require('../../assets/images/copy-02.png');

const BankTransfer = () => {
  return (
    <SafeAreaView>
      <Box style={[Styles.bankTransfrCont]}>
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

        <Box style={[Styles.bankTrnsfr]}>
          <Box>
            <Image source={logo} />
          </Box>
          <Box style={[Styles.amountCtn]}>
            <CustomText
              style={[Styles.amountTrans]}
              variant={'subheader'}
              fontSize={16}
            >
              ₦100,000.00
            </CustomText>
            <CustomText variant={'xs'} fontSize={12}>
              Capital City Development Ltd
            </CustomText>
          </Box>
        </Box>

        <CustomText style={[Styles.subHead]} variant={'medium'} fontSize={15}>
          Proceed to your bank app to complete the transfer
        </CustomText>

        <Box style={[Styles.details]}>
          <Box>
            <CustomText>Amount</CustomText>
            <CustomText variant={'subheader'} fontSize={20}>
              100,000.00
            </CustomText>
          </Box>

          <TouchableOpacity>
            <Box style={[Styles.copyBtn]}>
              <Image source={copyIcon} />
              <CustomText variant={'xs'} color={'primaryColor'}>
                {' '}
                Copy
              </CustomText>
            </Box>
          </TouchableOpacity>
        </Box>
        <Box style={[Styles.details]}>
          <Box>
            <CustomText>Account Number</CustomText>
            <CustomText variant={'subheader'} fontSize={20}>
            2034095252
            </CustomText>
          </Box>

          <TouchableOpacity onPress={()=> router.push('/dashboard/WithdrawFunds')}>
            <Box style={[Styles.copyBtn]}>
              <Image source={copyIcon} />
              <CustomText variant={'xs'} color={'primaryColor'}>
                {' '}
                Copy
              </CustomText>
            </Box>
          </TouchableOpacity>
        </Box>
        <Box style={[Styles.details]}>
          <Box>
            <CustomText>Bank Name</CustomText>
            <CustomText variant={'subheader'} fontSize={20}>
              First Bank
            </CustomText>
          </Box>

         
        </Box>
        <Box style={[Styles.details]}>
          <Box>
            <CustomText>Account Name</CustomText>
            <CustomText variant={'subheader'} fontSize={20}>
            Capital City Development Ltd
            </CustomText>
          </Box>

         
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default BankTransfer;

const styles = StyleSheet.create({});
