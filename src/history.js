
const result = {
  element: document.getElementById('result')
}
window.onpopstate = function (event) {
  this.console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

window.onload = function () {
  // 初期化
  history.pushState({ path: location.pathname }, null, location.pathname);

  result.element.textContent = history.state.path;
};


