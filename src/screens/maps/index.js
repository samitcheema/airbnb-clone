import React, { useState } from "react";
import { FlatList, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import styles from "./styles";
import lodgingData from "../../../assets/data/lodgingData";
import MarkerPoint from "../../components/markerPoint/";
import LodgingCarousel from "../../components/lodgingCarousel";

const MapsScreen = () => {
  const [currentSelect, setCurrentSelect] = useState(null);

  return (
    <View>
      <MapView
        style={styles.container}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124867,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {lodgingData.map((data) => (
          <MarkerPoint
            key={data.id}
            coordinate={data.coordinate}
            totalPrice={data.totalPrice}
            isSelected={data.id === currentSelect}
            onPress={(currentSelect) => {
              currentSelect = setCurrentSelect(data.id);
            }}
          />
        ))}
      </MapView>
      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={lodgingData}
          renderItem={({ item }) => <LodgingCarousel data={item} />}
        />
      </View>
    </View>
  );
};

export default MapsScreen;
