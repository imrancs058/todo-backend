var todoBAL=require("../todo");
describe("Todo Db Unit tests",()=>{
    it("Adding data to database from BAL",(done)=>{
        jest.setTimeout(30000)
        todoBAL.addTodo({name:"Unit Test"},async(err,data)=>{

            expect(data.message).toBe("success")
            done();
        })
    })
    it("Getting data from database BAL",(done)=>{
        jest.setTimeout(30000)
        todoBAL.getAllTodo((err,data)=>{
            expect(data.data.length).toBeGreaterThanOrEqual(0)
            done();
        })
    })

})
