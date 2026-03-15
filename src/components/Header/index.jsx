import React from 'react';
import { Button } from '../Button';
import logo from '../../asserts/download.jpg'

import {
    BuscarInputContainer,
    HeaderContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles';

const Header = () => {
    return (
        <Wrapper>
           <HeaderContainer>
                <Row>
                    <img src={logo} alt='Logo da Dio' />
                    <BuscarInputContainer>
                        <Input placeholder = 'Buscar ...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>

                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entar" variant="secondary"/>
                    <Button title="Cadastrar" variant="secondary"/>
                </Row>
           </HeaderContainer>
        </Wrapper>
    )
}

export { Header };