import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    tabView: { flexDirection: "row", alignSelf: "center", borderWidth: 1, borderColor: "white", borderRadius: 5, overflow: "hidden", alignItems: "center" },
    topView: { height: 60, backgroundColor: "rgb(37,166,223)", justifyContent: "center" },
    selectedTab: {
        width: 90, fontSize: 15, textAlign: "center", paddingVertical: 4, fontWeight: "bold",
        backgroundColor: "white", color: "rgb(37,166,223)"
    },
    unselectedTab: {
        width: 90, fontSize: 15, textAlign: "center", paddingVertical: 4, fontWeight: "bold",
        backgroundColor: null, color: "white"
    },
    tabSeparator: { width: 1, backgroundColor: "white", height: "100%" },
    bleItemCell: { width: "100%", flexDirection: "row", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "gray" },
    signalView: { flex: 0.2, flexDirection: "column", justifyContent: "flex-start", alignItems: "center", borderRightWidth: 1, borderColor: "gray" },
    signalIcon: { height: 50, width: 50, tintColor: "rgb(37,166,233)" },
    detailView: { flex: 0.8, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 10, marginHorizontal: 3 },
    detailTextBox: { flex: 1, flexDirection: "column", justifyContent: "space-between", minHeight: 50 },
    touchableCard: { backgroundColor: "rgb(34,190,99)", height: 37, paddingHorizontal: 15, borderRadius: 5 },
    btnText: { color: "white", fontSize: 17, fontWeight: "bold", paddingVertical: 10, }
})