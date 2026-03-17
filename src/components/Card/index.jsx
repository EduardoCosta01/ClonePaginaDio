import React from 'react';

import { CardContainer, ImageBackground, Content, UserInfo, UserPicture, PostInfo, HasInfo} from './steyles'
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://hermes.dio.me/articles/cover/ad038b4e-805d-4774-8bea-98946276229e.png"/>
            <Content>
                <UserInfo>
                    <UserPicture src = "https://avatars.githubusercontent.com/u/106980078?v=4" />
                    <section>
                        <h4>Eduardo Costa</h4>
                        <p>Há 10 minutos</p>
                    </section>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de Html e Css</h4>
                    <p>Projeto para curso HTML e CSS no bootcamp dio do global avanade... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };