import { View, Text, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { loginSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Separator } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'

const  ForgotPassword = () => {

  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      // email: '',
      phone: '',
    },
    validationSchema: loginSchema,
  })

  const [step, setStep] = useState(0);
  const [otpInput_1, setOtpInput_1] = useState('');
  const [otpInput_2, setOtpInput_2] = useState('');
  const [otpInput_3, setOtpInput_3] = useState('');
  const [otpInput_4, setOtpInput_4] = useState('');
  const [otpInput_5, setOtpInput_5] = useState('');
  const [otpNumber, setOtpNumber] = useState('08132581551');

  const handleOtpInput_1Change = (text: any) => {
    // Ensure that the input contains only numbers
    const sanitizedText = text.replace(/[^0-9]/g, '');
    // Limit the input to 5 characters
    if (sanitizedText.length <= 5) {
      setOtpInput_1(sanitizedText);
    }
  };
  const handleOtpInput_2Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_2(sanitizedText);
    }
  };
  const handleOtpInput_3Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_3(sanitizedText);
    }
  };
  const handleOtpInput_4Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_4(sanitizedText);
    }
  };
  const handleOtpInput_5Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_5(sanitizedText);
    }
  };

  return renderForm(
    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer}  marginTop={'xl'}>
        <Box height={'80%'}>
          <Box height={'100%'} width={'100%'}>   
            {/* <Image source={logo} resizeMode="cover" style={Styles.logo} /> */}
            <Box marginTop={'xl'}>
                <Link href='/auth/login'>
                  <Ionicons 
                    name="arrow-back-outline"
                    size={25}
                    /></Link>
            </Box>
            <CustomText variant={'subheader'} textAlign={'left'} fontSize={26} lineHeight={25} marginTop={'xl'} 
                  color={'black'} fontWeight={'800'}>Forgot Password
            </CustomText>
            
          {
            step === 0? 
            <>
              <CustomText variant={'xs'} textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'lg'}
                    color={'black'} fontWeight={'400'}>Please enter the phone number connected to your account to reset your password.
              </CustomText>

              <Box marginTop={'xl'} marginBottom={'xs'}>
                  <CustomTextInput name='phone' placeholder='+234' label='Phone Number' isPassword={false}  />
              </Box>

              <Box width='100%' marginTop={'xl'} height={40} justifyContent={'center'} alignItems={'flex-end'}>
              <SubmitButton label='Request OTP' width='100%'  onSubmit={() => {}} />
              </Box>
            </> 
            :
            step === 1?
            <Box>
               <CustomText variant={'xs'} textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'md'}
                    color={'black'} fontWeight={'400'}>
                      An OTP was sent to {otpNumber} kindly enter the code below to reset your password.
              </CustomText>

              <Box marginTop={'lg'} marginBottom={'lg'}>
              <Box style={Styles.container}>
                <Box paddingRight={'md'}>
                  <TextInput
                    style={Styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                    value={otpInput_1}
                    onChangeText={handleOtpInput_1Change}
                  />
                </Box>
                <Box paddingRight={'md'}>
                  <TextInput
                    style={Styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                    value={otpInput_2}
                    onChangeText={handleOtpInput_2Change}
                  />
                </Box>
                <Box paddingRight={'md'}>
                  <TextInput
                    style={Styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                    value={otpInput_3}
                    onChangeText={handleOtpInput_3Change}
                  />
                </Box>
                <Box paddingRight={'md'}>
                  <TextInput
                    style={Styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                    value={otpInput_4}
                    onChangeText={handleOtpInput_4Change}
                  />
                </Box>
                <Box paddingRight={'md'}>
                  <TextInput
                    style={Styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                    value={otpInput_5}
                    onChangeText={handleOtpInput_5Change}
                  />
                </Box>
              </Box>
              </Box>

              <Box width='100%' marginTop={'xl'} height={40} justifyContent={'center'} alignItems={'flex-end'}>
              <SubmitButton label='Reset Password' width='100%'  onSubmit={() => {}} />
              </Box>
              <Box width='100%' marginTop={'lg'} height={40} justifyContent={'center'} alignItems={'center'}>
                 <CustomText variant={'xs'}>Didn’t get a code? <Text style={{color:'#2D66DD', fontWeight:'600'}}>Resend</Text> (0:05s)</CustomText>
              </Box>
            </Box>
            :
            step === 2?
            <Box>
               <Link href="/auth/newpassword">
                <CustomText>create  new profile</CustomText>
               </Link>
            </Box>
            : 
            null
          }
            
          </Box>
        </Box>
       
      </Box>
    </Box>
  )
}

export default ForgotPassword