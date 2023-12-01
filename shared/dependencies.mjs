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
      requiredVersion: "3.1.6",
    },
    "react-native-gesture-handler": {
      singleton: true,
      eager: true,
      requiredVersion: "2.14.0",
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
    }
  };
  
  export { deps };