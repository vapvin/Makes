import React from 'react';
import TodoContainer from "./TodoContainer";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "./Header";
import List from "./List";
import Create from "./Create";
import {ListProvider} from '../Context/Context';

function App() {
  return (
      <ListProvider>
        <GlobalStyles />
        <TodoContainer>
            <Header/>
            <List/>
            <Create/>
        </TodoContainer>
      </ListProvider>
  );
}

export default App;
