let title = document.getElementById("toDo");

let lastKeyPressTime = 0;
const doublePressKey = 300;

title.addEventListener("keydown", (e) => {
  const currentTime = new Date().getTime();
  if (currentTime - lastKeyPressTime < doublePressKey) {
    const selection = window.getSelection()
    const line = selection.focusNode.parentElement
    line.style.backgroundColor = "#FFD966"
    console.log("double: ", e.code, selection);
  }
  lastKeyPressTime = currentTime;
});
