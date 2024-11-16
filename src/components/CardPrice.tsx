import Button from "./Button";

interface IBenefit {
    description: string;
    urlIcon: string;
}

interface ICardPriceProps {
    plan: string;
    description: string;
    price: string;
    method?: string;
    benefits: IBenefit[];
    premium?: boolean;
}


export default function CardPrice ( {plan, description, price,method, benefits, premium}: ICardPriceProps) {
    return (
        <div className={premium ? "pricing-card premium" : "pricing-card"}>
            {premium && (
                <span className="bonus">
                    <p>1º MÊS COM DESCONTO</p>
                </span>
            )}
            
            <span className="plan">
                <h3>{plan}</h3>
                <p>{description}</p>
            </span>
            <span className="price">
                <h2>{price}</h2>
                <p>{method}</p>
            </span>
            
            <Button text={premium ? "Experimente de graça" : "Baixe agora"} key={premium ? "premium" : "free"} secondary={!premium} />
            <span className="hr" />

            <ul className="features">
                {benefits.map((benefit, index) => (
                    <li key={index}>
                        <img src={benefit.urlIcon} alt="ícone do benefício" width={24} height={24} />
                        <p>{benefit.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
