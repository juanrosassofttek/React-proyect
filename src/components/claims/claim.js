import React from 'react'
import { Container, Row,  Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { deleteClaim } from '../../actions/actions'
import ClaimForm from '../claimForm/claimForm'

const Claim = (props) => {

    return (
        <Container>
            <ClaimForm />

            {
                props.claimsList.map((claim, index)=> {
                    return(
                        <Row key={index}>
                            <Col className="listItem">
                                Claim name: {claim.name } || Claim amount: {claim.amount}
                            </Col>
                            <Button variant="secondary" size="sm" onClick={()=> props.deleteClaim(claim)} >Borrar</Button>
     
                        </Row>
                        
                    )
                        
                    
                })
                
            }
        </Container>
    )

} 


const mapToProps = (state) => {
    return {
        claimsList: state.claimsList
    }
}

export default connect(mapToProps, {deleteClaim})(Claim)