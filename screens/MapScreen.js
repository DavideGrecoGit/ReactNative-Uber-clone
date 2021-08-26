import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";

const MapScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Text>Map Stuff</Text>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
