let form = document.getElementById("expense-form");
let list = document.getElementById("expense-list");
let total = document.getElementById("total-amount");
let exName = document.getElementById("expense-name");
let exAmount = document.getElementById("expense-amount");

let expenses = [];

function addExpense(event) {
    event.preventDefault();
    let inputName = exName.value;
    let inputAmount = exAmount.value;
    
    exName.value = ""; 
    exAmount.value = ""; 

    let expense = {
        name: inputName ,// input name
        amount: parseFloat(inputAmount), // 
    }
    expenses.push(expense);

    console.log(expenses);

    renderExpenses();
}

function renderExpenses(){
        let totalAmount = 0;
        let i = 0 ;
        let list = document.getElementById("expense-list");
        // list.innerHTML = "<h1>PAAAAAAACCCCCCKYYY</h1>";
        list.innerHTML="";

        for (let exp of expenses) {
            totalAmount = totalAmount + exp.amount;
            let expenseRow = document.createElement("tr"); // create tr(row) for input data
     
            expenseRow.innerHTML = 

            // exp = {
            //     amount: 123,
            //     name: "tttttt"
            // }

            /*
            "<td>"+ exp.name +"</td>"
            "<td>   "    + exp.amount +"</td>"
            */

            `
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