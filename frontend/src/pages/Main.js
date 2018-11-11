import React, { Component } from "react";

import 'react-transitions/dist/animations.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../assets/css/main.css';

import eosLogo from '../assets/images/eos_logo.png';

class Main extends Component {

    render() {
        return(
            <div className="containter">

                <div className="header">
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="wallet moveFromTopFade delay80">
                                <img src={eosLogo} className="eos-logo" alt="eos-logo" /> 
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="title moveFromTopFade delay200">
                                Eos - Amplify
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="shoulder moveFromTopFade delay400">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="body">
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="options-block">
                                <div className="options flipInTop delay100">
                                    <span className="fa fa-search-plus icon" /> 
                                    <span className="">View Contract Proposal</span>
                                </div>
                                <div className="options flipInTop delay200">
                                    <span className="fa fa-clipboard icon" />
                                    <span className="">Vote Mission Milestones</span>
                                </div>
                                <div className="options flipInTop delay300">
                                    <span className="fa fa-list-ul icon" />
                                    <span className="">List Exisiting Contract</span>
                                </div>
                                <div className="options flipInTop delay400">
                                    <span className="fa fa-bullhorn icon" />
                                    <span className="">Call For Complete Vote</span>
                                </div>
                                <div className="options flipInTop delay500">
                                    <span className="fa fa-hand-pointer-o icon" />
                                    <span className="">Vote on Completed Mission</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="mid-block">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
                            </div>
                        </div>
                        <div className="grid-item"></div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main;