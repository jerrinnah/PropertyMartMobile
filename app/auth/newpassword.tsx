import React, {useState} from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { loginSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Ionicons } from '@expo/vector-icons'
const logo = require('../../assets/images/logo/logo.png')

const  newPassword = () => {

  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      newPassword: '',
    },
    validationSchema: loginSchema,
  })

//   const [step, setStep] = useState(0);

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
                  color={'black'} fontWeight={'800'}>Create New Password
            </CustomText>
              <Box marginTop={'xl'} marginBottom={'xs'}>
                  <CustomTextInput name='newPassword' placeholder='****' label='New Password' isPassword  />
              </Box>

              <Box marginTop={'xl'} marginBottom={'xs'}>
                  <CustomTextInput name='confirmPassword' placeholder='****' label='Confirm Password' isPassword  />
              </Box>

              <Box width='100%' marginTop={'xl'} height={40} justifyContent={'center'} alignItems={'flex-end'}>
              <SubmitButton label='Save Changes' width='100%'  onSubmit={() => {}} />
              </Box>
          </Box>
        </Box>
       
      </Box>
    </Box>
  )
}

export default newPassword