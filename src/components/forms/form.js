import React from 'react'
import { Form, Container , Button} from 'react-bootstrap'
import { connect } from 'react-redux'

import { createPolicy } from '../../actions/actions'

const Forma = (props) => {

    const nameAsRef = React.createRef()
    const amountAsRef = React.createRef()

    const handlerSubmit = (e) => {
        e.preventDefault()

        let policy = {
            name: nameAsRef.current.value,
            amount: amountAsRef.current.value
        }

        props.createPolicy(policy)
    }


    return (
        <Container>
            <Form>
                <Form.Group > 
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="input" placeholder="Policy owner" ref={nameAsRef}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Cantidad:</Form.Label>
                    <Form.Control type="input" placeholder="Policy amount" ref={amountAsRef}/>
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
        policies: state.policies
    }
}


export default connect(mapToProps, {createPolicy} ) (Forma)

