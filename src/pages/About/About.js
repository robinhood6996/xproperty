import React from 'react';
import team1 from '../../images/team/1.jpg';
import team2 from '../../images/team/2.jpg';
import team3 from '../../images/team/3.jpg';
import pet1 from '../../images/team/pet1.png';
import pet2 from '../../images/team/pet2.png';
import pet3 from '../../images/team/pet3.png';
import pet4 from '../../images/team/pet4.png';

const About = () => {
    return (
        <div className="container mx-auto mt-10">
            <div>
                <h2 className="text-5xl font-semibold text-center">Meet Out Team</h2>
                <p className="text-lg font-normal  text-justify mt-4 p-3">Wherever you are in life. Whatever you’re doing. Home is a feeling everyone should own, and we’re on a mission to help renters find it. We support families looking for a place to call home, so it’s only natural that our company fosters a family atmosphere, filled with some of the most diverse, unique and talented people who share one common goal: creating a new chapter in renting for everyone.</p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-10 p-4">
                <div className="img">
                    <img className="rounded-lg m-2" src={team1} width="350px" alt="" />
                </div>
                <div className="img">
                    <img className="rounded-lg m-2" src={team2} width="350px" alt="" />
                </div>
                <div className="img">
                    <img className="rounded-lg m-2" src={team3} width="350px" alt="" />
                </div>
            </div>

            <div className="pet mt-10">
                <h2 className="text-5xl font-semibold text-center">Apartment List Pets</h2>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 mt-10 p-4 container mx-auto">
                <div className="img">
                    <img className="rounded-lg m-2 shadow-lg" src={pet1} width="250px" alt="" />

                </div>
                <div className="img">
                    <img className="rounded-lg m-2 shadow-lg" src={pet2} width="250px" alt="" />

                </div>
                <div className="img">
                    <img className="rounded-lg m-2 shadow-lg" src={pet3} width="250px" alt="" />

                </div>
                <div className="img">
                    <img className="rounded-lg m-2 shadow-lg" src={pet4} width="250px" alt="" />

                </div>
            </div>


        </div>
    );
};

export default About;