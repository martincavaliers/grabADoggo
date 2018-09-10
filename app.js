function getBreed(url){
    const pathArray = url.split('/');

    const breed = pathArray[4];

    return breed;
}

function $displayDog(element){
    $.get("https://dog.ceo/api/breeds/image/random", function (data) {

        const dogUrl = data.message;

        $(element).attr('src', dogUrl);

        const breed = (getBreed(dogUrl));

        $('#breedSpan').text(breed);
        
    }); 
}


(function () {
    'use strict';

    $(document).ready(function () {
        $displayDog('#dogDisplayImage');

        $('#getDogButton').click(function () {
           $displayDog('#dogDisplayImage'); 
        });

    });
})();