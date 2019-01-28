import BaseLayout from '../components/layouts/BaseLayout'
import {Container, Button} from 'reactstrap'
import React from 'react'
const Index = ({mobile}) => (
    <BaseLayout className='base-layout'>
      <Container className='base-layout index-container'>
        <div className='index-title' >
          <h1>Dhruv\Divekar</h1>
          <div className="d-none d-lg-block ">
            <div className="d-flex justify-content-between " style={{padding: "0 40% 0 40%"}}>
              <Button outline color="dark" className='text-nowrap button' ><i className="fas fa-envelope"  /> Email</Button>
              <Button outline color="dark" className='text-nowrap button'><i className="fab fa-github-alt"></i> Github</Button>
            </div>
          </div>
          <div className="d-block d-lg-none">
            <div >
            <Button outline color="dark" className='text-nowrap button'><i className="fas fa-envelope" /> Email</Button>
              <Button outline color="dark" className='text-nowrap button'><i className="fab fa-github-alt"></i> Github</Button>
            </div>
          </div>
        </div>
        <div className='index-tridocuments'>
        <h2>The Professional's Trifecta</h2>

          <p>3 grid goes here</p>
        </div>
        <h2>At a glance</h2>
        <div>
          <p>Place the stuff here</p>
        </div>
        <div>
          Got a minute ? Stay a while
        </div>
        <p>links to projects about blog </p>
      </Container>
      
    </BaseLayout>
  )
  
  export default Index