const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_text">
                <h1>Hi, we're Wattpad</h1>
                <h3 className="subtitle">The world's most-loved social storytelling platform</h3>
                <p className="fade_text about">Wattpad connects a global community of 90 million readers and
                    writers through the power of story
                </p>
                <div className="button-wrap">
                    <button>Start Reading</button>
                    <button>Start Writing</button>
                </div>
            </div>

            <div>
                <img className="hero-devices" src={require("../assets/hero-devices.png")} alt="hero devices" />
            </div>
        </div>
    );
}

export default Hero;