import {
  View,
  Text,
  Image,
  Alert,
  Pressable,
  Touchable,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import Box from '@component/general/Box';
import { Styles } from './styles';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '@component/general/CustomButton';
import { Link, router } from 'expo-router';
import ModalScreen from 'app/modal';
import { Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const deposit = require('../../../assets/images/credit-card-down.png');
const deposit1 = require('../../../assets/images/credit-card-down1.png');
const withdraw = require('../../../assets/images/credit-card-up.png');
const reciepts = require('../../../assets/images/reciept.png');

const Wallets = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <Box style={[Styles.walletCont]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <ModalScreen />
          <Box style={Styles.modalBox}>
            <Box style={Styles.modalHeader}>
              <CustomText variant={'subheader'} paddingLeft={'7xl'}>
                Fund Wallet
              </CustomText>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons name="close" size={25} paddingRight={15} />
              </Pressable>
            </Box>

            <Box style={Styles.cardsCont}>
              <TouchableOpacity
                onPress={() => router.push('/dashboard/fundWallet')}
                onPressOut={() => setModalVisible(false)}
              >
                <Box style={Styles.cardRow}>
                  <Ionicons name="card" size={25} style={Styles.icon} />
                  <CustomText
                    variant={'medium'}
                    fontSize={18}
                    color={'textColor'}
                  >
                    Debit card
                  </CustomText>
                </Box>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <Box style={Styles.cardRow}>
                  <Ionicons
                    name="business-outline"
                    size={20}
                    style={Styles.icon}
                  />
                  <CustomText
                    variant={'medium'}
                    fontSize={18}
                    color={'textColor'}
                  >
                    Bank Transfer
                  </CustomText>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
        </Modal>

        <Box height={'40%'} paddingTop={'sm'}>
          <CustomText
            variant={'medium'}
            color={'textColor'}
            fontSize={20}
            fontWeight={'200'}
          >
            Wallet
          </CustomText>

          <Box style={[Styles.walletBal]}>
            <Box
              justifyContent={'space-between'}
              alignItems={'center'}
              flexDirection={'row'}
              width={'40%'}
              // backgroundColor={'secondaryBackgroundColor'}
              marginBottom={'md'}
            >
              <CustomText>Wallet balance</CustomText>
              <Ionicons name="eye-outline" size={20} color={'grey'} />
            </Box>

            <CustomText
              variant={'header'}
              color={'textColor'}
              fontSize={30}
              fontWeight={'800'}
            >
              ₦0.00
            </CustomText>
            <Box style={Styles.buttonsCont}>
              <Box style={[Styles.btn]}>
                <PrimaryButton
                  label={'    Deposit'}
                  width={'100%'}
                  onPress={() => setModalVisible(true)}
                />
                <Image source={deposit} style={Styles.btnIcon} />
              </Box>
              <Box style={[Styles.btn]}>
                <PrimaryButton
                  label={'    Witdraw'}
                  width={'100%'}
                  onPress={() => router.push('/auth/login')}
                />
                <Image source={withdraw} style={Styles.btnIcon} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box height={'60%'} style={Styles.bottom}>
          <CustomText variant={'xs'}>Recent Transactions</CustomText>
          <Box style={Styles.recieptCont}>
            <Image source={reciepts} style={Styles.reciept} />
            <CustomText
              variant={'medium'}
              color={'textColor'}
              fontSize={20}
              fontWeight={'200'}
            >
              No Recent Transactions Yet
            </CustomText>
            <CustomText
              variant={'xs'}
              color={'textColor'}
              fontSize={20}
              fontWeight={'200'}
              style={Styles.smalltext}
            >
              Looks like your financial world is quiet for now – no recent
              transactions to report
            </CustomText>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Wallets;
