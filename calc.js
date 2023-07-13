//Code for Calculator

for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var opr=this;
       // console.log(this);
        var opr2=this.innerText;

        if(opr.classList.contains("operand")){
            if((document.querySelectorAll("i")[0].innerText)=="" ||  (document.querySelectorAll("i")[1].innerText)=="" ){
                operand1(opr2);
            }
            else if((document.querySelectorAll("i")[0].innerText)!="" && (document.querySelectorAll("i")[1].innerText)!=""){
                operand2(opr2);

            }
        }
        else if(opr.classList.contains("operator")){
            operator(opr2);
        }
        else if(opr.classList.contains("Clear")){
            document.querySelectorAll("i")[0].innerText="";
            document.querySelectorAll("i")[1].innerText="";
            document.querySelectorAll("i")[2].innerText="";
            document.querySelectorAll("i")[3].innerText="";
        }
        else if(opr.classList.contains("equal")){
            calculate();

        }
    
    });
}


function operand1(element){
    switch(element){
        case "0":
            if((document.querySelector("i").innerHTML)!=1000){
                document.querySelector("i").innerText= document.querySelector("i").innerText+"0";
                }
            break;
        case "1":
            if((document.querySelector("i").innerHTML)!=1000){
            document.querySelector("i").innerText= document.querySelector("i").innerText+"1";
            }
            break;
        case "2":
            if((document.querySelector("i").innerHTML)!=10000){
                document.querySelector("i").innerText= document.querySelector("i").innerText+"2";
                }
            break;
        case "3":
            if((document.querySelector("i").innerHTML)!=10000){
                document.querySelector("i").innerText= document.querySelector("i").innerText+"3";
                }
            break;
        case "4":
            if((document.querySelector("i").innerHTML)!=10000){
                document.querySelector("i").innerText= document.querySelector("i").innerText+"4";
                }
            break;
        case "5":
            if((document.querySelector("i").innerHTML)!=10000){
                document.querySelector("i").innerText= document.querySelector("i").innerText+"5";
                }
            break;
        case "6":
            if((document.querySelector("i").innerHTML)!=10000){
                document.querySelector("i").innerText= document.querySelector("i").innerText+"6";
                }
            break;
        case "7":
            if((document.querySelector("i").innerHTML)!=10000){
                document.querySelector("i").innerText= document.querySelector("i").innerText+"7";
                }
            break;
        case "8":
            if((document.querySelector("i").innerHTML)!=10000){
                document.querySelector("i").innerText= document.querySelector("i").innerText+"8";
                }
            break;            
        case "9":
            if((document.querySelector("i").innerHTML)!=10000){
                document.querySelector("i").innerText= document.querySelector("i").innerText+"9";
                }
            break;   
    }
}
function operand2(element){
    switch(element){
        case "0":
            if((document.querySelectorAll("i")[2].innerHTML)!=1000){
                document.querySelectorAll("i")[2].innerText+="0";
                }
            break;
        case "1":
            if((document.querySelectorAll("i")[2].innerHTML)!=1000){
            document.querySelectorAll("i")[2].innerText+="1";
            }
            break;
        case "2":
            if((document.querySelectorAll("i")[2].innerHTML)!=10000){
                document.querySelectorAll("i")[2].innerText+="2";
                }
            break;
        case "3":
            if((document.querySelectorAll("i")[2].innerHTML)!=10000){
                document.querySelectorAll("i")[2].innerText+="3";
                }
            break;
        case "4":
            if((document.querySelectorAll("i")[2].innerHTML)!=10000){
                document.querySelectorAll("i")[2].innerText+="4";
                }
            break;
        case "5":
            if((document.querySelectorAll("i")[2].innerHTML)!=10000){
                document.querySelectorAll("i")[2].innerText+="5";
                }
            break;
        case "6":
            if((document.querySelectorAll("i")[2].innerHTML)!=10000){
                document.querySelectorAll("i")[2].innerText+="6";
                }
            break;
        case "7":
            if((document.querySelectorAll("i")[2].innerHTML)!=10000){
                document.querySelectorAll("i")[2].innerText+="7";
                }
            break;
        case "8":
            if((document.querySelectorAll("i")[2].innerHTML)!=10000){
                document.querySelectorAll("i")[2].innerText+="8";
                }
            break;            
        case "9":
            if((document.querySelectorAll("i")[2].innerHTML)!=10000){
                document.querySelectorAll("i")[2].innerText+="9";
                }
            break;   
    }
}

function operator(op){
    switch(op){
        case "+":
            if((document.querySelectorAll("i")[1].innerText)==""){
                document.querySelectorAll("i")[1].innerText="+";    
            }
            break;
        case "-":
            if((document.querySelectorAll("i")[1].innerText)==""){
                document.querySelectorAll("i")[1].innerText="-";    
            }
            break;
        case "X":
            if((document.querySelectorAll("i")[1].innerText)==""){
                console.log("x");
                document.querySelectorAll("i")[1].innerText="x";    
            }
            break;
        case "/":
            if((document.querySelectorAll("i")[1].innerText)==""){
                document.querySelectorAll("i")[1].innerText="/";    
            }
            break;

        }
}

function calculate(){
    if((document.querySelectorAll("i"))!="" && (document.querySelectorAll("i")[1])!="" && (document.querySelectorAll("i")[2])!="" ){
        var op1=parseInt(document.querySelectorAll("i")[0].innerText);
        var opr=document.querySelectorAll("i")[1].innerText;
        var op2=parseInt(document.querySelectorAll("i")[2].innerText);
        switch(opr){
            case "+":
                var sum=op1+op2;
                document.querySelectorAll("i")[3].innerText=sum;
                break;
            case "-":
                var sum=op1-op2;
                document.querySelectorAll("i")[3].innerText=sum;
                break;
            case "x":
                var sum=op1*op2;
                document.querySelectorAll("i")[3].innerText=sum;
                break;
            case "/":
                var sum=op1/op2;
                document.querySelectorAll("i")[3].innerText=sum;
                break;
            
        }
    }
}