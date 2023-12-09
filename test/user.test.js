import supertest from "supertest";
import {web} from "../src/application/web.js";
import {prismaClient} from "../src/application/database.js";
import {logger} from "../src/application/logging.js";
import {createTestUser, removeTestUser} from "./test-util.js";

describe('POST /api/users', ()=>{

    afterEach(async ()=>{
        await removeTestUser()
    })

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'test',
                password: 'rahasia',
                name: 'test'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
        expect(result.body.data.password).toBeDefined()
    });

    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: '',
                password: '',
                name: ''
            });

        logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined()
    });

    it('should ', async () => {
        const result = await supertest(web)
            .delete('/api/users')
            .send({
                where :{
                    username : 'test'
                }
            })
    });
    
})

describe("test login", ()=>{
    beforeEach(async ()=>{
        await createTestUser();
    })

    afterEach(async ()=>{
        await removeTestUser()
    })

    it('should can login', async () => {
        const result = await supertest(web)
            .post('api/users/login')
            .send({
                username :"test",
                password :"rahasia"
            })
        logger.info(result.body)
        expect(result.status).toBe(200)
        expect(result.body.token).toBeDefined()
        expect(result.body.token).not.toBe("test")
    });

})

describe("hai", ()=>{
    it('should halo', async () => {
        const data  = await prismaClient.contact.create({
            // where:{
            //     name_hotel : 'Hotel Serenity Palace'
            // }
            data :{
                full_name : 'yusuf',
                email : 'chairul@gmail.com',
                phone : '089665263512',
                id_destinastion : 'Hotel Serenity Palace'
            },
            include:{
                destination : true
            }
        })
        console.info(data)

    });

    it('should hai', async () => {
        const data = await prismaClient.contact.findUnique({
            where:{
                id : 2
            },
            include :{
                destination: 'Hotel Serenity Palace'

            }
        })
        console.info(data)
        return data
    });

    it('should update', async () => {
        const update = await prismaClient.destination.update({
            where:{
                name_hotel:'Hotel Serenity Palace'
            },
            data:{
                destination_price : "$510.00 USD"
            }
        })
    });
    it('should create data', async () => {
        const update = await prismaClient.destination.create({
            data :{
                name_hotel : 'Hotel Serenity Palace',
                hotel_addres : 'Canggu, Denpasar',
                guide_name : 'Jhon Doe',
                price : '$200',
                vehicle_name : 'AVP CAR',
                destination_price : '$510.00 USD',
                police_number : 'B 1234 NDC'
            }
        })
    });
})