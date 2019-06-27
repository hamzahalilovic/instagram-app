import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, height: 100 + "%", width: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems:'center' }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/RV_5eBXUVM_7Z0BnVMZWJneHkA9-BuOE3Qr8XewBGul7kndCKAEhKYNM-rMMu8p2Ux2dTKNm7NNNcE44vhgim52izQ=s1024"
              }}
            />
            <Text>hamza_226</Text>
          </View>
          <View />
        </View>
        <Image
          style={{ width: 100 + "%", height: 100 }}
          source={{
            uri:
              "https://lh3.googleusercontent.com/ENAxre2mHu54hGoy6TERJNab-OViceIoW6b_FQNbYcTZGOFP94WQBbs2b5zpyXN0VD-_GYTclx01YZL1MxNZCAmmiQ=s1024"
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 57,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  userBar: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    
  }
});

export default InstaClone;
