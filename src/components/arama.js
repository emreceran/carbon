import React, {useState} from 'react';
import { SearchBar } from 'react-native-elements';
import {scale, verticalScale, moderateScale} from "../../scale"

export default class Arama extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder=""
        onChangeText={this.updateSearch}
        
        value={search}
        containerStyle= {{
          height:verticalScale(40),
          width: scale(310),
          borderRadius:20,
          borderTopWidth:0,
          borderBottomWidth: 0,
          backgroundColor: '#fff',
          overflow: "hidden",
                    
        }}
        inputContainerStyle= {{
          backgroundColor:'#fff',
         
        }}
        inputStyle={{backgroundColor: '#fff',
        
      }}
      placeholderTextColor={'#b5bdd9'}
      />
    );
  }
}