import Link from 'next/link'

function getNavLinks () {
  return [
    { name: 'Home', href: '/'},
    { name: 'Logs', href: '/logs'},
    { name: 'Login', href: '/login'},
  ]
}

const linkStyle = {
    marginRight: 15,
    display: 'block',
}


const Header = () => (
    <header>
        <nav>
        <ul style={linkStyle}>
            {getNavLinks().map((link) => (
                <li key={link.name}>
                    <Link href={`${link.href}`}>
                        <a>{link.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        </nav>
        <style jsx>{`
            nav ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #333;
            }

            nav ul li {float: left;}

            nav ul li a {
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }

            nav ul li a:hover:not(.active) {background-color: #444;}

            nav ul li a.active {background-color: #4CAF50;}

            nav ul li.right {float: right;}

            @media screen and (max-width: 600px){
                nav ul li.right, 
                nav ul li {float: none;}
            }
        `}
        </style>
    </header>
)

export default Header
