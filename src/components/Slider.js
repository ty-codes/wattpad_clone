const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide slider" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner slider_wrapper">
            <center className="carousel-item active">

                <div className="d-flex justify-center">
                    <div className="wrap_quote">
                        <div className="quote"></div>
                        <img className="d-block slider_img" width="300px" src={require("../assets/white-stag.png")} alt="white_stag" />

                    </div>
                    <div style={{width: "40%"}}>
                        <p className="testimonial">
                            Working with Wattpad Studios is like a dream.
                            Not only do they care about your success,
                            but also staying true to your vision.
                        </p>
                        <p className="text-right text-uppercase speaker">- KARA BARBIERI (@PANDEAN)</p>
                        <p className="bio">
                            Kara Barbieri is a twenty-two year old author
                            with a love for the weird and mystic. Her debut novel,
                            WHITE STAG, will be published by Wednesday
                            Books/Macmillan in January 2019.
                        </p>
                        <button className="carousel_btn">Start Reading</button>
                    </div>
                </div>

            </center>
            <center className="carousel-item">
                <div className="d-flex">
                    <div className="wrap_quote">
                        <div className="quote"></div>
                        <img className="d-block slider_img" width="300px" src={require("../assets/walter-boys.png")} alt="walter_boys" />

                    </div>
                    <div style={{width: "40%"}}>
                        <p className="testimonial">When I joined Wattpad, I gained a second family
                            who were as passionate about reading and riting as I am.</p>
                        <p className="text-right text-uppercase speaker">- ali novak (@fallzswimmer)</p>
                        <p className="bio">
                            Ali Novak is a Wisconsin native and a graduate of the University of Wisconsin-Madison's
                            creative writing program. She started writing her debut novel My Life with the Walter Boys
                            when she as only fifteen. Since then, her work has received more than 150 million hits
                            online
                            and My Life with the Walter Boys has been optioned for television by Komixx Entertainment
                            and
                            Sony Pictures Television.
                        </p>
                        <button className="carousel_btn">Start Reading</button>
                    </div>
                </div>
            </center>
            <center className="carousel-item">
                <div className="d-flex">
                    <div className="wrap_quote">
                        <div className="quote"></div>
                        <img className="d-block slider_img" width="300px" src={require("../assets/black-eye.png")} alt="black_eye" />

                    </div>
                    <div style={{width: "40%"}}>
                        <p className="testimonial">
                            Being a Wattpad Star is the foundation for everything I do as a writer,
                            from the behind the scenes wrangling to the big, game-changing projects.</p>
                        <p className="text-right text-uppercase speaker">- BEN SOBIECK (@BENSOBIECK)</p>
                        <p className="bio">
                            Benjamin Sobieck is a Wattpad Star and editor of “The Writer’s Guide
                            to Wattpad,” published in August 2018 by Writer’s Digest Books and
                            featuring contributions by 23 Wattpad Stars, ambassadors, and staff.
                            His stories on Wattpad, such as “When the Black-Eyed Children Knock,”
                            have drawn more than 1.5 million reads.
                        </p>
                        <button className="carousel_btn">Start Reading</button>
                    </div>
                </div>
            </center>
            <center className="carousel-item">

                <div className="d-flex justify-center">
                    <div className="wrap_quote">
                        <div className="quote"></div>
                        <img className="d-block slider_img" width="300px" src={require("../assets/feather.png")} alt="feather" />

                    </div>
                    <div style={{width: "40%"}}>
                        <p className="testimonial">
                            Having been active on Wattpad for several years,
                            I knew it would be the perfect platform for a thriller
                            with lots of cliffhangers for readers to discuss.
                            Teen horror is my passion, so I can’t wait to be able
                            to share Light as a Feather with other horror
                            aficionados on Hulu.
                        </p>
                        <p className="text-right text-uppercase speaker">- ZOE AARSEN (@ZAARSENIST)</p>
                        <p className="bio">
                            Zoe Aarsen is a graphic designer and copywriter.
                            Her first paranormal YA novel, Light as a Feather,
                            Stiff as a Board, is being published by Simon &
                            Schuster and turned into a television series on Hulu.
                        </p>
                        <button className="carousel_btn">Start Reading</button>
                    </div>
                </div>

            </center>
            <center className="carousel-item">

                <div className="d-flex justify-center">
                    <div className="wrap_quote">
                        <div className="quote"></div>
                        <img className="d-block slider_img" width="300px" src={require("../assets/chasing-red.png")} alt="chasing_red" />

                    </div>
                    <div style={{width: "40%"}}>
                        <p className="testimonial">
                            The Wattpad Stars Program gave me opportunities
                            I never thought possible. It connected me to a world
                            that I had only imagined. I don’t know how else to
                            say it. It changed my life!
                        </p>
                        <p className="text-right text-uppercase speaker">- ISABELLE RONIN (@ISABELLERONIN)</p>
                        <p className="bio">
                            Chasing Red was one of 2016’s most-read stories on Wattpad
                            -- and that was just the beginning for this
                            Winnipeg-Manitoba-based writer. In a single year,
                            her explosive hit has racked up over 127 million reads
                            on Wattpad. Newly edited and expanded, the book was
                            split into two and hit bookstore shelves in 2017.
                        </p>
                        <button className="carousel_btn">Start Reading</button>
                    </div>
                </div>

            </center>
        </div>
         {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>  */}
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    );
}

export default Slider;