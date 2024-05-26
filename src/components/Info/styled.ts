import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Content from '../View/content.tsx';
import { link } from '../../styles/animations.ts';

export const Avatar = styled(Content)`
    padding: 10px;
    display: flex;
    flex-flow: column wrap;
    
    img {
        align-self: center;
    }
`;

export const Position = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    
    h1 {
        margin: 0 0 3px;
    }
    
    a {
        margin-right: 10px;
    }
`;

export const Contact = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
`;

const ContactIcon = css`
    img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
`;

export const Addresses = styled(Content)`
    ${ContactIcon}
    
    div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
`;

export const Social = styled(Content)`
    display: flex;
    justify-content: space-between;
    ${ContactIcon}
    
    a {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        ${link}
    }
`;
