//Faça um programa capaz de tomar decisões de acordo com a situação financeira do usuário
let payingMonthlyBills = 1550;
let salary = 2400;
let wantToBuy = 3700;
let buyingMethod = ['CreditCard divided by 10', 'CreditCard', 'In cash']

function canBuy(bills, salary, wantToBuy) {
    cash = salary - bills;
    if (wantToBuy > cash) {
        installment = wantToBuy / 10;
        if (installment > cash) {
            console.log("You can't buy this right now. Gather more money so you can buy it later. ")
        } else {
            console.log("You're able to buy it if you pay in 10 times installments.")
        }
    } else {
        console.log('You can buy this in cash! ')
    }
}

canBuy(1550, 2400, 3700)
canBuy(1550, 2400, 800)
