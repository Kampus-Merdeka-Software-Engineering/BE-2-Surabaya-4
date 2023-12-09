import userService from "../service/user-service.js";

const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}
const login = async(req, res,next)=>{
    try {
       const result = await userService.login(req.body);
       res.status(200).json({
           data: result,
           message :'sucsess'
       })
    }catch (e){
        next(e)
    }
}
const booking = async (req, res, next) => {
    try {
        const result = await userService.booking(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const get = async (req, res, next) => {
    try {
        const contactId = req.params.id;
        const result = await userService.get(contactId);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default {
    register,
    login,
    booking,
    get
}
