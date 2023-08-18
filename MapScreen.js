import React, { Component, useEffect, useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";


import MapView, {PROVIDER_GOOGLE, Marker}  from 'react-native-maps';

const Images = [
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/afit gate.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/hq.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/yisa doko.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/alpha hall.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/afit img.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/hall a.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/souvenir shop.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/girls hostel.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/boys hostel.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.65;
const SPACING_FOR_CARD_INSET = width * 0.03 - 10;



export default class MapScreen extends Component {


  
  state = {
    markers: [
      {
        coordinate: {
          latitude: 10.607917, 
          longitude:  7.441819,
        },
        title: 'AFIT HeadQuarters',
        description: 'No near here if you no dey wear shoe!!',
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 10.608173,
          longitude:   7.439115,
        },
        title: 'AFIT Gate',
        description: 'Make sure you hold your I.D card',
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 10.608613, 
          longitude:  7.441985,
        },
        title: 'Yisa Doko Hall',
        description: 'Christians dey get fellowship here, some people dey also get lecture here',
        image: Images[2],
      },
      {
        coordinate: {
          latitude:   10.609006,
          longitude:    7.443825,
        },
        title: 'Ibrahim Alfa Auditorium',
        description: 'Alfa Hall',
        image: Images[3],
      },
      {
        coordinate: {
          latitude:    10.609766, 
          longitude:    7.442055,
        },
        title: 'AFIT Library',
        description: 'Shey I go need explain',
        image: Images[4],
      },
      {
        coordinate: {
          latitude:    10.608783,
          longitude:    7.442887,
        },
        title: 'Hangar',
        description: 'Just pray you no go write test for here!!',
        image: Images[5],
      },
      // {
      //   coordinate: {
      //     latitude:    10.612020, 
      //     longitude:    7.440003,
      //   },
      //   title: 'LR C1',
      //   description: 'Hall C1',
      //   image: Images[6],
      // },
      // {
      //   coordinate: {
      //     latitude:     10.611956, 
      //     longitude:    7.439829,
      //   },
      //   title: 'LR C2',
      //   description: 'Hall C2',
      //   image: Images[6],
      // },
      {
        coordinate: {
          latitude:     10.611440, 
          longitude:    7.44000,
        },
        title: 'Engineering Drawing Studio',
        description: 'Hall A',
        image: Images[6],
      },
      {
        coordinate: {
          latitude:      10.609830, 
          longitude:    7.440214,
        },
        title: 'I.O Amao Hall',
        description: 'Amao hall',
        image: Images[7],
      },
      {
        coordinate: {
          latitude:     10.609902, 
          longitude:    7.441011,
        },
        title: 'Souvenir Shop',
        description: 'Where items are being sold',
        image: Images[8],
      },
      {
        coordinate: {
          latitude:     10.610482, 
          longitude:    7.444500 ,
        },
        title: 'Bush Canteen',
        description: 'Food and items are sold here too',
        image: Images[9],
      },
      {
        coordinate: {
          latitude:     10.612931, 
          longitude:    7.445999, 
        },
        title: 'AFIT Clinic',
        description: 'Sick Bay for ill students',
        image: Images[10],
      },
      {
        coordinate: {
          latitude:     10.613283, 
          longitude:    7.447779, 
        },
        title: 'Girls Hostel',
        description: 'Girls Hostel',
        image: Images[11],
      },
      // {
      //   coordinate: {
      //     latitude:     10.618057,  
      //     longitude:    7.444011, 
      //   },
      //   title: 'Basket Ball Court',
      //   description: 'B-Ball court in boys hostel',
      //   image: Images[6],
      // },
      {
        coordinate: {
          latitude:    10.617776, 
          longitude:    7.443347,  
        },
        title: 'Boys Hostel',
        description: 'Boys Hostel',
        image: Images[12],
      },
      // {
      //   coordinate: {
      //     latitude:    10.617766,  
      //     longitude:    7.443017,  
      //   },
      //   title: 'Storey Building',
      //   description: 'Poultry Hostel',
      //   image: Images[6],
      // },
      // {
      //   coordinate: {
      //     latitude:    10.618459,  
      //     longitude:    7.444763,   
      //   },
      //   title: 'NAFIL',
      //   description: 'Boys Hostel',
      //   image: Images[6],
      // },
      // {
      //   coordinate: {
      //     latitude:    10.618380,   
      //     longitude:    7.443523,   
      //   },
      //   title: 'Bungalow Hostel',
      //   description: 'Trenches',
      //   image: Images[6],
      // },
      // {
      //   coordinate: {
      //     latitude:   10.618285,    
      //     longitude:    7.444707,   
      //   },
      //   title: 'NAFIL Canteen',
      //   description: 'Boys hostel canteen',
      //   image: Images[13],
      // },


    ],
    region: {
      latitude: 10.607917, 
      longitude:  7.441819,
      latitudeDelta: 0.00001,
      longitudeDelta: 0.002131,
    },
  };

    


  UNSAFE_componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     location: null,
  //   };
  // }
  componentDidMount() {
      // Request the user's location permissions.
      // Location.requestForegroundPermissionsAsync().then(response => {
      //   // Check if the user granted the permissions.
      //   if (response.status === "granted") {
      //     // Get the user's current location.
      //     Location.getCurrentPositionAsync().then(position => {
      //       this.setState({ location: position });
      //     });
      //   }
      // });
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.23); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  
  render(){

    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH,
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [2, 2.5, 1.5],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });
    

    // const userLocation = async () => {
    //   let { status } = await Location.requestForegroundPermissionsAsync();
    //   if (status != 'granted'){
    //      setErrorMsg('Permission to access location was denied');
    //   }
    //   let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    //   setMapRegion({
    //     latitude: location.coords.latitude,
    //     longitude: location.coords.longitude,
    //     latitudeDelta: 0.015,
    //     longitudeDelta: 0.0121,
    //   });
    //   console.log(location.coords.latitude, location.coords.longitude);
    // }
    
    
    // useEffect(() => {
    //   userLocation();
    // }, []);

    // const [location, setLocation] = useState(null);
    // const [errorMsg, setErrorMsg] = useState(null);
  
    // useEffect(() => {
    //   (async () => {
        
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== 'granted') {
    //       setErrorMsg('Permission to access location was denied');
    //       return;
    //     }
  
    //     let location = await Location.getCurrentPositionAsync({});
    //     setLocation(location);
    //   })();
    // }, []);
  
    // let text = 'Waiting..';
    // if (errorMsg) {
    //   text = errorMsg;
    // } else if (location) {
    //   text = JSON.stringify(location);
    // }
    
    return ( 
    <View style={styles.container}>
      {/* <Text>Hello World</Text> */}
      {/* <Button title='get Location' onPress={userLocation} style={styles.button}/> */}
      <MapView
  ref={(map) => (this.map = map)}
  initialRegion={this.state.region}
  style={styles.container}
  mapType={'satellite'} 
  provider={PROVIDER_GOOGLE}
>
  {
    this.state.location && (
      <Text style={styles.write}>
        The user's location is: {this.state.location.latitude}, {this.state.location.longitude} 
      </Text>
    )
  }
{
  this.state.markers.map((marker, index) => {
    const scaleStyle = {
      transform: [
        {
          scale: interpolations[index].scale,
        },
      ],
    };
    const opacityStyle = {
      opacity: interpolations[index].opacity,
    };
    return (
      <Marker key={index} coordinate={marker.coordinate}
      title={marker.title} 
      description={marker.description}>
        <Animated.View style={[styles.markerWrap, opacityStyle]}>
          <Animated.View style={[styles.ring, scaleStyle]} />
          <View style={styles.marker} />
        </Animated.View>
      </Marker>
    );
  })
}
</MapView>
<Animated.ScrollView
  horizontal
  pagingEnabled
  scrollEventThrottle={1}
  showsHorizontalScrollIndicator={false}
  snapToInterval={CARD_WIDTH + 20}
  contentContainerStyle={styles.endPadding}
  snapToAlignment="center"
  contentInset={{
    top: 0,
    left: SPACING_FOR_CARD_INSET  ,
    bottom: 0,
    right: SPACING_FOR_CARD_INSET ,
  }}
  onScroll={Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: this.animation,
          },
        },
      },
    ],
    { useNativeDriver: true }
  )}
  style={styles.scrollView}
 >
   {/* contentContainerStyle={{
    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
  }} */}
{
  this.state.markers.map((marker, index) => (
    <View style={styles.card} key={index}>
      <Image
        source={marker.image}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.textContent}>
        <Text numberOfLines={1} style={styles.cardtitle}>
          {marker.title}
        </Text>
        <Text numberOfLines={1} style={styles.cardDescription}>
          {marker.description}
        </Text>
      </View>
    </View>
  ))
}
</Animated.ScrollView>
    </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 45,
    backgroundColor: '#0a005b',
    paddingTop: 45,
  },
  write: {
    flex: 1,
    height: 100,
    marginTop: 60,
  },
  scrollView: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  button: {
    flex: 1,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    // marginRight: 10,
    // marginLeft: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH ,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    // width: 25,
    // height: 25,
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    // backgroundColor: "rgba(130,4,150, 0.9)",
    backgroundColor: "red",
  },
  ring: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});
// export default ExploreScreen;