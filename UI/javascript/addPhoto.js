const accountName = document.querySelector('.account');
let editPostStr = localStorage.getItem('editPost');

function addPhotoLoad() {
    photoPosts = View.downloadPosts();
    currentAccount = View.downloadCurrentAccount();
    if (editPostStr === null) {
        let description = document.querySelector('.description');
        description.textContent = `Автор: ${currentAccount.login}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Дата: ${dateToString(new Date())}`;
    } else {
        const editPost = JSON.parse(editPostStr);
        let description = document.querySelector('.description');
        description.textContent = `Автор: ${editPost.author}`;
        description = description.nextElementSibling.nextElementSibling.nextElementSibling;
        description.textContent = `Дата: ${dateToString(new Date())}`;
        const postPhoto = document.querySelector('.post_photo');
        postPhoto.src = editPost.photoLink;
        const postName = document.querySelector('.postName');
        postName.value = editPost.name;
        const postBirthYear = document.querySelector('.postBirthYear');
        postBirthYear.value = editPost.birthYear;
        const postCountry = document.querySelector('.postCountry');
        postCountry.value = editPost.country;
        const postDescription = document.querySelector('.postDescription');
        postDescription.value = editPost.description;
        const postHashtags = document.querySelector('.postHashtags');
        postHashtags.value = editPost.hashtags.join(' ');
    }
    accountName.textContent = currentAccount.login;
    const footer = document.querySelector('.footerText');
    footer.textContent = footerText;
}
document.addEventListener("DOMContentLoaded", addPhotoLoad);

const uploadPhoto = document.querySelector('.inputPhoto');
let newPostPic = '';
uploadPhoto.onchange = () => {
    let path = uploadPhoto.value;
    path = transformURI(path);
    const img = document.querySelector('.post_photo');
    img.src = path;
    newPostPic = path;
}

const createPost = document.querySelector('.createPostButton');
createPost.onclick = () => {
    const getName = document.querySelector('.postName');
    const getBirthYear = document.querySelector('.postBirthYear');
    const getCountry = document.querySelector('.postCountry');
    const getDescription = document.querySelector('.postDescription');
    const getTags = document.querySelector('.postHashtags');
    const tags = getTags.value.split(' ');
    console.dir(tags);
    let isOK;
    const error = document.querySelector('#errorText');
    if (editPostStr === null) {
        const newID = (parseInt(photoPosts.PhotoPosts[photoPosts.Length - 1].ID) + 1).toString();
        const newPost = new Post(newID, getDescription.value, new Date(), currentAccount.login, newPostPic, getName.value, getCountry.value, parseInt(getBirthYear.value), tags, 0);
        isOK = photoPosts.addPost(newPost);
        if (!isOK) {
            error.textContent = 'Ошибка ввода данных!';
        } else {
            View.uploadPosts(photoPosts);
            alert('Пост успешно добавлен!');
            window.open('index.html', '_self');
        }
    } else {
        const editPost = JSON.parse(editPostStr);
        if (newPostPic === '') {
            newPostPic = editPost.photoLink;
        }
        const newPost = new Post(editPost.id, getDescription.value, new Date(), editPost.author, newPostPic, getName.value, getCountry.value, parseInt(getBirthYear.value), tags, editPost.likes, editPost.likedAuthors);
        isOK = photoPosts.exchangePost(newPost);
        if (!isOK) {
            error.textContent = 'Ошибка ввода данных!';
        } else {
            View.uploadPosts(photoPosts);
            localStorage.removeItem('editPost');
            alert('Пост успешно изменен!');
            window.open('index.html', '_self');
        }
    }
}