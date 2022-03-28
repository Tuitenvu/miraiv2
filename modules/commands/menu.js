module.exports.config = {
	name: "menu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyễn Thanh Vũ",
	description: "Thông tin các lệnh của bot =))",
	commandCategory: "menu",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`------ Menu list ------
1. adduser
2. admin
3. adminOnly
4. advice
5. afk
6. allbox
7. alltag
8. anh
9. ảnh
10. antiout
11. appstate
12. ascii
13. autorep
14. autosetname
15. badword
16. baicao
17. money
18. bank
19. baitaixiu
20. bantho
(Trang 1/8)
»Hiện tại có 148 lệnh trên bot này
»Dùng help + <số trang> để chuyển trang`, event.threadID, event.messageID);