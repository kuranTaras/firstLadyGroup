$(window).on("load" , function () {
    const interiorSwiper = new Swiper('.interior__slider', {
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 700,
        navigation: {
            nextEl: '.interior__next',
            prevEl: '.interior__prev',
        },
        pagination: {
            el: '.interior__dots',
            clickable: true,
        },
        breakpoints: {
            1024: {
                spaceBetween: 115,
            },
        }
    });
    interiorSwiper.on('slideChange', () => {
        $('.interior__slide').each(function (index) {
            setTimeout(() => {
                if ($('.interior__slide').eq(index - 1).hasClass('swiper-slide-active')) {
                    $('.interior-current').text('0' + index)
                    if (index === 0) {
                        $('.interior-current').text($('.interior__quantity').text())
                    }
                }
            },)
        })
    })
    $('.interior__quantity').text('0' + $('.interior__slide').length)
    const customersSwiper = new Swiper('.customers__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
            el: '.customers-progressbar',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.customers__next',
            prevEl: '.customers__prev',
        },
        breakpoints: {
            1200: {
                spaceBetween: 100,
                slidesPerView: 2.8,
            },
            1024: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            }
        },
    });
    $('.customers-quantity').text($('.customers__slide').length)
    customersSwiper.on('slideChange', () => {
        $('.customers__slide').each(function (index) {
            setTimeout(() => {
                if ($('.customers__slide').eq(index - 1).hasClass('swiper-slide-active')) {
                    $('.customers-current').text('0' + index)
                    if (index === 0) {
                        $('.customers-current').text($('.customers-quantity').text())
                    }
                }
            },)
        })
    })
    $('.customers-button').each(function (index) {
        $(this).on('click', () => {
            $('.customers__slide').eq(index).toggleClass('customers__slide_open')
            if ($('.customers__slide').hasClass('customers__slide_open')) {
                $(this).text($('.customers-button').attr('data-open'))
            } else {
                $(this).text($('.customers-button').attr('data-close'))
            }
        })
    })
    const whatSwiper = new Swiper('.what__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.what__next',
            prevEl: '.what__prev',
        },
        pagination: {
            el: '.what-scrollbar',
            type: 'progressbar'
        },
    })
    $('.what__slide').eq(2).addClass('swiper-slide-next_two')
    $('.what-quantity').text('0' + $('.what__slide').length)
    whatSwiper.on('slideChange', () => {
        $('.what__slide').each(function (index) {
            setTimeout(() => {
                if ($('.what__slide').eq(index - 1).hasClass('swiper-slide-active')) {
                    $('.what-current').text('0' + index)
                    if (index === 0) {
                        $('.what-current').text($('.what-quantity').text())
                    }
                }
            },)
        })
    })
    whatSwiper.on('transitionStart', () => {
        $('.what__slide').removeClass('swiper-slide-next_two')
        $('.what__slide').eq(whatSwiper.realIndex +2).addClass('swiper-slide-next_two')
    })
    $('.what__slide').each(function (index) {
        $('.what__slide h6').eq(index).text('0' + (index + 1))
    })

})



