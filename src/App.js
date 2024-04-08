import Body from "./Components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  )
}
export default App;