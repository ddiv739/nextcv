import BaseLayout from '../components/layouts/BaseLayout'
import {Container} from 'reactstrap'
const About = () => (
    <BaseLayout>
      <Container className='base-layout index-container'>
        <p>Dhruv Divekar</p>
        <div>

          <p>BCom/BE(Hons) | First Class </p>
          <p>Computer Systems & Finance </p>
          <p> Melbourne, VIC </p>

          <p>Hi there! Thanks for stumbling by. My name is Dhruv - an Engineer and Finance graduate with a passion for innovation and flair for 
            creativity. My key interests include : AI, Computer Vision and novel App development as well as stock trading and data visualisation 
            on the finance side.
          </p>



          <p>Current role:</p>
          <p>Previous role:</p>
          <p>For a full list please refer to my Linkedin!</p>

          <p>About this site: </p>
          <p>This site was an upgrade from my old cv here. It was an exploration into developing a fully fleshed out website using 
            next.js, react with splashes of interesting libraries including THREE.js, reactstrap. The backend is mongoDB. I plan on 
            updating projects regularly  with overly ambitious endeavours so stay tuned!
          </p>
          </div>
      </Container>
    </BaseLayout>
  )
  
  export default About