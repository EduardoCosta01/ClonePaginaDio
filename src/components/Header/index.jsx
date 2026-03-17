import React from 'react';
import { Button } from '../Button';
import logo from '../../asserts/logo-dio.png'

import {
    BuscarInputContainer,
    HeaderContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {
    return (
        <Wrapper>
           <HeaderContainer>
                <Row>
                    
                    <img src={logo} alt='Logo da Dio' />

                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder = 'Buscar ...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>

                <Row>
                    {autenticado ? (
                        <UserPicture src = "https://avatars.githubusercontent.com/u/106980078?v=4" />
                    ) : (
                        <>
                            <MenuRight href='#'>Home</MenuRight>
                            <Button title="Entar" />
                            <Button title="Cadastrar" />
                        </>
                    )}
                </Row>
           </HeaderContainer>
        </Wrapper>
    )
}

export { Header };