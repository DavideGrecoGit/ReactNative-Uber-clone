import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`p-4 font-semibold text-center text-base`}>
        Good Morning, Tester
      </Text>

      <View style={tw`p-8 w-full bg-gray-300 h-full`}>
        <GooglePlacesAutocomplete
          placeholder="Where To?"
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );

            navigation.navigate("RideOptionsCard");
          }}
          fetchDetails={true}
          retrunKeyType={"search"}
          enablePoweredByContainer={false}
          minLenght={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={200}
        />
      </View>
      {/* <View style={tw`bg-gray-300 flex-shrink h-full`}>
        <View style={tw`p-8 w-full `}>
          <GooglePlacesAutocomplete
            placeholder="Where To"
            onPress={(data, details = null) => {
             
            }}
            fetchDetails={true}
            retrunKeyType={"search"}
            enablePoweredByContainer={false}
            minLenght={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default NavigateCard;
