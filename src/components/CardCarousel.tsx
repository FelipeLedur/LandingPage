import "../styles/utility.css"
import "../styles/card.css"
import StarOpen from "../assets/starOpen.svg"
import StarClose from "../assets/starClose.svg"


interface ICardCarouselProps {
    comentary: string;
    urlProfileImage: string;
    starCloseNumber: number;
    nameCostumer: string;
    ocupationCostumer: string;
}

export default function CardCarousel ( {comentary, urlProfileImage, starCloseNumber, nameCostumer, ocupationCostumer}: ICardCarouselProps) {

    return (
        <div className="carousel-card">
            <img src={urlProfileImage} alt="Imagem perfil cliente"  width={150} height={150}/>
            <span className="testimony">
                <p>
                    {comentary}
                </p>
            </span>
            <span className="rating">
                {Array(starCloseNumber).fill(1).map(() => (
                    <img src={StarClose} alt="ícone estrela" width={22} height={20} />
                ))}
                {Array(5 - starCloseNumber).fill(1).map(() => (
                    <img src={StarOpen} alt="ícone estrela" width={22} height={20} />
                ))}
            </span>
            <span className="names">
                <p className="bold">{nameCostumer}</p>
                <p>{ocupationCostumer}</p>
            </span>
        </div>
        
    )
}