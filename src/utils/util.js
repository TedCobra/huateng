// 输入限制数字
const limitNumber = (string) => {
	return string.replace(/[^\d]/g, '');
};

// 验证手机号码
const verifyPhone = (string) => {
	return !/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/.test(string);
};

// 获取浏览器路径参数
const getUrlParam = (key) => {
	let reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
	let keyValuePair = location.search.substr(1).match(reg);
	if (keyValuePair) return unescape(keyValuePair[2]);
	return null;
};

// 时间戳转年月日
const YearMonthDay = (timeStamp) => {
	let date = new Date(timeStamp);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	return `${year}-${month}-${day}`;
};

export { limitNumber, verifyPhone, getUrlParam, YearMonthDay };
