const authorFilter = document.querySelector('.authorFilter');
const createdAtFilter = document.querySelector('.createdAtFilter');
const likesFilter = document.querySelector('.likesFilter');

function indexLoad() {
    photoPosts = View.downloadPosts();
    PostsArray.filterConfig = localStorage.getItem('filterConfig');
    currentPhotoPosts = View.showPage(currentSkip, currentTop, photoPosts);
    View.downloadCurrentAccount();
    switch (PostsArray.filterConfig) {
        case 'author':
            View.filterChosen(authorFilter, createdAtFilter, likesFilter, 1);
            break;
        case 'createdAt':
            View.filterChosen(authorFilter, createdAtFilter, likesFilter, 2);
            break;
        case 'likes':
            View.filterChosen(authorFilter, createdAtFilter, likesFilter, 3);
            break;
        default:
            View.filterChosen(authorFilter, createdAtFilter, likesFilter, 0);
    }
    const footer = document.querySelector('.footerText');
    footer.textContent = footerText;
}
document.addEventListener("DOMContentLoaded", indexLoad);

const nextPageButton = document.querySelector('.nextPageButton');
const pageCounter = document.querySelector('.pageCounter');
nextPageButton.onclick = () => {
    if (currentSkip + currentTop + 10 <= photoPosts.Length) {
        currentSkip += 10;
    } else {
        currentSkip = photoPosts.Length - currentTop;
    }
    currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
    currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    View.pageTurned(pageCounter, 2, photoPosts);
}
const prevPageButton = document.querySelector('.prevPageButton');
prevPageButton.onclick = () => {
    if (currentSkip - 10 >= 0) {
        currentSkip -= 10;
    } else {
        currentSkip = 0;
    }
    currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
    currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    View.pageTurned(pageCounter, 1, photoPosts);
}

const likeButtons = document.querySelectorAll('.like');
likeButtons[0].onclick = () => {
    if (likeButtons[0].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(0).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(0).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(0);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[0].offsetParent, currentPost);
}
likeButtons[1].onclick = () => {
    if (likeButtons[1].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(1).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(1).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(1);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[1].offsetParent, currentPost);
}
likeButtons[2].onclick = () => {
    if (likeButtons[2].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(2).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(2).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(2);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[2].offsetParent, currentPost);
}
likeButtons[3].onclick = () => {
    if (likeButtons[3].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(3).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(3).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(3);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[3].offsetParent, currentPost);
}
likeButtons[4].onclick = () => {
    if (likeButtons[4].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(4).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(4).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(4);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[4].offsetParent, currentPost);
}
likeButtons[5].onclick = () => {
    if (likeButtons[5].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(5).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(5).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(5);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[5].offsetParent, currentPost);
}
likeButtons[6].onclick = () => {
    if (likeButtons[6].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(6).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(6).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(6);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[6].offsetParent, currentPost);
}
likeButtons[7].onclick = () => {
    if (likeButtons[7].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(7).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(7).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(7);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[7].offsetParent, currentPost);
}
likeButtons[8].onclick = () => {
    if (likeButtons[8].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(8).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(8).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(8);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[8].offsetParent, currentPost);
}
likeButtons[9].onclick = () => {
    if (likeButtons[9].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(9).IncreaseLikes();
    } else {
        currentPhotoPosts.getPostByInd(9).DecreaseLikes();
    }
    currentPost = currentPhotoPosts.getPostByInd(9);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[9].offsetParent, currentPost);
}

const abouts = document.querySelectorAll('.about');
abouts[0].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(0);
    localStorage.setItem('infoPost', post.stringify());
}
abouts[1].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(1);
    localStorage.setItem('infoPost', post.stringify());
}
abouts[2].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(2);
    localStorage.setItem('infoPost', post.stringify());
}
abouts[3].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(3);
    localStorage.setItem('infoPost', post.stringify());
}
abouts[4].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(4);
    localStorage.setItem('infoPost', post.stringify());
}
abouts[5].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(5);
    localStorage.setItem('infoPost', post.stringify());
}
abouts[6].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(6);
    localStorage.setItem('infoPost', post.stringify());
}
abouts[7].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(7);
    localStorage.setItem('infoPost', post.stringify());
}
abouts[8].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(8);
    localStorage.setItem('infoPost', post.stringify());
}
abouts[9].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(9);
    localStorage.setItem('infoPost', post.stringify());
}

authorFilter.onclick = () => {
    if (authorFilter.src.includes('list_mark1.png')) {
        PostsArray.filterConfig = 'author';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 1);
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    } else {
        PostsArray.filterConfig = 'none';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 0);
        currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    }
    localStorage.setItem('filterConfig', PostsArray.filterConfig);
}
createdAtFilter.onclick = () => {
    if (createdAtFilter.src.includes('list_mark1.png')) {
        PostsArray.filterConfig = 'createdAt';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 2);
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    } else {
        PostsArray.filterConfig = 'none';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 0);
        currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    }
    localStorage.setItem('filterConfig', PostsArray.filterConfig);
}
likesFilter.onclick = () => {
    if (likesFilter.src.includes('list_mark1.png')) {
        PostsArray.filterConfig = 'likes';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 3);
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    } else {
        PostsArray.filterConfig = 'none';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 0);
        currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    }
    localStorage.setItem('filterConfig', PostsArray.filterConfig);
}

const findByHashtag = document.querySelector('#findByHashtag');
