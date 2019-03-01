/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions
} from "react-native";
import VideoPlayer from "react-native-video-player";
const { width, height } = Dimensions.get("window");

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 300, width: width }}>
          <VideoPlayer
            video={{
              uri:
                "https://r1---sn-2uuxa3vh-jb3l.googlevideo.com/videoplayback?pl=22&requiressl=yes&dur=601.977&id=o-ABXLwf8FW3pDWbwz5DnPaG0lU-e3cS3TPtgzfCqFBeUh&signature=7665D706D0C4487C1EB3EFE7F698F4D497A52078.0C784C85A1A0BE227BD810CCD59D8234451A9088&key=cms1&ip=54.191.208.251&mime=video%2Fmp4&itag=22&lmt=1541484601667995&c=WEB&source=youtube&ei=DE55XJekGIzlkgaqpbq4CQ&fvip=5&txp=5531432&sparams=dur,ei,expire,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&expire=1551475308&ipbits=0&ratebypass=yes&redirect_counter=1&rm=sn-a5my776&req_id=7f13f30b4bf6a3ee&cms_redirect=yes&ipbypass=yes&mip=61.5.77.28&mm=31&mn=sn-2uuxa3vh-jb3l&ms=au&mt=1551453589&mv=m"
            }}
            ref={r => (this.player = r)}
          />
        </View>
        <Button onPress={() => this.player.stop()} title="Stop" />
        <Button onPress={() => this.player.pause()} title="Pause" />
        <Button onPress={() => this.player.resume()} title="Resume" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
