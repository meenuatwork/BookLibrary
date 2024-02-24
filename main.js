let form = document.querySelector(".form");
let button = document.querySelector(".button");
let submit = document.querySelector("#submit");
button.addEventListener("click", function () {
   form.style.visibility = "visible";
})

function Book(title, author, year) {
   this.title = title;
   this.author = author;
   this.year = year;
   this.printBookDetails = function () {
      console.log(`This book ${title} written by ${author} in ${year}`)
   }
}
let listOfBooks = [];

form.addEventListener("submit", function (e) {
   e.preventDefault();
   //console.log("hello")
   const book = new Book(form.title.value, form.author.value, form.year.value);
   listOfBooks.push(book);
   // console.log(book)
   //console.log(listOfBooks);
   addCard(listOfBooks.length - 1);
   form.style.visibility = "hidden"
   form.title.value = "";
   form.author.value = "";
   form.year.value = "";
})
let container2 = document.querySelector(".container2")
function addCard(index) {
   let card = document.createElement("div")
   card.style.boxShadow = "0px 2px 2px 2px"
   card.style.maxWidth = "fit-content"
   card.style.height = "fit-content"
   card.style.background = " rgb(202, 91, 145)";
   card.style.textAlign = "center"
   let title = document.createElement("h3")
   card.appendChild(title)
   title.textContent = listOfBooks[index].title

   let author = document.createElement("h3")
   author.textContent = listOfBooks[index].author
   card.appendChild(author)

   let year = document.createElement("h3")
   year.textContent = listOfBooks[index].year
   card.appendChild(year)
   container2.appendChild(card)
   let readButton = document.createElement("button")
   readButton.textContent = "READ"
   card.appendChild(readButton)
   let click = false;
   readButton.addEventListener("click", function () {
      if (!click) {
         //click.style.background = "green";
         readButton.style.backgroundColor = "red";
         readButton.textContent = "Not Read";
         click = 1
      } else {
         readButton.style.backgroundColor = "green"
         readButton.textContent = "read";
         click = 0
      }
   })

   let removeButton = document.createElement("button")
   removeButton.textContent = "Remove"
   card.appendChild(removeButton)
   removeButton.addEventListener("click", function () {
      container2.removeChild(card)
   })
}






