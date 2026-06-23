"use strict";
function showdetails(id, name, email_id) {
    console.log("ID:", id, "Name:", name);
    if (email_id != undefined) {
        console.log("Email_ID:", email_id);
    }
    showdetails(101, "Virat");
    showdetails(105, "Sachin", "sanchin@javatpoint,com");
}
