import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const NavOptions = () => {
  return (
    <View style={tw`bg-white`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 50, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>

      <View
        style={tw`flex-row items-center justify-around border-gray-800 border-b-2`}
      >
        <TouchableOpacity
          style={tw`flex flex-row bg-gray-800 pb-2 pt-3 px-4 items-center rounded-t-xl shadow-xl `}
        >
          <Icon name="car" type="ionicon" color="white" size={16} />
          <Text style={tw`ml-1 text-white`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row bg-white pb-2 pt-3 px-4 items-center rounded-full `}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`ml-1 text-black`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavOptions;
