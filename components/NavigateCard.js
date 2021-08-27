import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import NavFavourites from "../components/NavFavourites";

import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-200`}>
      <View style={tw`my-6 px-8 w-full`}>
        <GooglePlacesAutocomplete
          placeholder="Where To?"
          styles={{
            container: { flex: 0 },
            textInput: {
              fontSize: 18,
            },
          }}
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

      <NavFavourites />
    </SafeAreaView>
  );
};

export default NavigateCard;
