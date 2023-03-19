const btn_send = document.getElementById("btn_send");
const msg_text = document.getElementById("msg_text");
const col = document.getElementById("col");
const box_send_msg = document.getElementById("box_send_msg");

var height_box_send_msg = box_send_msg.getBoundingClientRect().height;
var height_row = col.getBoundingClientRect().height;

btn_send.addEventListener("click", function () {
  text = msg_text.value;
  msg_text.value = "";
  html = `
	<div class="msg-row msg-row2">
	        <img class="msg-img" src="img/creeper.jpg">
	        <div class="msg-text">
	          <h2>Creeper</h2>
	          <p>${text}</p>
	        </div>
	</div>`;
  col.innerHTML += html;

  var log = col.children.length;
  var cont = 0;
  for (let i = 0; i < log; i++) {
    height = col.children[i].getBoundingClientRect().height;
    cont = cont + height;
  }

  if (cont >= height_row - height_box_send_msg) {
    col.style.overflow = "scroll";
  }
});
