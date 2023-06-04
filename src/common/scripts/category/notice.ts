class Notice {
    title: string;
    thumbnail: string;
    sourceName: string;
    sourcePhoto: string;

    constructor(title: string, thumbnail: string, sourceName: string, sourcePhoto: string) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.sourceName = sourceName;
        this.sourcePhoto = sourcePhoto;
    }

    get() {
        const a = document.createElement("a");
        a.title = this.title;
        a.href = "../schedule/index.html?id=28"; // remover posição relativa
        a.classList.add("notice-container");

        const thumbnail = document.createElement("img");
        thumbnail.src = this.thumbnail;
        thumbnail.classList.add("notice-thumbnail");
        a.appendChild(thumbnail);

        const noticeTitle = document.createElement("p");
        noticeTitle.classList.add("notice-title");
        noticeTitle.innerText = this.title;
        a.appendChild(noticeTitle);

        const noticeSource = document.createElement("div");
        noticeSource.classList.add("notice-source");
        const noticeSourcePhoto = document.createElement("img");
        noticeSourcePhoto.classList.add("notice-source-photo");
        noticeSourcePhoto.src = this.sourcePhoto;
        noticeSource.appendChild(noticeSourcePhoto);
        const noticeSourceName = document.createElement("p");
        noticeSourceName.classList.add("notice-source-name");
        noticeSourceName.innerText = this.sourceName;
        noticeSource.appendChild(noticeSourceName);

        a.appendChild(noticeSource);
        return a;
    }
}
