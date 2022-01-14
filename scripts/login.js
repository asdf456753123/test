const firebaseConfig = {
  apiKey: "AIzaSyCjE1zXcGtjJD6UEWa1cqKlv-a6yyQ8Wcg",
  authDomain: "ntutweb-7d113.firebaseapp.com",
  projectId: "ntutweb-7d113",
  storageBucket: "ntutweb-7d113.appspot.com",
  messagingSenderId: "712244125629",
  appId: "1:712244125629:web:a49445ed1a761bce153cd4"
};

  const app = firebase.initializeApp(firebaseConfig);
  var emailsign=document.getElementById("emailsign")
  var passwordsign = document.getElementById("passwordsign")
  
  var addtwofunctionBtn = document.getElementById("addtwofunctionBtn")
  
addtwofunctionBtn.addEventListener("click",function(e){
	firebase.auth().signInWithEmailAndPassword(emailsign.value, passwordsign.value)
	.then(() => {
    alert("登入成功");
    if(emailsign.value == "admin@gmail.com"){
      alert("歡迎到來管理員");
      window.location.href="admin.html";
    }
    else {
      alert("歡迎你到來客戶");
      window.location.href="interior.html";
    }
//...
    })
	.catch((error) => {
		alert("登入失敗")
	});


});


