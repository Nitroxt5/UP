const authorFilter = document.querySelector('.authorFilter');
const createdAtFilter = document.querySelector('.createdAtFilter');
const likesFilter = document.querySelector('.likesFilter');
const prevPageButton = document.querySelector('.prevPageButton');
const nextPageButton = document.querySelector('.nextPageButton');
const pageCounter = document.querySelector('.pageCounter');
const accountName = document.querySelector('.account');
const findByHashtag = document.querySelector('#findByHashtag');
const findByKeyword = document.querySelector('#findByKeyword');

function indexLoad() {
    photoPosts = View.downloadPosts();
    PostsArray.filterConfig = localStorage.getItem('filterConfig');
    currentAccount = View.downloadCurrentAccount();
    currentPhotoPosts = View.showPage(currentSkip, currentTop, photoPosts, currentAccount);
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
    accountName.textContent = currentAccount.login;
    findByHashtag.value = 'Поиск по хештэгам';
    findByKeyword.value = 'Введите ключевое слово';
    window.scroll(0, 0);
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
    currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts, currentAccount);
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
    currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts, currentAccount);
    View.pageTurned(pageCounter, 1, photoPosts, prevPageButton, nextPageButton);
    window.scroll(0, 0);
}

const likeButtons = document.querySelectorAll('.like');
likeButtons[0].onclick = () => {
    if (likeButtons[0].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(0).IncreaseLikes();
        currentPhotoPosts.getPostByInd(0).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(0).DecreaseLikes();
        currentPhotoPosts.getPostByInd(0).removeLiked(currentAccount.login);
    }
    currentPost = currentPhotoPosts.getPostByInd(0);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[0].offsetParent, currentPost);
}
likeButtons[1].onclick = () => {
    if (likeButtons[1].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(1).IncreaseLikes();
        currentPhotoPosts.getPostByInd(1).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(1).DecreaseLikes();
        currentPhotoPosts.getPostByInd(1).removeLiked(currentAccount.login);
    }
    currentPost = currentPhotoPosts.getPostByInd(1);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[1].offsetParent, currentPost);
}
likeButtons[2].onclick = () => {
    if (likeButtons[2].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(2).IncreaseLikes();
        currentPhotoPosts.getPostByInd(2).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(2).DecreaseLikes();
        currentPhotoPosts.getPostByInd(2).removeLiked(currentAccount.login);
    }
    currentPost = currentPhotoPosts.getPostByInd(2);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[2].offsetParent, currentPost);
}
likeButtons[3].onclick = () => {
    if (likeButtons[3].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(3).IncreaseLikes();
        currentPhotoPosts.getPostByInd(3).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(3).DecreaseLikes();
        currentPhotoPosts.getPostByInd(3).removeLiked(currentAccount.login);
    }
    currentPost = currentPhotoPosts.getPostByInd(3);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[3].offsetParent, currentPost);
}
likeButtons[4].onclick = () => {
    if (likeButtons[4].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(4).IncreaseLikes();
        currentPhotoPosts.getPostByInd(4).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(4).DecreaseLikes();
        currentPhotoPosts.getPostByInd(4).removeLiked(currentAccount.login);
    }
    currentPost = currentPhotoPosts.getPostByInd(4);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[4].offsetParent, currentPost);
}
likeButtons[5].onclick = () => {
    if (likeButtons[5].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(5).IncreaseLikes();
        currentPhotoPosts.getPostByInd(5).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(5).DecreaseLikes();
        currentPhotoPosts.getPostByInd(5).removeLiked(currentAccount.login);
    }
    currentPost = currentPhotoPosts.getPostByInd(5);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[5].offsetParent, currentPost);
}
likeButtons[6].onclick = () => {
    if (likeButtons[6].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(6).IncreaseLikes();
        currentPhotoPosts.getPostByInd(6).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(6).DecreaseLikes();
        currentPhotoPosts.getPostByInd(6).removeLiked(currentAccount.login);
    }
    currentPost = currentPhotoPosts.getPostByInd(6);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[6].offsetParent, currentPost);
}
likeButtons[7].onclick = () => {
    if (likeButtons[7].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(7).IncreaseLikes();
        currentPhotoPosts.getPostByInd(7).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(7).DecreaseLikes();
        currentPhotoPosts.getPostByInd(7).removeLiked(currentAccount.login);
    }
    currentPost = currentPhotoPosts.getPostByInd(7);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[7].offsetParent, currentPost);
}
likeButtons[8].onclick = () => {
    if (likeButtons[8].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(8).IncreaseLikes();
        currentPhotoPosts.getPostByInd(8).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(8).DecreaseLikes();
        currentPhotoPosts.getPostByInd(8).removeLiked(currentAccount.login);
    }
    currentPost = currentPhotoPosts.getPostByInd(8);
    photoPosts.exchangePost(currentPost);
    View.uploadPosts(photoPosts);
    View.likePlaced(likeButtons[8].offsetParent, currentPost);
}
likeButtons[9].onclick = () => {
    if (likeButtons[9].src.includes('like.png')) {
        currentPhotoPosts.getPostByInd(9).IncreaseLikes();
        currentPhotoPosts.getPostByInd(9).addLiked(currentAccount.login);
    } else {
        currentPhotoPosts.getPostByInd(9).DecreaseLikes();
        currentPhotoPosts.getPostByInd(9).removeLiked(currentAccount.login);
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
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts, currentAccount);
    } else {
        PostsArray.filterConfig = 'none';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 0);
        currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
        currentPhotoPosts.reverse();
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts, currentAccount);
    }
    localStorage.setItem('filterConfig', PostsArray.filterConfig);
}
createdAtFilter.onclick = () => {
    if (createdAtFilter.src.includes('list_mark1.png')) {
        PostsArray.filterConfig = 'createdAt';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 2);
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts, currentAccount);
    } else {
        PostsArray.filterConfig = 'none';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 0);
        currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
        currentPhotoPosts.reverse();
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts, currentAccount);
    }
    localStorage.setItem('filterConfig', PostsArray.filterConfig);
}
likesFilter.onclick = () => {
    if (likesFilter.src.includes('list_mark1.png')) {
        PostsArray.filterConfig = 'likes';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 3);
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts, currentAccount);
    } else {
        PostsArray.filterConfig = 'none';
        View.filterChosen(authorFilter, createdAtFilter, likesFilter, 0);
        currentPhotoPosts = photoPosts.getPage(currentSkip, currentTop);
        currentPhotoPosts.reverse();
        currentPhotoPosts = View.showPage(0, 10, currentPhotoPosts, currentAccount);
    }
    localStorage.setItem('filterConfig', PostsArray.filterConfig);
}

