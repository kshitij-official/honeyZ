import React from 'react';
import { ComingSoon } from './ComingSoon';
import { AboutUs } from './AboutUs';
import { Benefits } from './Benefits';
import { Roadmap } from './Roadmap';
import { RoadmapTwo } from './RoadmapTwo';
import { Partners } from './Partners';
import { Team } from './Team';
import { Faq } from './Faq';
import { Footer } from './Footer';

export const Home = () => {
    return (
        <div id='home-id'>
            <ComingSoon />
            <AboutUs />
            <Benefits />
            <Roadmap />
            <RoadmapTwo />
            <Partners />
            <Team />
            <Faq />
        </div>
    );
};
