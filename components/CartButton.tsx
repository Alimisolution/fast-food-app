import { images } from '@/constants';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const CartButton = () => {
    const totalCart: number = 10;

  return (
    <TouchableOpacity className='cart-btn' onPress={() => alert('Cart item')}>
      <Image source={images.bag} className='size-5' resizeMode='contain'/>

      {totalCart > 0 && (
        <View className='cart-badge'>
            <Text className='text-white small-bold'>{totalCart}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default CartButton