findByHashtag.onfocus = () => {
    if (findByHashtag.value === 'Поиск по хештэгам') {
        findByHashtag.value = '#';
    }
}
findByHashtag.onblur = () => {
    if (findByHashtag.value === '#' || findByHashtag.value === '') {
        findByHashtag.value = 'Поиск по хештэгам';
    }
}
findByHashtag.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        window.scroll(0, 0);
        let currentTag = findByHashtag.value;
        if (currentTag === '' || currentTag === '#' || currentTag === 'Поиск по хештэгам') {
            window.open('index.html', '_self');
        } else {
            if (currentTag.charAt(0) !== '#') {
                currentTag = '#' + currentTag;
                findByHashtag.value = currentTag;
            }
            photoPosts = photoPosts.filterByTag(currentTag);
            currentSkip = 0;
            currentPhotoPosts = View.showPage(currentSkip, 10 < photoPosts.Length ? 10 : photoPosts.Length, photoPosts, currentAccount);
            View.resetPageCounter(pageCounter, photoPosts, prevPageButton, nextPageButton);
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
        }
    }
});

const deleteButtons = document.querySelectorAll('.delete');
deleteButtons[0].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(0).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}
deleteButtons[1].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(1).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}
deleteButtons[2].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(2).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}
deleteButtons[3].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(3).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}
deleteButtons[4].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(4).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}
deleteButtons[5].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(5).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}
deleteButtons[6].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(6).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}
deleteButtons[7].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(7).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}
deleteButtons[8].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(8).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}
deleteButtons[9].onclick = () => {
    const ans = confirm('Вы уверены, что хотите удалить этот пост?');
    if (ans) {
        const deleteID = currentPhotoPosts.getPostByInd(9).ID;
        photoPosts.removePost(deleteID);
        View.uploadPosts(photoPosts)
        localStorage.removeItem('post' + photoPosts.Length);
        alert('Пост удален');
        window.open('index.html', '_self');
    }
}

const editButtons = document.querySelectorAll('.edit');
editButtons[0].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(0).stringify());
    window.open('addphoto.html', '_self');
}
editButtons[1].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(1).stringify());
    window.open('addphoto.html', '_self');
}
editButtons[2].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(2).stringify());
    window.open('addphoto.html', '_self');
}
editButtons[3].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(3).stringify());
    window.open('addphoto.html', '_self');
}
editButtons[4].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(4).stringify());
    window.open('addphoto.html', '_self');
}
editButtons[5].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(5).stringify());
    window.open('addphoto.html', '_self');
}
editButtons[6].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(6).stringify());
    window.open('addphoto.html', '_self');
}
editButtons[7].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(7).stringify());
    window.open('addphoto.html', '_self');
}
editButtons[8].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(8).stringify());
    window.open('addphoto.html', '_self');
}
editButtons[9].onclick = () => {
    localStorage.setItem('editPost', currentPhotoPosts.getPostByInd(9).stringify());
    window.open('addphoto.html', '_self');
}

findByKeyword.onfocus = () => {
    if (findByKeyword.value === 'Введите ключевое слово') {
        findByKeyword.value = '';
    }
}
findByKeyword.onblur = () => {
    if (findByKeyword.value === '') {
        findByKeyword.value = 'Введите ключевое слово';
    }
}
findByKeyword.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        window.scroll(0, 0);
        let currentKey = findByKeyword.value;
        if (currentKey === '' || currentKey === 'Введите ключевое слово') {
            window.open('index.html', '_self');
        } else {
            photoPosts = View.downloadPosts();
            photoPosts = photoPosts.filterByKeyword(currentKey);
            currentSkip = 0;
            currentPhotoPosts = View.showPage(currentSkip, 10 < photoPosts.Length ? 10 : photoPosts.Length, photoPosts, currentAccount);
            View.resetPageCounter(pageCounter, photoPosts, prevPageButton, nextPageButton);
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
        }
    }
});
