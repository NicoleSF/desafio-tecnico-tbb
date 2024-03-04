import { PiArrowRightLight } from "react-icons/pi";
import './styles.css';

type SectionProps = {
    title: string;
    paragraph: string;
    cardTitle: string;
    cardParagraph: string;
    imgPath: string;
    imgAlt: string
}

export const SectionTextLeft = ({ title, paragraph, cardTitle, cardParagraph, imgPath, imgAlt }: SectionProps) => {
    return(
        <>
            <div className="content">
                <h4 className="title">{title}</h4>
                <p className="paragraph">{paragraph}</p>
            </div>
            <hr className="hr"/>
            <div className="container-card">
                <div className="content-card">
                    <h4 className="card-title">{cardTitle}</h4>
                    <p className="card-paragraph">{cardParagraph}</p>
                    <button className="button">View details <PiArrowRightLight /></button>
                </div>
                <img className="img" src={imgPath} alt={imgAlt}/>
            </div>
        </>
    )
}