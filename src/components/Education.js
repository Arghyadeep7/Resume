import Accordion from 'react-bootstrap/Accordion';

const Education=()=>{
    return (
        <div style={{marginBottom:'20px'}}>
            <h3>EDUCATION</h3>
            <Accordion defaultActiveKey="0" style={{border:'5px solid black'}}>
                <Accordion.Item eventKey="0" style={{borderBottom:'3px solid black'}}>
                    <Accordion.Header><h2>B. Tech. (Computer Science & Engineering) [Ongoing]</h2></Accordion.Header>
                    <Accordion.Body>
                        <h3>Heritage Institute Of Technology</h3>
                        <h4>2020 - 2024</h4>
                        <h5>Current CGPA : 9.49</h5>
                        <h6><i class="fas fa-map-marker-alt" />&nbsp;Kolkata, West Bengal, India</h6>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{borderBottom:'3px solid black'}}>
                    <Accordion.Header><h2>A.I.S.S.C.E. - Class XII, Computer Science</h2></Accordion.Header>
                    <Accordion.Body>
                        <h3>B. D. Memorial International</h3>
                        <h4>2020</h4>
                        <h5>Grade : 97.8% <a href="https://drive.google.com/file/d/1OVwQA4-MfK_NxKgnU8JZGDCleL3p3c6H/view" target="_blank">(School topper)</a></h5>
                        <h6><i class="fas fa-map-marker-alt" />&nbsp;Kolkata, West Bengal, India</h6>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h2>A.I.S.S.E. - Class X</h2></Accordion.Header>
                    <Accordion.Body>
                        <h3>B. D. Memorial International</h3>
                        <h4>2018</h4>
                        <h5>Grade : 94.6%</h5>
                        <h6><i class="fas fa-map-marker-alt" />&nbsp;Kolkata, West Bengal, India</h6>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Education;