function validateNum()      //function to make sure the number is valid
{
    var principal = document.getElementById("principal").value;         
    var moreThanZero = parseInt(principal) > 0;     
    if(!moreThanZero){                                      
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    else
    {
        compute();
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

    document.getElementById("result").innerHTML = "If you deposit" <mark> + principal + </mark> " ,\<br\> at an interest rate of " <mark> + rate + </mark> "%\<br\>You will recieve an amount of " <mark> + interest + </mark> " , \<br\>in the year " <mark> + year + </mark> "\<br\>";
}




        
