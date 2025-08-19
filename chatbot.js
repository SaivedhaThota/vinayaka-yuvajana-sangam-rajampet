<div id="chatbot">
    <button id="chatHeader" class="btn" type="button">
        <div class="wrapper">
            <p class="text">💬 Chat with us</p>
            <div class="flower flower1">
              <div class="petal one"></div>
              <div class="petal two"></div>
              <div class="petal three"></div>
              <div class="petal four"></div>
            </div>
            <div class="flower flower2">
              <div class="petal one"></div>
              <div class="petal two"></div>
              <div class="petal three"></div>
              <div class="petal four"></div>
            </div>
            <div class="flower flower3">
              <div class="petal one"></div>
              <div class="petal two"></div>
              <div class="petal three"></div>
              <div class="petal four"></div>
            </div>
            <div class="flower flower4">
              <div class="petal one"></div>
              <div class="petal two"></div>
              <div class="petal three"></div>
              <div class="petal four"></div>
            </div>
            <div class="flower flower5">
              <div class="petal one"></div>
              <div class="petal two"></div>
              <div class="petal three"></div>
              <div class="petal four"></div>
            </div>
            <div class="flower flower6">
              <div class="petal one"></div>
              <div class="petal two"></div>
              <div class="petal three"></div>
              <div class="petal four"></div>
            </div>
        </div>
    </button>

    <div id="chatBody" style="display:none;">
        <div id="chatMessages"></div>
        <input type="text" id="chatInput" placeholder="Type your question...">
    </div>
</div>

<style>
/* Floating chatbot container */
#chatbot {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  font-family: Arial, sans-serif;
  border-radius: 15px;
  overflow: hidden;
  z-index: 9999;
  text-align: center;
}

/* 🌸 Flower Button Style */
.btn {
  height: 4em;
  width: 12em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0px solid black;
  cursor: pointer;
}

.wrapper {
  height: 2em;
  width: 8em;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 17px;
  z-index: 1;
  color: #000;
  padding: 4px 12px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.5s ease;
}

.flower {
  display: grid;
  grid-template-columns: 1em 1em;
  position: absolute;
  transition: grid-template-columns 0.8s ease;
}

.flower1 { top: -12px; left: -13px; transform: rotate(5deg); }
.flower2 { bottom: -5px; left: 8px; transform: rotate(35deg); }
.flower3 { bottom: -15px; transform: rotate(0deg); }
.flower4 { top: -14px; transform: rotate(15deg); }
.flower5 { right: 11px; top: -3px; transform: rotate(25deg); }
.flower6 { right: -15px; bottom: -15px; transform: rotate(30deg); }

.petal {
  height: 1em;
  width: 1em;
  border-radius: 40% 70% / 7% 90%;
  background: linear-gradient(#E6298A, #ef91c1);
  border: 0.5px solid #ef91c1;
  z-index: 0;
  transition: width 0.8s ease, height 0.8s ease;
}

.two { transform: rotate(90deg); }
.three { transform: rotate(270deg); }
.four { transform: rotate(180deg); }

.btn:hover .petal {
  background: linear-gradient(#E6298A, #ef91c1);
  border: 0.5px solid #ef91c1;
}

.btn:hover .flower {
  grid-template-columns: 1.5em 1.5em;
}

.btn:hover .flower .petal {
  width: 1.5em;
  height: 1.5em;
}

.btn:hover .text {
  background: rgba(255, 255, 255, 0.4);
}

/* Petal animations */
.btn:hover div.flower1 { animation: 15s linear infinite flower1; }
.btn:hover div.flower2 { animation: 13s linear infinite flower2; }
.btn:hover div.flower3 { animation: 16s linear infinite flower3; }
.btn:hover div.flower4 { animation: 17s linear infinite flower4; }
.btn:hover div.flower5 { animation: 20s linear infinite flower5; }
.btn:hover div.flower6 { animation: 15s linear infinite flower6; }

@keyframes flower1 { from { transform: rotate(5deg); } to { transform: rotate(365deg); } }
@keyframes flower2 { from { transform: rotate(35deg); } to { transform: rotate(-325deg); } }
@keyframes flower3 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes flower4 { from { transform: rotate(15deg); } to { transform: rotate(375deg); } }
@keyframes flower5 { from { transform: rotate(25deg); } to { transform: rotate(-335deg); } }
@keyframes flower6 { from { transform: rotate(30deg); } to { transform: rotate(390deg); } }

/* Chat body */
#chatBody {
  padding: 10px;
  background: #f9f9f9;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-top: none;
}
#chatInput {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 8px;
  outline: none;
}

/* Simple chat message styles */
.user-msg {
  text-align: right;
  background: #d1e7ff;
  margin: 5px;
  padding: 6px 10px;
  border-radius: 10px;
  display: inline-block;
}
.bot-msg {
  text-align: left;
  background: #f0f0f0;
  margin: 5px;
  padding: 6px 10px;
  border-radius: 10px;
  display: inline-block;
}
</style>

<script>
const chatbotResponses = {
    "hi": "Hello! Welcome to Vinayaka Yojana Sangam RAJAMPET 🙏",
    "hello": "Hi there! How can I help you today?",
    "festival": "This year's Ganesh Utsav starts on 27th August 2025 🎉",
    "location": "We are located at Vinayaka Temple, Rajampet, Sangareddy, Telangana 📍",
    "pooja": "Pooja timings start from 7:30 PM 🕉️",
    "prasadam": "Prasadam is offered after the pooja 🍚",
    "nimarjan": "Nimarjan is on 4th September, from 7:00 PM 🪔",
    "default": "Sorry, I don’t have an answer for that. Please contact our team."
};

function toggleChat() {
    let body = document.getElementById('chatBody');
    body.style.display = body.style.display === 'none' ? 'block' : 'none';
    if (body.style.display === 'block') {
        document.getElementById('chatInput').focus();
    }
}

document.getElementById('chatHeader').addEventListener('click', toggleChat);

function sendMessage() {
    let input = document.getElementById('chatInput');
    let msg = input.value.trim();
    if (!msg) return;

    let chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML += `<div class="user-msg">${msg}</div>`;

    let reply = chatbotResponses["default"];
    let words = msg.toLowerCase().split(/\s+/); // split by any whitespace

    for (let word of words) {
        if (chatbotResponses[word]) {
            reply = chatbotResponses[word];
            break;
        }
    }

    setTimeout(() => {
        chatMessages.innerHTML += `<div class="bot-msg">${reply}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);

    input.value = "";
}

document.getElementById('chatInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') sendMessage();
});
</script>
