console.log("Hello frm challenge");
var noOfHotels = Number(prompt("Enter no of hotels John visited "));
var billArray = new Array();
billArray.fill(0,0,noOfHotels-1);
var tipArray = new Array();
tipArray.fill(0,0,noOfHotels-1);
var totalBill;
for(let i = 0 ; i < noOfHotels ; i++){
    billArray[i]=Number(prompt("Enter bill at Hotel_"+i));
    if(billArray[i] < 50 ){
        tipArray[i] = (20*billArray[i])/100 ;
    }else if(billArray[i] < 2000 ){
        tipArray[i] = (15*billArray[i])/100 ;
    }
    else{
        tipArray[i] = (10*billArray[i])/100 ;
    }
    totalBill +=  billArray[i] ;
    totalBill +=  tipArray[i] ;
}
console.log("Total bill of John is (inc tip) : "+totalBill);
