module.exports.config = {
	name: "menu5",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyễn Thanh Vũ",
	description: "Thông tin các lệnh của bot =))",
	commandCategory: "menu",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`------ Menu list ------
81. namtay
82. newbox
83. nickname
84. nino
85. ninoteach
86. note
87. oantuti
88. outall
89. pending
90. pokemon
91. pormhub
92. rankup
93. rdcolor
94. reactiontest
95. refresh
96. rela
97. reminder
98. remoji-color
99. reset
100. resetexp
(Trang 5/8)
»Hiện tại có 148 lệnh trên bot này
»Dùng help + <số trang> để chuyển trang`, event.threadID, event.messageID);