import { useState } from "react";

const Header = () => {

    const [brandName, setBrandName] = useState("Baljeet Singh");

    const [menuLink,setMenuLink] = useState([
        {
            title : 'Home',
            link : '/home',
            id:1
        },
        {
            title : 'Skills',
            link : '/skills',
            id:2
        },
        {
            title : 'About',
            link : '/about',
            id:3
        },
        {
            title : 'Contact',
            link : '/contact',
            id:4
        },
        {
            title : 'Portfolio',
            link : '/portfolio',
            id:5
        }
    ]);

    const [actionButton, setActionButton]  = useState({
        title : 'Hire Me',
        link : '/hire-me'
    });

    return (
        <>
            <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
                
                <div>
                    <h2 className="text-2xl font-bold">{brandName}</h2>
                </div>
                <div className="space-x-7">
                    
                    
                    { menuLink.map(link => (
                        <a key={link.id} href={link.link} className="hover:text-orange-600">
                            {link.title}
                        </a>
                    ))}

                </div>
                <div>
                   <a href={actionButton.link} className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg text-2xl">{actionButton.title}</a>
                </div>

            </div>
        </>
    );
}

export default Header;