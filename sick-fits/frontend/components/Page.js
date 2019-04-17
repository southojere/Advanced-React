import React, { Component } from 'react';
import Header from '../components/Header'
import Meta from '../components/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
    secondarycolor: '#ffc33e',
    primarycolor: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
    background:white;
    color:${theme.primarycolor};
`

const Inner = styled.div`
    max-width:${props => props.theme.maxWidth};
    margin: 0 auto;
    padding:2rem;
`
injectGlobal`
    html {
        box-sizing:border-box;
        font-size:10px;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 

    }
    
    *,*:before, *:after {
        box-sizing:inherit;
    }

    body {
        padding:0;
        margin:0;
        font-size:1.5rem;
        line-height:2;
    }

    a {
        text-decoration:none;
        color: ${theme.primarycolor}
    }
`

/**
 * Page component will contain things that show up on every single page.
 */
class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Meta />
                    <Header></Header>
                    <Inner>
                        {/* Page content */}
                        {this.props.children}
                    </Inner>
                </div>
            </ThemeProvider>
        );
    }
}

export default Page;