import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';
import SportBookCompo from '../Components/SportBookCompo';
const SportBook = () => {
  return (
    <View style={{backgroundColor: '#4D4D4D', flex: 1}}>
      <View style={{backgroundColor: 'black'}}>
        <Header />
      </View>

      <View
        style={{
          backgroundColor: '#212121',
          marginHorizontal: wp('4%'),
          marginVertical: wp('3%'),
        }}>
        <View
          style={{
            backgroundColor: '#212121',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: hp('8%'),
            alignItems: 'center',
            marginHorizontal: wp('3%'),
          }}>
          <Text style={{fontSize: hp('2%'), color: 'white'}}>SPORTSBOOK</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              placeholderTextColor="gray"
              placeholder="Search"
              style={{width: wp('40%')}}
            />
            <SearchIcon name="search1" size={25} color="white" />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#2B2B2B',
            justifyContent: 'space-between',
            flexDirection: 'row',
            //   paddingVertical: hp('1.5%'),
            // paddingHorizontal: wp('5%'),
          }}>
          <View
            style={{
              borderBottomWidth: 3,
              borderBottomColor: 'red',
              paddingHorizontal: wp('5%'),
              paddingVertical: hp('1.5%'),
            }}>
            <Text style={{color: 'white'}}>MONEY LINE</Text>
          </View>
          <View
            style={{paddingHorizontal: wp('5%'), paddingVertical: hp('1.5%')}}>
            <Text style={{color: 'white'}}>SPREAD</Text>
          </View>
          <View
            style={{paddingHorizontal: wp('5%'), paddingVertical: hp('1.5%')}}>
            <Text style={{color: 'white'}}>TOTAL</Text>
          </View>
        </View>
        <ScrollView>
          {[1, 2, 3, 4, 4].map(item => {
            return <SportBookCompo item={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SportBook;
