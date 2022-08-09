import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
    
const Projects=()=>{

    const eHub=["E-Hub-1", "E-Hub-2", "E-Hub-3", "E-Hub-4", "E-Hub-5", "E-Hub-6", "E-Hub-7", "E-Hub-8", "E-Hub-9", "E-Hub-10", "E-Hub-11", "E-Hub-12"];

    const resume=["Online-Resume-1","Online-Resume-2","Online-Resume-3","Online-Resume-4"];

    const expensesTracker=["Expenses-Tracker-1","Expenses-Tracker-2","Expenses-Tracker-3"];

    return (
        <Row>

            <h2>PROJECTS</h2>
            
            <Col lg={6} style={{marginBottom:'30px'}}>
                <Carousel indicators={false}>
                    {eHub.map((src)=>(
                        <Carousel.Item style={{border:"2px solid black"}}>
                            <img className="d-block w-100" src={`/assets/${src}.png`} alt={src}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col lg={6} style={{border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>E-HUB | Entertainment Hub</h3>
                <h5><a href="https://e-hub-arghyadeep7.vercel.app/" style={{textDecoration:'none'}} target="_blank"><i class="fas fa-code"></i>&nbsp;Website Link</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/Arghyadeep7/E-Hub" style={{textDecoration:'none'}} target="_blank"><i class="fab fa-github"></i>&nbsp;Repo Link</a></h5>
                <h6>Your one destination for all Movies & TV/Web Series</h6>
                <ul>
                    <li>
                        Filter by : Now Playing, Upcoming, Trending, Popular, Top-rated
                    </li>
                    <li>
                        Search any movie or/and TV/Web Series
                    </li>
                    <li>
                        Get details of any movie
                    </li>
                    <li>
                        Get details of any season of any TV/Web Series
                    </li>
                    <li>
                        Get details of any episode of any season of any TV/Web Series
                    </li>
                    <li>
                        Get Casts of any movie or any season,episode of any TV/Web Series
                    </li>
                    <li>
                        Get all related Images, Posters, Trailers and Video links
                    </li>
                    <li>
                        Get similar related Movies or TV/Web Series
                    </li>
                </ul>
                <h5>React.js | TMDB API | React-Bootstrap | Axios | CSS</h5>
            </Col>
        
        
            <Col lg={6} style={{marginTop:'30px'}}>
                <Carousel indicators={false}>
                    {resume.map((src)=>(
                        <Carousel.Item style={{border:"2px solid black"}}>
                            <img className="d-block w-100" src={`/assets/${src}.png`} alt={src}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col lg={6} style={{marginTop:'30px', border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>ONLINE RESUME</h3>
                <h5><i class="fas fa-code"></i>&nbsp;This Website&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/Arghyadeep7/Resume" style={{textDecoration:'none'}} target="_blank"><i class="fab fa-github"></i>&nbsp;Repo Link</a></h5>
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
                <h5>React.js | React-Bootstrap </h5>
            </Col>
        
        
            <Col lg={6} style={{marginTop:'30px'}}>
                <Carousel indicators={false}>
                    {expensesTracker.map((src)=>(
                        <Carousel.Item style={{border:"2px solid black"}}>
                            <img className="d-block w-100" src={`/assets/${src}.png`} alt={src}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col lg={6} style={{marginTop:'30px', border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>EXPENSES-TRACKER</h3>
                <h5><a href="https://expenses-tracker-arghyadeep7.vercel.app/" style={{textDecoration:'none'}} target="_blank"><i class="fas fa-code"></i>&nbsp;Website Link</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/Arghyadeep7/Expenses" style={{textDecoration:'none'}} target="_blank"><i class="fab fa-github"></i>&nbsp;Repo Link</a></h5>
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
                <h5>React.js | CSS </h5>
            </Col>

        
            <Col lg={6} style={{marginTop:'30px'}}>
                <img className="d-block w-100" style={{border:"2px solid black"}} src={`/assets/The-Simon-Game.png`} alt="To-Do-List"/>
            </Col>
            <Col lg={6} style={{marginTop:'30px', border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>SIMON GAME</h3>
                <h5><a href="https://arghyadeep7.github.io/The-Simon-Game/" style={{textDecoration:'none'}} target="_blank"><i class="fas fa-code"></i>&nbsp;Website Link</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/Arghyadeep7/The-Simon-Game" style={{textDecoration:'none'}} target="_blank"><i class="fab fa-github"></i>&nbsp;Repo Link</a></h5>
                <h6>Simply, the Simon Game</h6>
                <h5>Javascript | HTML | CSS</h5>
            </Col>
            
        </Row>
    );
};

export default Projects;