//get user input
const button = document.querySelector('.commentButton');
button.addEventListener('click', makeList, false);
//define some global variables

function dateFunction() {
      var d = new Date();
      var date = d.getDate();
      var month = d.getMonth();
      var year = d.getFullYear();
      // const d = new Date();
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var commentDate = `${months[month]} ${date}, ${year}`;
      return commentDate;
}

//store comment in array
const commentarray = [];

//log to local storage

function makeList() {

      let comment = document.querySelector('#hikecomment').value;

      if (comment !== '') {
            let hikereview = {
                  name: document.querySelector('#hikename').value,
                  date: dateFunction(),
                  content: comment,
                  type: 'hike'
            };
            commentarray.push(hikereview)
      }
      localStorage.setItem('commentarray', JSON.stringify(commentarray));
      document.querySelector('#hikecomment').innerHTML = '';

};
let commentJSON = JSON.parse(localStorage.getItem('commentarray'));


const hikeComments = commentJSON.filter(commentarray => commentarray.name === 'Bechler Falls');
console.log(hikeComments)
hikeComments.forEach(comment => {
      // console.log(comment);
      let li = document.createElement('li');
      li.innerHTML = comment.content;
      document.querySelector('.testoutput').append(li);
})