import {Container, Button} from 'reactstrap'
import React from 'react'

import { FiGithub, FiMail  } from "react-icons/fi";

import BaseLayout from '../components/layouts/BaseLayout'
import Trifecta from '../components/Trifecta'
const Index = () => (
    <BaseLayout className='base-layout'>
      <Container className='base-layout index-container'>
        <div className="name-header">
          <h1>Dhruv\Divekar</h1>
        
        <div className="d-none d-lg-block">
            <div className="d-flex justify-content-between " style={{padding: "0 40% 0 40%"}}>
              <Button outline color="dark" className='text-nowrap button' ><FiMail /> Email</Button>
              <Button outline color="dark" className='text-nowrap button'><FiGithub /> Github</Button>
            </div>
          </div>
          <div className="d-block d-lg-none">
            <div >
            <Button outline color="dark" className='text-nowrap button'><FiMail /> Email</Button>
              <Button outline color="dark" className='text-nowrap button'><FiGithub /> Github</Button>
            </div>
          </div>
        </div>
        <div className='index'>
          <Trifecta />
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
      <style jsx>
        {`
            h1 {
                font-size: 70px;
            }

        `}
      </style>
    </BaseLayout>

  )
  
  export default Index