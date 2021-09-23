// 输入限制数字
const limitNumber = (string) => {
	return string.replace(/[^\d]/g, '');
};

// 验证手机号码
const verifyPhone = (string) => {
	return !/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/.test(string);
};

export { limitNumber, verifyPhone };
