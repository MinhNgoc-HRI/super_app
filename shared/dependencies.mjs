const deps = {
    react: {
      /**
       * singleton means that only one version of the module is loaded.
       */
      singleton: true,
      /**
       * eager means that the module is added into the initial bundle and will not be loaded later.
       * All shared module in the host app should be eager. In remote containers it depends on build proposes.
       * If bundle should work as a standalone application, then it should be eager.
       * Here is STANDALONE env variable shows if bundle is standalone and eager should be enabled.
       */
      eager: true,
      /**
       * requiredVersion is used to match requested modules in bundle.
       * It's recommended to use the same version as in the host app.
       */
      requiredVersion: "18.2.0",
    },
    "react-native": {
      singleton: true,
      eager: true,
      requiredVersion: "0.72.7",
    },
    "react-native-reanimated": {
      singleton: true,
      eager: true,
      requiredVersion: "3.6.1",
    },
    "react-native-gesture-handler": {
      singleton: true,
      eager: true,
      requiredVersion: "2.14.0",
    },
    "lottie-react-native": {
      singleton: true,
      eager: true,
      requiredVersion: "^6.4.1"
    },
    "@shopify/react-native-skia": {
      singleton: true,
      eager: true,
      requiredVersion: "^0.1.225",
    },
    "@shopify/restyle" : {
      singleton: true,
      eager: true,
      requiredVersion: "^2.4.2",
    },
    "pmn-rn-component": {
      singleton: true,
      eager: true,
      requiredVersion: "0.1.3",
    },
    "react-native-fast-image": {
      singleton: true,
      eager: true,
      requiredVersion: "8.6.3",
    },
    "@react-navigation/bottom-tabs": {
      singleton: true,
      eager: true,
      requiredVersion: "next",
    },
    "@react-navigation/drawer": {
      singleton: true,
      eager: true,
      requiredVersion: "next",
    },
    "@react-navigation/material-top-tabs": {
      singleton: true,
      eager: true,
      requiredVersion: "next",
    },
    "@react-navigation/native": {
      singleton: true,
      eager: true,
      requiredVersion: "next",
    },
    "@react-navigation/native-stack": {
      singleton: true,
      eager: true,
      requiredVersion: "next",
    },
    "@react-navigation/stack": {
      singleton: true,
      eager: true,
      requiredVersion: "next",
    },
    "react-native-pager-view": {
      singleton: true,
      eager: true,
      requiredVersion: "^6.2.3",
    },
    "react-native-safe-area-context": {
      singleton: true,
      eager: true,
      requiredVersion: "^4.7.4",
    },
    "react-native-screens": {
      singleton: true,
      eager: true,
      requiredVersion: "^3.27.0",
    },
    "@react-native-firebase/app": {
      singleton: true,
      eager: true,
      requiredVersion: "^18.7.1",
    },
    "@react-native-firebase/messaging": {
      singleton: true,
      eager: true,
      requiredVersion: "^18.7.1",
    },
    "@react-native-firebase/analytics": {
      singleton: true,
      eager: true,
      requiredVersion: "^18.7.1",
    },
    "@react-native-firebase/crashlytics": {
      singleton: true,
      eager: true,
      requiredVersion: "^18.7.1",
    },
    "react-native-reanimated-carousel": {
      singleton: true,
      eager: true,
      requiredVersion: "^3.5.1",
    },
    "react-native-svg": {
      singleton: true,
      eager: true,
      requiredVersion: "^14.1.0",
    }
  };
  
  export { deps };