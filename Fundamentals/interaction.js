 
 // functions to intract with user's browser ( alert, confirm, prompt, etc. )

 // alert

 alert("Welcome to the site!");  // it's works only on browser environment

 console.log("welcome to the site!"); // where console.log is node environment, run without html file

 // confirm

 let result = confirm("Do you want to continue?");

 if (result){
    alert("you pressed OK");
 } else {
    alert("you pressed cancel");
 }

 // prompt

 let age = prompt ('how old are you?', 25);
 alert(`your age is ${age}`);   // collect  age from user

 // collect username name from user based on prompt

 // if user provide name, greet them, otherwise alert that they didn't provide a name   

 let username =prompt("what's your name?");
    if (username){
        alert(`Hello ${username}`);
    } else {
        alert("you didn't provide a name");
    }

