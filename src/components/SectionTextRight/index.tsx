import { PiArrowRightLight } from "react-icons/pi";
import './styles.css';

type SectionTextRight = {
    imgPath: string;
    imgAlt: string;
    cardTitle: string;
    cardParagraph: string;
    titleRight?: string;
    paragraphRight?: string;
}

export const SectionTextRight = ({ imgPath, imgAlt, cardTitle, cardParagraph, titleRight, paragraphRight }: SectionTextRight) => {
    return(
        <>
            {titleRight && (
                    <>
                        <div className="content">
                            <h4 className="title">{titleRight}</h4>
                            <p className="paragraph">{paragraphRight}</p>
                        </div>
                        <hr className="hr"/>
                    </>
                )       
            }
            <div className="content-right">
                <img className="img-right" src={imgPath} alt={imgAlt}/>
                <div className="content-card-right">
                    <h4 className="card-title">{cardTitle}</h4>
                    <p className="card-paragraph">{cardParagraph}</p>
                    <div className="container-button">
                        <button className="button-right">View details <PiArrowRightLight /></button>
                    </div>
                </div>
            </div>
        </>
    )
}