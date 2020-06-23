import { combineReducers } from 'redux'

const listOfPolicies = [
    {
        name: "Luis",
        amount: 20
    },
    {
        name: "Fernando",
        amount: 40
    },
    {
        name: "Lorena",
        amount: 50
    },
    {
        name: "Carlos",
        amount: 80
    }
]

const total = {
        totalAmount: 190
    }


const listOfClaims = [
        {
            name: "Luis",
            amount: -20
        },
        {
            name: 'Lorena',
            amount: -30
        }
    ]

 
                                 
const policies = (policiesList = listOfPolicies, action )=> {
    
    switch(action.type){
        case 'CREATE_POLICY':
            return [...policiesList, action.payload]

        case 'DELETE_POLICY':
            return policiesList.filter((name)=> { return name !== action.payload })
            //return policiesList
            
        default: 
            return policiesList
    }
}

const financial = (balance = total, action) => {
    console.log('Arriving financial')
    console.log('action type:' + action.type)
    console.log(balance.totalAmount)
    switch(action.type){
        case 'GET_BALANCE':
            return balance
        default:
            return balance
    }
}

const claims = (claimsList = listOfClaims, action )=> {
    console.log('Arrving delete claim reducer')
    switch(action.type){
        case 'CREATE_CLAIM':
            return [...claimsList, action.payload]

        case 'DELETE_CLAIM':
            return claimsList.filter((name)=> { return name !== action.payload })
        default: 
            return claimsList
    }
}

export default combineReducers({
    policiesList: policies, 
    //claims: listOfClaims,
    policies: policies,
    //financial: financial
    //balance: financial
    claimsList: claims
})