class Employee {
    constructor(name, gender, profilepic, dept, salary, startDate) {
        this.name = name;
        this.gender = gender;
        this.profilepic = profilepic;
        this.dept = dept;
        this.salary = salary;
        this.startDate = startDate;
    }

}
const empArray = [];
let names = "";
let profileImage = "";
let gender = "";
let dept = [];

let deptSet = new Set();
let salery = "";
let date = "";
let comment = "";
function Namechange(event) {
    if (!/^[A-Z][a-zA-Z]{2,}$/.test(name)) {
        window.alert("Name should start with a capital letter and have at least 3 characters.")
        throw new Error(`Name should start with a capital letter and have at least 3 characters.`);
    }
    names = event.target.value;

}
function getProfileImage(event) {
    profileImage = event.target.value;
}
function GenderChange(event) {
    gender = event.target.value;
}
function DeptChange(event) {
    // Initialize an empty array to store selected values
    dept = [];
    const selectedValues = [];
    const checkboxes = document.querySelectorAll('input[name="Department"]');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                selectedValues.push(this.value);
                deptSet.add(this.value);
            } else {
                deptSet.delete(this.value);
            }
        });
    });
}
function functionSaleryChange(event) {
    salery = document.querySelector('#Salary').value;
}
function DateChange(event) {
    date = document.querySelector('#date').value;
}
function CommentChange(event) {
    comment = document.getElementById('comment').value;
}
function submitClick(params) {
    dept = Array.from(deptSet);
    console.log(names + " | " + profileImage + " | " + gender + " | " + dept + " | " + salery + " | " + date + " | " + comment);
    const newemp = new Employee(names, gender, profileImage, dept, salery, date);
    empArray.push(newemp);
    console.log(JSON.stringify(empArray));

}
function resetClick() {
    location.reload()
}