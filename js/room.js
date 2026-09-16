// ========== Helper Functions ==========
function replaceImageWithAlt(img) {
	const span = document.createElement('div');
	span.className = 'fallback-avatar';
	span.textContent = img.alt ? img.alt.slice(0, 2).toUpperCase() : 'NA';
	img.parentNode.replaceChild(span, img);
}

function updateNameProfile(name) {
	document.querySelectorAll('.name-profile').forEach((el) => (el.innerText = name));
}

function updateProfileImages() {
	const activeProfileImg = document.querySelector('.room.active .profile-img');
	if (!activeProfileImg) return;

	const imgContent = activeProfileImg.innerHTML;
	document.querySelectorAll('.imge-profile').forEach((el) => (el.innerHTML = imgContent));
}

function loadMessages(name) {
	chatMessages.innerHTML = '';
	const messages = roomData[name];
	if (messages) {
		messages.forEach((msg) => {
			const message = document.createElement('div');
			message.classList.add('message', msg.type === 'received' ? 'message-received' : 'message-sent');
			message.innerText = msg.text;
			chatMessages.appendChild(message);
		});
		chatMessages.scrollTop = chatMessages.scrollHeight;
	}
}

// ========== Initial Data ==========
const roomInfo = {
	'Mohsen Salloum': { alt: 'MS', job: 'Tester', creator: 'QA Team', date: 'Jun. 10, 2022', members: ['Thomas Alisson', 'QA Team'], image: 'img/100.jpg' },
	'Kathryn Smith': { alt: 'KS', job: 'Dress Model', creator: 'Fairy Hub', date: 'Oct. 31, 2021', members: ['Fairy Hub', 'Kathryn Smith'], image: 'img/7.jpg' },
	'Mohamed Ashraf': { alt: 'MA', job: 'UX Designer', creator: 'Design Hub', date: 'Feb. 10, 2022', members: ['Design Hub', 'Mohamed Ashraf'], image: '' },
	'Smith Marvin': { alt: 'SM', job: 'Project Manager', creator: 'PM Team', date: 'Jan. 15, 2022', members: ['Smith Marvin', 'PM Team'], image: 'img/3.jpg' },
	'Lisa Clark': { alt: 'LC', job: 'Graphic Designer', creator: 'Creative Studio', date: 'Mar. 22, 2022', members: ['Lisa Clark', 'Creative Studio'], image: 'img/4.jpg' },
	'Ben Lucas': { alt: 'PO', job: 'Product Owner', creator: 'Product Team', date: 'Apr. 5, 2022', members: ['Ben Lucas', 'Product Team'], image: 'img/5.jpg' },
	'Thomas Kean': { alt: 'TK', job: 'Developer', creator: 'Dev Team', date: 'May 12, 2022', members: ['Thomas Kean', 'Dev Team'], image: 'img/6.jpg' },
	'Thomas Alisson': { alt: 'TA', job: 'Tester', creator: 'QA Team', date: 'Jun. 10, 2022', members: ['Thomas Alisson', 'QA Team'], image: 'img/1.jpg' },
	'Hamid Ahmad': { alt: 'HA', job: 'Support Engineer', creator: 'Support Hub', date: 'Jul. 8, 2022', members: ['Hamid Ahmad', 'Support Hub'], image: 'img/8.jpg' },
	'Mahmoud Sy': { alt: 'MS', job: 'Support Engineer', creator: 'Support Hub', date: 'Jul. 8, 2022', members: ['Hamid Ahmad', 'Support Hub'], image: '' },
};

