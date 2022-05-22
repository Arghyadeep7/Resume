

const Profiles=()=>{
    return (
        <div style={{ margin: "5% auto"}}>
            <h1>PROFILES</h1>
            <div className="row">
                <div className="col-6 col-md-3 mb-3">
                    <button className="btn btn-lg" style={{backgroundColor:"white"}}>
                        <a href="https://github.com/Arghyadeep7" target="_blank" style={{textDecoration: "none", color: "black"}}><i class="fa-brands fa-github"></i> Github</a>
                    </button>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <button className="btn btn-lg" style={{backgroundColor:"orange"}}>
                        <a href="https://leetcode.com/arghyadeep7/" target="_blank" style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-code"></i> Leetcode</a>
                    </button>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <button className="btn btn-lg" style={{backgroundColor:"#7B3F00"}}>
                        <a href="https://www.codechef.com/users/arghya7" target="_blank" style={{textDecoration: "none", color: "white"}}><i class="fa-solid fa-copyright"></i> Codechef</a>
                    </button>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <button className="btn btn-lg" style={{backgroundColor:"red"}}>
                        <a href="https://codeforces.com/profile/Arghya7" target="_blank" style={{textDecoration: "none", color: "white"}}><i class="fa-solid fa-chart-simple"></i> Codeforces</a>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col mb-3">
                    <button className="btn btn-lg btn-primary">
                        <a href="https://www.linkedin.com/in/arghya-deep-pal7/" target="_blank" style={{textDecoration: "none",color:"white"}}>Connect with me on <i class="fa-brands fa-linkedin"></i></a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profiles;