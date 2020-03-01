import React from 'react';
import TodoContainer from "./TodoContainer";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "./Header";
import List from "./List";

function App() {
  return (
      <>
        <GlobalStyles />
        <TodoContainer>
            <Header/>
            <List/>
        </TodoContainer>
      </>
  );
}

export default App;
