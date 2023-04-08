
// const fileInput = document.getElementById('file-input');
// const saveBtn = document.getElementById('save-btn');
// const imageList = document.getElementById('image-list');

// let images = [];

// fileInput.addEventListener('change', () => {
//     images = Array.from(fileInput.files);
// });

// saveBtn.addEventListener('click', () => {
//     images.forEach((image) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(image);
//         reader.onload = () => {
//             const imageData = { name: image.name, dataUrl: reader.result };
//             const storedImages = JSON.parse(localStorage.getItem('images')) || [];
//             storedImages.push(imageData);
//             localStorage.setItem('images', JSON.stringify(storedImages));
//             showImage(imageData);
//         };
//     });
// });

// function showImage(imageData) {
//     const div = document.createElement('div');
//     const img = document.createElement('img');
//     img.src = imageData.dataUrl;
//     div.classList.add('col-md-4');
//     img.classList.add('card-img-top');
//     div.appendChild(img);
//     imageList.appendChild(div);

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.addEventListener('click', () => {
//         const storedImages = JSON.parse(localStorage.getItem('images')) || [];
//         const updatedImages = storedImages.filter((imgData) => imgData.name !== imageData.name);
//         localStorage.setItem('images', JSON.stringify(updatedImages));
//         div.remove();
//         deleteBtn.remove();
//         downloadBtn.remove();
//     });
//     div.appendChild(deleteBtn);
// }



// function loadImages() {
//     const storedImages = JSON.parse(localStorage.getItem('images')) || [];
//     storedImages.forEach((imageData) => showImage(imageData));
// }

// loadImages();

const fileInput = document.getElementById('file-input');
  const saveBtn = document.getElementById('save-btn');
  const imageList = document.getElementById('image-list');
  
  let images = [];
  
  fileInput.addEventListener('change', () => {
    images = Array.from(fileInput.files);
  });
  
  saveBtn.addEventListener('click', async () => {
    const storedImages = JSON.parse(localStorage.getItem('images')) || [];
  
    for (const image of images) {
      const imageData = { name: image.name, dataUrl: await readFileAsDataURL(image) };
      storedImages.push(imageData);
      localStorage.setItem('images', JSON.stringify(storedImages));
      showImage(imageData);
    }
  });
  
  function readFileAsDataURL(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  }
  
  function showImage(imageData) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = imageData.dataUrl;
    div.classList.add('card');
    img.classList.add('card-img-top');
    div.appendChild(img);
    imageList.appendChild(div);
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      const storedImages = JSON.parse(localStorage.getItem('images')) || [];
      const updatedImages = storedImages.filter((imgData) => imgData.name !== imageData.name);
      localStorage.setItem('images', JSON.stringify(updatedImages));
      div.remove();
      deleteBtn.remove();
      downloadBtn.remove();
    });
    div.appendChild(deleteBtn);
  
    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Download';
    downloadBtn.addEventListener('click', () => {
      downloadImage(imageData);
    });
    div.appendChild(downloadBtn);
  }
  
  function downloadImage(imageData) {
    const link = document.createElement('a');
    link.href = imageData.dataUrl;
    link.download = imageData.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  function loadImages() {
    const storedImages = JSON.parse(localStorage.getItem('images')) || [];
    storedImages.forEach((imageData) => showImage(imageData));
  }
  
  loadImages();
  

  $(document).ready(function() {
  var images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
  ];

  var container = $('#image-list');

  $.each(images, function(index, value) {
    var newDiv = $('<div>');
    newDiv.append('<img src="' + value + '">');
    var removeBtn = $('<button>');
    removeBtn.text('Remove');
    removeBtn.data('index', index); // store the index of the image in the button's data attribute
    removeBtn.click(function() {
      var index = $(this).data('index'); // get the index of the image from the button's data attribute
      images.splice(index, 1);
      newDiv.remove();
    });
    newDiv.append(removeBtn);
    container.append(newDiv);
  });
});
