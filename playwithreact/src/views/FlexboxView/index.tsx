import * as React from "react";
import { Button } from "../../components/Button/Button.css";
import Navigation from "../../components/Navigation";

const FlexboxView = () => {
  const [loadState, setLoadState] = React.useState(false);
  const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => console.log(json));
    setLoadState(true);
  };
  return (
    <>
      <Navigation />
      {loadState == false && <Button onClick={loadData}>Załaduj dane</Button>}
    </>
  );
};
export default FlexboxView;
