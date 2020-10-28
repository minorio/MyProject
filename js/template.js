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




window.onload = function () {
  let CopyObject = {};
  let News = []; 
  //получение списка заголовков
  firebase.database().ref('Новости').on('value', function (snapshot) {

    CopyObject = snapshot.val();
    News = Object.keys(CopyObject);
    console.log(News);

    for (let i = News.length -1; i > -1; i--) {
      function InsertAll() {
        let div = document.getElementById("foo");
        div.appendChild(d1);
        d1.appendChild(d2);
        d2.appendChild(d3);
        d2.appendChild(d4);
        d2.appendChild(d5);
        d6d7.appendChild(d7);
        d6d7.appendChild(d6);        
        d2.prepend(d6d7)

      }
      //создание контейнеров для новостей
      let d3 = document.createElement('h4');
      let d1 = document.createElement('div');
      let d2 = document.createElement('div');
      let d4 = document.createElement('p');
      let d5 = document.createElement('img');
      let d6 = document.createElement('p');
      let d7 = document.createElement('p');
      let d6d7 = document.createElement('div');
      
      d1.className = 'row justify-content-md-center';
      d2.className = 'col-md-12';
      d3.id = 'Heading' + i;
      d4.id = 'Text' + i;
      d5.id = 'Link' + i;
      d5.classList.add("card-img-top");
      d6.id = 'Time' + i;
      d7.id = 'Author' + i;
      d6d7.className = 'row';
      d6.className = 'col-md-6';
      d7.className = 'col-md-6';

      InsertAll();
      
      let Heading = document.getElementById('Heading' + i);
      let Text = document.getElementById('Text' + i);
      let Link = document.getElementById('Link' + i);
      let Time = document.getElementById('Time' + i);
      let User = document.getElementById('Author' + i);

      firebase.database().ref('Новости/' + News[i]).on('value', function (snapshot) {
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
