import './App.css';
import { PiMessengerLogo } from "react-icons/pi";
import { PiShoppingBag } from "react-icons/pi";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SectionTextLeft } from './components/SectionTextLeft';
import { SectionTextRight } from './components/SectionTextRight';
import { logo, menu, imgChildMom, imgMom, imgTravel, imgBoyTravel, imgSonic, imgFlower, imgSpaceship, imgModels, imgDadSon, imgChildren, imgBoy, imgToys } from ".";
import { Menu } from "./components/Menu";

export function App() {
 
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
}

const navLinks = [
  'Gifting',
  'Travel',
  'Adults Welcome',
  'Art & Home Décor',
  'Space',
  'Pop Culture',
  'Todlers',
  'Real World Role Playing'
]

const navIcons = [
  { icon: <PiMessengerLogo size={24} />, text: 'Contact us' },
  { icon: <PiShoppingBag size={24} />, text: 'Request' },
  { icon: <PiMagnifyingGlassLight size={24} />, text: 'Search' }
]

  return (
    <>
      <header className='header-container'>
        <div className="header-menu">
            <img src={logo} alt="logo da lego"/>
            <div className="categories" id="menu-icon" onClick={toggleMenu}>
              <img src={menu} alt="ícone redondo azul" width={50}/>
              <p className="categories">Categories</p>
            </div>
            <Navbar items={navLinks} navIcons={navIcons}/>
        </div>
      </header>
        <Menu menuOpen={menuOpen} onClose={toggleMenu}/>
      <main>
        <section className="banner">
            <p className="text-tag">&lt;video autoplay with no sound&gt;</p>
            <div className="container-banner">
              <div className="text-banner">
                <h1 className="title-banner">Welcome to the Play Matters Interactive Lookbook</h1>
              </div>
              <div className='scroll-down'>
                <p>Scroll down</p>
              </div>
          </div>
        </section>
        <div className="content-principal">
          
          <section className="container-section" id="Gifting">
              <SectionTextLeft
                title='GIFTING'
                paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                cardTitle='Toys perfect for birthday gift-giving season in Spring'
                cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                imgPath={imgChildMom}
                imgAlt='mulher e criança olhando para o celular'
              />
              <SectionTextRight
                imgPath={imgMom}
                imgAlt='mulher segurando um avião de lego'
                cardTitle='Gifts for Mom'
                cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
              />
            <hr className="hr-pink"/>
          </section>
          <section className="container-section" id="Travel">
              <SectionTextLeft
                  title='TRAVEL'
                  paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                  cardTitle='Travel the world no matter where you are. No Passport needed.'
                  cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                  imgPath={imgTravel}
                  imgAlt='maquete do coliseu'
                />
              <SectionTextRight
                imgPath={imgBoyTravel}
                imgAlt='menino segurando um brinquedo'
                cardTitle='Fun accessories to take with you on your travels or keep kids entertained'
                cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
              />
            <hr className="hr-blue"/>
          </section>
          <section className="container-section" id="Adults Welcome">
            <SectionTextLeft
                  title='ADULTS WELCOME'
                  paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                  cardTitle='For the Kids at Heart who love to unplug, unbox and unwind'
                  cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                  imgPath={imgSonic}
                  imgAlt='mulher segurando um boneco do sonic'
            />
            <hr className="hr-yellow"/>
          </section>
          <section className="container-section" id="Art & Home Décor">
            <SectionTextRight
                titleRight='ART & HOME DÉCOR'
                paragraphRight='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                imgPath={imgFlower}
                imgAlt='flores coloridas'
                cardTitle='Playful ideas for refreshing your space while tapping into your more creative side'
                cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
            />
            <hr/>
          </section>
          <section className="container-section" id="Space">
            <SectionTextLeft
                  title='SPACE'
                  paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                  cardTitle='Capture the wonders of space and exploration'
                  cardParagraph='In the last 30 years, nothing has taken us deeper into space – or better shaped the way we see the universe – than the Hubble Space Telescope.'
                  imgPath={imgSpaceship}
                  imgAlt='maquete de nave'
            />
            <hr/>
          </section>
          <section className="container-section" id="Pop Culture">
            <SectionTextRight
                  titleRight='POP CULTURE'
                  paragraphRight='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                  imgPath={imgModels}
                  imgAlt='mulher segurando mini maquetes'
                  cardTitle='Recreate scenes from your favorite movies and TV series'
                  cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
            />
          <hr/>
          </section>
          <section className="container-section" id="Todlers">
            <SectionTextLeft
                title='TODLERS'
                paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                cardTitle='Waterproof toys for toddlers and beyond'
                cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                imgPath={imgDadSon}
                imgAlt='pai e filho brincando'
            />
            <SectionTextRight
                imgPath={imgChildren}
                imgAlt='duas crianças brincando'
                cardTitle='xx TBD'
                cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
            />
          <hr className="hr-red"/> 
          </section>
          <section className="container-section" id="Real World Role Playing">
            <SectionTextLeft
                  title='REAL WORLD ROLE PLAYING'
                  paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                  cardTitle='Celebrating the everyday heroes'
                  cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
                  imgPath={imgBoy}
                  imgAlt='menino brincando de lego'
            />
            <SectionTextRight
                  imgPath={imgToys}
                  imgAlt='bonequinhos do lego de várias profissões'
                  cardTitle='xxxxx TBD'
                  cardParagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'
            />
          </section>
        </div>
        <hr/>
      </main>
      <footer className="footer">
          <p> LEGO, the LEGO logo and the Brick and Knob configurations are trademarks of the LEGO Group. ©2022 The LEGO Group.</p>
      </footer>
    </>
  )
}
