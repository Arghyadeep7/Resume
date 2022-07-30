import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

const Projects=()=>{

    const movies=["Movies-1","Movies-2","Movies-3","Movies-4","Movies-5","Movies-6"];

    const tvSeries=["Tv-Series-1","Tv-Series-2","Tv-Series-3","Tv-Series-4","Tv-Series-5","Tv-Series-6","Tv-Series-7","Tv-Series-8"];

    const resume=["Online-Resume-1","Online-Resume-2","Online-Resume-3","Online-Resume-4"];

    const expensesTracker=["Expenses-Tracker-1","Expenses-Tracker-2","Expenses-Tracker-3"];

    return (
        <Row>

            <h2>PROJECTS</h2>
            
            <Col lg={6} style={{marginBottom:'30px'}}>
                <Carousel indicators={false}>
                    {tvSeries.map((src)=>(
                        <Carousel.Item style={{border:"2px solid black"}}>
                            <img className="d-block w-100" src={`/assets/${src}.png`} alt={src}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col lg={6} style={{border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>TV SERIES APP</h3>
                <h5><a href="https://tv-series-app-arghyadeep7.vercel.app/tv/trending" style={{textDecoration:'none'}} target="_blank"><i class="fas fa-code"></i>&nbsp;Website Link</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/Arghyadeep7/TV-Series-App" style={{textDecoration:'none'}} target="_blank"><i class="fab fa-github"></i>&nbsp;Repo Link</a></h5>
                <h6>User-friendly and easy to use TV-Series App</h6>
                <ul>
                    <li>
                        Filter by : Trending, Popular, Top-rated
                    </li>
                    <li>
                        Search any TV/Web Series
                    </li>
                    <li>
                        Get details of any season of any TV/Web Series
                    </li>
                    <li>
                        Get details of any episode of any season of any TV/Web Series
                    </li>
                    <li>
                        Get Casts of any season,episode and of any TV/Web Series
                    </li>
                    <li>
                        Get all related Images, Posters, Trailers and Video links
                    </li>
                    <li>
                        Get similar related TV/Web Series
                    </li>
                </ul>
                <h5>React.js | TMDB API | React-Bootstrap | Axios | CSS</h5>
            </Col>
              
        
            <Col lg={6} style={{marginTop:'30px'}}>
                <Carousel indicators={false}>
                    {movies.map((src)=>(
                        <Carousel.Item style={{border:"2px solid black"}}>
                            <img className="d-block w-100" src={`/assets/${src}.png`} alt={src}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col lg={6} style={{marginTop:'30px', border:'2px solid black', boxShadow:'5px 5px 3px black'}}>
                <h3>MOVIES APP</h3>
                <h5><a href="https://movies-app-arghyadeep7.vercel.app/movies/now_playing" style={{textDecoration:'none'}} target="_blank"><i class="fas fa-code"></i>&nbsp;Website Link</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/Arghyadeep7/Movies-App" style={{textDecoration:'none'}} target="_blank"><i class="fab fa-github"></i>&nbsp;Repo Link</a></h5>
                <h6>User-friendly and easy to use Movies App</h6>
                <ul>
                    <li>
                        Filter by : Now Playing, Upcoming, Trending, Popular, Top-rated
                    </li>
                    <li>
                        Search any Movie
                    </li>
                    <li>
                        Get all details of any Movie
                    </li>
                    <li>
                        Get Casts of any Movie
                    </li>
                    <li>
                        Get all related Images, Trailers and Video links
                    </li>
                    <li>
                        Get similar related Movies
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