module.exports.config = {
	name: "menu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyễn Thanh Vũ",
	description: "Thông tin các lệnh của bot =))",
	commandCategory: "menu",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`---- Danh sách lệnh ----
『1』- help
『2』- help
『3』- help
『4』- help

(Trang 1/1)
»Hiện tại có 2 lệnh trên bot này
»Dùng help + <số trang> để chuyển trang`, event.threadID, event.messageID);
