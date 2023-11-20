import { useState } from "react";
import { View, Text } from "react-native";
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import DirectoryScreen from "./DirectoryScreen";

const Main = () => {
  console.log("This is a log message");

  const [campsites, setCampsites] = useState(CAMPSITES);
  const [selectedCampsiteId, setSelectedCampsiteId] = useState(1);

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        campsites={campsites}
        onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
      />
      <CampsiteInfoScreen
        campsite={
          campsites.filter((campsite) => campsite.id === selectedCampsiteId)[0]
        }
      />
      <Text>Test</Text>
    </View>
  );
};

export default Main;
