import React from "react";
import { SafeAreaView, Text } from "react-native";

const RideOptionsCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`p-4 font-semibold text-center text-base`}>
        Ride options page
      </Text>
    </SafeAreaView>
  );
};

export default RideOptionsCard;