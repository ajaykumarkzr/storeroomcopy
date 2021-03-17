import * as React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {Image} from 'react-native';

export default class Ad1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
          image: require('../../images/ads/ad1.jpg'),
        },
        {
          title: 'Item 2',
          text: 'Text 2',
          image: require('../../images/ads/ad2.jpg'),
        },
        {
          title: 'Item 3',
          text: 'Text 3',
          image: require('../../images/ads/ad3.jpg'),
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: '100%',
          width: '100%',
        }}>
        <TouchableOpacity>
          {/* <Text style={{fontSize: 30}}>{item.title}</Text> */}
          <Image source={item.image} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'tinder'}
            ref={(ref) => (this.carousel = ref)}
            autoplay={true}
            autoplayDelay={1000}
            autoplayInterval={2500}
            data={this.state.carouselItems}
            sliderWidth={380}
            itemWidth={380}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}
