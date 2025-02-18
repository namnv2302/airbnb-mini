import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Listings from "@/components/common/Listings";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface ListingsBottomSheetProps {
  listings: any[];
  category: string;
}

const ListingsBottomSheet = ({
  listings,
  category,
}: ListingsBottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
  const [refresh, setRefresh] = useState<number>(0);

  const onShowMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };

  return (
    <GestureHandlerRootView>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        handleIndicatorStyle={{ backgroundColor: Colors.grey }}
        style={styles.sheetContainer}
      >
        <View style={styles.contentContainer}>
          <Listings listings={listings} category={category} />
          <View style={styles.absoluteView}>
            <TouchableOpacity onPress={onShowMap} style={styles.btn}>
              <Text style={{ fontFamily: "mon-sb", color: "#fff" }}>Map</Text>
              <Ionicons
                name="map"
                size={20}
                style={{ marginLeft: 10 }}
                color={"#fff"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default ListingsBottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  absoluteView: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    marginHorizontal: "auto",
    alignItems: "center",
  },
  sheetContainer: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
