import {
    bookingValidation,
    getContactValidation,
    loginUserValidation,
    registerUserValidation
} from "../validation/user-validation.js";
import { validation} from "../validation/validation.js";
import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response-error.js";

const register = async (req) => {
    const user =  validation (registerUserValidation, req);

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Username already exists");
    }

    return prismaClient.user.create({
        data: user
    });
}

const login = async (req, res)=>{
    const loginRequest = validation(loginUserValidation,req)

    const user = await prismaClient.user.findUnique({
        where :{
            username : loginRequest.username
        },

        select :{
            username : true,
            password : true
        }

    })
    if (!user || user.password !==loginRequest.password) {
        throw new ResponseError(401, "Username or password wrong");
    }
}

const booking = async (req)=>{
    const bookingRequest = validation(bookingValidation, req)

    const existingDestination = await prismaClient.destination.findUnique({
        where :{
            name_hotel : bookingRequest.id_destination
        }

    })

    return prismaClient.contact.create({
        data :{
            id : bookingRequest.id,
            full_name : bookingRequest.full_name,
            email : bookingRequest.email,
            phone : bookingRequest.phone,
            destination :{
                connect:{
                    name_hotel: existingDestination.name_hotel
                }
            }

        },
        include:{
            destination: true
        }

    })
}

const get = async (contactId) => {
    contactId = validation(getContactValidation, contactId)

    const contact = await prismaClient.contact.findFirst({
        where: {
            id: contactId,
        },
        include: {
            destination: true,
        }
    });

    if (!contact) {
        throw new ResponseError(404, "contact is not found");
    }

    return contact;
}

export default {
    register,
    login,
    booking,
    get
}