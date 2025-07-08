import CustomeButton from '@/components/CustomeButton'
import CustomeInput from '@/components/CustomeInput'
import { createNewUser } from '@/lib/appwrite'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { Alert, Text, View } from 'react-native'

export default function SignUp() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setform] = useState({name: '', email: '', password: ''});

  
  const onSubmitForm = async () => {
    const {name, email, password} = form;

    if(!name || !email || !password) return Alert.alert('Error', 'Please enter your details')

      setIsSubmitting(true)

      try {
        await createNewUser({name, email, password})
        router.replace('/');
      } catch (error: any) {
        Alert.alert('Error', error.message)
      }finally{
        setIsSubmitting(false)
      }
  }

  return (
     <View className="gap-10 bg-white rounded-lg p-5 mt-5">
         <CustomeInput label='Name' value={form.name}
        placeholder='Full Name' onChangeText={(text) => setform(prev => ({...prev, name: text}))}
        />

          <CustomeInput label='Email' value={form.email}
        placeholder='Enter Your Email' onChangeText={(text) => setform(prev => ({...prev, email: text}))}
        keyboardType='email-address'
        />

          <CustomeInput label='Password' value={form.password}
        placeholder='Enter Your Password' onChangeText={(text) => setform(prev => ({...prev, password: text}))}
        secureTextEntry={true}
        />
        <CustomeButton title='Sign Up' onPress={onSubmitForm} isLoading={isSubmitting} />

         <View className="flex justify-center flex-row gap-2 -my-6">
                <Text className="base-regular text-gray-100">
                    Already have an account?
                </Text>
                <Link href="/sign-in" className="base-bold text-primary">
                    Sign In
                </Link>
            </View>
    </View>
  )
}