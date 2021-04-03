const nextPageButton = document.querySelector('.nextPageButton');
const pageCounter = document.querySelector('.pageCounter');
const prevPageButton = document.querySelector('.prevPageButton');
const authorFilter = document.querySelector('.authorFilter');
const createdAtFilter = document.querySelector('.createdAtFilter');
const likesFilter = document.querySelector('.likesFilter');

function indexLoad() {
    photoPosts = View.downloadPosts();
    PostsArray.filterConfig = localStorage.getItem('filterConfig');
    currentPhotoPosts = View.showPage(currentSkip, currentTop, photoPosts);
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
    prevPageButton.style.visibility = 'hidden';
    if (photoPosts.Length <= 10) {
        nextPageButton.style.visibility = 'hidden';
    }
    const footer = document.querySelector('.footerText');
    footer.textContent = footerText;
}
document.addEventListener("DOMContentLoaded", indexLoad);

nextPageButton.onclick = () => {
    if (currentSkip + currentTop + 10 <= photoPosts.Length) {
        currentSkip += 10;
    } else {
        currentSkip = photoPosts.Length - currentTop;
    }
    currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
    currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    View.pageTurned(pageCounter, 2, photoPosts, prevPageButton, nextPageButton);
    window.scroll(0, 0);
}

prevPageButton.onclick = () => {
    if (currentSkip - 10 >= 0) {
        currentSkip -= 10;
    } else {
        currentSkip = 0;
    }
    currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
    currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    View.pageTurned(pageCounter, 1, photoPosts, prevPageButton, nextPageButton);
    window.scroll(0, 0);
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
        currentPhotoPosts.reverse();
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
        currentPhotoPosts.reverse();
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
        currentPhotoPosts.reverse();
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts);
    }
    localStorage.setItem('filterConfig', PostsArray.filterConfig);
}