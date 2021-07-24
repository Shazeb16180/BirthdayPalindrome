

function checkDate(){
    var getDate=document.querySelector("#date").value;
    console.log(getDate);
    var d=new Date(getDate);
    console.log("---",d);
    document.querySelector("#gif").style.display="block";
    setTimeout(checking.bind(null,d), 3000);

}
function checking(d){
    if(checkPalindrome(d)){
        document.querySelector("#gif").style.display="none";
        document.querySelector("#error").style.display="none";
        document.querySelector("#success").style.display="block";
        document.querySelector("#success").innerHTML="Whoa!!! Your birthdate is palindrome";
    }
    else{
       getNextDate(d,0);
    }
}    
function checkPalindrome(dateCheck){
    dateCheck=("0"+(dateCheck.getMonth()+1)).slice(-2)+"-"+("0"+dateCheck.getDate()).slice(-2)+"-"+dateCheck.getFullYear();
    console.log(dateCheck);
    var nDate=dateCheck.replaceAll("-","");
    console.log(nDate);
    var rDate="";
    for(var x=nDate.length-1;x>=0;x--){
        rDate=rDate+nDate[x];
    }
    if(nDate==rDate){
        return true;
    }
    else{
        return false ;
    }
}
function getNextDate(nDate){
    var newDate=nDate;
    console.log("////",nDate,newDate);
    var start=moment(nDate);
    do{
        newDate.setDate(newDate.getDate()+1);
         var result=checkPalindrome(newDate);
         if(result){
             break;
         }
    }while(true);
    var fDate=("0"+(newDate.getMonth()+1)).slice(-2)+"-"+("0"+newDate.getDate()).slice(-2)+"-"+newDate.getFullYear();
    console.log(fDate);
    var future=moment(newDate);
    console.log(future);
    console.log(start);
    var d=future.diff(start,'days');
    console.log(d);


    document.querySelector("#gif").style.display="none";
    document.querySelector("#error").style.display="block";
    document.querySelector("#success").style.display="none";
    document.querySelector("#er1").innerHTML=fDate;
    document.querySelector("#er2").innerHTML=d;


}