
///START CUSTOM DICTIONARY OPTIONS


let customDictionary = [];
let CRUD = "add";
let editModule = false;

function toggleEdit(hideShow) {
    if (hideShow === "hide") {
        editModule = false;
        document.getElementById("buildingCustom").classList.add("hide");
        // document.querySelector("i[data-sound]").dataset.sound = false;
        document.querySelector("button[data-editpanel='hide']").classList.add("hide");
        document.querySelector("button[data-editpanel='show']").classList.remove("hide");
    } else {
        editModule = true;
        document.querySelector("button[data-editpanel='hide']").classList.remove("hide");
        document.querySelector("button[data-editpanel='show']").classList.add("hide");
        document.getElementById("buildingCustom").classList.remove("hide");
        // document.querySelector("i[data-sound]").dataset.sound = true;
    }

}

function loadList() {
    let data = []
    try {
        let prepData = JSON.parse(localStorage.getItem("customDictionary"));
        for (let i = 0; i < prepData.length; i++) {
            if (prepData[i]) {
                data.push(prepData[i]);
            }
        }
    } catch (error) {
        globalAlert("alert-warning", "This data does not look right.")
    }
    console.log("JSON.stringify(data): " + JSON.stringify(data))
    let customListHTML = "<option>Select Word</option>";
    document.getElementById("localList").innerHTML = "";
    let listCk = [];
    if ((typeof data) === "string") {
        try {
            data = data.split(",");
        } catch (error) {
            console.log("No split error: " + error);
        }

    }
    let tempCustomDictionary = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== ",") {
            tempCustomDictionary.push(data[i])
        }
    }
    console.log("(typeof data): " + (typeof data) + " - JSON.stringify(tempCustomDictionary) : " + JSON.stringify(tempCustomDictionary))

    try {
        if ((typeof tempCustomDictionary) !== "string") {
            console.log("(typeof data): " + (typeof data))
        };
    } catch (error) {
        console.error(error);
        globalAlert("alert-info", error + " - That data looks strange. Are your sure that is one of ours? Clear your local storage or cache.");
        return false;
    }


    words = tempCustomDictionary;
    for (let i = 0; i < tempCustomDictionary.length; i++) {
        console.log("tempCustomDictionary[i]: " + tempCustomDictionary[i])
        if (listCk.indexOf(tempCustomDictionary[i]) === -1) {
            customListHTML = customListHTML + "<option value='" + i + "'>" + tempCustomDictionary[i].substring(2, tempCustomDictionary[i].indexOf(":") - 1).replaceAll("'", "") + "</option>";
            listCk.push(tempCustomDictionary[i]);
        }
    }

    document.getElementById("localList").innerHTML = customListHTML;
    if (listCk.length === 0) {
        globalAlert("alert-danger", "There are no words loaded. Are you sure your data is good?");
        return false;
    }


}

if (localStorage.getItem("customDictionary")) {
    loadList(localStorage.getItem("customDictionary"));
}

function updateCRUD(update) {
    document.getElementById("updateBt").innerHTML = "Submit: " + update + " item.";
    [].forEach.call(document.querySelectorAll("[data-edit]"), function (e) {
        e.classList.remove("active");
    });
    document.querySelector("[data-edit='" + update + "']").classList.add("active");

    if (update === "add") {
        document.getElementById("localList").classList.add("hide");
        document.querySelector("input[name='updateWord']").value = ""
        document.querySelector("input[name='updateDefinition']").value = "";
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
        let tempWordList = [];
        document.getElementById("localList").classList.add("hide");


        for (let i = 0; i < customDictionary.length; i++) {
            tempWordList.push(customDictionary[i].substring(2, customDictionary[i].indexOf(":") - 1).replaceAll("'", ""));

        }


        if (document.querySelector("input[name='updateWord']").value && document.querySelector("input[name='updateDefinition']").value) {
            let newWord = document.querySelector("input[name='updateWord']").value.toLowerCase().trimEnd().trimStart();
            if (tempWordList.indexOf(newWord) === -1) {
                customDictionary = [...customDictionary, "{ '" + newWord + "' : '" + document.querySelector("input[name='updateDefinition']").value + "'}"];
                globalAlert("alert-success", newWord + " added.");
                newWord = "";
                document.querySelector("input[name='updateDefinition']").value = "";
            } else {
                globalAlert("alert-danger", "This list already contains " + newWord + ".");
                return false;
            }


        } else {
            document.querySelector("input[name='updateWord']").classList.add("error");
            document.querySelector("input[name='updateDefinition']").classList.add("error");
            globalAlert("alert-danger", "We are missing something.");
            return false;
        }
    }

    if (update === "edit") {

        if (document.querySelector("input[name='updateWord']").value && document.querySelector("input[name='updateDefinition']").value) {
            let editWord = document.querySelector("input[name='updateWord']").value.toLowerCase();

            for (let i = 0; i < customDictionary.length; i++) {
                if (i === Number(whichIndex)) {
                    customDictionary[i] = "{ '" + editWord + "' : '" + document.querySelector("input[name='updateDefinition']").value + "'}";
                }
            }
            globalAlert("alert-success", editWord + " edited.");
        } else {
            document.querySelector("input[name='updateWord']").classList.add("error");
            document.querySelector("input[name='updateDefinition']").classList.add("error");
            globalAlert("alert-danger", "We are missing something.");
            return false;
        }


    }
    if (update === "delete") {
        let tempList = [];
        for (let i = 0; i < customDictionary.length; i++) {
            if (i !== Number(whichIndex)) {
                tempList.push(customDictionary[i]);
            }
        }

        customDictionary = tempList;
        globalAlert("alert-success", "Deleted.");
    }
    localStorage.setItem("customDictionary", JSON.stringify(customDictionary));
    loadList();
    document.querySelector("input[name='updateWord']").value = ""
    document.querySelector("input[name='updateDefinition']").value = "";

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


//START FILE READER
const fileReader = new FileReader();
let file;
function handleOnChange(event) {
    if (event.target.files[0]) {
        file = event.target.files[0];
        console.log("event.target.files[0]: " + JSON.stringify(event.target.files[0]));
        document.querySelector("#fileUpload").classList.remove("hide");
        document.querySelector("#fileMerge").classList.remove("hide");
        globalAlert("alert-warning", `File selected. Select if you want to merge  with current data or not.`);
    } else {
        document.querySelector("#fileUpload").classList.add("hide");
        document.querySelector("#fileMerge").classList.add("hide");
    }
};
function handleOnSubmit(event, type, merge) {
    event.preventDefault();

    if (file) {
        fileReader.onload = function (event) {
            const tempObj = event.target.result;
            if (type === "json") {



                if (merge === "default") {
                    // localStorage.setItem("customDictionary", tempObj);    
                    localStorage.setItem("customDictionary", tempObj);
                    loadList();

                } else {
                    let tempTasks = [...JSON.parse(localStorage.getItem("customDictionary")), ...JSON.parse(tempObj)];


                    localStorage.setItem("customDictionary", JSON.stringify(tempTasks));

                    loadList();


                }
            }
            else {
                console.log("That wasn't json.")
            }
        };
        fileReader.readAsText(file);
    }
    document.querySelector("input[type='file']").value = "";
    document.querySelector("#fileUpload").classList.add("hide");
    document.querySelector("#fileMerge").classList.add("hide");
    toggleEdit();

    globalAlert("alert-success", "Your file was uploaded. The next word should be one you uploaded.");
};

