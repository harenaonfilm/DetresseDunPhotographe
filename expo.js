$(document).ready(function(){
    var elements = $(".hidden");
    var index = 0;

    function typeWriter(element, text, i, cb) {
        if (i < text.length) {
            element.text(text.substr(0, i+1));
            setTimeout(function() {
                typeWriter(element, text, i + 1, cb);
            }, 50); // Définissez la vitesse de frappe ici (en millisecondes)
        } else {
            cb();
        }
    }

    function typeAll() {
        if (index < elements.length) {
            var currentElement = $(elements[index]);
            var text = currentElement.text();
            currentElement.removeClass('hidden').addClass('visible');
            typeWriter(currentElement, text, 0, function() {
                index++;
                typeAll();
            });
        }
    }

    typeAll();
});