const roomData = {
	'Kathryn Smith': [
		{ type: 'sent', text: 'Hey Kathryn! Did you receive the new dress samples? 📦' },
		{ type: 'received', text: 'Hi! Yes, they arrived this morning 😊 Everything looks great!' },
		{ type: 'sent', text: 'Perfect. Are they the correct sizes? 👗' },
		{ type: 'received', text: "I checked them all, and they seem perfect except for one that's a bit off." },
		{ type: 'sent', text: 'No problem! I’ll notify the supplier right away. 👍' },
		{ type: 'received', text: 'Thanks a lot! The fabrics feel amazing, by the way 😍' },
		{ type: 'sent', text: 'Glad you like them! We picked premium quality this time ✨' },
		{ type: 'received', text: 'It really shows! Can we schedule the shoot for Friday? 📸' },
		{ type: 'sent', text: 'Yes, Friday works. Is 10 AM good for you? ⏰' },
		{ type: 'received', text: '10 AM is perfect! I’ll bring the accessories too 👠' },
		{ type: 'sent', text: 'Let’s make this campaign a hit 💥' },
		{ type: 'received', text: 'Absolutely. Let’s do it! 💃' },
	],

	'Mohamed Ashraf': [
		{ type: 'received', text: 'Hey, I uploaded the new UX flow to Figma. 💻' },
		{ type: 'sent', text: 'Great, I’ll check it in 10 mins ⏳' },
		{ type: 'received', text: 'Focus especially on the onboarding step 🚀' },
		{ type: 'sent', text: 'Sure. I noticed the navigation is smoother now 😄' },
		{ type: 'received', text: 'Yeah, we reduced steps by 20% 📉' },
		{ type: 'sent', text: 'That’s huge. Did Product approve it? 👀' },
		{ type: 'received', text: 'Waiting on feedback, but they liked the concept 🎯' },
		{ type: 'sent', text: 'Nice. Let me know when you need a usability test 🔍' },
		{ type: 'received', text: 'Will do. Also, check the dark mode layout please 🌙' },
		{ type: 'sent', text: 'On it now. I’ll log any UI inconsistencies 🚧' },
	],

	'Mohsen Salloum': [
		{ type: 'sent', text: 'Hi Mohsen, did you finish reviewing the test cases?' },
		{ type: 'received', text: 'Hey! Yes, I finished reviewing most of them yesterday.' },
		{ type: 'sent', text: 'Awesome. Did you find anything that needs updating?' },
		{ type: 'received', text: 'A couple of edge cases are missing in module X.' },
		{ type: 'sent', text: 'Got it. I’ll add them now and push the changes.' },
		{ type: 'received', text: 'Also, double-check the logout test — it failed last run.' },
		{ type: 'sent', text: 'Oh, I’ll fix that and re-run it.' },
		{ type: 'received', text: 'Thanks. Let me know when the updated report is ready.' },
	],

	'Lisa Clark': [
		{ type: 'received', text: 'Hi Haidara, did you finish the event poster? 🎨' },
		{ type: 'sent', text: 'Yes, sent it on Slack just now 📩' },
		{ type: 'received', text: 'Looks amazing! Love the color palette 🌈' },
		{ type: 'sent', text: 'Thanks! I tried a more modern look 😎' },
		{ type: 'received', text: 'It works really well. I’ll send it to the marketing team ✅' },
		{ type: 'sent', text: 'Let me know if they want revisions ✏️' },
		{ type: 'received', text: 'Will do. Great work Haidara! 👏' },

		// تعارف بعد المحادثة الأولية
		{ type: 'sent', text: 'By the way, I’m Haidara Salameh. I study computer engineering at Shooline University and specialize in full-stack development. What about you?' },
		{ type: 'received', text: 'Nice to meet you, Haidara! I’m Lisa Clark, I work in marketing and I also enjoy graphic design on the side.' },
		{ type: 'sent', text: 'That’s cool! Seems like we both work in creative fields. Full-stack development is pretty demanding but I love it. What’s your favorite part about marketing?' },
		{ type: 'received', text: 'I love how dynamic it is—always new trends and challenges. And I get to be creative too, especially with designs.' },
		{ type: 'sent', text: 'Sounds great! If you ever want help building a website or anything tech-related, I’d be happy to help.' },
		{ type: 'received', text: 'That would be awesome! Maybe you could teach me some coding tips.' },
		{ type: 'sent', text: 'Definitely! And maybe you can teach me some design tricks in return.' },
		{ type: 'received', text: 'Deal! Looking forward to it 😊' },
	],

	'Ben Lucas': [
		{ type: 'sent', text: 'Ben, do we have confirmation on the release date? 📆' },
		{ type: 'received', text: 'Yes, it’s been moved to June 30th 🚀' },
		{ type: 'sent', text: 'Okay. What about the mobile feature? 📱' },
		{ type: 'received', text: 'That’s still being reviewed by Legal 🕵️‍♂️' },
		{ type: 'sent', text: 'Let me know when it’s cleared, I’ll prep QA ✅' },
		{ type: 'received', text: 'Sure, I’ll ping you once I get the green light 🟢' },
	],

	'Smith Marvin': [
		{ type: 'sent', text: 'Hey Smith, can you join the planning meeting? 📣' },
		{ type: 'received', text: 'Yes, I’ll join in 5 minutes. ⏱️' },
		{ type: 'sent', text: 'Great. We need to finalize sprint 18. 📈' },
		{ type: 'received', text: 'I’ve already prepped the backlog.' },
		{ type: 'sent', text: 'Legend! Bring it up during the call.' },
		{ type: 'received', text: 'Will do.' },
		{ type: 'sent', text: '😊' },
		{ type: 'received', text: 'Let’s sync after lunch.' },
	],

	'Thomas Kean': [
		{ type: 'received', text: 'Morning Thomas, CI/CD build is failing again. 🛠️' },
		{ type: 'sent', text: 'Checking it now. Might be the test coverage rule.' },
		{ type: 'received', text: 'Let me know if you need help. 👀' },
		{ type: 'sent', text: 'Thanks. I’ll rerun it after updating coverage threshold.' },
		{ type: 'received', text: 'Cool. Ping me if it succeeds.' },
		{ type: 'sent', text: 'Let’s double-check before the release. ✅' },
	],

	'Thomas Alisson': [
		{ type: 'sent', text: 'Thomas, can you verify bug #1125 on Safari?' },
		{ type: 'received', text: 'Sure. Just reproduced it. It’s a layout issue. 📱' },
		{ type: 'sent', text: 'Thanks. Can you log it in Jira?' },
		{ type: 'received', text: 'Done. Assigned it to the UI team.' },
		{ type: 'sent', text: '🚀' },
		{ type: 'received', text: 'Noted. Thanks for the heads-up!' },
	],

	'Hamid Ahmad': [
		{ type: 'received', text: 'Hamid, are we seeing drops in server response? ⚡' },
		{ type: 'sent', text: 'Yes, traffic spikes are causing it.' },
		{ type: 'received', text: 'Can we autoscale or cache more aggressively?' },
		{ type: 'sent', text: 'Working on it now. Will update in 20 mins. ⏱️' },
		{ type: 'received', text: 'Let’s sync after lunch. 📞' },
	],

	'Mahmoud Sy': [
		{ type: 'sent', text: 'Mahmoud, did you follow up with client on ticket #321?' },
		{ type: 'received', text: 'Yes, client confirmed the issue is resolved. ✅' },
		{ type: 'sent', text: 'Perfect. Mark it closed and update logs.' },
		{ type: 'received', text: 'Already done. Thanks! 🎉' },
		{ type: 'sent', text: '👍' },
		{ type: 'received', text: 'Let’s double-check before the release.' },
	],
};

