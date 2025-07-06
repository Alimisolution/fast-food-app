import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import cn from 'clsx';
import { Fragment } from "react";
import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function Index() {
  return (
   <SafeAreaView className="flex-1 bg-white">
      <FlatList data={offers} 
      renderItem={({item, index}) => {
        const isEven = index % 2 === 0;
        return (
          <View>
            <Pressable className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')} 
            style={{backgroundColor: item.color}} android_ripple={{color: '#fffff22'}}>
              
              {(pressed) => (
                <Fragment>
                <View className="w-1/2 h-full">
                  <Image source={item.image} resizeMode="contain" className={'size-full'}/>
                </View>

                <View className={cn('offer-card_info', isEven ? 'pl-56' : 'pr-44')}>
                  <Text className="h1-bold text-white leading-tight">{item.title}</Text>
                  <Image source={images.arrowRight} className="size-10" resizeMode="contain" tintColor='#ffffff'/>
                </View>
             </Fragment>
              )}
            </Pressable>
          </View>
        )
      }}
      contentContainerClassName="pb-20 px-5"
      ListHeaderComponent={() => (
          <View className="flex-between flex-row w-full my-5">
        <View className="flex-start">
          <Text className="small-bold text-primary">DELIVER TO</Text>
          <TouchableOpacity className="flex-center mt-0.5 flex-row gap-x-1">
            <Text className="paragraph-bold text-dark-100">Creation</Text>
            <Image source={images.arrowDown} resizeMode="contain" className="size-3"/>
          </TouchableOpacity>
        </View>

       <CartButton/>
      </View>
      )}
      />
   </SafeAreaView>
  );
}