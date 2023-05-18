import React from "react";
import './home.scss'
import Chart1 from "../components/chart1";
import Chart2 from "../components/chart2";
import Chart3 from "../components/chart3";


function Home(){
    const year = new Date().getFullYear();
    return(
        <div className="home">
            <header className="header"><img src={require("../images/header-new.png")} alt={"none"}/></header>
            <main>
                <section className="section1">
                    <Chart1/>
                    <div className="charts2"><Chart2 /></div>
                </section>
                <section className="bordered section2">
                    <Chart3/>
                </section>
                <section className="bordered section3"></section>
                <section className="bordered section4"></section>
                <section className="bordered section5"></section>
            </main>
            <footer>
                &copy;CSG 2023-{year}
            </footer>
        </div>
    )
}


export default  Home
