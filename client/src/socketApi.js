import io from "socket.io-client";

let socket;

export const init = () => {
	console.log("Connecting...");

	socket = io("http://localhost:3000", {
		transports: ["websocket"],
	});

	socket.on("connect", () => console.log("Connected!"));
};

export const sendMessage = (message) => {
	if (socket) socket.emit("new-message", message);
};

export const sendTypingInfo = (message) => {
	if (socket) socket.emit("new-typing", message);
};

export const subscribeToMessages = (cb) => {
	if (!socket) return;

	socket.on("receive-message", (message) => {
		console.log("Yeni mesaj var", message);
		cb(message);
	});
};

export const subscribeToTyping = (cb) => {
	if (!socket) return;

	socket.on("receive-typing", (message) => {
		console.log("Yeni mesaj var", message);
		cb(message);
	});
};

export const subscribeInitialMessages = (cb) => {
	if (!socket) return;

	socket.on("message-list", (messages) => {
		console.log("Initial", messages);
		cb(messages);
	});
};