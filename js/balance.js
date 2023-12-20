let form = document.getElementById("expense-form");
let list = document.getElementById("expense-list");
let total = document.getElementById("total-amount");
let exName = document.getElementById("expense-name");
let exAmount = document.getElementById("expense-amount");
let expenses = [];

function addExpense(event) {
    event.preventDefault();
    let name = exName.value;
    let amount = exAmount.value;
    
    exName.value = ""; 
    exAmount.value = ""; 

    let e = {
        name: name,
        amount: parseFloat(amount),
    }
    expenses.push(e);
    renderExpenses();
}
function renderExpenses(){
        let totalAmount = 0;
        let i = 0 ;
        list.innerHTML = "";

        for (let exp of expenses) {
            totalAmount = totalAmount + exp.amount;
            let expenseRow = document.createElement("tr");
     
            expenseRow.innerHTML = `
            <td>${exp.name}</td>
            <td>${exp.amount}</td>
            <td class= "delete-btn" data-id = "${i++}">Delete</td>
            `
            list.appendChild(expenseRow);
        }
        total.textContent = totalAmount.toFixed(2);
        // total.innerHTML = innerHTML;
    }
     
function deleteExpense(event){

    if(event.target.classList.contains("delete-btn")) {

        const expenseIndex = parseInt(event.target.getAttribute("data-id"));
        console.log(expenseIndex);

        expenses.splice(expenseIndex,1);

        renderExpenses();
    }
}
form.onsubmit = addExpense;
list.onclick = deleteExpense;