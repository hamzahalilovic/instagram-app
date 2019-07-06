import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "./config";

class InstaClone extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: Dimensions.get("window").width
    };
  }
  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri =
      "https://lh3.googleusercontent.com/7TWr-FqXcUX-_7NOmwoaptOek1CsMFtOeVnJ8EnNCql2WofYbUH4E9zSS2vazMnPMlJnfSO52a8NdpcT9Y7kDSt9=s1024" +
      "=s" +
      imageHeight +
      "-c";

    return (
      <View style={{ flex: 1, height: 100 + "%", width: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/RV_5eBXUVM_7Z0BnVMZWJneHkA9-BuOE3Qr8XewBGul7kndCKAEhKYNM-rMMu8p2Ux2dTKNm7NNNcE44vhgim52izQ=s1024"
              }}
            />
            <Text style={{ marginLeft: 10 }}>hamza_226</Text>
          </View>
          <View>
            <Text style={{ fontSize: 30, marginLeft: 90, paddingLeft: 80 }}>
              ...
            </Text>
          </View>
          <View />
        </View>
        <TouchableOpacity
          onPress={() => {
            alert("press");
          }}
        >
          <Image
            style={{ width: this.state.screenWidth, height: 400 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image
            style={[
              styles.icon,
              { height: 45, width: 45, tintColor: "rgb(252,61,57)" }
            ]}
            source={config.images.heartIcon}
          />

          <Image
            style={[styles.icon, { height: 35, width: 35 }]}
            source={config.images.bubbleIcon}
          />

          <Image
            resizeMode="stretch"
            style={[styles.icon, { height: 50, width: 40 }]}
            source={config.images.arrowIcon}
          />
        </View>
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
    height: config.sytleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    height: config.sytleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(233,233,233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginLeft: 5
  }
});

export default InstaClone;
