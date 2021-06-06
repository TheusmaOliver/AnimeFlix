$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})



function play() {
    document.querySelector('.anime-principal').innerHTML = '<iframe width="100%" height="480" src="https://www.youtube.com/embed/4t__wczfpRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}
