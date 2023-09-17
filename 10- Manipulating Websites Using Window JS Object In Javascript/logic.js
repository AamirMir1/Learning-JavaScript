// ___________________________________________Manipulating Websites Using Window JS Object In Javascript_________________________________________________

// Window is a global object which represent the browser window

let a = window;
// window.alert("This is a alert")                            // You can also give a alert using window.alert()
console.log(a)                                    // To print window object in console

// a = alert("This is a alert")                            // The alert function give you a dialog box of alert
// a = prompt("What is your name?", "Guest")                               // The prompt function is basically use to ask anything from your user
// a = confirm("Are you sure you want to delete the post?")                                     // this function give you a dialog box to confirm a task if you will ok the dialog box this will show true in console and if you will cancel this will show false in your console

a = window.document
console.log(a)                                      // This will print the DOM in your console

a = window.innerWidth                                   // This will give you DOM page Width
console.log(a)

a = window.innerHeight                                  // This will give you DOM page Height
console.log(a)

a = scrollX;                                  // This will show you how much you scroll your page in X position
console.log(a)

a = scrollY                                  // This will show you how much you scroll you page in Y position
console.log(a)

a = location;                                 // This will print your page location details
console.log(a)

a = location.toString()                          // This will print you location details in the form of string
console.log(a)

a = history                               // This will show your history
a = history.go(-1)                        // you can go to previous or forward pages using history.go function the minus values if for previous pages.
console.log(a)
// location.href = "https://Web.facebook.com"                         // This will visit you on facebook website

// a = location.reload()                           // This will reload your page





