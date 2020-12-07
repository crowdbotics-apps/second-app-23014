import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { TextInput_7: "" }
  render = () => (
    <View>
      <View style={styles.View_3}>
        <Image
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/crowdbotics_YrRHuYc.jpg"
          }}
        />
        <TextInput
          placeholder="Type an item to search"
          value={this.state.TextInput_7}
          onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
        />
      </View>
      <View style={styles.View_11}>
        <View style={styles.View_12}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/nike_1SyIE6r.jpg"
            }}
          />
        </View>
        <View style={styles.View_13}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/nike_1SyIE6r.jpg"
            }}
            style={styles.Image_19}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: { width: "91%", height: 0, alignItems: "center" },
  Image_5: {},
  TextInput_7: {},
  View_11: { width: "92%", flexDirection: "row" },
  View_12: { width: "50%", alignSelf: "center", alignContent: "center" },
  Image_15: {},
  View_13: { width: "50%", alignSelf: "center", alignItems: "center" },
  Image_19: { alignSelf: "center" }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
