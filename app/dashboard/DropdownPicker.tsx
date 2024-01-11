import { View, Text } from 'react-native';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Styles } from './home/styles';



const DropdownPicker = () => {
  
  return (
    <Box style={[Styles.select]}>
      
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
        
                { label: 'Debit Card', value: 'card' },
                { label: 'Bank Transfer', value: 'bank' },
            ]}
        
        />
    </Box>
  );
};

export default DropdownPicker;
