function dateToString(date) {
    const Day = date.getDate();
    const Month = date.getMonth() + 1;
    const Year = date.getFullYear();
    return `${Day}.${Month}.${Year}`;
}

function tagsToString(hashtags) {
    return hashtags.join(', ');
}

function transformURI(URI) {
    if (URI === '') {
        return '';
    }
    const str = URI.split('\\');
    return 'pictures/' + str.pop();
}

function numLength(num) {
    let number = num;
    let k = 0;
    while (number) {
        number /= 10;
        number = Math.floor(number);
        k++;
    }
    return k;
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
    #likedAuthors = [];

    constructor(id, description, createdAt, author, photoLink, name, country, birthYear, hashtags, likes, likedAuthors = []) {
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
        this.#likedAuthors = likedAuthors.slice();
    }

    stringify() {
        let date = dateToString(this.#createdAt);
        let str = `{"id":"${this.#id}","description":"${this.#description}","createdAt":"${date}","author":"${this.#author}","photoLink":"${this.#photoLink}","birthYear":${this.#birthYear},"name":"${this.#name}","country":"${this.#country}","likes":${this.#likes},"hashtags":`;
        let str2 = '[';
        let str3 = '"likedAuthors":[';
        for (let i = 0; i < this.#hashtags.length; i++) {
            if (i !== 0) {
                str2 += ',';
            }
            str2 += `"${this.#hashtags[i]}"`;
        }
        for (let i = 0; i < this.#likedAuthors.length; i++) {
            if (i !== 0) {
                str3 += ',';
            }
            str3 += `"${this.#likedAuthors[i]}"`;
        }
        str2 += '],';
        str3 += ']}';
        str += str2;
        str += str3;
        return str;
    }

    likePossibility(currentAccount) {
        if (this.#likedAuthors.find(likedAuthor => likedAuthor === currentAccount.login) === undefined) {
            return true;
        }
        return false;
    }

    addLiked(login) {
        this.#likedAuthors.push(login);
    }

    removeLiked(login) {
        const ind = this.#likedAuthors.findIndex(likedAuthor => likedAuthor === login);
        if (ind === -1) {
            return false;
        }
        this.#likedAuthors.splice(ind, 1);
        return true;
    }

    validatePost(photoPosts) {
        if (this.#description.length > 200) {
            return false;
        }
        if (this.#author.length === 0 || this.#author.length > 20) {
            return false;
        }
        if (this.#photoLink.length === 0) {
            return false;
        }
        if (this.#name.length === 0 || this.#name.length > 20) {
            return false;
        }
        if (this.#country.length === 0 || this.#country.length > 30) {
            return false;
        }
        if (!Number.isInteger(this.#birthYear)) {
            return false;
        }
        if (numLength(this.#birthYear) > 4) {
            return false;
        }
        if (this.#likes < 0) {
            return false;
        }
        if (this.#hashtags.length > 1 || this.#hashtags[0] !== '') {
            for (let i = 0; i < this.#hashtags.length; i++) {
                if (this.#hashtags[i].charAt(0) !== '#') {
                    return false;
                }
                if (this.#hashtags[i].length > 20) {
                    return false;
                }
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

    get LikedAuthors() {
        return this.#likedAuthors;
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
        this.#photoPosts.reverse();
        let photoPostsCopy = this.#photoPosts.slice(skip, skip + top);
        switch (PostsArray.filterConfig) {
            case 'createdAt':
                photoPostsCopy.sort(function (a, b) {
                    const nameA = a.Name.toLowerCase();
                    const nameB = b.Name.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
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
        this.#photoPosts.reverse();
        return arr;
    }

    reverse() {
        this.#photoPosts.reverse();
    }

    filterByTag(hashtag) {
        return new PostsArray(this.#photoPosts.filter(post => post.Hashtags.includes(hashtag)));
    }

    filterByKeyword(keyword) {
        return new PostsArray(this.#photoPosts.filter(post => {
            if (post.Author.includes(keyword)) {
                return true;
            }
            if (post.Name.includes(keyword)) {
                return true;
            }
            if (post.Description.includes(keyword)) {
                return true;
            }
            if (post.BirthYear.toString().includes(keyword)) {
                return true;
            }
            if (post.Country.includes(keyword)) {
                return true;
            }
            if (dateToString(post.CreatedAt).includes(keyword)) {
                return true;
            }
            return false;
        }));
    }

    getPostByID(id) {
        return this.#photoPosts.find(post => post.ID === id);
    }

    getPostByInd(ind) {
        return this.#photoPosts[ind];
    }

    getIndByID(id) {
        return this.#photoPosts.findIndex(post => post.ID === id);
    }

    addPost(photoPost) {
        if (photoPost.validatePost(this)) {
            this.#photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    exchangePost(photoPost) {
        if (photoPost.validatePost(this)) {
            const ind = this.#photoPosts.findIndex(post => post.ID === photoPost.ID);
            if (ind === -1) {
                return false;
            }
            this.#photoPosts[ind] = photoPost;
            return true;
        }
        return false;
    }

    removePost(id) {
        const ind = this.#photoPosts.findIndex(post => post.ID === id);
        if (ind === -1) {
            return false;
        }
        const deletedArr = this.#photoPosts.splice(ind, 1);
        return deletedArr[0];
    }

    get Length() {
        return this.#photoPosts.length;
    }

    get PhotoPosts() {
        return this.#photoPosts;
    }
}

class Account {
    #login;
    #password;
    #email;
    #avatarLink;

    constructor(login, password, email, avatarLink = '') {
        this.#login = login;
        this.#password = password;
        this.#email = email;
        this.#avatarLink = avatarLink;
    }

    validateAccount(accounts) {
        if (this.#login.length === 0 || this.#login.length > 20) {
            return false;
        }
        if (accounts.checkLogin(this.#login)) {
            return false;
        }
        if (this.#password.length < 8 || this.#password.length > 20) {
            return false;
        }
        if (this.#email.length === 0 || this.#email.length > 40) {
            return false;
        }
        return true;
    }

    changeAvatar(avatarLink) {
        this.#avatarLink = avatarLink;
    }

    stringify() {
        return `{"login":"${this.#login}","password":"${this.#password}","email":"${this.#email}","avatarLink":"${this.#avatarLink}"}`;
    }

    get Login() {
        return this.#login;
    }

    get Password() {
        return this.#password;
    }

    get Email() {
        return this.#email;
    }

    get AvatarLink() {
        return this.#avatarLink;
    }
}

class AccountsArray {
    #accounts = [];

    constructor(accounts) {
        this.#accounts = accounts;
    }

    checkLogin(login) {
        const arr = this.#accounts.filter(account => account.Login === login);
        if (arr.length > 0) {
            return true;
        }
        return false;
    }

    createAccount(account) {
        if (account.validateAccount(this)) {
            this.#accounts.push(account);
            return true;
        }
        return false;
    }

    findAccountByLogin(login) {
        return this.#accounts.find(account => account.Login === login);
    }

    findAccountByInd(ind) {
        return this.#accounts[ind];
    }

    get Length() {
        return this.#accounts.length;
    }

    get Accounts() {
        return this.#accounts;
    }
}

class View {
    static downloadPosts() {
        const postsAmount = JSON.parse(localStorage.getItem('postsAmount'));
        let posts = [];
        for (let i = 0; i < postsAmount; i++) {
            const post = JSON.parse(localStorage.getItem('post' + i));
            const str = post.createdAt.split('.');
            const date = new Date(parseInt(str[2]), parseInt(str[1]) - 1, parseInt(str[0]));
            const postClass = new Post(post.id, post.description, date, post.author, post.photoLink, post.name, post.country, post.birthYear, post.hashtags, parseInt(post.likes), post.likedAuthors);
            posts.push(postClass);
        }
        return new PostsArray(posts);
    }
    static uploadPosts(photoPosts) {
        for (let i = 0; i < photoPosts.Length; i++) {
            localStorage.setItem('post' + i, photoPosts.PhotoPosts[i].stringify());
        }
        localStorage.setItem('postsAmount', photoPosts.Length);
        localStorage.setItem('filterConfig', PostsArray.filterConfig);
    }
    static downloadAccounts() {
        const accountsAmount = JSON.parse(localStorage.getItem('accountsAmount'));
        let accounts = [];
        for (let i = 0; i < accountsAmount; i++) {
            const account = JSON.parse(localStorage.getItem('account' + i));
            const accountClass = new Account(account.login, account.password, account.email, account.avatarLink);
            accounts.push(accountClass);
        }
        return new AccountsArray(accounts);
    }
    static uploadAccounts(accounts) {
        for (let i = 0; i < accounts.Length; i++) {
            localStorage.setItem('account' + i, accounts.Accounts[i].stringify());
        }
        localStorage.setItem('accountsAmount', accounts.Length);
    }
    static downloadCurrentAccount() {
        const currentAccount = JSON.parse(localStorage.getItem('currentAccount'));
        if (currentAccount.hasOwnProperty('avatarLink')) {
            if (currentAccount.avatarLink !== '') {
                const avatar = document.querySelector('.avatar');
                avatar.src = currentAccount.avatarLink;
            }
        }
        return currentAccount;
    }
    static showPage(skip, top, photoPosts, currentAccount = '') {
        const main2 = document.querySelector('.main2');
        let photoPostsPage = photoPosts.getPage(skip, top);
        for (let i = 0; i < photoPostsPage.Length; i++) {
            main2.children[i].style.visibility = 'visible';
            const like = main2.children[i].querySelector('.like');
            const deleteButton = main2.children[i].querySelector('.delete');
            const editButton = main2.children[i].querySelector('.edit');
            deleteButton.style.visibility = 'hidden';
            editButton.style.visibility = 'hidden';
            like.src = 'pictures/like.png';
            if (currentAccount !== '') {
                if (!photoPostsPage.getPostByInd(i).likePossibility(currentAccount)) {
                    like.src = 'pictures/like2.png';
                }
                if (photoPostsPage.getPostByInd(i).Author === currentAccount.login) {
                    deleteButton.style.visibility = 'visible';
                    editButton.style.visibility = 'visible';
                }
            }
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
        for (let i = photoPostsPage.Length; i < 10; i++) {
            main2.children[i].style.visibility = 'hidden';
            const deleteButton = main2.children[i].querySelector('.delete');
            const editButton = main2.children[i].querySelector('.edit');
            deleteButton.style.visibility = 'hidden';
            editButton.style.visibility = 'hidden';
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
    static pageTurned(pageCounter, ind, photoPosts, prevButton, nextButton) {
        let num = parseInt(pageCounter.textContent);
        if (ind === 1) {
            if (num > 1) {
                num--;
                nextButton.style.visibility = 'visible';
            } 
            if (num === 1) {
                prevButton.style.visibility = 'hidden';
            }
        } else if (ind === 2) {
            if (num < Math.ceil(photoPosts.Length / 10)) {
                num++;
                prevButton.style.visibility = 'visible';
            }
            if (num === Math.ceil(photoPosts.Length / 10)) {
                nextButton.style.visibility = 'hidden';
            }
        }
        pageCounter.textContent = num;
    }
    static resetPageCounter(pageCounter, photoPosts, prevButton, nextButton) {
        pageCounter.textContent = 1;
        prevButton.style.visibility = 'hidden';
        if (photoPosts.Length <= 10) {
            nextButton.style.visibility = 'hidden';
        }
        else {
            nextButton.style.visibility = 'visible';
        }
    }
    static showInfo(post) {
        const infoPhoto = document.querySelector('.infoPhoto');
        infoPhoto.src = post.photoLink;
        let description = document.querySelector('.description');
        description.textContent = `Автор: ${post.author}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Дата создания поста: ${post.createdAt}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Название: ${post.name}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Год выпуска: ${post.birthYear}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Страна выпуска: ${post.country}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Описание: ${post.description}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        const tags = tagsToString(post.hashtags);
        if (tags === '') {
            description.textContent = `Теги: отсутствуют`;
        } else {
            description.textContent = `Теги: ${tags}`;
        }
    }
}

const currentDate = new Date();
const footerText = `ОГНЕСТРЕЛЬНОЕ ОРУЖИЕ Филиппов Максим 2к9гр filippov.maxim52@gmail.com ${dateToString(currentDate)}`;
let accounts;
let currentAccount;
let currentSkip = 0;
const currentTop = 10;
let photoPosts;
let currentPhotoPosts;

