const firebaseConfig = {
  apiKey: "AIzaSyCjE1zXcGtjJD6UEWa1cqKlv-a6yyQ8Wcg",
  authDomain: "ntutweb-7d113.firebaseapp.com",
  projectId: "ntutweb-7d113",
  storageBucket: "ntutweb-7d113.appspot.com",
  messagingSenderId: "712244125629",
  appId: "1:712244125629:web:a49445ed1a761bce153cd4"
};
firebase.initializeApp(firebaseConfig);
const tableID = 'comments'
const path = '/comments'
const type = 'value'

  var logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.onclick = function() {
    firebase.auth().signOut().then(function() {
      alert("成功登出");
      window.location.href="index.html";
    })
  }
  