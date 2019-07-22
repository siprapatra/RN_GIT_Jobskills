# RN_GIT_Jobskills
This is a React Native project built for Android and iOS Mobile devices

# Setup
Follow below steps to run this project:-

1) open terminal
2) run "npm install"
3) run "cd ios && pod install && cd .."
4) To run on Android "react-native run-android" or To run on ios "react-native run-ios"

### Build Issues

If it has been a while since you last ran the app, some things may have changed that will not allow your app to run with the current cached build on your machine. Other issues can also arise with saved data. To fix these issues, please try the following:

- Remove the `node_modules` folder and then run `npm i/yarn`.

- Uninstall the app on the device/simulator/emulator that you are using to reset saved data.

- Remove the build folders to ensure any new native libraries or resources are being bundled with the build. In the root project folder run the following:

- Mac: `rm -rf ios/build && rm -rf android/app/build`

- Windows: `rmdir /s ios/build && rmdir /s android/app/build`

- If new resources have been added you may also have to run `watchman watch-del-all`

- Before running `react-native run-x`, run `yarn start --reset-cache`. This will start the packager in your current terminal window with the cache reset.

### Linting & Code Formatting for code quality

The app will pair the usage of Eslint and Prettier to enforce code formatting and style. You can see the configurations for these in the `.eslintrc.js` and `.prettierrc` files.

# Testing to improve code quality

Just run yarn test. This will run jest with any parameters you give the command. Currently snapshots are being used only to identify changes.

# Code Coverage reported in CodeClimate for better code and test quality

When run on the CI, jest will output coverage reports of how much of the code is being tested. This will be improved and maintained at or above 90% coverage.

Output Coverage: yarn test --coverage

Coverage reports will be output to the console in text format and to the coverage folder in an LCOV based html format. Once coverage is run, you can check the coverage report found in the coverage/lcov-report/index.html file in the project, or you CodeClimate as the results are also reported there.

