"use strict";
class Author {
    constructor(name, avatar, followers) {
        this.name = name;
        this.avatar = avatar;
        this.followers = followers;
    }
    get() {
        const author = document.createElement("a");
        author.href = "../profile/index.html?id=3"; // remover posição relativa
        author.classList.add("author");
        const authorAvatar = document.createElement("img");
        authorAvatar.alt = this.name;
        authorAvatar.src = this.avatar;
        author.appendChild(authorAvatar);
        const authorName = document.createElement("p");
        authorName.classList.add("author-name");
        authorName.innerText = this.name;
        author.appendChild(authorName);
        const authorFollowers = document.createElement("p");
        authorFollowers.classList.add("author-followers");
        authorFollowers.innerText = `${this.followers.toString()} seguidores`;
        author.appendChild(authorFollowers);
        const followButton = document.createElement("button");
        const i = document.createElement("i");
        i.classList.add("ph", "ph-user-plus");
        followButton.appendChild(i);
        const p = document.createElement("p");
        p.innerText = "Seguir";
        followButton.appendChild(p);
        author.appendChild(followButton);
        return author;
    }
}
