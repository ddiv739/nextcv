import BaseLayout from '../components/layouts/BaseLayout'
import {MdFreeBreakfast} from 'react-icons/md'
import {Container, Card, Row, Col, CardTitle,CardDeck, CardImg,CardBody,CardText, Button} from 'reactstrap'
const Projects= () => (
    <BaseLayout>
          <Container className='about-layout index-container'>

          <div>
            <MdFreeBreakfast style={{  height: '50px', width: '50px',color: 'rgb(183, 58, 73)'}}/>
          </div>
          <h1 className="d-none d-xl-block about-head">Dhruv Divekar</h1>
          <h1 className="d-block d-xl-none about-head">Dhruv</h1>
          <h1 className="d-block d-xl-none about-head">Divekar</h1>
      <p>A collection of projects I consider interesting or a worthwhile learning experience</p>
      <hr />
      <CardDeck >
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <hr />
          <CardText className="d-none d-xl-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{marginTop:'10px'}}>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <hr />
          <CardText className="d-none d-xl-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{marginTop:'10px'}}>Button</Button>
        </CardBody>
      </Card>
      </CardDeck>

      <hr />
      <p>I'll be actively adding this list as I clean and migrate projects so stay tuned for updates!</p>

       </Container>
    </BaseLayout>
  )
  
  export default Projects