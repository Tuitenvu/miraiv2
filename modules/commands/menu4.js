module.exports.config = {
	name: "menu4",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyễn Thanh Vũ",
	description: "Thông tin các lệnh của bot =))",
	commandCategory: "menu",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`------ Menu list ------
61. finduid
62. flop
63. gai3
64. getavt
65. ghep
66. ghepdoi
67. giadinh
68. girl
69. github
70. giveaway
71. givefile
72. gỡ
73. help
74. heodenroi
75. info
76. keobuabao
77. kick
78. kiemtra
79. listen
80. lixi
(Trang 4/8)
»Hiện tại có 148 lệnh trên bot này
»Dùng help + <số trang> để chuyển trang`, event.threadID, event.messageID);