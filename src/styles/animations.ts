import { css, keyframes } from '@emotion/react';

export const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const linkColors = keyframes`
    0% { color: black; }
    25% { color: white; }
    100% { color:darkblue; }
`;

export const continuous = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-50%, 0, 0);
    }
`;

export const link = css`
    &:hover {
        animation: ${linkColors} .5s linear forwards;
    }
`;
