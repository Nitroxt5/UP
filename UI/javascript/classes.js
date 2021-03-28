function dateToString(date) {
    let str = date.split('-');
    let year = str[0];
    let month = str[1];
    let day = str[2].split('T')[0];
    return `${day}.${month}.${year}`;
}

function tagsToString(hashtags) {
    return hashtags.join(', ');
}

class Post {
    #id;
    #description;
    #createdAt;
    #author;
    #photoLink;
    #birthYear;
    #name;
    #country;
    #likes;
    #hashtags = [];

    constructor(id, description, createdAt, author, photoLink, name, country, birthYear, hashtags, likes) {
        this.#id = id;
        this.#description = description;
        this.#createdAt = createdAt;
        this.#author = author;
        this.#photoLink = photoLink;
        this.#name = name;
        this.#country = country;
        this.#birthYear = birthYear;
        this.#likes = likes;
        this.#hashtags = hashtags.slice();
    }

    validatePost(photoPosts) {
        if (photoPosts.checkID(this.#id)) {
            return false;
        }
        if (this.#description.length > 200) {
            return false;
        }
        if (this.#author.length === 0) {
            return false;
        }
        if (this.#photoLink.length === 0) {
            return false;
        }
        if (this.#name.length === 0) {
            return false;
        }
        if (this.#likes < 0) {
            return false;
        }
        for (let i = 0; i < this.#hashtags.length; i++) {
            if (this.#hashtags[i].charAt(0) !== '#') {
                return false;
            }
        }
        return true;
    }

    IncreaseLikes() {
        this.#likes++;
    }

    DecreaseLikes() {
        this.#likes--;
    }

    get ID() {
        return this.#id;
    }

    get Description() {
        return this.#description;
    }

    get Author() {
        return this.#author;
    }

    get CreatedAt() {
        return this.#createdAt;
    }

    get PhotoLink() {
        return this.#photoLink;
    }

    get Name() {
        return this.#name;
    }

    get Country() {
        return this.#country;
    }

    get BirthYear() {
        return this.#birthYear;
    }

    get Likes() {
        return this.#likes;
    }

    get Hashtags() {
        return this.#hashtags;
    }
}

class PostsArray {

    #photoPosts = [];
    static filterConfig = 'none';

    constructor(photoPosts) {
        this.#photoPosts = photoPosts.slice();
    }

    checkID(id) {
        const arr = this.#photoPosts.filter(post => post.ID === id);
        if (arr.length > 0) {
            return true;
        }
        return false;
    }

    getPage(skip, top) {
        let photoPostsCopy = this.#photoPosts.slice(skip, skip + top);
        switch (PostsArray.filterConfig) {
            case 'createdAt':
                photoPostsCopy.sort((a, b) => b.CreatedAt - a.CreatedAt);
                break;
            case 'author':
                photoPostsCopy.sort(function (a, b) {
                    const authorA = a.Author.toLowerCase();
                    const authorB = b.Author.toLowerCase();
                    if (authorA < authorB) {
                        return -1;
                    }
                    if (authorA > authorB) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case 'likes':
                photoPostsCopy.sort((a, b) => b.Likes - a.Likes);
                break;
            default:
                photoPostsCopy = this.#photoPosts.slice(skip, skip + top);
        }
        const arr = new PostsArray(photoPostsCopy);
        return arr;
    }

    getPostByID(id) {
        return this.#photoPosts.find(post => post.ID === id);
    }

    getPostByInd(ind) {
        return this.#photoPosts[ind];
    }

    addPost(photoPost) {
        if (photoPost.validatePost(this)) {
            this.#photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    exchangePost(photoPost) {
        const ind = this.#photoPosts.findIndex(post => post.ID === photoPost.ID);
        if (ind === -1) {
            return false;
        }
        this.#photoPosts[ind] = photoPost;
        return true;
    }

    removePost(id) {
        const ind = this.#photoPosts.findIndex(post => post.ID === id);
        if (ind === -1) {
            return false;
        }
        this.#photoPosts.splice(ind, 1);
        return true;
    }

    get Length() {
        return this.#photoPosts.length;
    }
}

class View {
    static showPage(skip, top, photoPosts) {
        const photoPostsPage = photoPosts.getPage(skip, top);
        const main2 = document.querySelector('.main2');
        for (let i = 0; i < 10; i++) {
            const pic = main2.children[i].querySelector('.pic');
            pic.src = photoPostsPage.getPostByInd(i).PhotoLink;
            const author = main2.children[i].querySelector('.author');
            author.textContent = photoPostsPage.getPostByInd(i).Author;
            const name = main2.children[i].querySelector('.name');
            name.textContent = photoPostsPage.getPostByInd(i).Name;
            const likesCounter = main2.children[i].querySelector('.likesCounter');
            if (photoPostsPage.getPostByInd(i).Likes > 0) {
                likesCounter.textContent = photoPostsPage.getPostByInd(i).Likes;
            } else {
                likesCounter.textContent = '';
            }
        }
        return photoPostsPage;
    }
    static likePlaced(post, currentPost) {
        const likeButton = post.querySelector('.like');
        const likesCounter = post.querySelector('.likesCounter');
        if (likeButton.src.includes('like.png')) {
            likeButton.src = 'pictures/like2.png';
        } else {
            likeButton.src = 'pictures/like.png';
        }
        if (currentPost.Likes > 0) {
            likesCounter.textContent = currentPost.Likes;
        } else {
            likesCounter.textContent = '';
        }
    }
    static filterChosen(authorFilter, createdAtFilter, likesFilter, ind) {
        if (ind === 1) {
            authorFilter.src = 'pictures/list_mark2.png';
            createdAtFilter.src = 'pictures/list_mark1.png';
            likesFilter.src = 'pictures/list_mark1.png';
        } else if (ind === 2) {
            authorFilter.src = 'pictures/list_mark1.png';
            createdAtFilter.src = 'pictures/list_mark2.png';
            likesFilter.src = 'pictures/list_mark1.png';
        } else if (ind === 3) {
            authorFilter.src = 'pictures/list_mark1.png';
            createdAtFilter.src = 'pictures/list_mark1.png';
            likesFilter.src = 'pictures/list_mark2.png';
        } else {
            authorFilter.src = 'pictures/list_mark1.png';
            createdAtFilter.src = 'pictures/list_mark1.png';
            likesFilter.src = 'pictures/list_mark1.png';
        }
    }
    static pageTurned(pageCounter, ind, photoPosts) {
        let num = parseInt(pageCounter.textContent);
        if (ind === 1) {
            if (num > 1) {
                num--;
            }
        } else if (ind === 2) {
            if (num < Math.ceil(photoPosts.Length / 10)) {
                num++;
            }
        }
        pageCounter.textContent = num;
    }
    static showInfo(post) {
        const infoPhoto = document.querySelector('.infoPhoto');
        infoPhoto.src = post.photoLink;
        let description = document.querySelector('.description');
        description.textContent = `Автор: ${post.author}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Дата создания поста: ${dateToString(post.createdAt)}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Название: ${post.name}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Год выпуска: ${post.birthYear}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Страна выпуска: ${post.country}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Описание: ${post.description}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Теги: ${tagsToString(post.hashtags)}`;
    }
}