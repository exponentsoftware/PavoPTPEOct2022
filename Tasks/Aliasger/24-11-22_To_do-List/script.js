let addToTaskArea = "";
let num = 0; //used to set div ID's
let deleteList = [];
let allDivId = []; //used for available div ID's after deletion
let chktrue = 0; //used to check wether any Check box is checked or not.

function addTask() {
  addToTaskArea = document.getElementById("taskInput").value;
  if (addToTaskArea != "") {
    num++;
    // Elment Creation
    let div = document.createElement("div");
    div.className = "task";
    div.id = num;

    let srNo = document.createElement("label");
    srNo.setAttribute("for", "Sr#");
    srNo.setAttribute("id", "sr" + num);

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "taskCheck");
    checkBox.setAttribute("name", "taskCheck");
    checkBox.setAttribute("id", "chk " + num);
    checkBox.setAttribute("onclick", "strikeout(this.id)");

    let task = document.createElement("label");
    task.setAttribute("for", "task");
    task.setAttribute("id", "tsk" + num);

    //value inputs
    task.innerHTML = addToTaskArea;
    srNo.innerHTML = num + ".";

    //sending to html need to be done only at the time of creation
    document.getElementById("dataIn").appendChild(div);
    document.getElementById(num).appendChild(srNo);
    document.getElementById(num).appendChild(checkBox);
    document.getElementById(num).appendChild(task);
  } else {
    alert("Please enter a task to add to list");
  }
  allDivId.push(num);
  document.getElementById("taskInput").value = "";
}

function strikeout(stId) {
  strikeId = stId.substring(stId.indexOf(" ") + 1);
  let div = document.getElementById(strikeId);
  if (div.className == "strike task") {
    div.className = "task";
    for (i = 0; i < deleteList.length; i++) {
      if (strikeId == deleteList[i]) {
        allDivId.push(strikeId);
        deleteList.splice(i, 1);
        chktrue--;
      }
    }
  } else {
    div.className = "strike task";
    deleteList.push(strikeId);
    chktrue++;

    // removing deleted div ID's from allDivId list
    let allDivIdLen = allDivId.length;
    for (i = 0; i < allDivIdLen; i++) {
      for (j = 0; j < deleteList.length; j++) {
        if (allDivId[i] == deleteList[j]) {
          allDivId.splice(i, 1);
          i = 0;
        }
      }
    }
  }

  //arranging div ids in sequence so that they can be worked upon in sequence removing the same div id issue
  allDivId.sort(); //!important
}

function deleteTask() {
  if (chktrue > 0) {
    num = 0;

    // Deleting the div
    let deleteListLen = deleteList.length;
    for (i = 0; i < deleteListLen; i++) {
      document.getElementById(deleteList[0]).remove();
      deleteList.splice(0, 1);
    }

    //ittration through dics and altering them

    for (k = 0; k < allDivId.length; k++) {
      num++;
      let divId = allDivId[k];
      let div = document.getElementById(divId);

      if (div != null) {
        div.id = num;

        let srNo = document.getElementById("sr" + divId);
        srNo.setAttribute("id", "sr" + num);
        srNo.innerHTML = num + ".";

        let check = document.getElementById("chk " + divId);
        check.setAttribute("id", "chk " + num);

        let task = document.getElementById("tsk" + divId);
        task.setAttribute("id", "tsk" + num);

        //removing changed div ids
        allDivId.splice(k, 1);
        //adding new div id at the bigning
        allDivId.unshift(num);
      }
    }
    //arranging div ids in sequence so that they can be worked upon in sequence removing the same div id issue
    allDivId.sort(); //!important
  } else {
    if (allDivId.length != 0) {
      alert("Plese select a task for deletion");
    } else {
      alert("No task for deletion");
    }
  }

  chktrue = 0; //after deletion resetting the value to avoid double delete button activation
}
