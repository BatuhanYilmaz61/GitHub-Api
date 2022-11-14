class Stroge {
    static getSearchedUsersFrom() {
        // tüm kullanıcı al
        let users;
        if (localStorage.getItem("searched") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("searched"))
        }
        return users
    }
    static addSearchedUserToStroge(username) {
        // kullanıcı ekle
        let users = this.getSearchedUsersFrom();
        //indexOf -1 sonuç gelirse yoktur
        if (users.indexOf(username) === -1) {
            users.push(username)
        }
        localStorage.setItem("searched", JSON.stringify(users))


    }
    static clearAllSearchedUsersFromStorge() {
        // Bilgileri sil

        localStorage.removeItem("searched")
    }
}