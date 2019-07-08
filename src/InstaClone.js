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
      liked: false,
      screenWidth: Dimensions.get("window").width
    };
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const imageUri =
      "https://lh3.googleusercontent.com/7TWr-FqXcUX-_7NOmwoaptOek1CsMFtOeVnJ8EnNCql2WofYbUH4E9zSS2vazMnPMlJnfSO52a8NdpcT9Y7kDSt9=s1024";

    const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;

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
          activeOpacity={0.7}
          onPress={() => {
            this.likeToggled();
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
              { height: 45, width: 45, tintColor: heartIconColor }
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
        <View style={styles.iconBar}>
          <Image
            style={[styles.icon, { height: 30, width: 30 }]}
            source={config.images.heartIcon}
          />
          <Text>123 Likes</Text>
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
    height: config.styleConstants.rowHeight,
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
    height: config.styleConstants.rowHeight,
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
