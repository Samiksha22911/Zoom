import React from 'react'
import "../App.css"

export default function LandingPage(){
    return(
        <div className= 'landingPageContainer'>
            <nav>
                <div className= 'navHeader'>
                    <h2>Apna Video Call</h2>
                </div>
                <div className= 'navlist'>
                    <p>Join as Guest</p>
                    <p>Register</p>
                    {/* <button>Login</button> */}
                    <div roll= 'button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className= "landingMainContainer">
                <div>
                    <h1><span style= {{ color: 'darkorange'}}>Connect</span> with your Loved Ones</h1>

                    <p>Cover the distance by Apna Video Call</p>
                    <div roll= 'button'>
                        <Link to= {"/home"} >Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt= "Mobile"/>
                </div>
            </div>




        </div>
    )

}

// -> CSS TO JSX
// -> PREMADE COMPONENTS