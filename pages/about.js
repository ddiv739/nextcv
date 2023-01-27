import BaseLayout from '../components/layouts/BaseLayout'
import {Container, Row, Col} from 'reactstrap'
import {MdLocationOn, MdAccountBalance, MdSettings,MdFace} from 'react-icons/md'
const About = () => (
    <BaseLayout className='about-layout'>
      <Container className='about-layout index-container'>
      <div>
            <MdFace style={{  height: '50px', width: '50px',color: 'rgb(183, 58, 73)'}}/>
          </div>
          <h1 className="d-none d-xl-block about-head">Dhruv Divekar</h1>
          <h1 className="d-block d-xl-none about-head">Dhruv</h1>
          <h1 className="d-block d-xl-none about-head">Divekar</h1>

              <Row>
                <Col>
                <MdAccountBalance /><h5>BCom/BE(Hons) <br /> First Class </h5>
                </Col>
                <Col>
                <MdSettings /><h5>Computer Systems <br /> & Finance</h5>
                </Col>
              </Row>
              <h5><MdLocationOn /><br /><i>Gold Coast, QLD</i>   </h5>
              <hr />
          <p className="about-subtitle">Hi there! <br /> Thanks for coming by.</p>
          <p>My name is Dhruv - an Engineer and Finance graduate and an experience Datascientist with a passion for innovation and flair for 
            creativity. My key interests include : AI, Innovation and Analytics as well as stock trading and data visualisation 
            on the Finance side.
          </p>
          </ul>
          <br />
          <p>For a full list of respective languages/frameworks used please refer to my <a  href="https://linkedin.com/in/dhruv-divekar" target="_blank"><u>Linkedin!</u></a></p>
          <hr />
          <p className="about-subtitle">About this site</p>
          <p>This site was an upgrade from my old cv <a  href="https://dhruvcv.netlify.com" target="_blank"><u>here</u></a>. It was an exploration into developing a fully fleshed out website using 
            next.js, react with splashes of interesting libraries including THREE.js, reactstrap. The backend is mongoDB. I plan on 
            updating projects regularly  with overly ambitious endeavours so stay tuned!
          </p>
          <br />
          <br />
      </Container>
    </BaseLayout>
  )
  
  export default About
