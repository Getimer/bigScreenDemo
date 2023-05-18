import React from "react";
import './home.scss'
import Chart1 from "../components/chart1";
import Chart2 from "../components/chart2";


function Home(){
    return(
        <div className="home">
            <header className="header"><img src={require("../images/header-new.png")} alt={"none"}/></header>
            <main>
                <section className="section1">
                    <Chart1/>
                    <Chart2/>
                </section>
                <section className="bordered section2">

                </section>
                <section className="bordered section3"></section>
                <section className="bordered section4"></section>
                <section className="bordered section5"></section>
            </main>
        </div>
    )
}


export default  Home
