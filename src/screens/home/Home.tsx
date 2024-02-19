import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ISingleProduct, fetchProductsData, handleDecrement, handleIncrement } from '../../redux/reducers/homeSlice';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Entypo from "react-native-vector-icons/Entypo";
import { RootState } from '../../redux/store';
import { fetchSingleProductsData } from '../../redux/reducers/productDetailsSlice';

interface IProps {
  productsList: ISingleProduct[]
  fetchProductsData: () => void,
  handleIncrement: (id: number) => void,
  handleDecrement: (id: number) => void,
  navigation: {
    push: (arg: string, { id }?: { id?: number }) => void
    navigate: (arg: string, { id }?: { id?: number }) => void
  }
  fetchSingleProductsData:(id:number)=>void
}

class Home extends Component<IProps> {

  apiCall = async () => {
    await this.props.fetchProductsData();
  }

  componentDidMount(): void {
    this.apiCall();
  }

  renderItem = ({ item }: { item: ISingleProduct }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text>{item.title}</Text>
          <Text style={styles.description}>{item.description.length > 30 ? `${item.description.slice(0, 30)}...` : item.description}</Text>
          <Text>{item.price}</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.handleDecrement(item.id)}>
              <Entypo name="minus" size={responsiveFontSize(2)} color={"green"} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => this.props.handleIncrement(item.id)}>
              <Entypo name="plus" size={responsiveFontSize(2)} color={"green"} />
            </TouchableOpacity>
          </View>
          <Text onPress={() => this.handleViewDetails(item.id)} style={styles.viewDetails}>View Details</Text>
        </View>
      </View>
    )
  }

  handleViewDetails = async(id: number) => {
    console.log({ id });
     await this.props.fetchSingleProductsData(id)
    this.props.navigation.navigate("ProductDetails")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Products</Text>
        <FlatList
          data={this.props.productsList}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const mapState = (state:RootState) => {
  return {
    productsList: state.home.productsList,
  }
}

const mapDispatch = {
  fetchProductsData,
  handleIncrement,
  handleDecrement,
  fetchSingleProductsData
}

export default connect(mapState, mapDispatch)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  header: {
    textAlign: "center",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "green",
    width: "100%",
    paddingVertical: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(4),
  },
  image: {
    width: "30%",
    height: responsiveHeight(11),
  },
  textContainer: {
    width: "70%",
    paddingLeft: responsiveWidth(2),
  },
  description: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    marginHorizontal: responsiveWidth(3),
  },
  viewDetails: {
    alignSelf: 'flex-end',
    textDecorationLine: "underline",
    textDecorationColor: "green",
    color: "blue",
  },
});



// import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { ISingleProduct, fetchProductsData, handleIncrement } from '../../redux/reducers/homeSlice'
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import Entypo from "react-native-vector-icons/Entypo"
// import { AppDispatch, RootState } from '../../redux/store'

// const Home = () => {
//   const list=useSelector((state:RootState)=>state.home.productsList)
//   // console.log("--------",list.length,"=====");
//   const dispatch:AppDispatch=useDispatch()

//   const apiCall=async()=>{
//     console.log("useState--");
//       await dispatch(fetchProductsData())
//   }

//   useEffect(()=>{apiCall()},[])

//   const renderItem=({item}:{item:IProductsList})=>{
//     return(
//       <View 
//         style={{borderWidth:1,borderColor:"green",width:"100%",
//         paddingVertical:responsiveHeight(1),marginBottom:responsiveHeight(2),
//         flexDirection:"row",alignItems:"center",paddingHorizontal:responsiveWidth(4)
//         }}>
//           <Image source={{uri:item.thumbnail}} style={{width:"30%",height:responsiveHeight(11)}}/>
//           <View style={{width:"70%",paddingLeft:responsiveWidth(2)}}>
//             <Text>{item.title}</Text>
//             <Text style={{width:"100%"}}>{item.description.length>30?item.description.slice(0,30)+"...":item.description}</Text>
//             <Text>{item.price}</Text>
//             <View style={{flexDirection:"row",alignItems:"center"}}>
//               <TouchableOpacity onPress={()=>dispatch(handleIncrement(item.id))}>
//                 <Entypo name="minus" size={responsiveFontSize(2)} color={"green"}/>
//               </TouchableOpacity>
//               <Text style={{marginHorizontal:responsiveWidth(3)}}>{item.quantity}</Text>
//               <TouchableOpacity >
//                 <Entypo name="plus" size={responsiveFontSize(2)} color={"green"}/>
//               </TouchableOpacity>
//             </View>
//           </View>
//       </View>
//     )
//   }

//   return (
//     <View style={{flex:1,borderWidth:1,borderColor:"red"}}>
//       <Text style={{textAlign:"center"}}>Products</Text>
//       <FlatList
//         data={list}
//         renderItem={renderItem}
//       />
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({})