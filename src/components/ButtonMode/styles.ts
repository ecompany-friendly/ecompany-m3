import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 5;
`;