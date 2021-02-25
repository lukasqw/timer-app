import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const GlassBox = styled.div`
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    text-align: center;
    width: 600px;
    height: 300px;
    border-radius: 30px;

    z-index: 5;

    background: linear-gradient(45deg, rgba( 255, 255, 255, 0.1 ) 0%, rgba( 255, 255, 255, 0.2 ) 100%);
    box-shadow: 0 8px 32px 0 rgba(31, 33, 70, 37%);
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

interface GlassCircleProps {
    size: number;
    angle: number;
    top: number;
    right: number;
}

export const GlassCircle = styled.div<GlassCircleProps>`
    position: absolute;
    border-radius: 100%;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    top: ${props => props.top}px;
    right: ${props => props.right}px;

    background: linear-gradient(${props => props.angle}deg, rgba( 255, 255, 255, 0.1 ) 0%, rgba( 255, 255, 255, 0.45 ) 100%);
    box-shadow: 0 8px 32px 0 rgba(31, 33, 70, 37%);
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const SelectType = styled.div`
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
    width: 280px;

    select {
        color: white;
        font-size: 35px;
        font-weight: bold;
        text-shadow: 0 0 2px #fff, 0 0 4px #fff;
        background: transparent;
        border: none;
        text-transform: uppercase;
        display: inline-block;
        width: 100%;
        padding: 0 10px;
        cursor: pointer;
        outline: 0;
        border: 0px solid #ffffff;
        border-radius: 0px;
        background: transparent;
        color: #fff;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    select::-ms-expand {
        display: none;
    }

    option {
        background: gray;
        color: white;
    }

    .select_arrow {
        position: absolute;
        top: 11px;
        right: 7px;
        pointer-events: none;
        border-style: solid;
        border-width: 16px 10px 0px 10px;
        border-color: #ffffff transparent transparent transparent;
        filter: drop-shadow(0 0 3px #fff);
    }
    .select select:hover ~ .select_arrow,
    .select select:focus ~ .select_arrow {
        border-top-color: #d9d9d9;
    }
    .select select:disabled ~ .select_arrow {
        border-top-color: #9e9e9e;
    }
`;

export const ContainerTimer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > p {
        font-size: 40px;
        color: white;
        font-weight: bold;
        text-shadow: 0 0 2px #fff, 0 0 4px #fff;
        margin: 0px 10px 35px 10px;
    }

    div {
        padding: 5px 0px 15px 0px;
        font-weight: bold;
        text-shadow: 0 0 2px #fff, 0 0 4px #fff;

        p:nth-child(1) {
            font-size: 70px;
        }
        p:nth-child(2) {
            letter-spacing: 1.5px;
            font-size: 18px;
        }
    }
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 2fr 0.5fr 2fr;
    align-items: center;

    div:nth-child(1){
        display: flex;
        justify-content: flex-end;    
    }
    div:nth-child(3){
        display: flex;
        justify-content: flex-start;
    }
`;

export const GlassSelect = styled.select`
    width: 70px;
    height: 55px;
    border-radius: 50px;
    margin: 5px;

    background: linear-gradient(45deg, rgba( 255, 255, 255, 0.05 ) 0%, rgba( 255, 255, 255, 0.1 ) 100%);
    box-shadow: 0 8px 32px 0 rgba(31, 33, 70, 20%);
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    color: white;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 0 0 2px #fff, 0 0 4px #fff;

    option {
        background: gray;
        border: 1px solid rgba( 255, 255, 255, 0.18 ); 
        color: white;
    }
`

export const StepContainer = styled.div`
    position: absolute;

    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: space-between;

        width: 580px;
        height: 30px;
        border-radius: 15px;
        margin: 10px 0;
        padding: 0 10px;

        background: linear-gradient(45deg, rgba( 255, 255, 255, 0.1 ) 0%, rgba( 255, 255, 255, 0.2 ) 100%);
        box-shadow: 0 8px 32px 0 rgba(31, 33, 70, 37%);
        backdrop-filter: blur( 6px );
        -webkit-backdrop-filter: blur( 6px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );

        p {
            color: white;
            font-size: 20px;
            font-weight: bold;
            text-shadow: 0 0 2px #fff, 0 0 3px #fff;

            svg {
                filter: drop-shadow(0 0 3px #fff);
            }
        }

        p:nth-child(2) {
            text-align: center;
        }

        p:last-child {
            text-align: right;
        }
    }
`;