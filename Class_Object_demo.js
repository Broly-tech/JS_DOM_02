class User
{
    constructor(name,email)
    {
        this.name=name
        this.email=email
    }

    viewData()
    {
        
        //console.log(yourname, "is viewing website data")
        console.log(`${this.name} and ${this.email} is viewing website data`)
    }
}
class Admin extends User
{
    editData(name,email)
    {
        this.name=name
        this.email=email
        super.viewData() //Calling parent class mathod
        
    }
    
   
}

//let obj=new User("Anuran","a@e.com");
//obj.viewData()*/
let obj2=new Admin("Broly","b@e.com");
obj2.viewData();
obj2.editData("Ronnie","d@f.com")

