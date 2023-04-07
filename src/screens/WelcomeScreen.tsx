import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import colors from '../components/Colors'
import SPACING from '../components/Spacing'

const WelcomeScreen = () => {
  return (
    <ImageBackground style={{flex: 1, width: '100%', height: '100%'}} source={require("../images/background.jpeg")}>
        <View style={{flex: 1, backgroundColor: colors.dark, opacity: 0.5}}></View>
          <View
            style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 2,
            justifyContent: "flex-end",
            paddingHorizontal: SPACING * 2,
            paddingBottom: SPACING * 5,
          }}
        >
          <View>
            <Text style={{
                color: colors.white,
                fontWeight: "900",
                fontSize: SPACING * 3.5,
                textTransform: 'capitalize',
                paddingLeft: 5,
                }}>
                Let your favourite food find you
            </Text>
            <Text style={{
                color: colors.white,
                fontWeight: "600",
                fontSize: SPACING * 1.5,
                paddingLeft: 5,
                }}>
                The best food on the entire planet just for you and your friends.
            </Text>
            <TouchableOpacity style={{
                padding: SPACING * 2,
                backgroundColor: colors.blue,
                borderRadius: SPACING * 2,
                alignItems: 'center',
                marginTop: SPACING * 3
                }}>
                <Text style={{
                    color: colors.black,
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                    }}>Explore Now</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ImageBackground>
  )
}

export default WelcomeScreen