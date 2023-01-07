const Footer = () => {
    return (
        <>
            <section className="">
                <div className="footer">
                    <div className="footer-wrap">
                        <h2>Take Wattpad with you</h2>
                        <p>Read and write everywhere, even offline</p>
                        <div className="button-wrap center-button">
                            <button>Start Reading</button>
                            <button>Start Writing</button>
                        </div>
                    </div>
                    <img className="" src={require("../assets/footer-devices.png")} alt="" />


                </div>

            </section>

            <section className="footer_end">

                <div>
                    <p>Paid Stories</p>
                    <p>Try premium</p>
                    <p>Get the App</p>
                    <p>Language</p>
                    <p style={{borderRight: "2px thin #aaa"}}>Writers</p>

                    <p>Business</p>
                    <p>Jobs</p>
                    <p>Press</p>
                </div>

                <div>
                    <p className="fade_text">Terms</p>
                    <p className="fade_text">Privacy</p>
                    <p className="fade_text">Assessibility</p>
                    <p className="fade_text">Help</p>
                    <p className="fade_text">@2022 Wattpad</p>
                </div>

            </section>
        </>

    );
}

export default Footer;