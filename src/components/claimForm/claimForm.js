import React from 'react'
import { Form, Container , Button} from 'react-bootstrap'
import { connect } from 'react-redux'

import { createClaim } from '../../actions/actions'

const claimForm = (props) => {

    const nameAsRef = React.createRef()
    const amountAsRef = React.createRef()

    const handlerSubmit = (e) => {
        e.preventDefault()

        let claim = {
            name: nameAsRef.current.value,
            amount: amountAsRef.current.value
        }

        props.createClaim(claim)
    }


    return (
        <Container>
            <Form>
                <Form.Group > 
                    <Form.Label>Nombre reclamo:</Form.Label>
                    <Form.Control type="input" placeholder="Nombre de la persona que reclama" ref={nameAsRef}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Cantidad reclamo:</Form.Label>
                    <Form.Control type="input" placeholder="Cantidad a reclamar" ref={amountAsRef}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handlerSubmit}>
                    Agregar
                </Button>
            </Form>
        </Container>
    )

}

const mapToProps = (state) => {
    return {
        claims: state.claims
    }
}


export default connect(mapToProps, {createClaim})(claimForm)

