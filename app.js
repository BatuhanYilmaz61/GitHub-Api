const gitHubForm = document.getElementById("github-form")
const nameInput = document.getElementById("githubname")
const clearLastUsers = document.getElementById("clear-last-users")
const lastUsers = document.getElementById("last-users")
const github = new Github
const ui = new UI
eventListeners(); // tüm eventler

function eventListeners() {
    gitHubForm.addEventListener("submit", getData)
    clearLastUsers.addEventListener("click", clearAllSearched)
    document.addEventListener("DOMContentLoaded", getAllSearched)
}

function getData(e) {
    let userName = nameInput.value.trim();

    if (userName === "") {
        alert("Lütfen Geçerli bir kullanıcı adı girin")
    } else {
        github.getGitData(userName)
            .then(response => {
                if (response.user.message === "Not Found") {
                    ui.showError("Kullanıcı Bulunamadı")
                } else {
                    ui.addSearchedUserToUı(userName);
                    Stroge.addSearchedUserToStroge(userName)
                    ui.showUserInfo(response.user)
                    ui.showRepoInfo(response.repo)
                }
            })
            .catch(err => ui.showError(err))
    }


    ui.clearInput(); // Input Temizleme
    e.preventDefault();

}

function clearAllSearched() {
    // Temizleme
    if (confirm("Emin Misiniz")) {
        Stroge.clearAllSearchedUsersFromStorge(); // temizleme Strogeden
        ui.clearAllSearchedFromUI();

    }
}

function getAllSearched() {
    // st'al ui'e ekle
    let users = Stroge.getSearchedUsersFrom();
    let result = "";
    users.forEach(user => {
        result += `<li class="list-group-item">${user}<li>`
    })
    lastUsers.innerHTML = result;
}