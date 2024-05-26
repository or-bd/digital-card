import { css } from '@emotion/react';

export default css`
    @font-face {
        font-family: "Roboto", sans-serif;
        font-style: normal;
    }

    html,body {
        margin: 0;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: .95rem;
        line-height: 1.5rem;
        background-color: #f4f2ee;
    }
    
    a {
        text-decoration: none;
        
        &:link {
            color: inherit;
        }
        
        &:visited {
            text-decoration: inherit;
            color: inherit;
        }
    }
`;
