module.exports.config = {
	name: "menu7",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyễn Thanh Vũ",
	description: "Thông tin các lệnh của bot =))",
	commandCategory: "menu",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`------ Menu list ------
121. setting
122. short
123. shortlink
124. shortcut
125. sim
126. simnokey
127. sing
128. sleep
129. slot
130. taixiu
131. teach
132. thamgia
133. thread
134. tictactoe
135. tid
136. tikvideo
137. tile
138. tilemayman
139. toilet
140. top
(Trang 7/8)
»Hiện tại có 148 lệnh trên bot này
»Dùng help + <số trang> để chuyển trang`, event.threadID, event.messageID);