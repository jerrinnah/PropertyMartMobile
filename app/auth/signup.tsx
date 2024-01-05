import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { loginSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { PrimaryButton } from '@component/general/CustomButton'
import { Separator } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
const logo = require('../../assets/images/logo/logo.png')
const palmfone = require('../../assets/images/foreground/acctcreated.png')

const Signup = () => {
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
  });
  const [otpInput_1, setOtpInput_1] = useState('');
  const [otpInput_2, setOtpInput_2] = useState('');
  const [otpInput_3, setOtpInput_3] = useState('');
  const [otpInput_4, setOtpInput_4] = useState('');
  const [otpInput_5, setOtpInput_5] = useState('');
  const [otpNumber, setOtpNumber] = useState('08132581551');
  const [step,setStep ] = useState(2);
  
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


  const back = () => {
     setStep(0);
  }

  return renderForm(
  
    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer}>
        <Box height={'100%'}>
          {
             step === 0? 
            <>
            <Box height={'100%'} width={'100%'}>
                <Image source={logo} resizeMode="cover" style={Styles.logo} />
                  <CustomText variant={'subheader'} textAlign={'left'} fontSize={20} lineHeight={25} marginTop={'sm'} 
                      color={'black'} fontWeight={'800'}>Welcome to Property Mart
                  </CustomText>
                  
                  <CustomText variant={'xs'} textAlign={'left'} fontSize={12} lineHeight={25} 
                        color={'black'} fontWeight={'400'}>Finding your perfect home, one dream at a Time.
                  </CustomText>

                  <Box width={'100%'} flexDirection={'row'} justifyContent={'space-between'} marginTop={'lg'}>
                    <Box width={'48%'}>
                      <CustomTextInput name='firstname' placeholder='First Name' label='First Name' isPassword={false} />
                    </Box>
                    <Box width={'48%'}>
                      <CustomTextInput name='lastname' placeholder='Last Name' label='Last Name' isPassword={false}  />
                    </Box>
                  </Box>

                  <Box marginTop={'sm'}>
                      <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false}  />
                        <Box marginBottom={'sm'} />
                      <CustomTextInput name='phoneNumber' placeholder='+234' label='Phone Number' />
                        <Box marginBottom={'sm'} />
                      <CustomTextInput name='password' placeholder='Password' label='Password' isPassword />
                  </Box>

                  <Box width='100%' marginBottom={'sm'} height={40} justifyContent={'center'} alignItems={'center'}>
                {/* <Link href="/auth/forgotpassword"> */}
                  <CustomText variant={'xs'}  fontSize={12} fontWeight={'800'} >
                    I agree to our  <Link href="/" style={{color:'#2D66DD'}}> Terms of Service & Privacy Policy </Link> 
                  </CustomText>
                {/* </Link> */}
                  </Box>
                  <SubmitButton label='Create an Account' width='100%'  onSubmit={() => {}} />

                  <Box width='100%' flexDirection={'row'} height={60} alignItems={'center'} >
                    <Separator />
                    <CustomText variant={'xs'} fontSize={12} fontWeight={'800'} color={'black'}>OR</CustomText>
                    <Separator />
                  </Box>

                  <Box flexDirection={'row'} width='100%' justifyContent={'center'} alignItems={'center'}>
                    <CustomText variant={'xs'} fontSize={12}>Already a user?</CustomText>
                    <Link href={'/auth/signup'} style={{ marginLeft: 4 }}>
                    <CustomText variant={'body'} fontSize={12} fontWeight={'800'} color={'primaryColor'} marginLeft={'xs'}>Log in</CustomText>
                    </Link>
                  </Box>

                  {/* <Box height={'5%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
                  </Box> */}
            </Box>
            </> 
            : step === 1?
            <>
          
            <Box>
              <Box marginTop={'xl'}>
                {/* <Link href='/auth/login'> */}
                  <Ionicons
                    onPress={()=>{back}} 
                    name="arrow-back-outline"
                    size={25}
                    />
                    {/* </Link> */}
              </Box>
              <CustomText variant={'subheader'} textAlign={'left'} fontSize={26} lineHeight={25} marginTop={'xl'} 
                    color={'black'} fontWeight={'800'}>Verify your phone number
              </CustomText>
               <CustomText variant={'xs'} textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                    color={'black'} fontWeight={'400'}>
                     Please enter the code sent to {otpNumber}
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
                <SubmitButton label='Verify' width='100%'  onSubmit={() => {}} />
                </Box>
                <Box width='100%' marginTop={'lg'} height={40} justifyContent={'center'} alignItems={'center'}>
                  <CustomText variant={'xs'}>Didn’t get a code? <Text style={{color:'#2D66DD', fontWeight:'600'}}>Resend</Text> (0:05s)</CustomText>
                </Box>
                <Box height={'45%'} flexDirection={'row'} alignItems={'flex-end'}>
                <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                    <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                        <CustomText>Hello</CustomText>
                    </Box>
                </Box>
        </Box>
            </Box>
            </>
            : step === 2?
            <>
             <Box width={'100%'} height={'100%'}>
                  <Box height={'30%'} width={'100%'} >
                    <CustomText variant={'xs'} textAlign={'right'} fontSize={12} lineHeight={20} 
                      color={'btnBlue'} fontWeight={'800'}>I’ll do this later
                    </CustomText>
                  </Box> 
                <Box height={'70%'} width={'100%'} flexDirection={'column'} alignItems={'center'}>
                  <Box height={'20%'} paddingBottom={'xl'}>
                    <Image source={palmfone} resizeMode="cover" style={{width:100, height:100}} />
                  </Box>
                  <Box height={10}></Box>
                  <Box height={'10%'} marginTop={'xl'}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={20} lineHeight={25} marginTop={'sm'} 
                        color={'black'} fontWeight={'800'}>Account created successfully!
                    </CustomText>
                  </Box>
                  <Box height={'10%'}>
                    <CustomText variant={'xs'} textAlign={'center'} fontSize={14} lineHeight={20} 
                      color={'black'} fontWeight={'400'}>We’re so happy to have you! Let’s get your account up and running
                    </CustomText>
                  </Box>
                  <Box width={'100%'} marginTop={'xl'}>
                    <PrimaryButton onPress={function (): void {
                            throw new Error('Function not implemented.')
                          } } label={'Continue to account set up'} width={'100%'} />
                  </Box>
                  <Box height={'40%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
                  </Box>
                </Box>
                
              </Box>
            </> 
            : null
          }
        </Box>

      </Box>
    </Box>
  )
}

export default Signup