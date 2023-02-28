import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "https://proj-4-decisionsapp-backend.onrender.com"

//createAction => create a decision from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()
    console.log("Create action from data is "+formData)
    // construct request body
    const newDecision = {
        regBody: formData.get("regBody"),
        companyName: formData.get("companyName"),
        allegationType: formData.get("allegationType"),
        decisionType: formData.get("decisionType")
    }

    const createURL = URL+"/decisions/"
    console.log("Create action URL is "+createURL ) 

    // send request to backend
    await fetch(createURL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDecision)
    })

    // redirect back to index page
    return redirect("/")
}


//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get todo id
    const id = params.id

    // construct request body
    const updatedDecision = {
        regBody: formData.get("regBody"),
        companyName: formData.get("companyName"),
        allegationType: formData.get("allegationType"),
        decisionType: formData.get("decisionType")
    }
    const newUrl = URL + "/decisions/"+id

    console.log("PUT req url is "+newUrl)
    // send request to backend
    await fetch(newUrl, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedDecision)
    })

    // redirect back to show page page
    return redirect("/"+id)
}


//deleteAction => delete a todo from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get todo id
    const id = params.id

    // send request to backend
    await fetch(URL + `/decisions/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}