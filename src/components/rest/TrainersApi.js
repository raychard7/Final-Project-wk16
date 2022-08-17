import React, {useState} from 'react'


const endpoint = 'https://62eaad08ad295463259236fa.mockapi.io/pokemontrainers'

const get = async() =>{

    try{
        
        const response = await fetch(endpoint); //fetch(endpoing)= Get method no more info needed.
        const data = await response.json() //parse data response.
        return data;
    } catch(e) {
        console.log('Oops, fetchAllTrainers did not work', e)
    }

}

const post = async (trainer) => {
    try{
       const resp = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            // // body: JSON.stringify(house) [Incorect way]
            //[correct way] You're structuring the obj before sent to api in a string form.
            body: JSON.stringify({
                trainername: trainer // argument trainer goeshere for post.
            })
        }); //after fetch request(POST) return data in json? Whats this command doing ln 29?
        return await resp.json()
    } catch(e) {
        console.log('Ooops fetchPost has an issue', e)
    }
}

const deleteMethod = async (id) => {
    try{
        //endpoint defined at beginning of this code.
        const response = await fetch(`${endpoint}/${id}`,{method: "DELETE"}) //id arg passed into fetch 
    //Don't need to get a json parsed response back.
    } catch(e) {
        console.log('oops fetch delete trainer has an issue',e)
    }
    
}

const fetchTrainerById = async (id) => {

    try{
        const response = await fetch(`${endpoint}/${id}`)
        const data = await response.json()
    return data
    } catch(e) {
        console.log('Something went wrong with fetchuserbyID')
    }}

//how to set up my arguments(id and new data?). Is newdata my trainer I'm updating?
const updateTrainer = async (id, trainer) => {
    const response = await fetch(`${endpoint}/${id}`,{
        method: "PUT", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trainer)
    })
    const data = await response.json()
    return data

}

export {updateTrainer, deleteMethod, get, post}