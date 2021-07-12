function validateNum()      //function to make sure the number is valid
{
    var principal = document.getElementById("principal").value;         
    var moreThanZero = parseInt(principal) > 0;     
    if(!moreThanZero){                                      
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}

function updateRate()       //function to update the rate value
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()          
{
    var principal = parseFloat(document.getElementById("principal").value);     
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML = "If you deposit" + principal + " ,\<br\> at an interest rate of " + rate + "%\<br\>You will recieve an amount of " + interest + " , \<br\>in the year " + year + "\<br\>";
}




        
