import React from 'react';
import { Pressable } from 'react-native';
import CustomText from './CustomText';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';

interface IProps {
  onPress: () => void;
  label: string;
  isLoading?: boolean;
  width: number | string;
  height?: number | string;
  isDisabled?: boolean;
}

export const OutlineButtonTrans = ({
  onPress,
  label,
  isLoading,
  width = '100%',
  height = 44,
  isDisabled = false,
}: IProps) => {
  const theme = useTheme<Theme>();

  return (
    <>
      <Pressable
        onPress={() => !isLoading && onPress()}
        style={{
          width: width as any,
          height: height as any,
          backgroundColor: 'transparent',
          // padding: 10,
          paddingRight: 10,
          paddingLeft:10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: 'lightgrey',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomText variant="subheader" fontSize={14} color={'black'}>
          {isLoading ? 'submitting...' : label}
        </CustomText>
      </Pressable>
    </>
  );
};
