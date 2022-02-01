
import './Team.css';
import React from "react";

import XurgisLogo from "../../images/GenesisRobos/1.png";
import ZedsLogo from "../../images/GenesisRobos/4.png";
import DadlessLogo from "../../images/GenesisRobos/5.png";
import WinduLogo from "../../images/GenesisRobos/7.png";


function Team() {
    return (
        <div className="RobosTeam">
            <article class="card">
                <header class="card-header">
                    <h2>Project Creator</h2>
                </header>
                <div class="card-author">
                    <a class="author-avatar" href="#">
                        <img src={XurgisLogo} alt="loglogo" />
                    </a>
                    <div class="author-name">
                        <div class="author-name-prefix">hoe</div>
                            Xurgi
                        </div>
                    </div>
                    <div class="tags">
                        <a href="https://twitter.com/Xurgz">Twitter</a>
                        <a href="https://discord.gg/bctUawQPB3">Discord</a>
                    </div>
            </article>
            <article class="card">
                <header class="card-header">
                    <h2>Project Artist</h2>
                </header>

                <div class="card-author">
                    <a class="author-avatar" href="#">
                        <img src={ZedsLogo} className="author-avatar" alt="loglogo" />
                    </a>
    

                    <div class="author-name">
                        <div class="author-name-prefix">Legened</div>
                            Zed
                        </div>
                    </div>
                    <div class="tags">
                        <a href="https://twitter.com/Zed_nft">Twitter</a>
                        <a href="https://discord.gg/bctUawQPB3">Discord</a>
                    </div>
            </article>
            <article class="card">
                <header class="card-header">
                    <h2>Project Developer</h2>
                </header>

                <div class="card-author">
                    <a class="author-avatar" href="#">
                        <img src={DadlessLogo} className="Team-logo" alt="loglogo" />
                    </a>
    

                    <div class="author-name">
                        <div class="author-name-prefix">0xOrphan</div>
                            DadlessNsad
                        </div>
                    </div>
                    <div class="tags">
                        <a href="https://twitter.com/0xOrphan">Twitter</a>
                        <a href="https://discord.gg/bctUawQPB3">Discord</a>
                    </div>
            </article>
            {/* <article class="card">
                <header class="card-header">
                    <h2>Project Coordination</h2>
                </header>

                <div class="card-author">
                    <a class="author-avatar" href="#">
                        <img src={WinduLogo} className="Team-logo" alt="loglogo" />
                    </a>
    

                    <div class="author-name">
                        <div class="author-name-prefix"></div>
                            Windu
                        </div>
                    </div>
                    <div class="tags">
                        <a href="https://twitter.com/WinduNFT">Twitter</a>
                        <a href="https://discord.gg/bctUawQPB3">Discord</a>
                    </div>
            </article> */}
        </div>
    )
}
export default Team;


                {/* <div className="RobosTeamMemberCTN">
                    <img src={ZedsLogo} className="Team-logo" alt="loglogo" />
                    <h1 className="RobosTeamMember">Zed</h1>
                    <p className="RobosTeamTitle">Artist</p>
                </div>
                <div className="RobosTeamMemberCTN">
                    <img src={DadlessLogo} className="Team-logo" alt="logo" />
                    <h1 className="RobosTeamMember">DadlessNsad</h1>
                    <p className="RobosTeamTitle">Dev</p>
                </div>
                <div className="RobosTeamMemberCTN">
                    <img src={WinduLogo} className="Team-logo" alt="logo" />
                    <h1 className="RobosTeamMember">Windu</h1>
                    <p className="RobosTeamTitle">Project Coordination</p>
                </div> */}