import styled from "styled-components";

export const Box = styled.div`
    width:100%;
    min-height:100px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grey};
    margin: 0 0 20px 0;
    border-radius: 0px;
    padding: 15px;
    cursor: pointer;

    &:hover {
        -webkit-box-shadow: 0px 0px 14px 1px rgba(0,0,0,1);
        -moz-box-shadow: 0px 0px 14px 1px rgba(0,0,0,1);
        box-shadow: 0px 0px 14px 1px rgba(0,0,0,1);
    }
`;


export const Stron = styled.span`
    font-weight: bold;
`;

export const Hr = styled.div`
    border-top: 1px dashed ${props => props.theme.grey};
    // border-bottom: 1px dashed ${props => props.theme.grey};
    margin: 10px 0;
`;


export const More = styled.div`
    text-align: center;
`;



export const ModalItem = styled.div`
    margin: 5px 0;
        
    > i {
        top: 6px;
        position: relative;
    }
`;


