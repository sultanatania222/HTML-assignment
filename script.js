const addBtn = document.getElementById("addBtin");
const list = document.getElementById("expenselist");
const totaltext = document.getElementById("total");
let total = Number(localstrorage.getitem("total")) || 0;
totaltext.innertext = "Total:$" total;
addBtn.addEventListener("click", function () {

const name = document.getElementByid("expense name").value;

    const amount = Number.getElementByid("expense amount").value;
    if (name === "|| amount ===0){
        alert("plase enter expensse name and account");
    return;
}
const li = document.createElement("li");

li.inner Text = name + "-$ " + amount;
list.appendchild(li);
total += amount;
totalText.innerText = "Total:$" + total;
localstorage.setItem = ("total", total);
document.getElementById("expenseName").value = "";
document.getElementById("expenseAmount").value = "";
});





