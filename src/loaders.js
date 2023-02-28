// YOUR DEPLOYED API BASE URL
const URL = "https://proj-4-decisionsapp-backend.onrender.com"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/decisions/")
    const decisions = await response.json()
    return decisions
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    console.log("param for showLoader is "+ params.id)
    const response = await fetch(URL + "/decisions/"+params.id)
    const decision = await response.json()
    console.log("decision from loader is "+ decision)
    return decision
}