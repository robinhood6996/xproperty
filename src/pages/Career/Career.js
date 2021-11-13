import React from 'react';
import b1 from '../../images/career/1.svg';
import b2 from '../../images/career/2.svg';
import b3 from '../../images/career/3.svg';
import b4 from '../../images/career/4.svg';
import b5 from '../../images/career/5.svg';
import b6 from '../../images/career/6.svg';
import b7 from '../../images/career/7.svg';
import b8 from '../../images/career/8.svg';

const Career = () => {
    return (
        <div className="container mx-auto">
            <div className="heading mt-10">
                <h2 className="text-6xl font-semibold text-center text-blue-400">Join Our Team</h2>
                <p className="text-lg font-medium text-center mt-5">
                    Reach new heights among world-class talent and resources. Here you can be uniquely you - welcome home.
                </p>
            </div>
            <div className="text-center m-4">
                <button className="px-8 py-2  text-lg  font-bold bg-blue-400 text-white text-center rounded-md">Open Positon</button>
            </div>


            <div className="benefits">
                <h2 className="text-4xl font-semibold text-left ">Benefits</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-10 p-2">
                    <div className="item shadow-lg text-center rounded m-2">
                        <div className="img flex justify-center bg-blue-200 p-4">
                            <img src={b1} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Medical, Dental, and Vision Coverage</h3>
                            <p className="mt-2 text-lg font-light p-2">100% of premiums covered for you and all your dependents</p>
                        </div>
                    </div>
                    <div className="item shadow-lg text-center rounded  m-2">
                        <div className="img flex justify-center bg-blue-200 p-4">
                            <img src={b2} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>One Medical
                                Membership</h3>
                            <p className="mt-2 text-lg font-light p-2">Membership fully covered by the company</p>
                        </div>
                    </div>
                    <div className="item shadow-lg text-center rounded  m-2">
                        <div className="img flex justify-center bg-blue-200 p-4">
                            <img src={b3} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Parental Leave</h3>
                            <p className="mt-2 text-lg font-light p-2">2-week fully paid parental leave and 5-week phase-in program</p>
                        </div>
                    </div>
                    <div className="item shadow-lg text-center rounded  m-2">
                        <div className="img flex justify-center bg-blue-200 p-4">
                            <img src={b4} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Flexible Time Off</h3>
                            <p className="mt-2 text-lg font-light p-2">11 company holidays per year plus unlimited flexible time off</p>
                        </div>
                    </div>
                    <div className="item shadow-lg text-center rounded  m-2">
                        <div className="img flex justify-center bg-blue-200 p-4">
                            <img src={b5} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Quarterly Leadership Awards</h3>
                            <p className="mt-2 text-lg font-light p-2">$100 Amazon gift card + other incentives if you get nominated</p>
                        </div>
                    </div>
                    <div className="item shadow-lg text-center rounded  m-2">
                        <div className="img flex justify-center bg-blue-200 p-4">
                            <img src={b6} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Home Office Reimbursement</h3>
                            <p className="mt-2 text-lg font-light p-2">To help cover desks, ergonomic chairs, internet etc.
                                (if applicable)</p>
                        </div>
                    </div>
                    <div className="item shadow-lg text-center rounded  m-2">
                        <div className="img flex justify-center bg-blue-200 p-4">
                            <img src={b7} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>401k</h3>
                            <p className="mt-2 text-lg font-light p-2">Company-sponsored 401k plan through Fidelity</p>
                        </div>
                    </div>
                    <div className="item shadow-lg text-center rounded  m-2">
                        <div className="img flex justify-center bg-blue-200 p-4">
                            <img src={b8} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Health & Wellness Reimbursement
                            </h3>
                            <p className="mt-2 text-lg font-light p-2">To help cover monthly gym membership, yoga classes, Peloton subscription, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;