import { CustomInputProps } from '@/type'
import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import cn from 'clsx'


const CustomeInput = ({placeholder = 'Enter a text', value, onChangeText, label, keyboardType='default', secureTextEntry=false} : CustomInputProps) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
    <View className='w-full'>
      <Text className='label'>{label}</Text>

      <TextInput autoCapitalize='none' autoCorrect={false} value={value} onChangeText={onChangeText}
      keyboardType={keyboardType} secureTextEntry={secureTextEntry} placeholder={placeholder} 
      onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholderTextColor='#888'
      className={cn('input', isFocused ? 'border-primary' : 'border-gray-300')}
      />
    </View>
  )
}

export default CustomeInput