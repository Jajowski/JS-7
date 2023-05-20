
// 1
let requist = new XMLHttpRequest();

requist.addEventListener("load", function () {
  let mosuliInfo = requist.responseText;
  let mosuliInfoJs = JSON.parse(mosuliInfo);

  let ulItem = document.createElement("ul");

  mosuliInfoJs.data.forEach((element) => {
    let li = document.createElement("li");
    li.textContent=element.name + ' ' + element.color;

      ulItem.appendChild(li);
  });

  document.getElementById("serveri").appendChild(ulItem);
});

requist.open("GET", "https://reqres.in/api/unknown");
requist.send();


// 2

let requist2 = new XMLHttpRequest();

requist2.addEventListener("load", function () {
  let mosuliInfo2 = requist2.responseText;
  let mosuliInfoJs2 = JSON.parse(mosuliInfo2);

  let ulItem = document.createElement("ul");

  mosuliInfoJs2.data.forEach((element) => {
    let li = document.createElement("li");
    li.textContent=element.first_name + ' ' + element.last_name + '- ' +element.email;

      ulItem.appendChild(li);
  });

  document.getElementById("serveri").appendChild(ulItem);
});

requist2.open("GET", "https://reqres.in/api/users?page=2");
requist2.send();