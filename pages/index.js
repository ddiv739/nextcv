import {Container, Button, UncontrolledTooltip} from 'reactstrap'
import React from 'react'
import { FiGithub, FiMail  } from "react-icons/fi";
import ReactRotatingText from 'react-rotating-text'
import BaseLayout from '../components/layouts/BaseLayout'
import Trifecta from '../components/Trifecta'
import { FiCode} from 'react-icons/fi'
import RotatingCube from '../components/RotatingCube';

const Index = () => (
    <BaseLayout className='base-layout'>
      <Container className='base-layout index-container'>
        <div className="name-header">
          <h1 className="d-none d-md-block">Dhruv<span style={{color: 'rgb(183, 58, 73)'}}>\</span>Divekar</h1>
          <h1 className="d-block d-md-none">Dhruv<span style={{color: 'rgb(183, 58, 73)'}}>\</span></h1>
          <h1 className="d-block d-md-none">Divekar</h1>
          <h1 style={{fontSize: "45px", paddingBottom: '20px'}}><ReactRotatingText items={["Engineering", "Commerce","Innovation"]} /></h1>
          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between " style={{ minWidth: "30%", maxWidth: "30%", margin: 'auto'}}>
              <Button outline color="dark" className='text-nowrap button' id='emailink' href="mailto:ddiv739.aucklanduni.ac.nz"><FiMail /> Email</Button>
              <UncontrolledTooltip placement="left" target="emailink">
                ddiv739@aucklanduni.ac.nz
              </UncontrolledTooltip>
              <FiCode style={{height:'33px', width: '31px'}}/>

              <Button outline color="dark" className='text-nowrap button ' id='githublink' onClick={()=>{window.open("https://github.com/ddiv739")}}><FiGithub /> Github</Button>
              <UncontrolledTooltip placement="right" target="githublink">
                Most repos private, feel free to contact me to talk about what I can do for you or visit projects tab!
              </UncontrolledTooltip>
            </div>
          </div>
          <div className="d-block d-md-none">
            <div >
              <Button outline color="dark" className='text-nowrap button'><FiMail /> Email</Button>
              <Button outline color="dark" className='text-nowrap button'><FiGithub /> Github</Button>
            </div>
          </div>
        </div>
        <div className='index'>
          <Trifecta />
        </div>
        <RotatingCube/>
        {/* <p> Innovation requires out of the box thinking</p> */}
        
      </Container>
      <style jsx>
        {`
            h1 {
                font-size: 60px;
            }

        `}
      </style>
    </BaseLayout>

  )
  
  export default Index