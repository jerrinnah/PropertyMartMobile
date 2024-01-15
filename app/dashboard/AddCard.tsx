import {
  SafeAreaView,
  StyleSheet,
  Image,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Styles } from './home/styles';
import { CustomTextInput } from '@component/form/CustomInput';
import { TextInput } from 'react-native-gesture-handler';
import { PrimaryButton } from '@component/general/CustomButton';
import { router } from 'expo-router';
import { OutlineButton } from '@component/general/OutlineButton';
import { OutlineButtonTrans } from '@component/general/OutlineButtonTrans';
import ModalScreen from 'app/modal';
import InsufficientAlert from '@component/general/InsufficientAlert';

const paystack = require('../../assets/images/securedPaystack.png');

const AddCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <Box>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          {/* <ModalScreen /> */}
          <Box style={[Styles.full]}>
            <Box style={[Styles.textContent]}>
              <CustomText variant={'medium'} style={[Styles.modalTitle]}>
                What is Paystack
              </CustomText>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <CustomText variant={'xs'} style={[Styles.textPaystack]}>
                  Paystack is a payment gateway, enabling businesses to accept
                  payments securely over the internet. It integrates with
                  websites and mobile applications, allowing merchants to
                  receive payments from customers through various channels.
                  Paystack places a strong emphasis on security to ensure safe
                  and secure transactions.
                </CustomText>

                <PrimaryButton
                  onPress={() => setModalVisible(!modalVisible)}
                  label={'Got it'}
                  width={'100%'}
                />

                {/* <CustomText>Hide Modal</CustomText> */}
              </Pressable>
            </Box>
          </Box>
        </Modal>
      </Box>

      <Box style={[Styles.cardCont]}>
        <Box justifyContent={'center'} padding={'xl'} paddingTop={'3xl'}>
          <Box style={[Styles.balanceAlert]}>
            
            <Ionicons
              name="arrow-back-outline"
              size={35}
              onPress={() => router.back()}
            />
                      <InsufficientAlert />
          </Box>
          <CustomText variant={'subheader'} fontSize={20}>
            Add Debit Card
          </CustomText>
        </Box>

        <Box style={[Styles.cardDt]}>
          <Box style={[Styles.frmLaout]}>
            <Box style={[Styles.cardInfo]}>
              <CustomText variant={'xs'} fontSize={13} style={[Styles.name]}>
                Name on Card
              </CustomText>
              <TextInput style={[Styles.inputCont]} />
            </Box>

            <Box style={[Styles.cardInfo]}>
              <CustomText variant={'xs'} fontSize={13} style={[Styles.name]}>
                Debit Card Number
              </CustomText>
              <TextInput style={[Styles.inputCont]} />
            </Box>
            <Box style={[Styles.date]}>
              <Box style={[Styles.inputCt]}>
                <CustomText variant={'xs'} fontSize={13} style={[Styles.name]}>
                  Expiration Date
                </CustomText>
                <TextInput style={[Styles.inputDate]} />
              </Box>
              <Box style={[Styles.inputCt]}>
                <CustomText variant={'xs'} fontSize={13} style={[Styles.name]}>
                  CVV
                </CustomText>
                <TextInput style={[Styles.inputDate]} />
              </Box>
            </Box>
          </Box>

          <PrimaryButton
            onPress={() => router.push('/dashboard/BankTransfer')}
            label={'Fund Wallet (#100,000)'}
            width={'100%'}
            height={50}
          />

          <Box style={[Styles.imgContainer]}>
            <Image style={Styles.img} source={paystack} />
          </Box>
          <OutlineButtonTrans
            onPress={() => setModalVisible(!modalVisible)}
            label={' what is Paystack'}
            width={200}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default AddCard;
