let playerMoney = 500;
if (localStorage.getItem("balance") && Number(localStorage.getItem("balance"))) {
    playerMoney = Number(localStorage.getItem("balance"));
}
document.querySelector("#playerMoney").innerHTML = playerMoney;
let cheated = false;

////START FUNCTIONALITY 
let words = [{ "TEST": "Checking if something works." }, { "RUNNING": "Moving faster than jogging on your feet.[2] Something is actually working correctly." }];
if (localStorage.getItem("customDictionary")) {
    words = JSON.parse(localStorage.getItem("customDictionary"));
}


let gameHTML = "";
let randomNum;
let wordDef;
let wordPrep;
let definitionPrep;
let wordSolution = "";
let letterSolved = [];
let failedRequests = [];
let requestFailedHTML = "";

function setPlayerMoney(passPlayerMoney) {
    playerMoney = passPlayerMoney;
    document.getElementById("playerMoney").innerHTML = passPlayerMoney;
    document.querySelector("#playerMoney").innerHTML = passPlayerMoney;/*SAFARI BUG NEEDS BOTH */
    localStorage.setItem("balance", passPlayerMoney);
}

function startGame() {
    randomNum = Math.floor(Math.random() * words.length);
    console.log("JSON.stringify(words): " + JSON.stringify(words))
    wordDef = JSON.stringify(words[randomNum]).split(":");
    ///tempCustomDictionary[i].substring(2, tempCustomDictionary[i].indexOf(":") - 1).replaceAll("'", "")
    wordPrep = wordDef[0].substring(2, wordDef[0].length - 1).trim().replace(" ", "-").replaceAll("'", "");
    definitionPrep = wordDef[1].substring(1, wordDef[1].length - 2).replaceAll("'", "");

    for (let i = 0; i < wordPrep.length; i++) {/*remember to check for spaces*/
        let addThis = " ~ ";
        if (wordPrep[i] === "-") {
            addThis = " - ";
        }
        letterSolved.push(addThis);
        wordSolution = wordSolution + addThis;
    }

    gameHTML = gameHTML + "<li class='list-group-item'><div class='d-grid gap-2'><button class='btn btn-primary' onClick='javascript:showNum()' >Cheat</button></div><span class='hide' ><u><b>" + wordPrep
        + "</b></u></span> " + definitionPrep + "<div id='hiddenWordTarget'><h3>" + wordSolution
        + "</h3></div><input type='text' name='userGuess' class='form-control' maxlength='1' placeholder='Is there a...' /><div class='d-grid gap-2'><button class='btn btn-block btn-primary py-2' onClick='javascript:verify()'>Request Letter</button>" +
        "<input type='text' name='solveWord' class='form-control'  placeholder='Solve word' /><button  class='btn btn-block btn-success py-2' onClick='javascript:solve()'>Solve</button></div></li>";
    document.querySelector("#listTarget").innerHTML = gameHTML;
}


startGame();

function showNum() {

    cheated = true;
    document.querySelector(".list-group-item span").classList.remove("hide");
    document.querySelector(".list-group-item .btn").classList.add("hide");
    document.querySelector("input[name='solveWord']").value = wordPrep;
}

function verify() {
    let statusList = "";
    const userGuess = document.querySelector("[name='userGuess']").value;
    for (let i = 0; i < wordPrep.length; i++) {
        if (userGuess.toLowerCase() === wordPrep[i].toLowerCase()) {
            letterSolved[i] = userGuess.toLowerCase();
        }
    }

    for (let i = 0; i < letterSolved.length; i++) {
        statusList = statusList + letterSolved[i];

        if (failedRequests.indexOf(userGuess.toLowerCase()) === -1 && letterSolved.indexOf(userGuess.toLowerCase()) === -1) {
            failedRequests.push(userGuess.toLowerCase());
            requestFailedHTML = requestFailedHTML + userGuess.toLowerCase() + " ";
        }
        window.location = "#";
    }

    document.getElementById("hiddenWordTarget").innerHTML = statusList;
    document.querySelector("[name='userGuess']").value = "";
    document.querySelector("#requestedList").innerHTML = requestFailedHTML;

    if (letterSolved.indexOf(" ~ ") === -1) {
        document.querySelector("input[name='solveWord']").value = wordPrep;
    }
}

function solve() {
    let percentage = 100;
    for (let i = 0; i < failedRequests.length; i++) {
        percentage = percentage - 10;
    }

    document.querySelector("#winLoseStatus[role='alert']").classList.remove("hide");
    if (document.querySelector("input[name='solveWord']").value.toLowerCase() === wordPrep.toLowerCase()) {

        document.querySelector("#winLoseStatus[role='alert']").classList.add("alert-success");
        if (cheated === false) {
            document.querySelector("#winLoseStatus[role='alert']").innerHTML = "<h3><span class='capitalize'>" + wordPrep + "</span>! YOU DID IT! +$" + percentage + "</h3>";
            setPlayerMoney((playerMoney + percentage));
        } else {
            document.querySelector("#winLoseStatus[role='alert']").innerHTML = "<h3><span class='capitalize'>" + wordPrep + "</span>. YOU CHEATED. NO WINNINGS.</h3>";
        }


    } else {
        document.querySelector("#winLoseStatus[role='alert']").classList.add("alert-danger");
        document.querySelector("#winLoseStatus[role='alert']").innerHTML = "<h3><span class='capitalize'>" + wordPrep + "</span>! YOU FAILED! - $50</h3>";

        setPlayerMoney((playerMoney - 50));
    }

    setTimeout(() => {
        gameHTML = "";
        wordSolution = "";
        letterSolved = [];
        document.querySelector("#listTarget").innerHTML = gameHTML;
        document.querySelector("#winLoseStatus[role='alert']").classList.add("hide");
        document.querySelector("#winLoseStatus[role='alert']").classList.remove("alert-success");
        document.querySelector("#winLoseStatus[role='alert']").classList.remove("alert-danger");
        failedRequests = [];
        document.getElementById("requestedList").innerHTML = "Guess the word";
        requestFailedHTML = "";
        cheated = false;
        startGame();
    }, 3000);
}

