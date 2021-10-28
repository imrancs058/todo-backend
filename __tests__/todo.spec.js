var request=require("supertest");
var app=require("../index");
describe("Todo API tests",()=>{
    it("Server is up and running",(done)=>{
        request(app).get("/").expect(200,done)
    })
    it("Add todo item in database",(done)=>{
        request(app).post("/todo").send({
            name:"Hello"
        }).then((response)=>{
            expect(response.name,done).toBe("Hello");
        })
    })
    it("Get todo item from database",(done)=>{
        request(app).get("/todo").then((response)=>{
            expect(response.length,done).toBeGreaterThan(0);
        })
    })
})
