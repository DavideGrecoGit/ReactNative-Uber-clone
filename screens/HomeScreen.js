import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import NavFavourites from "../components/NavFavourites";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-gray-100 h-full`}>
      <View style={tw`p-5 `}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <View style={tw`p-2 w-full`}>
          <GooglePlacesAutocomplete
            placeholder={"Where from?"}
            styles={{
              container: { flex: 0 },
              textInput: {
                fontSize: 18,
              },
            }}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              dispatch(setDestination(null));

              navigation.navigate("MapScreen");
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
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
