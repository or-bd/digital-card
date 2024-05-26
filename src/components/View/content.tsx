import React from 'react';
import styled from '@emotion/styled';

export const Container = styled.div<{ hasTitle: boolean }>`
    position: relative;
    padding: ${({ hasTitle }) => hasTitle ? '25px' : '10px'} 10px 10px 10px;
    border: 1px dashed gray;
    
    & > label {
        position: absolute;
        top: -13px;
        padding: 0 5px;
        background-color: #f4f2ee;
        font-weight: bold;
        font-style: italic;
        justify-self: start;
    }
`;

const Content = ({ className, title, children }: { title?: string, className?: string, children: React.JSX.Element | React.JSX.Element[] }) => {
  return (
    <Container className={className} hasTitle={Boolean(title)}>
      {title ? <label>{title}</label> : null}
      {children}
    </Container>
  );
};

export default Content;
