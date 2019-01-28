import BaseLayout from '../components/layouts/BaseLayout'
import {Container} from 'reactstrap'
const Index = () => (
    <BaseLayout className='base-layout'>
      <Container className='base-layout index-container'>
        <div className='index-title'>
          <h1>Dhruv\Divekar</h1>
          <button>test></button>
        </div>
        <p>email  | github</p>
        <h2>Document Trifecta</h2>
        <div className='index-tridocuments'>
          <p>3 grid goes here</p>
        </div>
        <h2>At a glance</h2>
        <div>
          <p>Place the stuff here</p>
        </div>
      </Container>
      
    </BaseLayout>
  )
  
  export default Index