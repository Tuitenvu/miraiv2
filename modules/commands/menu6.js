module.exports.config = {
	name: "menu6",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyễn Thanh Vũ",
	description: "Thông tin các lệnh của bot =))",
	commandCategory: "menu",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`------ Menu list ------
101. restart
102. rname
103. rnamebot
104. roll
105. rule
106. rules
107. say
108. selflisten
109. sendfile
110. sendmsg
111. sendnoti
112. sendt
113. setdatauser
114. setexp
115. setimgbox
116. setjoin
117. setkey
118. setleave
119. setmoney
120. setname
(Trang 6/8)
»Hiện tại có 148 lệnh trên bot này
»Dùng help + <số trang> để chuyển trang`, event.threadID, event.messageID);