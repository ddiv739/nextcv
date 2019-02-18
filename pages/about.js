import BaseLayout from '../components/layouts/BaseLayout'
import {Container, Card, CardTitle, CardBody, CardText, CardSubtitle, Button, CardImg} from 'reactstrap'
import {MdLocationOn} from 'react-icons/md'
const About = () => (
    <BaseLayout className='about-layout'>
      <Container className='about-layout index-container'>
          <h1 className="d-none d-xl-block about-h1">Dhruv<span style={{color: 'rgb(183, 58, 73)'}}>\</span>Divekar</h1>
          <h1 className="d-block d-xl-none about-h1">Dhruv<span style={{color: 'rgb(183, 58, 73)'}}>\</span></h1>
          <h1 className="d-block d-xl-none about-h1">Divekar</h1>
              <p>BCom/BE(Hons) | First Class </p>
              <p>Computer Systems & Finance</p>
              <p><MdLocationOn /> Melbourne, VIC  </p>
          {/* <Card>
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card> */}
        <Card>
          <p className="about-subtitle">Introduction</p>
          <p>Hi there! Thanks for stumbling by. My name is Dhruv - an Engineer and Finance graduate with a passion for innovation and flair for 
            creativity. My key interests include : AI, Computer Vision and novel App development as well as stock trading and data visualisation 
            on the finance side.
          </p>
          <p className="about-subtitle">Current Role</p>
          <p>AI, Humanoids and Computer Vision Graduate - Telstra Labs <br />
           (Formerly Chief Technology Office)</p>
          <p className="about-subtitle">Technologies</p>

          <p>Tensorflow, Python (flask, opencv, tensorflow-gpu, numpy + more), Javascript <br />
          For a full list please refer to my Linkedin!</p>

          <p className="about-subtitle">About this site</p>
          <p>This site was an upgrade from my old cv here. It was an exploration into developing a fully fleshed out website using 
            next.js, react with splashes of interesting libraries including THREE.js, reactstrap. The backend is mongoDB. I plan on 
            updating projects regularly  with overly ambitious endeavours so stay tuned!
          </p>
          </Card>
      </Container>
    </BaseLayout>
  )
  
  export default About