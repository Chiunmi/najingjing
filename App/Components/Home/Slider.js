import { View, Text, Image, FlatList, Dimensions, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Slider() {
  const [sliderList] = useState([
    {
      id: 1,
      name: 'Slider 1',
      imageUrl: 'https://www.govhealthit.com/wp-content/uploads/clinical-management-system-1024x626.png',
    },
    {
      id: 2,
      name: 'Slider 2',
      imageUrl: 'https://medicosfamilyclinic.com/wp-content/uploads/2020/06/medical-clinic.jpg',
    },
  ])

  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollX = React.useRef(new Animated.Value(0)).current

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % sliderList.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [currentSlide])

  useEffect(() => {
    Animated.spring(scrollX, {
      toValue: currentSlide,
      useNativeDriver: true,
    }).start()
  }, [currentSlide])

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={sliderList}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / Dimensions.get('screen').width)
          setCurrentSlide(index)
        }}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: Dimensions.get('screen').width,
              height: 170,
              borderRadius: 10,
              margin: 2,
            }}
          />
        )}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {sliderList.map((_, i) => (
          <View
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: currentSlide === i? '#3366FF' : '#ccc',
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  )
}