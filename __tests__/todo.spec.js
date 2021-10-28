var request=require("supertest");
var app=require("../index");
describe("Todo API tests",()=>{
    it("Server is up and running",(done)=>{
        request(app).get("/").expect(200,done)
    })
    it("Add todo item in database",(done)=>{
        request(app).post("/todo").send({
            name:"Hello"
        }).then((responseReturn)=>{
            expect(responseReturn.status).toBe(201)
            done();
        })
    })
    it("Get todo item from database",(done)=>{
        jest.setTimeout(30000)
        request(app).get("/todo").then((response)=>{
           var len=JSON.parse(response.text).length;
            expect(len).toBeGreaterThan(0);
            done();
        })
    })
})
