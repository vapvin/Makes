import React from 'react';
import styled from 'styled-components';
import Item from "./Item";

const ListContainer = styled.ul`
    flex: 1;
    padding: 15px 10px;
    overflow-y: auto;
`;

function List() {
    return (
        <ListContainer>
            <Item text="오늘" done={false}/>
            <Item text="리엑트" done={false}/>
            <Item text="투두" done={false}/>
            <Item text="만듬" done={true}/>
            <Item text="ㅋㅋ" done={true}/>
        </ListContainer>
    )
}

export default List;