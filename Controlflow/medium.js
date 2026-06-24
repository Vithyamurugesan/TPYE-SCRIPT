"use strict";
//1
const secondsPerDay = 86400;
const daysInWeek = 7;
const secondsInWeek = secondsPerDay * daysInWeek;
console.log("Seconds in a week =", secondsInWeek);
//2
const quantity = 600;
const pricePerItem = 10;
let total = quantity * pricePerItem;
if (quantity > 500) {
    total = total - (total * 15 / 100);
}
console.log("Total Expense =", total);
//3
const pages = 50;
const copies = 3;
const typingCost = pages * 3;
let printingCost = 0;
if (copies >= 1) {
    printingCost = pages * 1;
}
if (copies > 1) {
    printingCost += pages * (copies - 1) * 3;
}
const totalBill = typingCost + printingCost;
console.log("Total Bill =", totalBill);
//4
const hours = 4;
const minutes = 30;
let bill = 0;
if (hours > 7) {
    console.log("Maximum browsing time is 7 hours");
}
else if (hours >= 5) {
    bill = 200 + minutes;
    console.log("Bill =", bill);
}
else {
    bill = (hours * 50) + minutes;
    console.log("Bill =", bill);
}
//5
let month = 2;
let startDay = 6; // 1 = Mon, 7 = Sun
let febDays = 28;
let days = 0;
switch (month) {
    case 1:
        days = 31;
        break;
    case 2:
        days = febDays;
        break;
    case 3:
        days = 31;
        break;
    case 4:
        days = 30;
        break;
    case 5:
        days = 31;
        break;
    case 6:
        days = 30;
        break;
    case 7:
        days = 31;
        break;
    case 8:
        days = 31;
        break;
    case 9:
        days = 30;
        break;
    case 10:
        days = 31;
        break;
    case 11:
        days = 30;
        break;
    case 12:
        days = 31;
        break;
    default:
        console.log("Invalid Month");
        days = 0;
}
if (days > 0) {
    console.log("Mon Tue Wed Thu Fri Sat Sun");
    let calendar = "";
    for (let i = 1; i < startDay; i++) {
        calendar += "    ";
    }
    for (let day = 1; day <= days; day++) {
        if (day < 10) {
            calendar += "  " + day + " ";
        }
        else {
            calendar += " " + day + " ";
        }
        if ((day + startDay - 1) % 7 === 0) {
            calendar += "\n";
        }
    }
    console.log(calendar);
}
//6
const price = 200;
const quantities = 8;
const purchaseAmount = price * quantity;
let discount = 0;
if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.10;
}
else {
    discount = purchaseAmount * 0.05;
}
const paidAmount = purchaseAmount - discount;
console.log("Purchase Amount =", purchaseAmount);
console.log("Discount =", discount);
console.log("Paid Amount =", paidAmount);
//7
const basicSalary = 18000;
let hra = 0;
let da = 0;
if (basicSalary <= 10000) {
    hra = basicSalary * 0.20;
    da = basicSalary * 0.80;
}
else if (basicSalary <= 20000) {
    hra = basicSalary * 0.25;
    da = basicSalary * 0.90;
}
else {
    hra = basicSalary * 0.30;
    da = basicSalary * 0.95;
}
const grossSalary = basicSalary + hra + da;
console.log("Gross Salary =", grossSalary);
//8
const str = "India became independent in 1947";
let letters = 0;
let digits = 0;
let symbols = 0;
for (const ch of str) {
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        letters++;
    }
    else if (ch >= '0' && ch <= '9') {
        digits++;
    }
    else {
        symbols++;
    }
}
console.log("Letters =", letters);
console.log("Digits =", digits);
console.log("Other Symbols =", symbols);
//9
const nums = 153;
let temp = nums;
let sums = 0;
while (temp > 0) {
    const digit = temp % 10;
    sums += digit * digit * digit;
    temp = Math.floor(temp / 10);
}
if (sums === nums) {
    console.log(nums + " is an Armstrong Number");
}
else {
    console.log(nums + " is NOT an Armstrong Number");
}
