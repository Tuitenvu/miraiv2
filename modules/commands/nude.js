module.exports.config = {
	name: "nude",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "Nhật UwU",// Api Như Thành
	description: "Random ảnh Ko phí",
	commandCategory: "random-img",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
		axios.get('https://api-vip.thanhnhu2.repl.co/gai').then(res => {
		let callback = function () {
					api.sendMessage({
						body : ``,
						attachment: fs.createReadStream(__dirname + '/cache/nude.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/nude.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/nude.jpg')).on("close", callback);
			})
}
