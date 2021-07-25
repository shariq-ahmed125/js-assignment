// question 01
// var itemsArray =[{
//         name:"juice",
//         price:"50",
//         quantity:"3",
// },{
//         name:"cookie",
//         price:"30",
//         quantity:"9",
// },{
//         name:"shirt",
//         price:"880",
//         quantity:"1",
// },{
//         name:"pen",
//         price:"100",
//         quantity:"2",
// },]

// var total1 = (itemsArray[0].price*itemsArray[0].quantity);
// var total2 = (itemsArray[1].price*itemsArray[1].quantity);
// var total3 = (itemsArray[2].price*itemsArray[2].quantity);
// var total4 = (itemsArray[3].price*itemsArray[3].quantity);

// var total =(total1+total2+total3+total4);
// console.log(total1);
// console.log(total2);
// console.log(total3);
// console.log(total4);
// console.log(total);


// // question 02


// var persons ={
//     name:"shariq ahmed",
//     email:"shariqaansari729@gmail.com",
//     password:"1234567",
//     age:"19",
//     gender:"male",
//     city:"karachi",
//     country:"pakistan",
// }
// console.log("country" in persons);
// console.log("age" in persons);


// question 3

// function studentData(name, rollNo, batch, email, course) {
//     this.name = name;
//     this.rollNo = rollNo;
//     this.batch = batch;
//     this.email = email;
//     this.course = course;
// }
        
// var studentData1 = new Student("Shariq", 22147, 05, "sha@.com", "web & mobileApp");
// var studentData4 = new Student("Shariq", 22147, 05, "sha@.com", "web & mobileApp");
// var studentData3 = new Student("Shariq", 22147, 05, "sha@.com", "web & mobileApp");
// console.log(studentData1, studentData2, studentData3);





// question 03

function Data(name, gender, address, education, profession){
    this.name= name, 
    this.gender= gender,
    this.address= address,
    this.education= education,
    this.profession= profession
};

function getInputValue(){
    let userName= document.getElementById("name").value;
    let userGender= "";
    var male= document.getElementById("male").value;
    var female= document.getElementById("female").value;
    if(male.checked == true){
        userGender= male
    } else if(female.checked == true){
        userGender= female
    }
    let userAddress= document.getElementById("address").value;
    let userEducation= document.getElementById("education").value;
    let userProfession= document.getElementById("profession").value;

    var rec= new Data(userName, userGender, userAddress, userEducation, userProfession);
    console.log(rec)
}


