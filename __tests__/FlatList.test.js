import React from "react";
import { Text, FlatList, TouchableOpacity,View } from 'react-native';
import { create } from "react-test-renderer";
import {styles} from "../src/containers/JobsListScreen/styles"

const dataSource = [
  {
    uuid: "a1",
    normalized_job_title: "software engineer"
  },
  {
    uuid: "a2",
    normalized_job_title: "software developer"
  },
  {
    uuid: "a3",
    normalized_job_title: "civil engineer"
  }
]

const ListViewItemSeparator = () => {
  return (
    <View
      style={{
        height: .5,
        width: "100%",
        backgroundColor: "#000",
      }}
    />
  );
}

function FlatListComponent(props) {
  return <FlatList
    data={dataSource}
    ItemSeparatorComponent={ListViewItemSeparator}
    keyExtractor={(item,index)=>item.uuid}
    renderItem={({ item, index }) =>
      <TouchableOpacity key={item.uuid}
        style={{ width: "100%" }}
        onPress={() => console.log("JobDetailsScreen", JSON.stringify({
          jobUUID: item.uuid,
          jobName: item.normalized_job_title
        }))}>
        <Text
          style={styles.rowViewContainer}
        >
          {item.normalized_job_title}</Text>
      </TouchableOpacity>}
    enableEmptySections={true}
    style={{ marginTop: 10, width: "100%" }}
  />
}
describe("FlatList component", () => {
  test("Matches the snapshot", () => {
    const button = create(<FlatListComponent />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});