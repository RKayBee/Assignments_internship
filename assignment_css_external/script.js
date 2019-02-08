function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    
    if (x == "") 
    {
      alert("TIP:Name should not be empty ");
     
      return false;
    }
     if(/\d/.test(x))
      { alert("Name cannot be a number");
      return false;
      }
    }