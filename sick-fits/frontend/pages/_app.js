import App, { Container } from 'next/app'

import React, { Component } from 'react';
import Page from '../components/Page'
// Root most thing 
class MyApp extends App {
    render() {
        const { Component } = this.props;

        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        );
    }
}

export default MyApp;