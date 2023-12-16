
var customerName = "bob"


function upperCaseCustomerName (){
    window.customerName = window.customerName.toUpperCase()
} // this modifies the function to uppercase
  // the window. gives access to the global scope.


function setBestCustomer(){
    window.bestCustomer = "not bob"

}

function overwriteBestCustomer(){
    window.bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "melissa"

function changeLeastFavoriteCustomer (){

    leastFavoriteCustomer = "harry "
}


