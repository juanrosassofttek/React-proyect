import React from 'react'
import { Container, Row,  Col, Button} from 'react-bootstrap'
import { connect } from 'react-redux'

//import { deletePolicy,  getBalance } from '../../actions/actions'
import { deletePolicy } from '../../actions/actions'
import './policy.css'
import Forma from '../forms/form'


const Policy = (props) => {

    // let getBalance = () => {
    //     console.log('get Balance')
    //     props.getBalance()
    //     console.log('after get Balance')
    //     //console.log(props.financial)
    //     return 191
    // }





    return (
        <Container>
            <Forma />
            {
                props.policiesList.map((policy, index)=> {
                    return(
                        <Row key={index}>
                            <Col className="listItem">
                                Name: {policy.name } || Amount: {policy.amount}
                            </Col>
                            <Button variant="secondary" size="sm" onClick={()=> props.deletePolicy(policy)} >Borrar</Button>
                        </Row>
                        
                    )
                        
                    
                })
                
            }
            
            {/* <Row>
                Balance: {getBalance()}
            </Row> */}
               
            
        </Container>  
    )

} 


const mapToProps = (state) => {
    return {
        policiesList: state.policiesList,
        policies: state.policies
        //financial: state.balance
    }
}

//export default connect(mapToProps, {deletePolicy,getBalance} )(Policy)
export default connect(mapToProps, {deletePolicy} )(Policy)