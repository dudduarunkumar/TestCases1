import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
interface IList {
  text: string,
  id: string
}

interface IState {
  list: IList[],
  input: string
}

interface IProps{
  navigation?:{
    navigate:(arg:string)=>void,
    goBack:()=>void,
    push:(arg:string)=>void,
  }
}

export class Todos extends Component<IProps,IState>{
  state = { list: [], input: "" }

  onHandleDelete=(id:string)=>{
    this.setState({list:this.state.list.filter((each:IList)=>each.id!==id)})
  }
  renderItem = ({ item }: { item: IList }) => {
    return (
      <View style={{borderWidth:1,width:"100%",paddingHorizontal:10,paddingVertical:3,marginTop:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <Text style={{color:"blue",fontSize:20}}>{item.text}</Text>
        <TouchableOpacity testID='del' onPress={()=>this.onHandleDelete(item.id)}>

          <Text style={{color:"red",fontSize:20}}>Del</Text>
        </TouchableOpacity>
      </View>
    )
  }

  onChangeText = (e: string) => {
    this.setState({ input: e })
  }

  onHandleAdd=()=>{
    const obj={
      id:new Date().toString(),
      text:this.state.input
    }
    this.setState({list:[...this.state.list,obj],input:""})
  }

  // componentDidMount(): void {
  //   console.log("Todos called");
  // }
  render() {
    return (
      <View>
        <Text style={{textAlign:"center",fontSize:26,marginBottom:10}}>Todos</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder='Enter Text'
            value={this.state.input}
            onChangeText={this.onChangeText}
            style={{ height: 50, borderWidth: 1, borderColor: "black", borderRadius: 15, width: "70%", paddingHorizontal: 10 }} />
          <TouchableOpacity 
            testID='add'
            style={{ height: 50, borderWidth: 1, borderColor: "black", borderRadius: 15, width: "20%", justifyContent: "center", alignItems: "center",marginLeft:10 }} 
            onPress={this.onHandleAdd}>
            <Text style={{ fontSize: 20 }}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.list}
          renderItem={this.renderItem}
        />
        <TouchableOpacity 
            testID='move to counter'
            onPress={()=>this.props.navigation?.navigate("Counter")}>
            <Text style={{ fontSize: 14,alignSelf:"flex-end",marginTop:10,marginRight:20,textDecorationLine:"underline" }}>Move To Counter</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default Todos