import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
    
const Projects=()=>{

    const mailIt=["Mail-It-1","Mail-It-2","Mail-It-3","Mail-It-4","Mail-It-5","Mail-It-6","Mail-It-7"];

    const eHub=["E-Hub-1", "E-Hub-2", "E-Hub-3", "E-Hub-4", "E-Hub-5", "E-Hub-6", "E-Hub-7", "E-Hub-8", "E-Hub-9", "E-Hub-10", "E-Hub-11", "E-Hub-12"];

    const resume=["Online-Resume-1","Online-Resume-2","Online-Resume-3","Online-Resume-4"];

    const expensesTracker=["Expenses-Tracker-1","Expenses-Tracker-2","Expenses-Tracker-3"];

    return (
        <Row >
            <h3>PROJECTS</h3>
            <Col lg={6} style={{marginBottom:'40px'}}>
                <Carousel indicators={false}>
                    {mailIt.map((src)=>(
                        <Carousel.Item style={{border:"2px solid black"}}>
                            <img className="d-block w-100" src={`/assets/${src}.png`} alt={src}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col lg={6} style={{marginBottom:'40px', border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>MAIL-IT</h3>
                <h5>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="https://mail-it.vercel.app/" style={{textDecoration:'none'}} target="_blank"><i class="fas fa-code"></i>&nbsp;Website Link</a>
                        <span><i class="fab fa-github"></i>&nbsp;Private Repo</span>
                    </div>
                </h5>
                <h6>Very easy and user friendly mailing app!</h6>
                <ul>
                    <li>
                        Register and login to use the mailing app
                    </li>
                    <li>
                        Compose and send emails to users across this platform
                    </li>
                    <li>
                        Delete/star mails as necessary
                    </li>
                    <li>
                        Updations occur in real-time
                    </li>
                </ul>
                <h5>MongoDb | Express | React | Node | React-Bootstrap | CSS</h5>
            </Col>
            
            <Col lg={6} style={{marginBottom:'40px'}}>
                <Carousel indicators={false}>
                    {eHub.map((src)=>(
                        <Carousel.Item style={{border:"2px solid black"}}>
                            <img className="d-block w-100" src={`/assets/${src}.png`} alt={src}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col lg={6} style={{marginBottom:'40px', border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>E-HUB | Entertainment Hub</h3>
                <h5>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="https://e-hub.vercel.app/" style={{textDecoration:'none'}} target="_blank"><i class="fas fa-code"></i>&nbsp;Website Link</a>
                        <span><i class="fab fa-github"></i>&nbsp;Private Repo</span>
                    </div>
                </h5>
                <h6>Your one destination for all Movies & TV/Web Series</h6>
                <ul>
                    <li>
                        Filter by: Now Playing, Upcoming, Trending, Popular and Top Rated
                    </li>
                    <li>
                        Search and movie and/or TV/Web Series
                    </li>
                    <li>
                        Get all details of any movie, any season of any TV/Web Series
                    </li>
                    <li>
                        Get all linked images, posters, videos, trailers and casts
                    </li>
                    <li>
                        Get similar recommendations
                    </li>
                </ul>
                <h5>React | TMDB API | React-Bootstrap | Axios | CSS</h5>
            </Col>
        
        
            <Col lg={6} style={{marginBottom:'40px'}}>
                <Carousel indicators={false}>
                    {resume.map((src)=>(
                        <Carousel.Item style={{border:"2px solid black"}}>
                            <img className="d-block w-100" src={`/assets/${src}.png`} alt={src}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col lg={6} style={{marginBottom:'40px', border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>ONLINE RESUME</h3>
                <h5>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <span><i class="fas fa-code"></i>&nbsp;This Website</span>
                        <a href="https://github.com/Arghyadeep7/Resume" style={{textDecoration:'none'}} target="_blank"><i class="fab fa-github"></i>&nbsp;Repo Link</a>
                    </div>
                </h5>
                <h6>Online Resume | Accessible from anywhere</h6>
                <ul>
                    <li>
                        CV | Resume Available
                    </li>
                    <li>
                        Education Data
                    </li>
                    <li>
                        Skills Data
                    </li>
                    <li>
                        Certifications Data
                    </li>
                    <li>
                        Projects Data
                    </li>
                </ul>
                <h5>React | React-Bootstrap </h5>
            </Col>
        
        
            <Col lg={6} style={{marginBottom:'40px'}}>
                <Carousel indicators={false}>
                    {expensesTracker.map((src)=>(
                        <Carousel.Item style={{border:"2px solid black"}}>
                            <img className="d-block w-100" src={`/assets/${src}.png`} alt={src}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col lg={6} style={{marginBottom:'40px', border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>EXPENSES-TRACKER</h3>
                <h5>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="https://expenses-tracker-arghyadeep7.vercel.app/" style={{textDecoration:'none'}} target="_blank"><i class="fas fa-code"></i>&nbsp;Website Link</a>
                        <a href="https://github.com/Arghyadeep7/Expenses" style={{textDecoration:'none'}} target="_blank"><i class="fab fa-github"></i>&nbsp;Repo Link</a>
                    </div>
                </h5>
                <h6>Online Resume | Accessible from anywhere</h6>
                <ul>
                    <li>
                        Track day-day, month-month, year-year expenses
                    </li>
                    <li>
                        Add and delete expenses as required
                    </li>
                    <li>
                        Get spend analysis
                    </li>
                </ul>
                <h5>React | CSS </h5>
            </Col>

        
            <Col lg={6} style={{marginBottom:'40px'}}>
                <img className="d-block w-100" style={{border:"2px solid black"}} src={`/assets/The-Simon-Game.png`} alt="To-Do-List"/>
            </Col>
            <Col lg={6} style={{marginBottom:'40px', border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>SIMON GAME</h3>
                <h5>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="https://arghyadeep7.github.io/The-Simon-Game/" style={{textDecoration:'none'}} target="_blank"><i class="fas fa-code"></i>&nbsp;Website Link</a>
                        <a href="https://github.com/Arghyadeep7/The-Simon-Game" style={{textDecoration:'none'}} target="_blank"><i class="fab fa-github"></i>&nbsp;Repo Link</a>
                    </div>
                </h5>
                <h6>Simply, the Simon Game</h6>
                <ul>
                    <li>
                        A memory game
                    </li>
                    <li>
                        Start by pressing a key
                    </li>
                    <li>
                        Press the box which blinks
                    </li>
                    <li>
                        After each level a new box blinks
                    </li>
                    <li>
                        Thereafter press the last box that blinked after the previous level's sequence of moves.
                    </li>
                    <li>
                        Advance each level by remembering the sequence correctly
                    </li>
                </ul>
                <h5>Javascript | HTML | CSS</h5>
            </Col>
            
        </Row>
    );
};

export default Projects;