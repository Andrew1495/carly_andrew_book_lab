document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector("#new-item-form");
  const nuke = document.querySelector("#nuke");
  form.addEventListener("submit", formHandler);
  nuke.addEventListener("click", nukeHandler)
});


const formHandler = function(event){
  event.preventDefault();
  let inputTitle = event.target.title.value;
  let inputAuthor = event.target.author.value;
  let inputCategory = event.target.category.value;
  let result = document.createElement('li');
  console.log(result);

  let title = document.createElement('p');
  let author = document.createElement('p');
  let category = document.createElement('p');

  title.textContent = inputTitle;
  author.textContent = inputAuthor;
  category.textContent = inputCategory;

  result.appendChild(title)
  result.appendChild(author)
  result.appendChild(category)
  
  
  let unList = document.querySelector("#reading-list")
  unList.appendChild(result)
  event.target.reset();
};




const nukeHandler = function(){
  let ul = document.querySelector("#reading-list");
  ul.innerHTML = "";
};





//   const formHandler = function(event){
//     event.preventDefault()
//     let firstName = event.target.first_name.value
//     let lastName = event.target.last_name.value
//   formResult.textContent = `user was ${firstName}  ${lastName}`
//  document.querySelector('li').appendChild(title);
//  document.querySelector('li').appendChild(author);
//  document.querySelector('li').appendChild(category);
//  document.querySelector('ul').appendChild(result);