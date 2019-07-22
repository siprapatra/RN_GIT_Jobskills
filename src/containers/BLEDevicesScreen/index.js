import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';

export default class BLEDevicesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedID: 0
        };
    }

    render() {
        const { selectedID } = this.state;
        return (
            <View>
                <View style={styles.topView}>
                    <View style={styles.tabView}>
                        <Text style={selectedID == 0 ? styles.selectedTab : styles.unselectedTab}
                            onPress={() => this.setState({ selectedID: 0 })}>
                            Near By
                    </Text>
                        <View style={styles.tabSeparator} />
                        <Text style={selectedID == 1 ? styles.selectedTab : styles.unselectedTab}
                            onPress={() => this.setState({ selectedID: 1 })}>
                            History
                    </Text>
                        <View style={styles.tabSeparator} />
                        <Text style={selectedID == 2 ? styles.selectedTab : styles.unselectedTab}
                            onPress={() => this.setState({ selectedID: 2 })}>
                            Favourites
                    </Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.bleItemCell}>
                        <View style={styles.signalView}>
                            <Image source={require("./../../../assets/icon_signal.png")}
                                style={styles.signalIcon} />
                            <Text>127</Text>
                        </View>
                        <View style={styles.detailView}>
                            <View style={styles.detailTextBox}>
                                <Text numberOfLines={2}>SailTimer Wind Insturment</Text>
                                <Text>1 services</Text>
                            </View>
                            <TouchableOpacity style={styles.touchableCard}>
                                <Text style={styles.btnText}>Connect</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

