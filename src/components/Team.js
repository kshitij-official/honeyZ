import React from 'react';
import imageTeam from "../images/team-text.svg"; 

export const Team = () => {
    return (
        <div className='team-section'>
            <img src={imageTeam} alt="No image"/>
            <div className='row team-row'>
                <div className='col teambox'></div>
                <div className='col teambox'></div>
                <div className='col teambox'></div>
                <div className='col teambox'></div>
                <div className='col teambox'></div>
                <div className='col teambox'></div>
            </div>
            <div className='row team-row-content'>
                <div className='col team-content'>
                    <p>Name </p>
                    <p>Title</p>
                </div>
                <div className='col team-content'>
                <p>Name </p>
                    <p>Title</p>
                </div>
                <div className='col team-content'>
                <p>Name </p>
                    <p>Title</p>
                </div>
                <div className='col team-content'>
                <p>Name </p>
                    <p>Title</p>
                </div>
                <div className='col team-content'>
                <p>Name </p>
                    <p>Title</p>
                </div>
                <div className='col team-content'>
                <p>Name </p>
                    <p>Title</p>
                </div>
            </div>
        </div>
    );
};
