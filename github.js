class Github {
    constructor() {
        this.url = "https://api.github.com/users/"
    }
    async getGitData(username) {
        const responseUser = await fetch(this.url + username);
        const responsRepo = await fetch(this.url + username + "/repos")
        const userData = await responseUser.json();
        const repoData = await responsRepo.json();

        return {
            user: userData,
            repo: repoData
        }
    }
}