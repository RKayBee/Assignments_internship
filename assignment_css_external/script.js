  //global variable
  
    var  password=document.forms["myForm"]["password"];
    var confirmPassword=document.forms["myForm"]["cpassword"];
    var captchaValue=document.getElementById("captchaBox");
    var  firstName=document.forms["myForm"]["firstName"];
    var  lastName=document.forms["myForm"]["lastName"];
    var email=document.forms["myForm"]["email"];
    var label=document.getElementById("captchaContent");
    var  presentCity=document.forms["myForm"]["presentCity"];
    var  presentZip=document.forms["myForm"]["presentZip"];
    var  permanentCity=document.forms["myForm"]["permanentCity"];
    var  permanentZip=document.forms["myForm"]["permanentZip"];
    var  areaCodeMain=document.forms["myForm"]["areaCodeMain"];
    var  phoneMain=document.forms["myForm"]["phoneMain"];
    var  areaCodeAlternate=document.forms["myForm"]["areaCodeAlternate"];
    var  phoneAlternate=document.forms["myForm"]["phoneAlternate"];
    var  alertBox=document.getElementById("alertBox");
    var  alertMessage=document.getElementById("alertMessage");
   //global variable
function validateName(element) 
  {
   
    if(/\d/.test(element.value))
      {   
         errorDisplay(element.nextElementSibling.innerText+ " "+"Cannot take Digits.INVALID!");
        element.style["border-color"]="#ffb3b3";//changes input box color red in error
        return false;
      }
      else
      {
        element.style["border-color"]="#fff";//changes input box color white if no error occurs
        return true;
      } 
  }//end of validatName()
  function validateNumber(element) 
  {
   
    if(!(/\d/.test(element.value)))
      {
         errorDisplay(element.nextElementSibling.innerText+ " "+"Can only have Digits.INVALID!");
        element.style["border-color"]="#ffb3b3";//changes input box color red in error
        return false;
      }
      else
      {
        element.style["border-color"]="#fff";//changes input box color white if no error occurs
        return true;
      } 
  }//end of validatNumber()
    
function validatePassEqual()//checks both password and confirm password are same or not
   {
      var eye = document.querySelectorAll(".eye");//makes eye icon visible
      eye[1].style.display="inline-block";
      if(confirmPassword.value!= password.value )
        { 
          errorDisplay("confirm password and password should be same");
          confirmPassword.style["border-color"]="#ffb3b3";//changes input box color red in error
          return false; 
        }
      else
       {
        confirmPassword.style["border-color"]="#fff";//changes input box color white if no error occurs
        return true;
       }
    }//end of validate Pass Equal
 function validatePassLength()//checks for min password length is 8 characters or not
    {
      var eye= document.querySelectorAll(".eye");//makes eye icon visible
      eye[0].style.display="inline-block";
      if(password.value.length<5)
        {
          errorDisplay("password must be 5 characters minimum");
          password.style["border-color"]="#ffb3b3";//changes input box color red in error
          return false;
        }
      else
        {
          password.style["border-color"]="#fff";//changes input box color white if no error occurs
          return true;
         }
    }
 //end of password validation
 function showHidePass(eye)//toggle between show and hide password on clicking eye icon
 {
    var parent=eye.parentElement;
    var input=parent.querySelectorAll("input");
    if (input[0].type === "password") 
    {
      input[0].type = "text";
      eye.className=eye.className.replace("fa-eye","fa-eye-slash");
    }
    else
    {
      input[0].type = "password";
      eye.className=eye.className.replace("fa-eye-slash","fa-eye");
     }
  }//end of show pass 
 function validateEmail(email)//email validation
 { 
   if(email.validity.patternMismatch)
    {
      errorDisplay("email should be in correct format");
      email.style["border-color"]="#ffb3b3";//changes input box color red in error
      return false;   
    }
   else
   {
    email.style["border-color"]="#fff";//changes input box color white if no error occurs
    return true;
    }
  }
//  areacode validation
//  function validateAreaCode(element)
//  {
//   //  var pattern = new RegExp("\d{1,3}(\-(\d{3,4}))?");
//   //  if(!pattern.test(element))
//   if(element.validity.patternMismatch)
//    {
//      errorDisplay("pattern mismatch(eg:83,977,12-342,1-435)");
//      element.style["border-color"]="#ffb3b3";//changes input box color red in error
//      return false;
//    }
//    else
//    {
//     element.style["border-color"]="#fff";//changes input box color white if no error occurs
//     return true;
//    }
//  }
//  addition of captcha
 

