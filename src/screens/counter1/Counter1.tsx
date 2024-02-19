import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

interface IProps{
  str:string
}

interface IState{
  count:number
}

export class Counter1 extends Component<IProps,IState> {
  state={count:0}
  render() {
    return (
        <View >
        <Text >{this.props.str}</Text>
        <Text>Counter1 App</Text>
        <Text testID='count'>Count: {this.state.count}</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>

          <TouchableOpacity
            testID='inc1'
            style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, alignSelf:"center" }}
            onPress={() => this.setState((prevState:{count:number})=>({count:prevState.count+1}))}
          >
            <Text>Inc</Text>
          </TouchableOpacity>

          <TouchableOpacity
          testID='dec1'
            style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, marginHorizontal: 10, alignSelf:"center" }}
            onPress={() => this.setState({ count: this.state.count - 1 })}
          >
            <Text>Dec</Text>
          </TouchableOpacity>

          <TouchableOpacity
            testID='reset1'
            style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, alignSelf:"center" }}
            onPress={() => this.setState({ count: 0 })}
          >
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default Counter1