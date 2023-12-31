import React, {useState, useEffect} from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import { View } from 'react-native';
// import firebase from '@react-native-firebase/firestore';
import {firebase} from './config';


const Hehe = () => {
  const [markers, setMarkers] = useState([]);
    const map =  firebase.firestore().collection('location')

    useEffect(() => {
        async function fetchMarkers(){
            map
            .onSnapshot(
                querySnapshot => {
                    const markers = []
                    querySnapshot.forEach((doc) => {
                        const {title, body, other, latitude, longitude} = doc.data()
                        markers.push({
                            id: doc.id,
                            title,
                            body,
                            other,
                            longitude,
                            latitude,
                        })
                    })
                    setMarkers(markers)
                }
            )
        }
        fetchMarkers();
      }, []);


      const place = {
        region: {
            latitude: 10.607917,
            longitude:  7.441819,
            latitudeDelta: 0.00001,
            longitudeDelta: 0.002131,
        },
      };

      const [state, setState] = React.useState(place);

//   const fetchMarkers = async () => {
//     const markersCollection = firebase.collection('location');
//     const markersSnapshot = await markersCollection.get();

//     markersSnapshot.forEach(documentSnapshot => {
//       const marker = {
//         latitude: documentSnapshot.data().latitude,
//         longitude: documentSnapshot.data().longitude,
//         id: documentSnapshot.id,
//       };
//       setMarkers([...markers, marker]);
//     });
//   };

//   useEffect(() => {
//     fetchMarkers();
//   }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
      initialRegion={state.region}
        provider={PROVIDER_GOOGLE}
        mapType={'satellite'} 
        showsUserLocation
        style={{ flex: 1 }}
      >
        {markers.map(marker => (
          <Marker
            coordinate={{ 
                latitude: marker.latitude,
                longitude:  marker.longitude,
            }}
            key={marker.id}
            title={marker.title} 
            description= {marker.body}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Hehe;
