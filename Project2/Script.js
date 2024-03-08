const a = document.getElementById("input")
const b = document.getElementById("list")

function add(){
    if (a.value === ''){
        alert("Write Something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = a.value;
        b.appendChild(li);
        let san=document.createElement("san");
        san.innerHTML="\u00d7" //for getting cross icon 'x"//
        li.appendChild(san); // to display the icon//
    }
    a.value="";
    saveData();

}
b.addEventListener("click", function(e){
    if(e.target.tagName === "Li"){        //calling//
        e.target.classList.toggle("t1");
        saveData();
    }
    else if(e.target.tagName === "SAN"){
        e.target.parentElement.remove(); //task deleted
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML); //whatever tthe content we give it will store in innerHTML with the name of data//
}

function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();