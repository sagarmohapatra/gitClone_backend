
import Email from "../model/email.js"
export const saveSentEmail = (request, response) => {
    try {
        const email = new Email(request.body)
        email.save();
        response.status(200).json("email save successfully")
    } catch (error) {
        response.status(500).json(error.message)
    }
}
export const getEmails = async (request, response) => {
    try {
        let emails;
        if (false) {
           
        }else{
            emails = await Email.find({ type: request.params.type })
        }
        return response.status(200).json(emails)
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message)
    }
}