const del = "<button class='Delete'>Delete</button>";
const dow = "<button class='Download'>Download</button>";

$("#image-list>div").addClass("card").append(dow).append(del);
$("#image-list>div>img").addClass("card-img-top");

$(document).ready(function () {
    $('.Delete').click(function () {
        $(this).parent().remove();
    });
});

$(document).ready(function () {
    $('.Download').click(function () {
        var link = document.createElement('a');
        link.href = $(this).siblings('img').attr('src');
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
