import BaseLayout from '../components/layouts/BaseLayout'
import {MdBuild} from 'react-icons/md'
import {Container} from 'reactstrap'
const Projects= () => (
    <BaseLayout>
          <Container className='about-layout index-container'>

          <div>
            <MdBuild style={{  height: '50px', width: '50px',color: 'rgb(183, 58, 73)'}}/>
          </div>
          <h1 className="d-none d-xl-block about-head">Dhruv Divekar</h1>
          <h1 className="d-block d-xl-none about-head">Dhruv</h1>
          <h1 className="d-block d-xl-none about-head">Divekar</h1>
      <p>Projectlist in active production</p>
       </Container>
    </BaseLayout>
  )
  
  export default Projects