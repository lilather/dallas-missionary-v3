(function(){
var myModal = new bootstrap.Modal(document.getElementById('myModalEl'))
function init(){
var flexElement=document.getElementsByClassName('flexSwitch')
var modalBtn=document.getElementsByClassName('modalBtn')
for (var i=0; i < flexElement.length; i++){
flexElement[i].addEventListener('change', functionGetElement) 
}
  
for (var i=0; i < modalBtn.length; i++){
modalBtn[i].addEventListener('click', functionModalBtn) 
}

 


}
function functionGetElement(event) { 
var typeOfPackage= event.target.closest('.card').id;
var checked=event.target.checked;
var package= getPackage(typeOfPackage);
changePricing(package, checked);
}


function getPackage(typeOfPackage){
 let premium={
  title:'premium',
  monthly:'$600',
  yearly:'$6120',
  billedMontlyDescription:'billed monthly',
  billedYearlyDescription:'billed yearly',
  packageChosenMonthlyText:'We see you are interested in an accelerated growth plan billed monthly.',
  packageChosenYearlyText: 'We see you are interested in an accelerated growth plan billed yearly.',

};
let basic={
  title:'basic',
  monthly:'$199',
  yearly:'$2029',
  billedMontlyDescription:'billed monthly',
  billedYearlyDescription:'billed yearly',
  packageChosenMonthlyText:'We see you are interested in an conservative growth plan billed monthly.',
  packageChosenYearlyText:'We see you are interested in an conservative growth plan billed monthly.',

};
let standard={
  title:'standard',
  monthly:'$399',
  yearly:'$4080',
  billedMontlyDescription:'billed monthly',
  billedYearlyDescription:'billed yearly',
  packageChosenMonthlyText:'We see you are interested in an steady growth plan billed monthly',
  packageChosenYearlyText:'We see you are interested in an steady growth plan billed yearly',
}; 
  switch(typeOfPackage){
    case 'basic':
    return basic;
     case 'standard':
    return standard;
   case 'premium':
    return premium;
  }
  }

function changePricing(package, checked){
var el = document.getElementById(package.title);
var amount= el.getElementsByClassName('amount');
var billedAt= el.getElementsByClassName('billedAt');
if(checked){
  amount[0].innerHTML=package.yearly
  billedAt[0].innerHTML=package.billedYearlyDescription
  

}
  else{
  amount[0].innerHTML=package.monthly
  billedAt[0].innerHTML=package.billedMontlyDescription
 


  }
}

 function functionModalBtn(evt){
 var typeOfPackage= evt.target.closest('.card').id;
 var _switch=document.getElementById(typeOfPackage).querySelector('.flexSwitch').checked;
 var package=getPackage(typeOfPackage);

 getModal(package, _switch);
 }


function getModal(package, _switch){
  var packageInput=document.getElementById("packageChosen");
  
 var modalMessage=document.querySelector('.modalMessage');
  if(_switch){
     modalMessage.innerHTML=package.packageChosenYearlyText
     packageInput.value=package.packageChosenYearlyText;
}
  else{
     modalMessage.innerHTML=package.packageChosenMonthlyText;
     packageInput.value=package.packageChosenYearlyText;

  }
myModal.show();
}   







init();
})();
