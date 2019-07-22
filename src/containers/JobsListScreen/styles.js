import { StyleSheet, Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get(`window`).width;
export const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'flex-start',
        flex: 1,
        margin: 7,
    },
    rowViewContainer: {
        fontSize: 17,
        padding: 10
    },
    TextInputStyleClass: {
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 7,
        backgroundColor: "#FFFFFF"
    }, container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: '#0097a7'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 56,
        backgroundColor: 'rgb(37,166,223)',
        flexDirection: "row"
    },
    label: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: `600`,
        textAlign: `left`,
        marginVertical: 8,
        paddingVertical: 3,
        color: `#f5fcff`,
        backgroundColor: `transparent`
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    }
});