import styled from 'styled-components';

interface ContainerProps {
    spin: boolean;
    size: number;
    iconSize: number;
  }

export const Container = styled.button<ContainerProps>`
    width: ${(props) => props.size + 'px'};
    height: ${(props) => props.size + 'px'};
    border-radius: 100%;
    margin: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(45deg, rgba( 255, 255, 255, 0.05 ) 0%, rgba( 255, 255, 255, 0.1 ) 100%);
    box-shadow: 0 8px 32px 0 rgba(31, 33, 70, 20%);
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transition: 0.1s;
    ${(props) => props.spin ? 'animation: spin 2s linear infinite;' : ''}
    
    svg {
        transition: 0.1s;
        filter: drop-shadow(0 0 3px #fff);
    }

    &:hover{
        background: linear-gradient(45deg, rgba( 255, 255, 255, 0.15 ) 0%, rgba( 255, 255, 255, 0.25 ) 100%);
        svg {
            width: ${(props) => (props.iconSize + 5) + 'px'};
            height: ${(props) => (props.iconSize + 5) + 'px'};
        }
    }

    @keyframes spin  {
        to {
            transform: rotate(-360deg);
        }
    }
`;