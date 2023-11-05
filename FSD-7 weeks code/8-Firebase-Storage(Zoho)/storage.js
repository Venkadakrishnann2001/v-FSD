(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyCcS04PtbD3oLA9SMJdEWGw6AJL0VzvAI4",
        authDomain: "courseo-90d78.firebaseapp.com",
        databaseURL: "https://courseo-90d78-default-rtdb.firebaseio.com",
        projectId: "courseo-90d78",
        storageBucket: "courseo-90d78.appspot.com",
        messagingSenderId: "182134866667",
        appId: "1:182134866667:web:0957b650ab5ba1d9c374ae"
      };

    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    //create a root refernce
    var storage = firebase.storage()
    var storageRef = storage.ref()

    // get UI elements
    const file = document.getElementById('file');
    const upload = document.getElementById('upload');
    const download = document.getElementById('download');
    const status = document.getElementById('status');
    const image = document.getElementById('image');

    // upload file
    upload.addEventListener('click', e =>{
        var ref= storageRef.child('globe');
        let photo = document.getElementById("file").files[0];

        //upload
        ref.put(photo).then(function(snapshot){
            console.log('uploaded a blob or file');
            status.innerHTML = 'upload a blob or file!'
        })
    })

    // download file
    download.addEventListener('click',e =>{
        var ref =storage.ref('globe');

        ref.getDownloadURL().then(function(url){
            image.src = url;
            status.innerHTML = 'Download blob or file'
        }).catch(function(error){console.log(error)})
    })


}());