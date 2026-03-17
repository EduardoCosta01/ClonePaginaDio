import React from "react";
import { Container, UserPicture, NameText, Progress } from "./styles";


const UserInfo = ({nome, image, percentual}) => {
    return (
        <Container>

            <UserPicture src = {image}/>

            <section>
                <NameText>{nome}</NameText>
                <Progress percentual = {percentual}/>
            </section>

        </Container>
    )
}

export { UserInfo }