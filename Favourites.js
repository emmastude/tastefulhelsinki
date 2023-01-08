
import React, { useEffect } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';


export default function Favourites() {

  // open database
  const db = SQLite.openDatabase('favouritesdb.db');

  // creating fav state
  const [favourites, setFavourites] = React.useState([]);


  useEffect(() => {
      updateList();
  })
  
  //updating favourites
  const updateList =() => {
      db.transaction(tx => {
          tx.executeSql('select * from favourite;', [], (_, { rows }) =>
          setFavourites(rows._array)
          );
      });
  }


  //delete favourites 
  const deleteItem = (id) => {
      db.transaction(
          tx => {
              tx.executeSql('delete from favourite where id = ?;', [id]);
          }, null, updateList
      )
  }


    return (
        <View style={styles.container}>

            <ImageBackground
                source={require('./img/pexels-marina-leonova-7630179.jpg')}
                //uploading front page photo
                style={{
                    backgroundColor: 'black',
                    width: '100%',
                    height: '100%',
                }}
                imageStyle={{
                    resizeMode: 'contain'
                }}
            >

                <Text>There you can find a list of your favourites.</Text>

                <FlatList
                    style={{ marginLeft: "5%" }}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <View stle={styles.listcontainer}>
                            <Text style={{ fontSize: 18 }}>{item.title}</Text>
                            <Text style={{ fontSize: 18, color: '#0000ff' }}
                                onPress={() => deleteItem(item.id)}>Done</Text></View>}
                    data={favourites}

                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
      width: 900,
      height: 1300
    },
    container: {
        flex: 1,
    }
  });