

const addBtn = document.getElementById("addBtn");
const list = document.getElementById("expenselist");
const totalText = document.getElementById("total");
let total = 0;

addBtn.addEventListener("click", function () {

const name = document.getElementById("expenseName").value;
const amount = Number(document.getElementById("expenseAmount").value);
    if (name === ""|| amount ===0){
        alert("plase enter expensse name and account");
    return;
}
const li = document.createElement("li");

li.innerText = name + "-$ " + amount;
list.appendChild(li);
total += amount;
totalText.innerText = "Total:$" + total;

});




