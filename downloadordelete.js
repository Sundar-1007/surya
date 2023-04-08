var images = [
    '1B3Dn-ms1dur4IPU6E1Nm2Z7-Y5hDhP9R',
    '1YYRlI7LHAoL4XsxOdLGovRSVifx-MIEC',
    '1okMwa9XM2h6p1i00X2qDN8cXDFsesN31',
    '1G3c14WPJPhlFQlIZwKx7uvm_mMXP6WuI',
    '1FYyJbvgYIl8KLDyL1FMFzxjSrzyFlqjq',
    '1JMoB8n-XwDfM4ilDaJOOmzlO2EuYGGfq',
    '1PMYaWlA8gXk3aBtIPCXgAP2qeXrNFf4a',
    '1ZrkriSgjSMOmsz5EfZFpHOy8MyzE88HT',
    '1J_p-Ap8L_fpiwQME9ojXPSvNly6Dgm5z',
    '1KdcFLh8P-qc6rx2aE0g7r1xoI018Il7k',
    '15NqHeTzEEOOV_nL1JLEkaZPWwlRrhB3N',
    '1Kwi14ZfLFcdtsWmsGUSyAYi3BiNN-8CU',
    '1lwKO2X-YltCCDh0uAzBMBeNW4D2lo0iI',
    '1C3102FFBeQGuRM1ovhzaapEqg55CKtH2',
    '1YklMdjpE6VBM2a0H7CdY0Zp8C6LTRLoV',
    '1YWRDQHYsHgnlu2DNx01dreU1J3zioK56',
    '1Y1yTVmm_2xrRmrttVEoG6OjkiUdFIy80',
    '1YV5Of2Famcble69w7FsaT5Z4qUNUw8k5',
    '1XtNBg16qDVwlzcsT_SxQTUQz8jAsdNtm',
    '1YJrCTaNkWaRN_s9Pi79GhhZPOCj1rrZk',
    '1XbWbYhFEm_8elpSmxo4azQJU9wA6vu9e',
    '1YPm_Dl0JoLRCo2T5cVps1Yr3u3l_6tAm'

];

var container = $('#image-list');

$.each(images, function (index, value) {
    var newDiv = $('<div>');
    newDiv.append('<img src="' +'http://drive.google.com/uc?export=view&id='+ value + '">');
    var removeBtn = $('<button>');
    removeBtn.text('Remove');
    removeBtn.data('index', index); // store the index of the image in the button's data attribute
    removeBtn.click(function () {
        var index = $(this).data('index'); // get the index of the image from the button's data attribute
        images.splice(index, 1);
        newDiv.remove();
    });
    newDiv.append(removeBtn);
    container.append(newDiv);
});


const del = "<button class='Delete'>Delete</button>";
const dow = "<button class='Download'>Download</button>";

$("#image-list>div").addClass("card").append(dow);
$("#image-list>div>img").addClass("card-img-top");

// $(document).ready(function () {
//     $('.Delete').click(function () {
//         $(this).parent().remove();
//     });
// });

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

$('#my-form').submit(function(event) {
    event.preventDefault(); // prevent the default form submission
    var inputValue = $('#my-input').val();
    images.push(inputValue);
  });
