import styled from '@emotion/styled';
import { continuous } from '../../styles/animations.ts';

export const Skills = styled.div`
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: ${continuous} 10s linear infinite;
    height: 45px;
`;

export const Slider = styled.div`
    max-width: 100%;
    overflow: hidden;
`;
