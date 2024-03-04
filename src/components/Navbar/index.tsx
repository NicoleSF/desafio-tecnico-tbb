import './styles.css';

type NavbarProps = {
    items: string[];
    navIcons: NavbarIconProps[];
}

type NavbarIconProps = {
    icon: React.ReactNode;
    text: string;
}

export const Navbar= ({ items, navIcons }: NavbarProps) => {
    return(
        <nav className="menu">
            <ul className='nav-list'>
              {items.map((item, index) => (
                <li key={index}><a href={`#${item}`}>{item}</a></li>
              ))}
            </ul>
            <div className="second-menu">
                {navIcons.map((icon, index) => (
                    <div key={index} className="icons-menu">
                        {icon.icon}
                        <p>{icon.text}</p>
                    </div>
                ))}
          </div>
        </nav>
    )
}