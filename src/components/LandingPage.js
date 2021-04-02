import React from "react";
import './LandingPage.css'

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="flex-col">
                <div className="overlap-group3" style={{ backgroundImage: `url('/images/ellipse-1@1x.svg')` }}>
                    <div className="overlap-group8">
                        <div className="rectangle-2"></div>
                        <div className="email-list proximanova-bold-tall-poppy-24px">Email List</div>
                    </div>
                    <div className="flex-col-1">
                        <div className="overlap-group9">
                            <div className="rectangle-2"></div>
                            <div className="place proximanova-bold-tall-poppy-24px">Register</div>
                        </div>
                        <img className="mc-logo-v2-1" src='/images/mc-logo-v2-1.svg' />
                        <h1 className="text-1 proximanova-bold-tall-poppy-64px">Medical Opportunities <br />By You, For You</h1>
                        <div className="text-9 redhattext-normal-tall-poppy-24px">Find your passions in medicine with just the touch of a few buttons</div>
                    </div>
                    <img className="undrawmedicineb1ol-1" src='/images/undrawmedicineb1ol-1.svg' />
                </div>

                <div className="flex-row">
                    <div className="overlap-group2">
                        <img className="rectangle-24" src='/images/rectangle-24@1x.svg' />
                        <img className="rectangle-25" src='/images/rectangle-25@1x.svg' />
                        <div className="text-4 redhattext-bold-black-30px">Healthcare Internship Programs</div>
                        <div className="text-5 redhattext-normal-black-18px">An application-based global health internship in Africa organized by International Medical Aid</div>
                        <div className="group-6">
                            <div className="accesstime-24px-1">
                                <div className="overlap-group6-1">
                                    <img className="vector-8" src='/images/vector-168@2x.svg' />
                                    <img className="vector-157" src='/images/vector-165@2x.svg' />
                                    <img className="vector-158" src='/images/vector-166@2x.svg' />
                                </div>
                            </div>
                            <div className="name redhattext-normal-black-18px">Summer 2021</div>
                        </div>
                        <div className="group-7">
                            <div className="work-24px-1">
                                <div className="overlap-group6-2">
                                    <img className="vector-159" src='/images/vector-168@2x.svg' />
                                </div>
                            </div>
                            <div className="internship redhattext-normal-black-18px">Internship</div>
                        </div>
                    </div>
                    <div className="overlap-group">
                        <div className="text-2 proximanova-bold-tall-poppy-64px">Find What Works For You</div>
                        <div className="text-3 redhattext-normal-tall-poppy-24px">Browse from hundreds of different internships, research opportunities organizations, and events.</div>
                    </div>
                </div>
            </div>
            <div className="flex-row-1">
                <div className="flex-col-2">
                    <div className="text-6 proximanova-bold-tall-poppy-64px">Work Towards a Med Career</div>
                    <div className="text-10 redhattext-normal-tall-poppy-24px">We have all the tools you need to succeed!</div>
                </div>
                <img className="undrawmedicalresearchqg4d-1" src='/images/undraw-medical-research-qg4d-1@1x.svg' />
            </div>
            <div className="flex-col-3">
                <div className="overlap-group5">
                    <div className="text-7 proximanova-bold-tall-poppy-64px">Coming Soon Summer 2021</div>
                    <div className="text-11 redhattext-normal-tall-poppy-24px">Join our email list to be the first on our platform!</div>
                </div>
                <div className="overlap-group1">
                    <div className="email-list-1 proximanova-bold-tall-poppy-24px">Email List</div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;