/*import { useNavigate } from 'react-router-dom';*/

import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';
import { Card } from '../../components/Card';


import { Container, Column, Title, TitleHighlight} from './styles'

const Feed = () => {
   /* const navigate = useNavigate();*/

    return ( <>
            <Header autenticado={true} />
            <Container>
                <Column flex ={3}>
                    
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                
                </Column>
                
                <Column flex = {1}>
                    
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={50} nome= "Eduardo Costa" image= "https://avatars.githubusercontent.com/u/106980078?v=4"/>
                    <UserInfo percentual={10} nome= "Eduardo Costa" image= "https://avatars.githubusercontent.com/u/106980078?v=4"/>
                    <UserInfo percentual={30} nome= "Eduardo Costa" image= "https://avatars.githubusercontent.com/u/106980078?v=4"/>
                    <UserInfo percentual={80} nome= "Eduardo Costa" image= "https://avatars.githubusercontent.com/u/106980078?v=4"/>
                    <UserInfo percentual={60} nome= "Eduardo Costa" image= "https://avatars.githubusercontent.com/u/106980078?v=4"/>
                
                </Column>

            </Container>    
    </>);
};

export default Feed;