import React from "react";
import { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { Logo } from "../Logo";
import { useApp } from "@realm/react";

export const BouldermateLoginButton = ({
  onPress,
}: BouldermateLoginButtonProps) => {
  const app = useApp();
  async function register(email: string, password: string) {
    // Register new email/password user
    await app.emailPasswordAuth.registerUser({ email, password });
    // Log in the email/password user
    await app.logIn(Realm.Credentials.emailPassword(email, password));
  }

  return (
    <TouchableHighlight
      style={styles.bouldermateLoginButtonStyle}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        <Logo
          width={40}
          height={40}
          transparent
          style={{ position: "absolute", left: 5 }}
        />
        <Text style={styles.text}>BoulderMate Login</Text>
      </View>
    </TouchableHighlight>
  );
};

type BouldermateLoginButtonProps = {
  onPress: any;
};

const styles = StyleSheet.create({
  bouldermateLoginButtonStyle: {
    backgroundColor: "white",
    width: 350,
    maxWidth: "100%",
    height: 44,
    borderRadius: 10,
    borderColor: "#AAA",
    borderWidth: 0.5,
  },
  text: {
    width: "100%",
    textAlign: "center",
    flex: 1,
    color: "black",
    fontWeight: "600",
    fontSize: 17,
    position: "relative",
    left: 5,
  },
  icon: {
    color: "black",
  },
  iconPressed: {
    color: "black",
  },
  contentContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
  },
});
