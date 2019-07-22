import React from "react";
import {Platform} from 'react-native';
import { create } from "react-test-renderer";
import SearchHeader from 'react-native-search-header';

function SearchHeaderComponent(props) {
    return <SearchHeader
        topOffset={Platform.OS == "ios" ? 24 : 0}
        ref={(searchHeader) => {
            this.searchHeader = searchHeader;
        }}

        placeholder='Search Job..'
        enableSuggestion={false}
        placeholderColor='gray'
        headerHeight={56}
        pinnedSuggestions={[`react-native-search-header`, `react-native`, `javascript`]}
        onClear={() => {
            console.log(`Clearing input!`);
            this.SearchFilterFunction('')
        }}
        onEnteringSearch={({ nativeEvent }) => this.SearchFilterFunction(nativeEvent.text)}
    />
}

describe("FlatList component", () => {
    test("Matches the snapshot", () => {
        const button = create(<SearchHeaderComponent />);
        expect(button.toJSON()).toMatchSnapshot();
    });
});