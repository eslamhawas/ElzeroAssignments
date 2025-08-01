let addField = document.querySelector(".classes-to-add");
let delField = document.querySelector(".classes-to-remove");
let classesContainer = document.querySelector(".classes-list div");

addField.addEventListener("blur", function () {
  let newClasses = addField.value.trim().toLowerCase().split(" ");
  if (addField.value.length) {
    newClasses.forEach((className) => addField.classList.add(className));
    displayClasses(addField.classList);
    console.log(addField.classList);
    addField.value = "";
  }
});

delField.addEventListener("blur", function () {
  let newClasses = delField.value.trim().toLowerCase().split(" ");
  if (delField.value.length) {
    newClasses.forEach((className) => addField.classList.remove(className));
    displayClasses(addField.classList);
    delField.value = "";
  }
});

function displayClasses(arr) {
  let sortedClasses = Array.from(arr).sort();
  classesContainer.innerHTML = "";
  sortedClasses.forEach((className) => {
    // الاحسن تعمل فورلوب عاديه وتعد من بعد اول ايلمينت
    if (className != "classes-to-add") {
      let span = document.createElement("span");
      span.textContent = className;
      classesContainer.appendChild(span);
    }
  });
}
