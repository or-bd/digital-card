import styled from '@emotion/styled';
import { DESKTOP_MAX_WIDTH } from '../../utils/const.ts';
import { fadeIn } from '../../styles/animations.ts';

export const Wrapper = styled.div`
    position: absolute;
    width: 900px;
    height: 95vh;
    max-width: 95%;
    margin: 0 auto;
    display: grid;
    justify-items: stretch;
    align-items: stretch;
    top: 50%;
    left: 0;
    right: 0;
    opacity: 0;
    transform: translateY(-50%);
    animation: ${fadeIn} .8s linear forwards;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(250px, 300px) 1fr;
    grid-template-rows: fit-content(100%);
    gap: 20px;
    grid-template-areas: 
    "avatar content"
    "contact content";

    @media (max-width: ${DESKTOP_MAX_WIDTH}) {
        grid-template-columns: auto;
        grid-template-areas: 
        "avatar"
        "content"
        "contact"
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
