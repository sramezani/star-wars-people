import React from "react";
import { Link } from "react-router-dom";

import { Main, Title, PeopleBtn, TextBox, TextBoxInside } from "./styled";

export default function Home() {
    return (
        <>
            <Main />
            <TextBox>
                <TextBoxInside>
                <Title>
                    <p>
                        star
                    </p>
                    <p>
                        wars
                    </p>
                </Title>
                <PeopleBtn>
                    <Link to="/people">People</Link>
                </PeopleBtn>
                </TextBoxInside>
            </TextBox>
        </>
    )
}