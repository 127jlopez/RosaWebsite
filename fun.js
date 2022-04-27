

function centerNavigation() {
    var activeCollection = document.querySelector('li.collection__item.active');
    var currentCollectionDataSlideNumber = parseInt(document.getElementById('activeCollection').getAttribute('data-slide-number'));
    var activeTag = document.querySelector('li.tag-filters__item.active');

    if (activeTag) {
        activeTag.scrollIntoView({ inline: 'center', block: "center", });
    };

    if (activeCollection) {
        if (currentCollectionDataSlideNumber < 7) {
        activeCollection.scrollIntoView({ inline: 'center', block: "center", });
        }
        else {
            activeCollection.scrollIntoView({ inline: 'nearest', block: "center", });
        }
    };
}

$(document).ready(centerNavigation);

var width = $(window).width();

$(window).on('resize', function() {
  if ($(this).width() !== width) {
    width = $(this).width();
    centerNavigation();
  }
});

function updateCollectionArrows() {
    if (document.getElementById('activeCollection') !=null) {
        var currentCollectionDataSlideNumber = parseInt(document.getElementById('activeCollection').getAttribute('data-slide-number'));
        var previousCollectionDataSlideNumber = Math.max(currentCollectionDataSlideNumber - 1, 0);
        var nextCollectionDataSlideNumber = Math.min(currentCollectionDataSlideNumber + 1, 7);

        var previousCollectionElement = document.querySelector('[data-slide-number="' + previousCollectionDataSlideNumber + '"]');
        var previousCollectionLink = previousCollectionElement.querySelector('a').getAttribute('href');

        var nextCollectionElement = document.querySelector('[data-slide-number="' + nextCollectionDataSlideNumber + '"]');
        var nextCollectionLink = nextCollectionElement.querySelector('a').getAttribute('href');
    };

    if (document.getElementById('nextCollectionLink') !=null) {
        document.getElementById('nextCollectionLink').setAttribute("href", nextCollectionLink);
    };

    if (document.getElementById('previousCollectionLink') !=null) {
        document.getElementById('previousCollectionLink').setAttribute("href", previousCollectionLink);
    };
}

$(document).ready(updateCollectionArrows);

$(function(){
    var $checkbox = $("#FilterOnline");
    $checkbox.on("change", function(){
            var href = document.querySelector('#available_online_toggle a').href;
            window.location = href;
    });
});

