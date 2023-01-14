import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Skills = () => {
  return (
    <div style={{marginBottom:'20px'}}>
        <h3>SKILLS</h3>
        <Row style={{border:'2px solid black', marginBottom:'10px'}}>
            <h4>PROGRAMMING</h4>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Cpp.png" alt="C++" className='d-block w-100'></img>
                <b>C++</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/C.png" alt="C++" className='d-block w-100'></img>
                <b>C</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Python.png" alt="C++" className='d-block w-100'></img>
                <b>Python</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Javascript.png" alt="C++" className='d-block w-100'></img>
                <b>Javascript</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Java.png" alt="C++" className='d-block w-100'></img>
                <b>Java</b>
            </Col>
        </Row>
        <Row style={{border:'2px solid black', marginBottom:'10px'}}>
            <h4>FRONT-END</h4>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Reactjs.png" alt="C++" className='d-block w-100'></img>
                <b>React.js</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Nextjs.png" alt="C++" className='d-block w-100'></img>
                <b>Next.js</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Bootstrap.png" alt="C++" className='d-block w-100'></img>
                <b>Bootstrap</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/jQuery.png" alt="C++" className='d-block w-100'></img>
                <b>jQuery</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Html.png" alt="C++" className='d-block w-100'></img>
                <b>HTML</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/css.png" alt="C++" className='d-block w-100'></img>
                <b>CSS</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Javascript.png" alt="C++" className='d-block w-100'></img>
                <b>Javascript</b>
            </Col>
        </Row>
        <Row style={{border:'2px solid black', marginBottom:'10px'}}>
            <h4>BACK-END</h4>
            <Col xs={3} md={2} lg={1} sm={2} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Nodejs.png" alt="Nodejs" className='d-block w-100'></img>
                <b>Node.js</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Expressjs.png" alt="C++" className='d-block w-100'></img>
                <b>Express.js</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/MongoDb.png" alt="C++" className='d-block w-100'></img>
                <b>MongoDb</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/Firebase.png" alt="C++" className='d-block w-100'></img>
                <b>Firebase</b>
            </Col>
            <Col xs={3} md={2} lg={1} style={{marginBottom:'15px', textAlign:'center'}}>
                <img src="/assets/sql.png" alt="C++" className='d-block w-100'></img>
                <b>SQL</b>
            </Col>
        </Row>
    </div>
  );
};

export default Skills;