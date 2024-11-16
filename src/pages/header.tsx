import { useState } from "react";
import Logo from '../assets/aaaaa.svg';
import Close from '../assets/Close.svg';
import Menu from '../assets/Header.svg';
import Award from '../assets/award.svg';
import '../styles/header.css';
import '../styles/utility.css';
import '../styles/card.css';
import ProfileImageOne from "../assets/ProfileImageOne.jpg"
import ProfileImageTwo from "../assets/ProfileImageTwo.jpg"
import ProfileImageThree from "../assets/ProfileImageThree.jpg"
import Button from '../components/Button';
import CardPrice from '../components/CardPrice';
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import CardCarousel from "../components/CardCarousel"
import "../styles/hero.css";
import "../styles/testimonials.css"
import "../styles/pricing.css"
import "../styles/contact.css"
import Check from "../assets/Check.svg"



export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    // armazenar os valores dos inputs
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // coleta os dados do formulário e envia para a funcao do Google Cloud
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();

        const formData = {
            email: email,
            subject: subject,
            message: message
        };

        body: JSON.stringify(formData)
        
        try {
            const response = await fetch('api', {  
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEzMDI5MTU3OTk2OTkxNTQ3OTc4IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJmYWxlZHVyQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlY5b0FJU21aR1hYVXJjT1VISWtPU3ciLCJpYXQiOjE3MzE3ODMwMzMsImV4cCI6MTczMTc4NjYzM30.QT0fqPBTMiEyL7Jyk2bfD_AX2hrnHY8HBrQ8PmWlNkw4GPA4wmNmiG2LsXYjqWAPzm7_A42b8-huSG_owC5CW1mHkld-VRXVl5jEoRzGnrPy5I-JUhUpZkozno3ifvZ43F5RLBlrF-SeNIYp9MwWtDq_9Qc-Lz6XfCZoSzyKwbG0VVROa-9tpg5mGKewk2BVUvOn7t1rVFwV-YiVINjKhvI7O-TJ_yqy63mEPPj3YGzwzOA9jWvV54cX-20IyopuFNw5ttrZrhmOXpyWLnbXz65yKHy3uwAK35R-MfGeYVfP7FKJwdZkkT0pVfeJT8dMWGqDZ2DLeJE1rTGeCdjQaQ',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('E-mail enviado com sucesso!');
            } else {
                alert('Falha ao enviar o e-mail.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar o e-mail.');
        }
    };
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>

                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>

                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>


                </nav>

            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        <br /><br /><br /><br /><br />
                    </p>
                    <h1>Com o Seu Silo você nunca mais ficará sem ração!</h1>
                    <p >Já pensou em pedir ração diretamente pelo seu celular? Apenas o Seu Silo faz isso para você!
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                    <h1>
                        Sob Medida para você!
                    </h1>
                    <p>
                        O Seu silo é a solução que você precisava para sua fazenda, venha ser mais um de nossos muitos clientes.
                    </p>
                    <p>
                        Inovação é com a gente! Veja tudo que pode ganhar com nossos serviços.
                    </p>

                    <div className="cards-container">



                        <div className="card">
                            <div className="card-icon">
                                <img src={Award} alt="ícone menu" width={24} height={24} />
                            </div>
                            <h3>Produto de Qualidade</h3>
                            <p>Nosso produto já recebou várias premiações na questão de qualidade e funcionamento.</p>
                        </div>

                        <div className="card">
                            <div className="card-icon">
                                <img src={Award} alt="ícone menu" width={24} height={24} />
                            </div>
                            <h3>Produto Único</h3>
                            <p>Um produto nunca antes visto no mercado, 100% inovativo.</p>
                        </div>

                        <div className="card">
                            <div className="card-icon">
                                <img src={Award} alt="ícone menu" width={24} height={24} />
                            </div>
                            <h3>Produto Recomendado</h3>
                            <p>App com 4.9 estrelas na Google Play e App Store, com milhares de recomendações positivas.</p>
                        </div>

                    </div>
                </div>


            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only bold">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                    Quem já contratou sabe da qualidade do nosso serviço, estamos tirando aquela ideia de que 
                    o agricultor não possui acesso a tecnologia, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <CardCarousel
                            comentary="Meus silos nunca foram tão tecnológicos, agora consigo controlar tudo pelo celular."
                            urlProfileImage={ProfileImageOne}
                            starCloseNumber= {5}
                            nameCostumer="Donald Trump"
                            ocupationCostumer="Próximo presidente dos Estados Unidos"
                        />
                        <CardCarousel
                            comentary="Minhas aves nunca mais ficaram sem ração, o Seu Silo é a solução que eu precisava."
                            urlProfileImage={ProfileImageTwo}
                            starCloseNumber= {4}
                            nameCostumer="Biden"
                            ocupationCostumer="Atual presidente dos Estados Unidos"
                        />
                        <CardCarousel
                            comentary="Agora consigo controlar tudo pelo celular, nunca mais fico sem ração."
                            urlProfileImage={ProfileImageThree}
                            starCloseNumber= {4}
                            nameCostumer="Kamala Harris"
                            ocupationCostumer="Atual vice presidente dos Estados Unidos"
                        />
                    </div>
                    <div className="carousel-content">
                    <CardCarousel
                            comentary="Meus silos nunca foram tão tecnológicos, agora consigo controlar tudo pelo celular."
                            urlProfileImage={ProfileImageOne}
                            starCloseNumber= {5}
                            nameCostumer="Donald Trump"
                            ocupationCostumer="Próximo presidente dos Estados Unidos"
                        />
                        <CardCarousel
                            comentary="Minhas aves nunca mais ficaram sem ração, o Seu Silo é a solução que eu precisava."
                            urlProfileImage={ProfileImageTwo}
                            starCloseNumber= {4}
                            nameCostumer="Biden"
                            ocupationCostumer="Atual presidente dos Estados Unidos"
                        />
                        <CardCarousel
                            comentary="Agora consigo controlar tudo pelo celular, nunca mais fico sem ração."
                            urlProfileImage={ProfileImageThree}
                            starCloseNumber= {4}
                            nameCostumer="Kamala Harris"
                            ocupationCostumer="Atual vice presidente dos Estados Unidos"
                        />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos Planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                <CardPrice
                        plan="Básico"
                        description="Baixe o ferramenta e comece a utilizar agora mesmo!"
                        price="Grátis"
                        benefits={[
                            { description: "Com anúncios", urlIcon: Check },
                            { description: "Até 10 produtos por dia", urlIcon: Check },
                            { description: "Utilize sem limitação X", urlIcon: Check }
                        ]}
                    />

                    <CardPrice
                        plan="Premium"
                        description="Para quem deseja utilizar nossa ferramenta sem limitações!"
                        price="R$ 19,90"
                        method="/mês"
                        benefits={[
                            { description: "Sem interrupção de anúncios", urlIcon: Check },
                            { description: "Utilize quantas vezes quiser", urlIcon: Check },
                            { description: "Utilize todos os produtos disponíveis na plataforma", urlIcon: Check }
                        ]}
                        premium
                    />

                    <CardPrice
                        plan="Empresarial"
                        description="Utilize nossa soiução na sua empresa. Aprimore seu fluxo."
                        price="R$ 12,90"
                        method="/mês por dev"
                        benefits={[
                            { description: "Com anúncios", urlIcon: Check },
                            { description: "Até 10 produtos por dia", urlIcon: Check },
                            { description: "Utilize sem limitação X", urlIcon: Check }
                        ]}
                    />

                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <p className="desktop-only">Contato</p>
                    <h2>Entre em contato conosco!</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="email">E-mail: </label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                                placeholder="Seu e-mail"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Assunto: </label>
                            <input 
                                type="text" 
                                id="subject" 
                                value={subject} 
                                onChange={(e) => setSubject(e.target.value)} 
                                required
                                placeholder="Assunto"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensagem: </label>
                            <input 
                                type="text" 
                                id="message" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                required
                                placeholder="Mensagem"
                            />
                        </div>

                        <Button text="Enviar" />
                    </form>
                </section>
            </section>
        </>
    );
}
