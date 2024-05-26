import styled from '@emotion/styled';
import { DESKTOP_MAX_WIDTH } from '../../utils/const.ts';
import { fadeIn } from '../../styles/animations.ts';

export const Wrapper = styled.div`
    width: 900px;
    max-width: 95%;
    margin: 20px auto 0;
    opacity: 0;
    animation: ${fadeIn} .8s linear forwards;
`;

export const Container = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(250px, 300px) 1fr;
    grid-template-rows: repeat(4, fit-content(100%));
    grid-template-areas: 
    "avatar content"
    "contact content"
    "contact plants";
    ". plants";

    @media (max-width: ${DESKTOP_MAX_WIDTH}) {
        grid-template-columns: auto;
        grid-template-areas: 
        "avatar"
        "content"
        "contact"
        "plants"
        "."
    }
`;

export const Section = styled.div<{ name: string }>`
    grid-area: ${({ name }) => name};
    min-width: 100%;
`;

export const Content = styled.div`
    display: grid;
    grid-template-rows: repeat(3, fit-content(100%));
    gap: 20px;
    grid-area: content;
    grid-template-areas: 
        "about"
        "skills"
        "demos"
`;
