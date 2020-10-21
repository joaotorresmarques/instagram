import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: "00", name: "Superhomem" },
                { id: "01", name: "Batman" },
                { id: "02", name: "Homem Aranha" },
                { id: "03", name: "Supernatural" },
                { id: "04", name: "Breaking Bad" },
            ]
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =><Lista data={item} /> }

                />
            </View>
        );
    }

}

class Lista extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Text>{this.props.data.name}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        backgroundColor: '#dcda48',
        flexGrow: 1,
        margin: 4,
        padding: 20
    },
    text: {
        color: '#333333'
    }
})