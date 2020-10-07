import React from 'react'
import { Card, CardHeader, CardBody} from 'reactstrap'
import { FiLinkedin, FiCode} from 'react-icons/fi'
import { GoMortarBoard, GoRepo } from "react-icons/go";

const Trifecta = () => (
            <React.Fragment>
                <Card className="trifecta d-block d-md-none" style={{width: '100%', margin: 'auto'}}>
                    <CardHeader className="d-none d-md-block">
                        <h3>
                            Professional's Trifecta
                        </h3>
                    </CardHeader>
                    <CardHeader className="d-block d-md-none">
                        <h5>
                            Professional's Trifecta
                        </h5>
                    </CardHeader>
                    <CardBody>
                        <div className="row justify-content-center align-items-center lister">
                            <div className="col-sm hovfadein " onClick={()=>{window.open("https://linkedin.com/in/dhruv-divekar")}}>
                                <div className="row justify-content-center align-items-center"><FiLinkedin className="glyphicon"/></div>
                                <div className="row justify-content-center align-items-center">Linkedin</div>
                            </div>
                            <div className="col-sm glyphicon" ><FiCode /></div>
                            <div className="col-sm hovfadein " onClick={()=>{window.open("https://1drv.ms/b/s!AsTPUiKo9CTXgrpB6ZXTMG3NeVfMXQ?e=RghI1G")}}>
                                <div className="row justify-content-center align-items-center"><GoRepo className="glyphicon"/></div>
                                <div className="row justify-content-center align-items-center">Résumé</div>
                            </div>
                            <div className="col-sm glyphicon" ><FiCode /></div>
                            <div className="col-sm hovfadein " onClick={()=>{window.open("https://www.myequals.net/#/sharelink/76f312f8-923a-458d-948f-3d99e720ec23/f4ced532-9323-4ed2-be68-dad8180a9b6d")}}>
                                <div className="row justify-content-center align-items-center"><GoMortarBoard  className="glyphicon"/></div>
                                <div className="row justify-content-center align-items-center">Transcript</div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="trifecta d-none d-md-block" style={{width: '50%', margin: 'auto'}}>
                <CardHeader className="d-none d-md-block">
                    <h3>
                        Professional's Trifecta
                    </h3>
                </CardHeader>
                <CardHeader className="d-block d-md-none">
                    <h5>
                        Professional's Trifecta
                    </h5>
                </CardHeader>
                <CardBody>
                    <div className="row justify-content-center align-items-center lister">
                        <div className="col-sm hovfadein " onClick={()=>{window.open("https://linkedin.com/in/dhruv-divekar")}}>
                            <div className="row justify-content-center align-items-center"><FiLinkedin className="glyphicon"/></div>
                            <div className="row justify-content-center align-items-center">Linkedin</div>
                        </div>
                        <div className="col-sm glyphicon" ><FiCode /></div>
                        <div className="col-sm hovfadein " onClick={()=>{window.open("https://1drv.ms/b/s!AsTPUiKo9CTXgq4ewxyYL2qxRoJ3AQ?e=tPpRV7")}}>
                            <div className="row justify-content-center align-items-center"><GoRepo className="glyphicon"/></div>
                            <div className="row justify-content-center align-items-center">Résumé</div>
                        </div>
                        <div className="col-sm glyphicon" ><FiCode /></div>
                        <div className="col-sm hovfadein " onClick={()=>{window.open("https://www.myequals.net/#/sharelink/76f312f8-923a-458d-948f-3d99e720ec23/f4ced532-9323-4ed2-be68-dad8180a9b6d")}}>
                            <div className="row justify-content-center align-items-center"><GoMortarBoard  className="glyphicon"/></div>
                            <div className="row justify-content-center align-items-center">Transcript</div>
                        </div>
                    </div>
                </CardBody>
                </Card>
                    </React.Fragment>
            
)

export default Trifecta



