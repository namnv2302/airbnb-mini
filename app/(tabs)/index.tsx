import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import Header from "@/components/explore/Header";
import Listings from "@/components/common/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";

const Page = () => {
  const [category, setCategory] = useState<string>("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <Stack.Screen
        options={{ header: () => <Header onCategoryChanged={onDataChanged} /> }}
      />
      <Listings listings={items} category={category} />
    </View>
  );
};

export default Page;
