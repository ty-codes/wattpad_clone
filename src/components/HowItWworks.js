const HowItWorks = () => {
    return (
        <section style={{backgroundColor: "#fafafa"}}>
            <div className="howitworksheading">
                <h2>How Wattpad Works</h2>
                <p>Get your story discovered through the power of community and technology on Wattpad</p>
            </div>
            <div className="center howitworks">
                <div className="stepContainer">

                    <div className="step">
                        <div className="step-head">
                            <h2 className="count">1</h2>
                            <p className="step-description"><span className="desc_heading">Create</span><br /> Share your unique voice
                                and
                                original story on Wattpad. Find
                                the writing resources you need
                                to craft a story only you can
                                tell.</p>
                        </div>
                        <div>
                            <div className="rank">
                                <p>50+</p>
                                <p>Writing Resources</p>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-head">
                            <h2 className="count">2</h2>

                            <p className="step-description"><span className="desc_heading">Build</span><br />
                                Establish a global fan base as your
                                story gains readership and momentum.
                                Connect with other like-minded writers through storytelling.
                            </p>
                        </div>
                        <div>
                            <div className="rank">
                                <p>90 MILLION</p>
                                <p>Readers</p>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-head">
                            <h2 className="count">3</h2>
                            <p className="step-description"><span className="desc_heading">Amplify</span><br />
                                Gain Wattpad Star status and get your story published
                                or adapted into film or
                                television with Wattpad Books and Wattpad Studios!</p>
                        </div>
                        <div>
                            <div className="rank">
                                <p>1000+</p>

                                <p>Story Deals</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default HowItWorks;