function calculate() {
    var billEl = document.querySelector(".bill")
    var tipEl = document.querySelector(".tip")
    num1 = Number(billEl.value)
    num2 = Number(tipEl.value)

    var totalTip = (num1 * num2) / 100
    var totalBill = num1 + totalTip
    var spanNode = document.querySelectorAll("span")[0]
    spanNode.innerText = totalTip
    var billNode = document.querySelectorAll("span")[1]
    billNode.innerText = totalBill

}