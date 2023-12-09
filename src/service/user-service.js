import {
    bookingValidation,
    getContactValidation,
    loginUserValidation,
    registerUserValidation
} from "../validation/user-validation.js";
import { validation} from "../validation/validation.js";
import {prismaClient} from "../application/database.js";
import bcrypt from "bcrypt"
import {ResponseError} from "../error/response-error.js";
import {v4 as uuid} from "uuid";

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
    // user.password = await bcrypt.hash(user.password, 10);

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

    //
    // const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    // if (!isPasswordValid) {
    //     throw new ResponseError(401, "Username or password wrong");
    // }

    // const token = uuid().toString()
    // return prismaClient.user.update({
    //     data: {
    //         token: token
    //     },
    //     where: {
    //         username: user.username
    //     },
    //     select: {
    //         token: true
    //     }
    // });
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

    // const contact = await prismaClient.contact.findFirst({
    //     where: {
    //         id: contactId
    //     },
    //     select: {
    //         id: true,
    //         full_name: true,
    //         phone: true,
    //         email: true
    //     }
    // });

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