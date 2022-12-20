let myAccountBalance = parseInt(
  document.getElementById("myAccountBalance").innerText
);

function sendMoney() {
  var enterName = document.getElementById("enterName").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);

  if (enterAmount > 8000) {
    alert("Insufficient Balance.");
  } else {
    var findUserBankAccount = enterName.replace(/\W+/g,"").toLowerCase() + "BankBalance";
    console.log(findUserBankAccount)
    var finalAmount =
      parseInt(document.getElementById(findUserBankAccount).innerHTML) +
      enterAmount;
      console.log(finalAmount)
    var myAccountBalance =
      parseInt(document.getElementById("myAccountBalance").innerText) -
      enterAmount;
    document.getElementById("myAccountBalance").innerText = myAccountBalance;
    document.getElementById(findUserBankAccount).innerHTML = finalAmount;
    alert(`Successful Transaction !!
      $${enterAmount} is sent to ${enterName}@email.com.`);

    // transaction history
    var createPTag = document.createElement("li");
    var textNode = document.createTextNode(
      `$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`
    );
    createPTag.appendChild(textNode);
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}

const XMLHttpRequest = require("xhr2");
let http = new XMLHttpRequest();

http.open("GET", "http://127.0.0.1:8000/");
http.send();
const text = (http.onload = () => console.log(http.responseText));
console.log

