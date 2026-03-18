import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from "react-icons/md";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';


import {
    Column,
    Container,
    CriarText,
    Row,
    EsqueciText,
    SubTitleLogin,
    TitleLogin,
    Title,
    Wrapper,
    SubTitleText
} from './styles'

const schema = yup.object({
    nome: yup
        .string()
        .required('Nome é obrigatório')
        .min(6, 'Mínimo 6 caracteres'),

    email: yup
        .string()
        .required('Email é obrigatório')
        .email('Email inválido'),

    password: yup
        .string()
        .required('Senha obrigatória')
        .min(6, 'Mínimo 6 caracteres'),
});

const Register = () => {
    const navigate = useNavigate();

    const handleClickSign = () => {
        navigate('/login')
    }

    const {control, handleSubmit, formState: { errors, isValid, isSubmitting }} = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
        defaultValues: {
            nome: '',
            email: '',
            password: '',
        },
    });
    
    const onSubmit = (data) => {
        console.log(data)
        navigate('/feed')
    }


    return ( <>
            <Header />
            <Container>
                
                <Column>

                    <Title>
                        A plataforma para você aprender com experts, dominar as principais
                        tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>

                </Column>

                <Column>

                    <Wrapper>

                        <TitleLogin> Comece agora grátis</TitleLogin>

                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                        <Input control={control} name="nome" errorMessage={errors?.nome?.message} placeholder="Nome completo" type="text" leftIcon={<MdEmail/>}/>
                            <Input control={control} name="email" errorMessage={errors?.email?.message} placeholder="E-mail" type="email" leftIcon={<MdEmail/>}/>
                            <Input control={control} name="password" errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>

                            <Button title="Criar minha conta" variant="secondary" type="submit" disabled={!isValid || isSubmitting} />

                        </form>

                        <SubTitleText>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubTitleText>

                        <Row>
                            <EsqueciText onClick={handleClickSign}>já tenho conta</EsqueciText>
                            <CriarText>Fazer Login</CriarText>
                        </Row>
                        
                    
                    </Wrapper>

                </Column>

            </Container>   
             
    </>);



};

export default Register;