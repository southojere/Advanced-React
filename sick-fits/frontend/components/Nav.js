import Link from 'next/link'
import NavStyles from '../components/styles/NavStyles'
const Nav = () => {
    return (
        <NavStyles>
            <Link href="/"><a>Items</a></Link>
            <Link href="/sell"><a>Sell</a></Link>
            <Link href="/signup"><a>Sign Up</a></Link>
            <Link href="/orders"><a>Orders</a></Link>
            <Link href="/account"><a>Account</a></Link>
        </NavStyles>
    );
};

export default Nav;