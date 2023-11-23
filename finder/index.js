let myLeads = [];

const ulEl = document.getElementById("ul-el");

const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const deleteBtn = document.getElementById("delete");

const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	render(myLeads);
}

tabBtn.addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url);
		localStorage.setItem("myLeads", JSON.stringify(myLeads));
		render(myLeads);
	});
});

function render(leads) {
	let listItems = " ";
	for (let i = 0; i < leads.length; i++) {
		listItems += `
            <li>
                    <a href="${leads[i]}" target="_blank" ">
                    ${leads[i]}
                    </a>
            </li>`;
	}
	ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
	myLeads.push(inputEl.value);
	inputEl.value = "";
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads);
});

deleteBtn.addEventListener("dblclick", function () {
	window.localStorage.clear();
	myLeads = [];
	render(myLeads);
});

// listItems += '<li> <a href="'+ myLeads[i] +
//'" target="_blank" "> ' + myLeads[i] + '</a></li>'

//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
// let li = document.createElement('li');
// li.textContent = myLeads[i];
// ulEl.append(li);

// let bluebox = document.getElementById("box");
// bluebox.addEventListener("click", function () {
//     console.log("I want to open the box ")
//     alert("I want to open the box please")
// })
// for (let i = 0; i < myLeads.length; i++){
//     console.log(myLeads[i])
// }

// const Del = document.getElementById("del");
// Del.innerHTML = "<button onclick='buy()'>Try</button>";
// function buy() {
//     Del.innerHTML += "<p>Thanks for Buying!</p>";
// }

// const greet = document.getElementById("box");
// function greetUser({ name, mood }) {
// 	greet.textContent = `welcome back ${name} 👋🏾 , how was your day? ${mood}`;
// }
// greetUser({ name: "Mr Atanga Cheboh Clifford", mood: "good" });

// function getFirst(arr) {
// 	return arr[5];
// }
// let me = getFirst([2, 45, 5, 56, 67, 75, 343]);
// console.log(me);
