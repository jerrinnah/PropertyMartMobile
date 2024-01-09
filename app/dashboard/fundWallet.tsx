import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import React from 'react';
import { Styles } from './home/styles';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

function fundWallet() {
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
            <CustomText variant={'header'} fontSize={48}>
              ₦
            </CustomText>
            <CustomText variant={'header'} fontSize={48}>
              0.00
            </CustomText>
          </Box>
        </Box>

              <Box style={Styles.method}>
                  <CustomText variant={'medium'}>Selected method</CustomText>
        </Box>
      </Box>
    </SafeAreaView>
  );
}

export default fundWallet;
