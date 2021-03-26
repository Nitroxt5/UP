class Post {

    #id;
    #description;
    #createdAt;
    #author;
    #photoLink;

    constructor(id, description, createdAt, author, photoLink) {
        this.#id = id;
        this.#description = description;
        this.#createdAt = createdAt;
        this.#author = author;
        this.#photoLink = photoLink;
    }

    validatePost() {
        var arr = photoPost.filter(function (post1) {
            return post1.ID() == this.#id;
        });        if (arr.length > 0) {
            return false;
        }
        if (this.#description.length > 200) {
            return false;
        }
        if (this.#author.length == 0) {
            return false;
        }
        if (this.#photoLink.length == 0) {
            return false;
        }
        return true;
    }

    get ID() {
        return this.#id;
    }
}

class PostsArray {

    #photoPosts = [];

    constructor(photoPosts) {
        this.#photoPosts = photoPosts.slice();
    }

    getPage(skip, top, filterConfig) {
        var photoPostsCopy = this.#photoPosts.slice(skip, skip + top);
        switch (filterConfig) {
            case 'createdAt':
                photoPostsCopy.sort(function (a, b) {
                    return a.createdAt - b.createdAt;
                });
                break;
            case 'author':
                photoPostsCopy.sort(function (a, b) {
                    var authorA = a.author.toLowerCase();
                    var authorB = b.author.toLowerCase();
                    if (authorA < authorB) {
                        return -1;
                    }
                    if (authorA > authorB) {
                        return 1;
                    }
                    return 0;
                });
                break;
        }
        return photoPostsCopy;
    }
    
    getPost(id) {
        return this.#photoPosts[id];
    }

    addPost(photoPost) {
        if (photoPost.validatePost()) {
            this.#photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    removePost(id) {
        this.#photoPosts.splice(id, 1);
        return true;
    }
}