const names = Object.keys(roomInfo);
const rooms = document.querySelector('.chat-rooms');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

// ========== Render Chat Rooms ==========

function renderChatRooms() {
	rooms.innerHTML = '';
	names.forEach((name, i) => {
		const info = roomInfo[name];
		const fullLastMsg = roomData[name]?.[roomData[name].length - 1]?.text || 'No messages yet';
		const lastMsg = fullLastMsg.length > 30 ? fullLastMsg.slice(0, 30) + '...' : fullLastMsg;

		const room = document.createElement('div');
		room.className = `room${i === 0 ? ' active' : ''}`;
		room.dataset.name = name;

		room.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <div class="profile-img">
          <img class="img-fluid" src="${info.image}" alt="${name}" loading="lazy">
        </div>
        <div style="flex: 1" class="d-flex justify-content-between">
          <div>
            <h6 class="fw-6 fw-bold mb-0 profil-name">${name}</h6>
            <p  class="last-message">${lastMsg}</p>
          </div>
          <p class="last-message-date">Jul ${33 - (i * 3 + 3)}</p>
        </div>
      </div>`;
		rooms.appendChild(room);
	});
}

// ========== Search ==========
const noResults = document.getElementById('noResults');
function handleSearch(e) {
	const value = e.target.value.toLowerCase();
	let hasMatch = false;

	document.querySelectorAll('.chat-rooms .room').forEach((room) => {
		const name = room.dataset.name.toLowerCase();
		const fullLastMsg = roomData[name]?.[roomData[name].length - 1]?.text.toLowerCase() || '';

		const matches = name.includes(value) || fullLastMsg.includes(value);
		room.style.display = matches ? '' : 'none';
		if (matches) hasMatch = true;
	});

	noResults.style.display = hasMatch ? 'none' : 'block';
}

// ========== Room Click Event ==========
function handleRoomClick(e) {
	const roomDiv = e.target.closest('.room');
	if (!roomDiv) return;

	document.querySelectorAll('.room').forEach((r) => r.classList.remove('active'));
	roomDiv.classList.add('active');

	const name = roomDiv.dataset.name;
	updateNameProfile(name);
	updateProfileImages();
	loadMessages(name);
}

// ========== Image Fallback ==========
function setupImageFallbacks() {
	document.querySelectorAll('.profile-img img').forEach((img) => {
		if (!img.src || img.src.trim() === '') {
			replaceImageWithAlt(img);
		} else {
			img.addEventListener('error', () => replaceImageWithAlt(img));
		}
	});
}

// ========== Send Message ==========
function playSendSound() {
	// إعادة الصوت للبداية وتشغيله من جديد
	sendSound.currentTime = 0;
	sendSound.play();
}
const sendSound = new Audio('./../sounds/bubble-popping-229138.mp3');
function sendMessage() {
	const activeRoom = document.querySelector('.room.active');
	if (!activeRoom) return;

	const name = activeRoom.dataset.name;
	const text = messageInput.value.trim();
	if (!text) return;

	if (!roomData[name]) roomData[name] = [];
	roomData[name].push({ type: 'sent', text });

	loadMessages(name);
	updateLastMessageUI(activeRoom, text);
	rooms.prepend(activeRoom);
	playSendSound();

	messageInput.value = '';
	messageInput.focus();
}

function updateLastMessageUI(room, text) {
	const lastMessage = room.querySelector('.last-message');
	const lastDate = room.querySelector('.last-message-date');

	const now = new Date();
	const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

	if (lastMessage) lastMessage.innerText = text;
	if (lastDate) lastDate.innerText = formatted;
}

// ========== Init ==========
function initChatApp() {
	renderChatRooms();
	loadMessages(names[0]);
	updateNameProfile(names[0]);
	updateProfileImages();
	setupImageFallbacks();
	setupEventListeners();
}

function setupEventListeners() {
	sendBtn.addEventListener('click', sendMessage);

	messageInput.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	});

	rooms.addEventListener('click', handleRoomClick);
	document.querySelector('.search-input.chat input').addEventListener('input', handleSearch);
}

// ========== Start ==========
initChatApp();

// =================================

const chatContainer = document.querySelector('.chat-messages');

let isDragging = false;
let startY;
let scrollTop;

chatContainer.addEventListener('mousedown', (e) => {
	isDragging = true;
	chatContainer.classList.add('dragging');
	startY = e.pageY - chatContainer.offsetTop;
	scrollTop = chatContainer.scrollTop;
});

chatContainer.addEventListener('mouseleave', () => {
	isDragging = false;
	chatContainer.classList.remove('dragging');
});

chatContainer.addEventListener('mouseup', () => {
	isDragging = false;
	chatContainer.classList.remove('dragging');
});

chatContainer.addEventListener('mousemove', (e) => {
	if (!isDragging) return;
	e.preventDefault();
	const y = e.pageY - chatContainer.offsetTop;
	const walk = (y - startY) * 1;
	chatContainer.scrollTop = scrollTop - walk;
});

//   ===================================================================================
const toggleBtn = document.getElementById('toggleBtn');
const sidebarTwo = document.getElementById('sidebar-two');
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn-room');

function updateUIBasedOnWidth() {
	if (window.innerWidth < 1900) {
		toggleBtn.classList.add('show-on-small');
		sidebarTwo.classList.add('hide-on-small');
		sidebarTwo.classList.remove('active');
		overlay.classList.remove('active');
	} else {
		toggleBtn.classList.remove('show-on-small');
		sidebarTwo.classList.remove('hide-on-small', 'active');
		overlay.classList.remove('active');
	}
}

toggleBtn.addEventListener('click', () => {
	sidebarTwo.classList.remove('hide-on-small');
	overlay.classList.add('active');
	setTimeout(() => {
		sidebarTwo.classList.add('active');
		toggleBtn.classList.add('hidden');
	}, 10);
});

function hideSidebar() {
	sidebarTwo.classList.remove('active');
	overlay.classList.remove('active');
	setTimeout(() => {
		sidebarTwo.classList.add('hide-on-small');
		toggleBtn.classList.remove('hidden');
	}, 300);
}

closeBtn.addEventListener('click', hideSidebar);
overlay.addEventListener('click', hideSidebar);
window.addEventListener('resize', updateUIBasedOnWidth);

updateUIBasedOnWidth();

// ==========================================================
const room = document.querySelectorAll('.room');
const conversations = document.querySelector('.conversations');
const closeBtne = document.querySelector('.conversations .close-conversations');

room.forEach((room) => {
	room.addEventListener('click', () => {
		if (window.innerWidth < 768) {
			conversations.classList.add('active');
		}
	});
});

closeBtne.addEventListener('click', () => {
	conversations.classList.remove('active');
	room.forEach((room) => {
		room.classList.remove('active');
	});
});

// ======================================
document.addEventListener('DOMContentLoaded', function () {
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

	tooltipTriggerList.forEach(function (el) {
		const placement = el.getAttribute('data-bs-placement') || 'top';
		new bootstrap.Tooltip(el, {
			placement: placement,
			fallbackPlacements: [],
		});
	});
});
