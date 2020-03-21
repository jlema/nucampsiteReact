import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampSite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({ selectedCampSite: campsiteId });
    }

    render() {
        return (
            <div>
                <Header />
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampSite)[0]} />
                <Footer />
            </div>
        );
    }

}

export default Main;