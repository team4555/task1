
// window.alert("welcome, i’d yo don’t force any problem");

//
// document.write("<br> welcome")

// var first_name="ali ",
//  last_name=" kariem"
// var full_name= first_name + last_name
// console.log(full_name)


// var person=prompt("enter  your name")
//   if(person){ 
//     document.write( "hello!"+person);
 
//   }
//   else{
//    alert("enter your name")
//   }


//   var fav_col=prompt("enter your favourit color"+("1)red,2)green,3)blue,4)yellow"));
//   switch(fav_col){
//     case "1":
//     case"red":
//     case"Red":
//         document.write("your favourite color is red")

// break;
//   case "2":
//     case "green":
//     case "Green":
//         document.write("your favourite color is green")
//         break;
  
//   case "3":
//         document.write("your favourite color is blue")
//         break;
  
//   case "4":
//         document.write("your favourite color is yellow")

//         break;
//         default:
//             alert("enter right choice")
//   }


  // function sumTwoNumber(a,b){
  //   var a,b;
  //   sum=a+b;
  //   return sum;
  // }


  //  var sum=sumTwoNumber(4,2)
  //    console.log(sum);

  
  // let a="ahmed"
  // let b="omer"
  // let c="mohammed"

  // console.log(`${a} ${b} ${c}`)

// function sayhello(userName,age){
//   if (age < 20){
//   console.log(`this app is not suitable for you`);
//   }
// else{
//   console.log(`hello ${userName} your age is ${age}`)
//   console.log(`welcom in our app`);
// }


// }
// sayhello("nagwan",22)
// sayhello("ahmed",8)


// function year(start,end,not=2021){
//   for(i= start;i<=end;i++){
//   if(i==not){
//     continue;
//   }
//   console.log(i);
//   }
// }

// year(2002,2024)


// document.querySelector('#scroll-btn').addEventListener("click",navigateToSection)
// function navigateToSection(){
//   scroll(0,100)
// }





// الطريقه الاولي
// window.addEventListener('scroll', function() {
//   let element = document.querySelector('#sc');
//  let rect = element.getBoundingClientRect();


//  if (rect.bottom <= window.innerHeight) {
//       element.classList.add('moveToLeft');
//   } else {
//       element.classList.remove('moveToLeft');
//   }
// });

// الطريقه الثانيه

window.addEventListener('scroll', function() {
 let element = document.querySelector('#sc');
  element.classList.toggle
  ('moveToLeft', element.getBoundingClientRect().bottom <= window.innerHeight);
});

 


// document.querySelector('form').addEventListener('submit',validateForm);



// function validateForm(event){
//   event.preventDefault();
// }





document.getElementById('reg').addEventListener('submit', function(event) {
  event.preventDefault(); 

 
  document.querySelectorAll('.error').forEach(error => error.textContent = '');
  document.querySelectorAll('.error-input').forEach(input => input.classList.remove('error-input'));

  let username = document.getElementById('username');
 let email = document.getElementById('email');
  let password = document.getElementById('password');

  let isValid = true;

  // Validate Username
  if (username.value.trim() === '') {
      document.getElementById('usernameError').textContent = 'Username is required';
      username.classList.add('error-input');
      isValid = false;
  } else if (username.value.length < 5 || username.value.length > 10) {
      document.getElementById('usernameError').textContent = 'Username must be between 5 and 10 characters';
      username.classList.add('error-input');
      isValid = false;
  }

  // Validate Email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
      document.getElementById('emailError').textContent = 'Email is required';
      email.classList.add('error-input');
      isValid = false;
  } else if (!emailRegex.test(email.value)) {
      document.getElementById('emailError').textContent = 'Email is invalid';
      email.classList.add('error-input');
      isValid = false;
  }

  // Validate 
 let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password.value.trim() === '') {
      document.getElementById('passwordError').textContent = 'Password is required';
      password.classList.add('error-input');
      isValid = false;
  } else if (!passwordRegex.test(password.value)) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character';
      password.classList.add('error-input');
      isValid = false;
  }

  if (isValid) {
 
      alert('Form is valid and ready for submission');
    
  }
});
