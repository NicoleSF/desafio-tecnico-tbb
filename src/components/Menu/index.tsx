import "./styles.css";
import { PiHouse } from "react-icons/pi";
import { PiShoppingBag } from "react-icons/pi";
import { PiMessengerLogo } from "react-icons/pi";
import { imgArchitecture, imgCity, imgCreator, imgDots, imgDuplo, imgFriends, imgIdea, imgMinifigures, imgTechnic, logo } from "./imports";

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
                                    <button onClick={onClose} className="button-logo">
                                        <img src={logo} alt="logo da lego"/>
                                    </button>
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
                                <p className="menu-item">Gifting</p>
                                <p className="menu-item">Travel</p>
                                <p className="menu-item">Adults Welcome</p>
                                <p className="menu-item">Art & Home Decor</p>
                                <p className="menu-item">Space</p>
                                <p className="menu-item">Pop Culture</p>
                                <p className="menu-item">Toddlers</p>
                                <p className="menu-item">Real World Role Playing</p>
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