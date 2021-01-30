// initially setting the quantity of ticket to zero
document.getElementById('firstClassTicketQuantity').value = 0;
document.getElementById('economyClassTicketQuantity').value = 0;


// event handler for first class ticket
document.getElementById('firstClassPlusAdd').addEventListener('click', function () {

    plusButtonHandler('firstClass', true);
    calculateTotalPrice();
})

document.getElementById('firstClassMinusAdd').addEventListener('click', function () {

    plusButtonHandler('firstClass', false);
    calculateTotalPrice();
})

// event handler for economy class ticket

document.getElementById('economyClassPlusAdd').addEventListener('click', function () {
    plusButtonHandler('economyClass', true);
    calculateTotalPrice();
})

document.getElementById('economyClassMinusAdd').addEventListener('click', function () {
    plusButtonHandler('economyClass', false);
    calculateTotalPrice();
})



// function for ticket quantity
function plusButtonHandler(myclass, isIncrease) {
    const myclassTicket = document.getElementById(myclass + 'TicketQuantity');
    const myclassTicketQuantity = myclassTicket.value;
    let myclassTicketAmount = parseInt(myclassTicketQuantity);
    if (isIncrease == true) {
        myclassTicketAmount = myclassTicketAmount + 1;
    }
    if (isIncrease == false && myclassTicketAmount > 0) {
        myclassTicketAmount = myclassTicketAmount - 1;
    }

    myclassTicket.value = myclassTicketAmount;
}




// function for subtotal,tax and total
function calculateTotalPrice() {
    const firstClassTicketQuantity = document.getElementById('firstClassTicketQuantity').value;
    const firstClassTicket = parseInt(firstClassTicketQuantity);
    const economyClassTicketQuantity = document.getElementById('economyClassTicketQuantity').value;
    const economyClassTicket = parseInt(economyClassTicketQuantity);
    let firstClassTicketPrice = 0;
    let economyClassTicketPrice = 0;

    if (firstClassTicket > 0) {
        firstClassTicketPrice = firstClassTicket * 150;
    }
    if (economyClassTicket > 0) {
        economyClassTicketPrice = economyClassTicket * 100;
    }

    const subtotal = firstClassTicketPrice + economyClassTicketPrice;
    const tax = (subtotal * 10) / 100;
    const total = subtotal + tax;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}


// function for onchange event handler
document.getElementById('firstClassTicketQuantity').addEventListener('change', calculateTotalPrice);
document.getElementById('economyClassTicketQuantity').addEventListener('change', calculateTotalPrice);



// book now button click event handler
document.getElementById('bookNow').addEventListener('click', function () {
    document.getElementById('booking').style.display = 'none';
    document.getElementById('confirm').style.display = 'block';
    const firstClassTicket = document.getElementById('firstClassTicketQuantity').value;
    const firstClassTicketAmount = parseInt(firstClassTicket);

    const economyClassTicket = document.getElementById('economyClassTicketQuantity').value;
    const economyClassTicketAmount = parseInt(economyClassTicket);

    if (firstClassTicketAmount > 0 && economyClassTicketAmount < 1) {
        document.getElementById('confirm').innerText = "congratulations! you have purchased " + firstClassTicketAmount + " first class ticket."
    } else if (economyClassTicketAmount > 0 && firstClassTicketAmount < 1) {
        document.getElementById('confirm').innerText = "congratulations! you have purchased " + economyClassTicketAmount + " economy class ticket."
    } else if (firstClassTicketAmount > 0 && economyClassTicketAmount > 0) {
        document.getElementById('confirm').innerText = "congratulations! you have purchased " + firstClassTicketAmount + " first class ticket and " + economyClassTicketAmount + " economy class ticket."
    } else {
        document.getElementById('confirm').innerText = "Please, first book any ticket!"
    }

})