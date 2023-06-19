import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import menu from "../assets/icons/menu.png";
import profile from "../assets/images/kemal.jpg";
//components
import { ScreenHeaderBtn } from "../components/common/header/ScreenHeaderBtn";
import { Welcome, PopularJobs } from "../components/home";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={menu} dimansion="60%" />,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={profile} dimansion="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <PopularJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
