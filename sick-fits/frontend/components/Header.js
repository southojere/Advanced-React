import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav'
import styled from 'styled-components';

Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeError = () => {
    console.log('triggered')
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}

const Logo = styled.h1`
    font-size:4rem;
    margin-left:2rem;
    position:relative;
    z-index:2;
     a {
         padding: 0.5rem 1rem;
         background-color: ${props => props.theme.secondarycolor};
         color: ${props => props.theme.primarycolor};
         text-decoration:none;
     }
     @media (max-width: 1300px) {
         margin:0;
         text-align:center;
     }
`

const StyledHeader = styled.header`
     .bar {
         border-bottom:10px solid ${props => props.theme.primarycolor};
         display:grid;
         grid-template-columns: auto 1fr;
         justify-content:space-between;
         align-items: stretch;
         @media (max-width:1300px) {
            grid-template-columns: 1fr;
            justify-content:center;

         }
     }

     .sub-bar {
         display:grid;
         grid-template-columns: 1fr auto;
         border-bottom: 1px solid ${props => props.theme.primarycolor};
     }

`
const Header = () => {
    return (
        <StyledHeader>
            <div className="bar">
                <Logo>
                    <Link href="/">
                        <a href="">Angji</a>
                    </Link>
                </Logo>
                <Nav></Nav>
            </div>
            <div className="sub-bar">
                <p>search</p>
            </div>
            <div>Cart</div>
        </StyledHeader>
    );
};

export default Header;