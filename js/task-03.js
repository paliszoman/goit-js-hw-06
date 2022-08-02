const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let gallerySource = document.querySelector(".gallery")
gallerySource.style.display = "flex";
gallerySource.style.flexDirection = 'column';
gallerySource.style.justifyContent = 'space-between';
gallerySource.style.alignItems = 'center';

let insideGalleryList = images
  .map(({ url, alt }) => `<li class="list-item"><img src=${url} alt=${alt}></li>`)
  
gallerySource.insertAdjacentHTML('afterbegin', insideGalleryList)


console.log(insideGalleryList)