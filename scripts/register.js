const firebaseConfig = {
    apiKey: "AIzaSyCjE1zXcGtjJD6UEWa1cqKlv-a6yyQ8Wcg",
    authDomain: "ntutweb-7d113.firebaseapp.com",
    projectId: "ntutweb-7d113",
    storageBucket: "ntutweb-7d113.appspot.com",
    messagingSenderId: "712244125629",
    appId: "1:712244125629:web:a49445ed1a761bce153cd4"
  };
  
const app = firebase.initializeApp(firebaseConfig);

var emailregister =document.getElementById("emailregister")
var passwordregister = document.getElementById("passwordregister")


var submitBtnregister = document.getElementById("submitBtnregister")

submitBtnregister.addEventListener("click",function(e){
	firebase.auth().createUserWithEmailAndPassword(emailregister.value, passwordregister.value)
    
	.then(() => {
        var user = firebase.auth().currentUser;
        if(user){
            console.log(user);
            alert("註冊成功")
            window.location.href="index.html";
        }
	})
	.catch((error) => {
                alert("註冊失敗")
                console.log(error.message);
                window.location.href="index.html";
	});
});



//register
//alert("123456789")
//trykillme@gmail.com    123456