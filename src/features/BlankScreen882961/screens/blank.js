import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Input_43: "", Input_49: "" }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 20,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontStyle: "normal",
        fontWeight: "normal",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "50%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 20,
          color: "#000000",
          backgroundColor: "#181818",
          fontStyle: "normal",
          fontWeight: "normal",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "100%",
            height: "5%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            fontStyle: "normal",
            fontWeight: "normal",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/icon_from_igor.png"
            }}
            style={{
              width: "100%",
              height: 25,
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: "5%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            fontStyle: "normal",
            fontWeight: "normal",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="Eva Design Icons"
            name="arrow-back"
            width={20}
            height={20}
            style={{
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              fontSize: 20,
              color: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal"
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: "10%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            fontStyle: "normal",
            fontWeight: "normal",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#ffffff",
              fontStyle: "normal",
              fontWeight: "bold",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0
            }}
          >
            Login With Email
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: "80%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            fontStyle: "normal",
            fontWeight: "normal",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <View
            style={{
              width: "100%",
              height: "50%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              fontStyle: "normal",
              fontWeight: "normal",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "auto"
            }}
          >
            <View
              style={{
                width: "100%",
                height: "33.333333333333336%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                fontStyle: "normal",
                fontWeight: "normal",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  color: "#000000",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <View
                  style={{
                    width: "10%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <Icon
                    iconFont="Eva Design Icons"
                    name="email"
                    width={20}
                    height={20}
                    style={{
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      fontSize: 20,
                      color: "#832130",
                      fontStyle: "normal",
                      fontWeight: "normal"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "90%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <Input
                    placeholder="Email"
                    editable={true}
                    textStyle={{ fontSize: 12, color: "#000000" }}
                    style={{
                      width: "100%",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 12,
                      color: "#000000",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                    value={this.state.Input_43}
                    onChangeText={nextValue =>
                      this.setState({ Input_43: nextValue })
                    }
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "33.333333333333336%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                fontStyle: "normal",
                fontWeight: "normal",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  color: "#000000",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <View
                  style={{
                    width: "10%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <Icon
                    iconFont="Eva Design Icons"
                    name="github"
                    width={20}
                    height={20}
                    style={{
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      fontSize: 20,
                      color: "#832130",
                      fontStyle: "normal",
                      fontWeight: "normal"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "90%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <Input
                    placeholder="Password"
                    editable={true}
                    textStyle={{ fontSize: 12, color: "#000000" }}
                    style={{
                      width: "100%",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 12,
                      color: "#000000",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                    value={this.state.Input_49}
                    onChangeText={nextValue =>
                      this.setState({ Input_49: nextValue })
                    }
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "33.333333333333336%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                fontStyle: "normal",
                fontWeight: "normal",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <Button
                style={{
                  width: "100%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 5,
                  marginBottom: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  paddingTop: 5,
                  paddingBottom: 5,
                  overflow: "visible",
                  textAlign: "center",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  color: "#ffffff",
                  backgroundColor: "#832130",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0
                }}
                onPress={() => alert("Pressed!")}
              >
                Login
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
