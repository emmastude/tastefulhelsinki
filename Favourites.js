
import React from 'react';
import { View, Text, FlatList } from 'react-native';


export default function Favourites() {

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
            <Text>There you can find a list of your favourites.</Text>

            <FlatList
                style={{ marginLeft: "5%" }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <View stle={styles.listcontainer}>
                        <Text style={{ fontSize: 18 }}>{item.title}</Text>
                        <Text style={{ fontSize: 18, color: '#0000ff' }}
                            onPress={() => deleteItem(item.id)}>Done</Text></View>}
                data={courses}
            />
        </View>
    );
};