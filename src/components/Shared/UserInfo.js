const UserInfo = () => JSON.parse(localStorage.getItem("userInfo")) || {};

export default UserInfo;
