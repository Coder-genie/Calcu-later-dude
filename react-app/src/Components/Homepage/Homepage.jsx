import React from "react";
import Card from "./Card";
import HomeLogo from "./HomeLogo";
import "./HomepageStyle.css";

function Homepage() {
    return <div>
        <HomeLogo />
        <div className="container text-center">
            <div className="row">
                <Card props={{
                    title: 'SIP',
                    content: 'Calculate on how much you need to save or how much you will gain with your SIP'
                }} />
                <Card props={{
                    title: 'PPF',
                    content: 'Calculate your returns on Public Provident Fund (PPF)'
                }} />
                <Card props={{
                    title: 'RD',
                    content: 'Calculate your returns on Recurring Deposit (RD)'
                }} />
            </div>
        </div>
    </div>;
}

export default Homepage;