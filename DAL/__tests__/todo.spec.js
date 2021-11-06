var request=require("supertest");
var todoDAL=require("../todo");
describe("Todo Db Unit tests",()=>{
    it("Adding data to database",(done)=>{
        jest.setTimeout(30000)
        todoDAL.addTodo({name:"Unit Test"},async(err,data)=>{
            expect(data.message).toBe("success")
            done();
        })
    })
    it("Getting data from database",(done)=>{
        jest.setTimeout(30000)
        todoDAL.getAlltodo((err,data)=>{
            expect(data.data.length).toBeGreaterThanOrEqual(0)
            done();
        })
    })
   
})
