import BaseLayout from '../components/layouts/BaseLayout'
import {MdFreeBreakfast} from 'react-icons/md'
import {Container, Card, Row, Col, CardTitle,CardDeck, CardImg,CardBody,CardText, Button} from 'reactstrap'
const Projects= () => (
    <BaseLayout>
          <Container className='about-layout index-container'>

          <div>
            <MdFreeBreakfast style={{  height: '50px', width: '50px',color: 'rgb(183, 58, 73)'}}/>
          </div>
          <h1 className="about-head">Projects</h1>

      <h5>A collection of projects I consider interesting or a worthwhile learning experience</h5>
      <hr />
      <CardDeck >
      <Card>
        <CardImg top width="100%" src="./static/images/humanoid_thumb.jpg" alt="Humanoid next to stage." />
        <CardBody>
          <CardTitle>Humanoid Concierge and Greeter</CardTitle>
          <hr />
          <CardText className="d-none d-xl-block">Discussion of a Humanoid  implemented by Telstra Labs to augment the customer experience through a novel robot that can engage in conversation and guide guests to meeting rooms </CardText>
          <Button style={{marginTop:'10px'}}>Coming soon</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./static/images/tensor_thumb.jpg" alt="Tensorflow placeholder image" />
        <CardBody>
          <CardTitle>Tensorflow Object Detection Guide</CardTitle>
          <hr />
          <CardText className="d-none d-xl-block">A practical guide to transfer learning with tensorflow-GPU object detection on Ubuntu. Omits any theory to instead provide a end-to-end practical guide to get your training with an hour  </CardText>
          <Button style={{marginTop:'10px'}}>Coming soon</Button>
        </CardBody>
      </Card>
      </CardDeck>

      <hr />
      <p>I'll be actively adding this list as I clean and migrate projects so stay tuned for updates!</p>

       </Container>
    </BaseLayout>
  )
  
  export default Projects