class UserInfo {
    constructor() {
        this.username = '';
        this.userJob = '';
    }

    setUserInfo(name, job) {
        this.username = name;
        this.userJob = job;
    }

    updateUserInfo() {
        userName.textContent = this.username;
        userJob.textContent = this.userJob;
    }
}
