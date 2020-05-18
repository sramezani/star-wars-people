import styled from "styled-components";

import bg1 from '../../assets/images/bg1.jpg';

export const Main = styled.div`
    background:url(${bg1});
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(1px);
`;

export const TextBox = styled.div`
    height:100%;
    width:100%;
    position:fixed;
    top:0;
`;

export const TextBoxInside = styled.div`
    position:relative;
    top:50%;
    -webkit-transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    transform:translateY(-50%);
`;

export const Title = styled.div`
    font-size: 8em;
    font-weight: bold;
    color: ${props => props.theme.white};
    font-family: 'starwar';
    text-align: center;

    @media (max-width: 767px) {
        font-size: 6em;
    }

    @media (max-width: 640px) {
        font-size: 5em;
    }

    @media (max-width: 480px) {
        font-size: 4em;
    }
`;

export const PeopleBtn = styled.div`
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    margin: 50px 0 0 0;

    > a {
        border: 3px solid ${props => props.theme.white};
        color: ${props => props.theme.white};
        border-radius: 3px;
        text-decoration: none;
        padding: 10px 80px;
    }
    > a:hover {
        color: ${props => props.theme.black};
        background: ${props => props.theme.white};
        transition: .3s all ease;
    }

    @media (max-width: 640px) {
        font-size: 1.7em;
        > a {
            padding: 10px 60px;
        }
    }

    @media (max-width: 480px) {
        font-size: 1.5em;
        > a {
            padding: 10px 50px;
        }
    }
`;