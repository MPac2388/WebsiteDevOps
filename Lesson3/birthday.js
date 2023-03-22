function addAttendee(){
    let firstName = birthdayForm.fname.value;
    let lastName = birthdayForm.lname.value;
    if( firstName == "" || lastName == ""){
        alert("Full Name has to be entered.");
        return false;
    }
    let name = firstName + " " + lastName;
    let ul = document.getElementById("attendees");

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
    return false;
}