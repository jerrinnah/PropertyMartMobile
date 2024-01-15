import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from './Box'
import CustomText from './CustomText'
import { Styles } from 'app/dashboard/home/styles'

const InsufficientAlert = () => {
  return (
    <Box style={[Styles.insufBtn]}>
      <CustomText variant={'xs'} fontSize={13} color={'errorColor'} >Insufficient Funds</CustomText>
    </Box>
  )
}

export default InsufficientAlert

const styles = StyleSheet.create({})