function refreshCaptcha()//generates random numbers and operators for captcha
{
    var temp1=Math.round(Math.random(0,8) *9 );
    var temp2=Math.round(Math.random(0,8) *9  );
    var operator=["+","-","*","/"];
    var index=Math.floor(Math.random(0,9) * 4);
    generateCaptcha(temp1,temp2,index,operator);
}//end of refreshCaptcha

function generateCaptcha(temp1,temp2,index,operator)//generates final captchaContent
{
  if(operator[index]=="/" )
  {
    while(temp2==0)
    temp2=Math.round(Math.random(0,8) *9  );
    while(temp1%temp2!=0)
      {
        temp1=Math.round(Math.random(0,8) *9 );
        temp2=Math.round(Math.random(0,8) *9 );
      } 
  }//end of first if
  if(operator[index]=="-")
  {   
    while(temp1<temp2) 
    temp2=Math.round(Math.random(0,8) *9 );
  }//end of second if
  label.innerText=temp1+operator[index]+temp2+"=";
}//end of function generateCaptcha
function validateCaptcha()//calculates if captcha value is correct or incorrect
{   
    if(Number(captchaValue.value)===eval(label.innerText.substring(0,3)))
      {
        captchaValue.style["border-color"]="#fff";
        return true;
      }
    else
      {
        errorDisplay("captcha value incorrect");
        captchaValue.style["border-color"]="#ffb3b3";
        captchaValue.value="";
        return false;
      }
}//end of validateCaptcha
function validateForm()//validation of full form ,called on form submit
{
    if(firstName.value=="")
    {
      errorDisplay("first name cannot be empty");
      firstName.focus();
      return false;
    }
    if(!validateName(firstName))
      {  
        firstName.focus();
        return false;
      }
    if(lastName.value=="")
      {
        errorDisplay("last name cannot be empty");
        lastName.focus();
        return false;
      }
    if(!validateName(lastName))
      {  
        lastName.focus();
        return false;
      }
    if(password.value=="")
      {
        errorDisplay("password cannot be empty");
        password.focus();
        return false;
      }
    if(!validatePassLength())
     {
      password.focus();
      return false;
     }
    if(confirmPassword.value=="")
      {
        errorDisplay("confirm password cannot be empty");
        confirmPassword.focus();
        return false;
      }
    if(!validatePassEqual())
      {
        confirmPassword.focus();
        return false;
       }
    if(email.value=="")
    {
      errorDisplay("email cannot be empty");
      email.focus();
      return false;
    }
    if(!validateEmail(email))
       {
        email.focus();
        return false;
      }
      if(presentCity.value=="")
      {
        errorDisplay("present city cannot be empty");
        presentCity.focus();
        return false;
      }
    if(!validateName(presentCity))
      {  
        presentCity.focus();
        return false;
      }
      if(permanentCity.value!="")
      {
      if(!validateName(permanentCity))
        {  
        permanentCity.focus();
        return false;
        }
      }
     if (presentZip.value !="")
     {
       if(!validateNumber(presentZip))
       {
         presentZip.focus();
         return false;
       }
     }
     if (permanentZip.value !="")
     {
       if(!validateNumber(permanentZip))
       {
         permanentZip.focus();
         return false;
       }
     }
     if(areaCodeMain.value=="")
     {
       errorDisplay("area code cannot be null");
       areaCodeMain.focus();
       return false;
     }
     if(phoneMain.value =="")
     {
       errorDisplay("main phone cannot be null ");
       phoneMain.focus();
       return false;
     }
     if(!validateNumber(phoneMain))
       {
         phoneMain.focus();
         return false;
       }
       if (phoneAlternate.value !="")
      {
         if(!validateNumber(phoneAlternate))
        {
            phoneAlternate.focus();
            return false;
         }
       }
    if(captchaValue.value=="")
    {
      errorDisplay("captcha cannot be empty");
      return false;
    }
    if(!validateCaptcha())
       {
        captchaValue.focus();
        return false;
      }  
    if (!validateNumber(areaCodeMain))
    {
      areaCodeMain.focus();
      return false;
    }
    if(areaCodeAlternate.value!="")
    {
      if (!validateNumber(areaCodeMain))
      {
        areaCodeMain.focus();
        return false;
      }
    }
}//end of validateForm
 
 function errorDisplay(message)//the box in which errors are displayed
  {
    alertBox.style.display="block";
    alertMessage.innerHTML=message;
    alertBox.style.opacity=1;
    setTimeout(hideAlertBox, 3000)
  }
 function hideAlertBox()//on click of alertOkButton it is called to hide the box
  {
     alertBox.style.opacity=0;
  }
