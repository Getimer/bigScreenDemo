import React from "react";
import './home.scss'

const home=()=>{
    return(
        <div className="home">
            <header className="header"><img src={require("../images/header-new.png")} alt={"none"}/></header>
            <main>
                <section className="section1"></section>
                <section className="section2"></section>
                <section className="section3"></section>
                <section className="section4"></section>
                <section className="section5"></section>
            </main>
        </div>
    )
}


export default  home
