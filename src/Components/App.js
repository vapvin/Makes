import React from 'react';
import TodoContainer from "./TodoContainer";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "./Header";
import List from "./List";
import Create from "./Create";

function App() {
  return (
      <>
        <GlobalStyles />
        <TodoContainer>
            <Header/>
            <List/>
            <Create/>
        </TodoContainer>
      </>
  );
}

export default App;
