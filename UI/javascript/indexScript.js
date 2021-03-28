var posts = new Array(
    new Post('1', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin20', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 41),
    new Post('2', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin19', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 4),
    new Post('3', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin18', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 2),
    new Post('4', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin17', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 6),
    new Post('5', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin16', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 0),
    new Post('6', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin15', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 8),
    new Post('7', 'Самый надежный автомат!', new Date('2018-03-26T00:00:00'), 'Admin14', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 13),
    new Post('8', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin13', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 1),
    new Post('9', 'Самый надежный автомат!', new Date('2021-02-26T00:00:00'), 'Admin12', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 78),
    new Post('10', 'Самый надежный автомат!', new Date('2029-03-26T00:00:00'), 'Admin11', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 54),
    new Post('11', 'Самый надежный автомат!', new Date('2021-03-13T00:00:00'), 'Admin10', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 23),
    new Post('12', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin9', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 11),
    new Post('13', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin8', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 89),
    new Post('14', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin7', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 34),
    new Post('15', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin6', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 23),
    new Post('16', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin5', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 12),
    new Post('17', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin4', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 61),
    new Post('18', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin3', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 94),
    new Post('19', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin2', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 38),
    new Post('20', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin1', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 15),
    new Post('21', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin0', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 2),
    new Post('22', 'Самый надежный автомат!', new Date('2021-03-26T00:00:00'), 'Admin00', 'pictures/AK-74.png', 'AK-74', 'СССР', 1974, ['#СССР', '#автомат'], 3));

const photoPosts = new PostsArray(posts);
let currentPhotoPosts = photoPosts.getPage(0, 10);
let currentSkip = 0;
const currentTop = 10; 

function indexLoad() {
    currentPhotoPosts = View.showPage(currentSkip, currentTop, photoPosts);
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
    View.likePlaced(likeButtons[9].offsetParent, currentPost);
}

const abouts = document.querySelectorAll('.about');
const str = currentPhotoPosts.getPostByInd(0);
abouts[0].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(0);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}
abouts[1].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(1);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}
abouts[2].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(2);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}
abouts[3].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(3);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}
abouts[4].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(4);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}
abouts[5].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(5);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}
abouts[6].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(6);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}
abouts[7].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(7);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}
abouts[8].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(8);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}
abouts[9].onclick = () => {
    const post = currentPhotoPosts.getPostByInd(9);
    let objPost = {};
    objPost.id = post.ID;
    objPost.description = post.Description;
    objPost.createdAt = post.CreatedAt;
    objPost.author = post.Author;
    objPost.photoLink = post.PhotoLink;
    objPost.birthYear = post.BirthYear;
    objPost.name = post.Name;
    objPost.country = post.Country;
    objPost.likes = post.Likes;
    objPost.hashtags = post.Hashtags;
    console.dir(JSON.stringify(objPost));
    localStorage.setItem('post', JSON.stringify(objPost));
}

const authorFilter = document.querySelector('.authorFilter');
const createdAtFilter = document.querySelector('.createdAtFilter');
const likesFilter = document.querySelector('.likesFilter');
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
}