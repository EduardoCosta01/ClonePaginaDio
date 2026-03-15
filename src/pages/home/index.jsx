import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

const Home = () => {
    const navigate = useNavigate();

    return (        
            <Header />       
    );
};

export default Home;