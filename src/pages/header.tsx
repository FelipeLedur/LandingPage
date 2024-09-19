import { useState } from "react";
import Logo from '../assets/aaaaa.svg';
import Close from '../assets/Close.svg';
import Menu from '../assets/Header.svg';
import Award from '../assets/award.svg';
import '../styles/header.css';
import '../styles/utility.css';
import Button from '../components/Button';
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
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
                        Inovação é com a gente! Veja tudo que pode ganhar com nossos serviços
                    </p>

                    <div className="cards-container">



                        <div className="card">
                            <div className="card-icon">
                                <img src={Award} alt="ícone menu" width={24} height={24} />
                            </div>
                            <h3>Produto de Qualidade</h3>
                            <p className="desktop-only">Nosso produto já recebou várias premiações na questão de qualidade e funcionamento</p>
                        </div>

                        <div className="card">
                            <div className="card-icon">
                                <img src={Award} alt="ícone menu" width={24} height={24} />
                            </div>
                            <h3>Produto Único</h3>
                            <p className="desktop-only">Um produto nunca antes visto no mercado, 100% inovativo</p>
                        </div>

                        <div className="card">
                            <div className="card-icon">
                                <img src={Award} alt="ícone menu" width={24} height={24} />
                            </div>
                            <h3>Produto Recomendado</h3>
                            <p className="desktop-only">App com 4.9 estrelas na Google Play e App Store, com milhares de recomendações positivas</p>
                        </div>

                    </div>
                </div>


            </section>
        </>
    );
}
