function addPhotoLoad() {
    photoPosts = View.downloadPosts();
    currentAccount = View.downloadCurrentAccount();
    let description = document.querySelector('.description');
    description.textContent = `Автор: ${currentAccount.login}`;
    description = description.nextElementSibling.nextElementSibling.nextElementSibling;
    description.textContent = `Дата создания поста: ${dateToString(new Date())}`;
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
    const newID = (parseInt(photoPosts.PhotoPosts[photoPosts.Length - 1].ID) + 1).toString();
    const newPost = new Post(newID, getDescription.value, new Date(), currentAccount.login, newPostPic, getName.value, getCountry.value, getBirthYear.value, tags, 0);
    const isOK = photoPosts.addPost(newPost);
    const error = document.querySelector('#errorText');
    if (!isOK) {
        error.textContent = 'Ошибка! Заполнены не все поля или хештэги некорректны!';
    } else {
        View.uploadPosts(photoPosts);
        alert('Пост успешно добавлен!');
        window.open('addphoto.html', '_self');
    }
}