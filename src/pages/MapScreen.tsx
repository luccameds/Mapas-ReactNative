import { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { nightThemeMapStyle } from "../components/NightMapTheme";

import { Svg, Image as ImageSvg } from "react-native-svg";

import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";

export function MapScreen() {
  const [locationResult, setLocationResult] = useState(null);

  useEffect(() => {
    (async () => {
      const location = await Location.getCurrentPositionAsync({});

      setLocationResult(location);
    })();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {locationResult !== null ? (
        <MapView
          region={{
            latitude: locationResult.coords.latitude,
            longitude: locationResult.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          customMapStyle={nightThemeMapStyle}
          style={{
            alignSelf: "stretch",
            height: "100%",
          }}
          showsUserLocation
          loadingEnabled
        >
          <Marker
            coordinate={{
              latitude: locationResult.coords.latitude,
              longitude: locationResult.coords.longitude,
            }}
            title={"title"}
            description={"This is the test description"}
          >
            <Callout tooltip>
              <View>
                <View style={styles.mapContainer}>
                  <View>
                    <Text style={styles.h1}>(Nome do Título)</Text>
                    <Text style={styles.text}>(Descrição)</Text>
                  </View>
                  <Svg
                    width={50}
                    height={50}
                    style={{
                      alignSelf: "center",
                    }}
                  >
                    <ImageSvg
                      width={"100%"}
                      height={"100%"}
                      preserveAspectRatio="xMidYMid slice"
                      href={require("../../assets/favicon.png")}
                    />
                  </Svg>
                </View>
              </View>
            </Callout>
          </Marker>
        </MapView>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  h1: { fontWeight: "bold" },
  text: { fontWeight: "300", width: 100 },
});
