import "./styles.css";
import logo from "../../assets/brand_logo.png";
import { PiHouse } from "react-icons/pi";
import { PiShoppingBag } from "react-icons/pi";
import { PiMessengerLogo } from "react-icons/pi";
import imgArchitecture from "../../assets/architecture.png";
import imgCity from "../../assets/city.png";
import imgCreator from "../../assets/creator.png";
import imgDots from "../../assets/dots.png";
import imgDuplo from "../../assets/duplo.png";
import imgFriends from "../../assets/friends.png";
import imgIdea from "../../assets/ideas.png";
import imgMinifigures from "../../assets/minifigures.png";
import imgTechnic from "../../assets/technic.png";

type MenuProps = {
    menuOpen: boolean;
    onClose: () => void;
}

export const Menu = ({ menuOpen, onClose }: MenuProps) => {

    return(
        <>
            {menuOpen && (
                    <div className="open-menu">
                        <aside>
                            <div className="container">
                                <div className="logo-container">
                                    <img src={logo} alt="logo da lego"/>
                                    <button className="button-close" onClick={onClose}>X</button>
                                </div>
                                <div className="container-buttons">
                                    <div className="content-buttons">
                                        <PiHouse/>
                                        <p>Home</p>
                                    </div>
                                    
                                    <div className="content-buttons">
                                        <PiShoppingBag />
                                        <p>Requests</p>
                                    </div>
                                    <div className="content-buttons">
                                        <PiMessengerLogo />
                                        <p>Contact us</p>
                                    </div>
                                </div>
                            </div>
                            <div className="title-content">
                                <hr/>
                                <p>Themes</p>
                            </div>
                            <div className="container-menu">
                                <p>Gifting</p>
                                <p>Travel</p>
                                <p>Adults Welcome</p>
                                <p>Art & Home Decor</p>
                                <p>Space</p>
                                <p>Pop Culture</p>
                                <p>Toddlers</p>
                                <p>Real World Role Playing</p>
                            </div>
                        </aside>
                        <section className="grid-buttons">
                            <button><img src={imgArchitecture} alt="logo architecture" width={130}/></button>
                            <button><img src={imgCity} alt="logo city" width={100}/></button>
                            <button><img src={imgCreator} alt="logo creator" width={100}/></button>
                            <button><img src={imgDots} alt="logo dots" width={100}/></button>
                            <button><img src={imgDuplo} alt="logo duplo" width={100}/></button>
                            <button><img src={imgFriends} alt="logo friends" width={100}/></button>
                            <button><img src={imgIdea} alt="logo ideas" width={100}/></button>
                            <button><img src={imgMinifigures} alt="logo minifigures" width={130}/></button>
                            <button><img src={imgTechnic} alt="logo technic" width={130}/></button>
                        </section>
                    </div>
    
            )}

        </>

    )
}