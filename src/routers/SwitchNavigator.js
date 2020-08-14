import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Loading from "../containers/LoadingContainer";
import App from "./AppNavigator";

const createRootNavigator = () => {
  return createSwitchNavigator(
    {
      Loading: Loading,
      App: App,
    },
    {
      initialRouteName: "Loading"
    }
  );
};
  
export default createAppContainer(createRootNavigator());
