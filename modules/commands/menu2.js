module.exports.config = {
	name: "menu2",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyễn Thanh Vũ",
	description: "Thông tin các lệnh của bot =))",
	commandCategory: "menu",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`------ Menu list ------
21. baucua
22. baucuav3
23. bot
24. box
25. boxicon
26. boxinfo
27. cache
28. callad
29. caro
30. cauca
31. cave
32. cccd
33. chanle
34. chanle2
35. checktt
36. choose
37. chuyentien
38. cmd
39. conflip
40. config
(Trang 2/8)
»Hiện tại có 148 lệnh trên bot này
»Dùng help + <số trang> để chuyển trang`, event.threadID, event.messageID);