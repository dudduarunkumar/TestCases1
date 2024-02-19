import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Counter1 from '../counter1/Counter1'

interface IState{
  count:number
}

interface IProps{
  navigation?:{
    navigate:(arg:string)=>void
    push?:(arg:string)=>void
  }
}

export class Counter extends Component<IProps,IState> {
  state = { count: 7 }

  // componentDidMount(): void {
  //   console.log("Counter called");
  // }
  render() {
    return (
      <View style={{borderWidth:1}}>
        <Text style={{textAlign:"center",fontSize:26,marginBottom:10}}>Counter App</Text>
        <Text>Count:{this.state.count}</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>

          <TouchableOpacity
            testID='increment'
            style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, alignSelf:"center" }}
            onPress={() => this.setState((prevState:{count:number})=>({count:prevState.count+1}))}
          >
            <Text>Inc</Text>
          </TouchableOpacity>

          <TouchableOpacity
            testID='decrement'
            style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, marginHorizontal: 10, alignSelf:"center" }}
            onPress={() => this.setState({ count: this.state.count - 1 })}
          >
            <Text>Dec</Text>
          </TouchableOpacity>

          <TouchableOpacity
            testID='reset'
            style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 3, alignSelf:"center" }}
            onPress={() => this.setState({ count: 0 })}
          >
            <Text>Reset</Text>
          </TouchableOpacity>

        </View>
        <TouchableOpacity
          testID='moveToTodo'
          onPress={()=>this.props.navigation?.navigate("Todos")}>
          <Text style={{ fontSize: 14,alignSelf:"flex-end",marginTop:10,marginRight:20,textDecorationLine:"underline" }}>Move To Todos</Text>
        </TouchableOpacity>
        <Counter1 str={"arun"}/>
      </View>
    )
  }
}

export default Counter