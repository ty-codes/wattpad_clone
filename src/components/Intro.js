import sony from "../assets/sony.svg";
import hulu from "../assets/hulu.svg";
import syfy from "../assets/syfy.svg";
import wattpadStudios from "../assets/wattpadStudiosLogo.svg"; 

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h2>See Your Story...</h2>

                <div className="intro1">
                    <div className="icon-wrap">
                        <div className="symbol sym1"></div>
                        <span className="sym_subtitle">Get produced to movie or film</span>
                    </div>

                    <div className="icon-wrap">
                        <div className="symbol sym2"></div>
                        <span className="sym_subtitle">Get adapted to a TV series</span>

                    </div>

                    <div className="icon-wrap">
                        <div className="symbol sym3"></div>
                        <span className="sym_subtitle">Get published</span>
                    </div>
                </div>
            </div>


            <div className="intro2">
                <div className="intro2-img">
                    <img className="intro2-pic" src={require("../assets/wattpadStudiosPoster.png")} alt="wattpadStudiosPoster" />
                </div>
                <div className="intro2-text">
                    <img src={wattpadStudios} alt="wattpad studios" />
                    <p className="intro2-subtitle">Your original story could be the next big hit</p>
                    <p className="fade_text intro2-desc">
                        Wattpad Studios discovers untapped, unsigned, and
                        talented writers on Wattpad and conects them to
                        global multi-media entertainment companies.<br />

                    </p>
                    <p className="intro2-desc"> Wattpad Studios works with partners such as:</p>
                    <div className="partners">
                        <img className="partner" src={sony} alt="sony" />
                        <img className="partner" src={hulu} alt="hulu" />
                        <img className="partner" src={syfy} alt="svfy" />
                    </div>
                </div>
            </div>

            <div className="intro3">
                <div className="intro3-text">
                    <img src={wattpadStudios} />
                    <p className="intro3-subtitle">Your voice belongs on bookshelves</p>
                    <p className="fade_text intro3-desc">Wattpad Books aspires to recognize and reflect
                        diverse voices by taking Wattpad stories to
                        published books and onto bookshelves around the world.
                        <br /><br />Wattpad Books works with partners such as:
                    </p>
                    <div class="partners">
                        <img class="partner" src={require("../assets/macmillan.png")} alt="macmillan" />
                        <img class="partner" src={require("../assets/anvil.png")} alt="anvil" />
                        <img class="partner" src={require("../assets/penguin.png")} alt="penguin" />
                </div>
                </div>

                <div className="intro3-img">
                    <img className="intro3-pic" src={require("../assets/wattpadBooksPoster.png")} />
                </div>
            </div>

        </div>
    )
}
export default Intro;