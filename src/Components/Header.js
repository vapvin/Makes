import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.header`
    padding: 28px 32px;
    display: flex;
    align-items: center;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #E31948;
        font-weight: 700;
    }
`;

function Header(){
    return (
        <HeaderBox>
            <h1>Today</h1>
        </HeaderBox>
    )
}

export default Header;