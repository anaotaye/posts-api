let url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(url) {
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  let data = await response.json();
  console.log(response);
  console.log(data);
//   Calling hide loader and show posts function if response is successful
   if (response) {
    hideLoader();
	showPosts();
  }

  showPost(data);
}
// Calling that async function
getPosts(url);

// Hiding loader
function hideLoader() {
  let spinner = document.getElementById("loading");
  spinner.classList.add("hidden");
}

// Displaying posts
function showPosts() {
  let page = document.querySelector(".content");
  page.classList.remove("hidden");
}

const postList = document.querySelector(".posts");
const list = document.createDocumentFragment();

/* FIRST APPROACH */
function showPost(data) {
	data.map(({ title, body }) => {
		let li = document.createElement("li");
		let titleElem = document.createElement("h2");
		let bodyElem = document.createElement("p");
		titleElem.innerHTML = `${title}`;
		bodyElem.innerHTML = `${body}`;
		li.appendChild(titleElem);
		li.appendChild(bodyElem);
		li.classList.add("post");
		list.appendChild(li);
	});
	// return showPost;
	postList.appendChild(list);
}


/* SECOND APPROACH */

// function showPost(data) {
// 	let nodeList = data;
// 	nodeList.map(({ title, body }) => {
// 		let listItem = `<h2>${title}</h2> <p>${body}</p>`;
// 		return listItem;
// 	})
// 	.join("");
// 	postList.innerHTML = nodeList;
// }

/* THIRD APPROACH */

// function showPost(data) {
// 	for (let key in data) {
// 	const { title } = data[key];
// 	listItem = document.createElement("li");
// 	listItem.innerHTML = title;
// 	postList.appendChild(listItem);
// 	}
// }
