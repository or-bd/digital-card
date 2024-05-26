import styled from '@emotion/styled';
import { DESKTOP_MAX_WIDTH } from '../../utils/const.ts';
import { link } from '../../styles/animations.ts';

export const Demos = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: end;

    @media (max-width: ${DESKTOP_MAX_WIDTH}) {
        flex-flow: row wrap;
        justify-content: center;
        gap: 20px;
    }
`;

export const Demo = styled.a`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    font-size: .8rem;
    
    img {
        width: 45px;
    }
    
    label {
        text-align: center;
        margin-top: 10px;
        line-height: 17px;
    }

    @media (max-width: ${DESKTOP_MAX_WIDTH}) {
        margin-top: 20px;
        width: 90px;
    }

    ${link}
`;
