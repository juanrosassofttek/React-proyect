
//Policies
export const createPolicy = (policy) => {

    return {
        type: 'CREATE_POLICY',
        payload: policy
    }
}

export const deletePolicy = (name) => {
   
    return {
        type:'DELETE_POLICY',
        payload: name
    }
}


//Financial
// export const getBalance = () => {
//     console.log('Getting balance')
//     return {
//         type: 'GET_BALANCE', 
//         totalAmount = 0
//     }
// }

export const createClaim = (claim) => {

    return {
        type: 'CREATE_CLAIM',
        payload: claim
    }
}

export const deleteClaim = (name) => {
    console.log('arrivin delete claim')
    return {
        type:'DELETE_CLAIM',
        payload: name
    }
}
