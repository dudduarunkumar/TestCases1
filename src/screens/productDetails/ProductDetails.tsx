import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { ISingleProduct } from '../../redux/reducers/homeSlice'
import { fetchSingleProductsData } from '../../redux/reducers/productDetailsSlice'

interface IProps{
  route:{
    params:{id:number}
  },
  singleProduct:ISingleProduct
  fetchSingleProductsData:(id:number)=>void
}

export class ProductDetails extends Component <IProps>{
  async componentDidMount() {
    console.log("componentDidMount called");
    

    // await fetchSingleProductsData(this.props.route.params.id)
  }
  render() {
    return (
      <View>
        <Text>ProductDetails</Text>
      </View>
    )
  }
}

const mapState=(state:RootState)=>{
  return {
    singleProduct:state.singleProduct.singleProduct
  }
}

const mapDispatch={
  fetchSingleProductsData
}

export default connect(mapState,mapDispatch) (ProductDetails)