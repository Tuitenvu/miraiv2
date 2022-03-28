module.exports.config = {
	name: "menu3",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyễn Thanh Vũ",
	description: "Thông tin các lệnh của bot =))",
	commandCategory: "menu",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`------ Menu list ------
41. console
42. cony
43. count
44. covid
45. cuoi
46. đá
47. daily
48. đấm
49. damma
50. datlich
51. demngayyeu
52. dhbc
53. dhbc2
54. doantuoi
55. dobede
56. event
57. family
58. fast
59. file
60. findtext
(Trang 3/8)
»Hiện tại có 148 lệnh trên bot này
»Dùng help + <số trang> để chuyển trang`, event.threadID, event.messageID);