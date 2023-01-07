const Discovery = () => {
    return (
        <section id="discovery">
        <h2>Get discovered</h2>
        <div className="discovery">

            <div className="discovery_section">

                <div id="stack">
                    <div className="stack">
                        <span><img src={require("../assets/writing-contests.png")} alt="contests" /></span>

                    </div>

                </div>

                <div className="discoverytext">
                    <h3>Writing Contests</h3>
                    <p>Enter writing contests to get published, win awards, and partner
                        with global brands
                    </p>
                </div>

            </div>


            <div className="discovery_section">

                <div id="stack">
                    <div className="stack">
                        <span><img src={require("../assets/wattys_avatar.png")} alt="thewattys" /></span>

                    </div>
                </div>
                <div className="discoverytext">
                    <h3>The Wattys</h3>
                    <p>Wattpad's annual awards program committed to celebrating the best
                        stories around the world
                    </p>
                </div>

            </div>


            <div className="discovery_section">

                <div id="stack">
                    <div className="stack">
                        <span><img src={require("../assets/wp-picks.png")} alt="picks" /></span>
                    </div>


                    <div className="discoverytext">
                        <h3>Wattpad picks</h3>
                        <p>Get featured on our hand-picked reading list</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Discovery;