///START CUSTOM DICTIONARY OPTIONS
let customDictionary = [];
let CRUD = "add";
let editModule = false;

function toggleEdit() {
    if (editModule === true) {
        editModule = false;
        document.getElementById("buildingCustom").classList.add("hide");
        document.querySelector("i[data-sound]").dataset.sound = false;
    } else {
        editModule = true;
        document.getElementById("buildingCustom").classList.remove("hide");
        document.querySelector("i[data-sound]").dataset.sound = true;
    }

}

function loadList(data) {
    let customListHTML = "<option>Select Word</option>";
    document.getElementById("localList").innerHTML = "";
    let listCk = [];
    let tempCustomDictionary = data.split(",");
    tempCustomDictionary = JSON.parse(tempCustomDictionary);
    for (let i = 0; i < tempCustomDictionary.length; i++) {
        if (listCk.indexOf(tempCustomDictionary[i]) === -1) {
            customListHTML = customListHTML + "<option value='" + i + "'>" + tempCustomDictionary[i].substring(2, tempCustomDictionary[i].indexOf(":") - 1).replaceAll("'", "") + "</option>";
            listCk.push(tempCustomDictionary[i]);
        }
    }
    document.getElementById("localList").innerHTML = customListHTML;

}

if (localStorage.getItem("customDictionary")) {
    loadList(localStorage.getItem("customDictionary"));
}

function updateCRUD(update) {
    document.getElementById("updateBt").innerHTML = update;
    [].forEach.call(document.querySelectorAll("[data-edit]"), function (e) {
        e.classList.remove("active");
    });
    document.querySelector("[data-edit='" + update + "']").classList.remove("active");

    if (update === "add") {
        document.getElementById("localList").classList.add("hide");
    } else {
        document.getElementById("localList").classList.remove("hide");
    }
    CRUD = update;
}


function updateCustom() {
    document.querySelector("input[name='updateWord']").classList.remove("error");
    document.querySelector("input[name='updateDefinition']").classList.remove("error");
    let whichIndex = document.getElementById("localList").value;
    update = CRUD;
    if (localStorage.getItem("customDictionary")) {
        customDictionary = JSON.parse(localStorage.getItem("customDictionary"));
    }

    if (update === "add") {
        document.getElementById("localList").classList.add("hide");
        if (document.querySelector("input[name='updateWord']").value && document.querySelector("input[name='updateDefinition']").value) {
            customDictionary = [...customDictionary, "{ '" + document.querySelector("input[name='updateWord']").value + "' : '" + document.querySelector("input[name='updateDefinition']").value + "'}"];
            document.querySelector("input[name='updateWord']").value = "";
            document.querySelector("input[name='updateDefinition']").value = "";
        } else {
            document.querySelector("input[name='updateWord']").classList.add("error");
            document.querySelector("input[name='updateDefinition']").classList.add("error");
            console.log("invalid field");
            return false;
        }
    }
    //["{ 'Snarky' : 'Having stank.'}"]
    if (update === "edit") {
        for (let i = 0; i < customDictionary.length; i++) {
            if (i === Number(whichIndex)) {
                customDictionary[i] = "{ '" + document.querySelector("input[name='updateWord']").value + "' : '" + document.querySelector("input[name='updateDefinition']").value + "'}";
            }
        }
    }
    if (update === "delete") {
        let tempList = [];
        for (let i = 0; i < customDictionary.length; i++) {
            if (i !== Number(whichIndex)) {
                tempList.push(customDictionary[i]);
            }
        }
        document.querySelector("input[name='updateWord']").value = ""
        document.querySelector("input[name='updateDefinition']").value = "";

        customDictionary = tempList;
    }
    localStorage.setItem("customDictionary", JSON.stringify(customDictionary));
    loadList(JSON.stringify(customDictionary));
}


function selectWord() {
    let whichIndex = document.getElementById("localList").value;
    document.querySelector("input[name='updateWord']").value = words[Number(whichIndex)].substring(2, words[Number(whichIndex)].indexOf(":") - 1).replaceAll("'", "");
    document.querySelector("input[name='updateDefinition']").value = words[Number(whichIndex)].substring(words[Number(whichIndex)].indexOf(":") + 2, words[Number(whichIndex)].length - 2).replaceAll("'", "");
}

function downloadData() {
    let tempData = [];
    if (localStorage.getItem("customDictionary")) {
        tempData = JSON.parse(localStorage.getItem("customDictionary"));
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(tempData, null, 2)], {
        type: 'application/json'
    }));
    a.setAttribute("download", "wordFun.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function uploadData(e) {
    console.log("Not up yet.");
    //START FILE READER
    /*
    const fileReader = new FileReader();
    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
        if (e.target.files[0]) {
            setImportDisable((importDisable) => false);
        }
    };
    const handleOnSubmit = (e, type) => {
        e.preventDefault();
        localStorage.setItem("csvData", "");
        if (file) {
            fileReader.onload = function (event) {
                const csvOutput = event.target.result;
   
                if (type === "csv") {
                    buildObjects(csvOutput);
                } else {
                    let tempObj = JSON.stringify(JSON.parse(csvOutput));
                    localStorage.setItem("csvData", tempObj);
                    props.getData();
                }
   
            };
   
            fileReader.readAsText(file);
        }
        document.querySelector("input[type='file']").value = "";
        setImportDisable((importDisable) => true);
    };*/
}