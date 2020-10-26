const firebaseConfig = {
    apiKey: "AIzaSyBgVckiwDxHryAhOI-RDJ6PmmAK4sKrjIQ",
    authDomain: "mygameland-d3269.firebaseapp.com",
    databaseURL: "https://mygameland-d3269.firebaseio.com",
    projectId: "mygameland-d3269",
    storageBucket: "mygameland-d3269.appspot.com",
    messagingSenderId: "17717778700",
    appId: "1:17717778700:web:54c68a99eaa92138361129"
  }; 
    firebase.initializeApp(firebaseConfig);
   
 

   window.onload = function(){ 


    let CopyObject = {};
    let News = [];
    
    //получение списка заголовков
   firebase.database().ref('Новости/').on('value', function(snapshot){
     
    function byField(field) {
      return (a, b) => a[field] > b[field] ? 1 : -1;
    }
        CopyObject = snapshot.val();
        News = Object.keys(CopyObject);
      
        for(let i = 0; i < News.length; i++){

     
      function InsertAll(){
        let div = document.getElementById("foo");
        div.appendChild(d1);
        d1.appendChild(d2);
        d2.appendChild(d3);
        d2.appendChild(d4);
        d2.appendChild(d5);
        d2.appendChild(d6);
        d2.appendChild(d7);
      }

      //создание контейнеров для новостей
      let d1 = document.createElement('div');
      d1.className ='row justify-content-md-center';
      let d2 = document.createElement('div');
      d2.className ='col-md-12';
      let d3 = document.createElement('h4');
      d3.id ='Heading' + i;
      let d4 = document.createElement('p');
      d4.id = 'Text' + i
      let d5 = document.createElement('img');
      d5.id = 'Link' + i;
      d5.classList.add("card-img-top");
      let d6 = document.createElement('p');
      d6.id = 'Time' + i;
      let d7 = document.createElement('p');
      d7.id = 'Author' + i;
      InsertAll();

    let Heading = document.getElementById('Heading' + i);
    let Text = document.getElementById('Text' + i);
    let Link = document.getElementById('Link' + i);
    let Time = document.getElementById('Time' + i);
    let User = document.getElementById('Author' + i);
    
      firebase.database().ref('Новости/'+News[i]).on('value', function(snapshot){

      Heading.innerText = snapshot.val().Заголовок;
      Text.innerText = snapshot.val().Текст_новости;
      Link.src = snapshot.val().Ссылка;
      Time.innerText = snapshot.val().Время_публикации;
      User.innerText = 'By: ' + snapshot.val().Пользователь;
    });
  
  } 
});
   }
    

//   <h4 id = 'Heading'>
//       <!-- Заголовок -->
//   </h4>
// </a>
// <p id = 'NewText'>
//   <!-- Текст новости -->
// </p>
// <a href="#">
//   <img id = 'myimg' src="" class="img-fluid" alt="">
//   <!-- Ссылка на картинку -->
// </a>
// <p id = 'TimeAndAuthor'>
//   <!-- Время загрузки новости. Автор новости -->
// </p>
// <hr />
// </div>
// </div>





