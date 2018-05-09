import * as React from "react";
import AppHeader from "./header/index";
import AppForm from "./../containers/form";
class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppForm />
      </div>
    );
  }
}

export default App;
