interface Commentary {
    avatar: string;
    author: string;
    likes: number;
    dislikes: number;
    comment: string;
    rate: number;
    createdAt: Date;
}

class CommentManager {
    private container: HTMLElement;
    private comments: Commentary[];

    constructor(container: HTMLElement | null, comments: Commentary[]) {
        if (!container || !comments)
            throw new TypeError("Container ou comentários não são do tipo válido.");

        this.container = container;
        this.comments = comments;
    }

    loadComments() {
        this.container.innerHTML = "";

        for (let comment of this.comments) {
            const c = new UserComment({ ...comment });
            this.container.appendChild(c.build());
        }
    }
}

class UserComment implements Commentary {
    avatar: string;
    author: string;
    likes: number;
    dislikes: number;
    comment: string;
    rate: number;
    createdAt: Date;
    
    constructor({ avatar, author, likes, dislikes, comment, rate, createdAt }: Commentary) {
        this.avatar = avatar;
        this.author = author;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comment = comment;
        this.rate = rate;
        this.createdAt = createdAt;
    }

    build() {
        const comment = document.createElement("div");
        comment.classList.add("comment");

        const commentAvatar = document.createElement("div");
        commentAvatar.classList.add("comment-avatar");
        comment.appendChild(commentAvatar);
        const commentAvatarImg = document.createElement("img");
        commentAvatarImg.setAttribute("src", this.avatar);
        commentAvatar.appendChild(commentAvatarImg);
        //
        const commentContent = document.createElement("div");
        commentContent.classList.add("comment-content");
        comment.appendChild(commentContent);
        const commentRate = document.createElement("div");
        commentRate.classList.add("comment-rate");
        commentContent.appendChild(commentRate);

        for (let r = 0; r < 5; r++) {
            if (r < this.rate) {
                let i = document.createElement("i");
                i.classList.add("ph-fill");
                i.classList.add("ph-star");
                commentRate.appendChild(i);
            } else {
                let i = document.createElement("i");
                i.classList.add("ph");
                i.classList.add("ph-star");
                commentRate.appendChild(i);
            }
        }

        const commentInfos = document.createElement("div");
        commentInfos.classList.add("comment-infos");
        commentContent.appendChild(commentInfos);
        const commentAuthor = document.createElement("span");
        commentAuthor.innerText = this.author;
        commentInfos.appendChild(commentAuthor);
        const commentInfosSplit = document.createElement("span");
        commentInfosSplit.innerText = "∙";
        commentInfos.appendChild(commentInfosSplit);
        const d = this.createdAt;
        const commentDate = document.createElement("span");
        commentDate.innerText = `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`;
        commentInfos.appendChild(commentDate);
        const commentText = document.createElement("article");
        commentText.classList.add("comment-text");
        commentText.innerHTML = this.comment.split("\n").join("<br/>");
        commentContent.appendChild(commentText);

        const commentOptions = document.createElement("div");
        commentOptions.classList.add("comment-options");
        commentContent.appendChild(commentOptions);
        const like = document.createElement("button");
        like.setAttribute("title", "Útil");
        commentOptions.appendChild(like);
        const likeIcon = document.createElement("i");
        likeIcon.classList.add("ph");
        likeIcon.classList.add("ph-arrow-fat-up");
        like.appendChild(likeIcon);
        const likeCount = document.createElement("span");
        likeCount.innerText = this.likes.toString();
        like.appendChild(likeCount);
        const dislike = document.createElement("button");
        dislike.setAttribute("title", "Útil");
        commentOptions.appendChild(dislike);
        const dislikeIcon = document.createElement("i");
        dislikeIcon.classList.add("ph");
        dislikeIcon.classList.add("ph-arrow-fat-up");
        dislike.appendChild(dislikeIcon);
        const dislikeCount = document.createElement("span");
        dislikeCount.innerText = this.dislikes.toString();
        dislike.appendChild(dislikeCount);

        return comment;
    }
}

const commentManager = new CommentManager(document.getElementById("comments"), [{
    avatar: "../../assets/demos/avatar.jpg",
    author: "Alice",
    likes: 10,
    dislikes: 2,
    comment: "Moby Dick é uma obra-prima da literatura! A narrativa é envolvente e a descrição das batalhas contra a baleia é emocionante. Recomendo!",
    rate: 5,
    createdAt: new Date()
}, {
    avatar: "../../assets/demos/avatar.jpg",
    author: "Bob",
    likes: 7,
    dislikes: 1,
    comment: "Moby Dick é um livro desafiador, mas extremamente gratificante. A complexidade dos personagens e a profundidade temática fazem dessa obra uma leitura obrigatória.",
    rate: 4,
    createdAt: new Date()
}, {
    avatar: "../../assets/demos/avatar.jpg",
    author: "Charlie",
    likes: 3,
    dislikes: 0,
    comment: "Moby Dick é um clássico que nunca envelhece. A escrita de Herman Melville é poderosa e a história cativante. Fiquei fascinado do início ao fim!",
    rate: 5,
    createdAt: new Date()
}, {
    avatar: "../../assets/demos/avatar.jpg",
    author: "David",
    likes: 5,
    dislikes: 3,
    comment: "Moby Dick pode parecer um pouco arrastado em certos momentos, mas a narrativa épica e os insights filosóficos tornam esse livro memorável. Vale a pena dedicar tempo a ele.",
    rate: 3,
    createdAt: new Date()
}, {
    avatar: "../../assets/demos/avatar.jpg",
    author: "Eve",
    likes: 12,
    dislikes: 4,
    comment: "Moby Dick é uma verdadeira obra-prima da literatura clássica. A riqueza dos detalhes e a tensão constante tornam essa história uma experiência inesquecível.",
    rate: 5,
    createdAt: new Date()
}]);
commentManager.loadComments();

