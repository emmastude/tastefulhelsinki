
import React, { useEffect } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import * as SQLite from 'expo-sqlite';


export default function Favourites() {

    const db = SQLite.openDatabase('favouritesdb.db');

    const [favs, setFavs] = React.useState([]);

    useEffect(() => {
        // miten haen tiedot tänne?
        db.transaction(tx => {
            tx.executeSql('select * from favourites;', [], (_, { rows }) =>
                setFavs(rows._array)
            );
        });


    })


    //delete favourites 
    const deleteItem = (id) => {
        db.transaction(
            tx => {
                tx.executeSql('delete from favourites where id = ?;', [id]);
            }, null, updateList
        )
    }

    return (
        <View>
            
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
                    data={favs}

                />
            </ImageBackground>
        </View>
    );
};