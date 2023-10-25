(function(){
  const firebaseConfig = {
    apiKey: "AIzaSyCcS04PtbD3oLA9SMJdEWGw6AJL0VzvAI4",
  authDomain: "courseo-90d78.firebaseapp.com",
  databaseURL: "https://courseo-90d78-default-rtdb.firebaseio.com",
  projectId: "courseo-90d78",
  storageBucket: "courseo-90d78.appspot.com",
  messagingSenderId: "182134866667",
  appId: "1:182134866667:web:0957b650ab5ba1d9c374ae"
           };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.database();

  // Get elements
  const message = document.getElementById("message");
  const write = document.getElementById("write");
  const read = document.getElementById("read");
  const status = document.getElementById("status");

  // Write
  write.addEventListener('click', e => {
      const messages = db.ref('messages'); 

      const id = (new Date).getTime();

      messages.child(id).set({ 'message': message.value })
          .then(function () {
              status.innerHTML = "Wrote to DB!";
          });
  });

  // Read
  read.addEventListener('click', e => {
      status.innerHTML = "";
      const messages = db.ref('messages'); 

      messages.once('value')
          .then(function (dataSnapshot) {
              var data = dataSnapshot.val();
              var keys = Object.keys(data);

              keys.forEach(function (key) {
                  console.log(data[key]);
                  status.innerHTML += JSON.stringify(data[key]) + '<br>';
              });
          })
          .catch(function (error) {
              console.error("Error reading from DB: " + error);
          });
  });
})();