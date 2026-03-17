import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import banner from '../../asserts/banner.png'

import { Container, TextContent, Title, TitleHighlight} from './styles'

const Home = () => {
    
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return ( <>
            <Header />
            <Container>
                <div>

                    <Title>
                        <TitleHighlight>
                            Implemente
                            <br/>
                        </TitleHighlight>
                            o seu futuro global agora!
                    </Title>

                    <TextContent>

                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do
                        mundo e encare seu novo desafio profissional, evoluindo em
                        comunidade com os melhores experts.

                    </TextContent>

                    <Button title= "Começar Agora" variant="secondary" onClick={handleClickSignIn} type ="button"></Button>

                </div>

                <div>
                    
                    <img src={banner} alt="Imagem principal" />

                </div>

            </Container>    
    </>);
};

export default Home;