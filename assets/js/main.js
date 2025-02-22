(function ($) {
    "use strict";
    var windowOn = $(window);


    /*-----------------------------------------------------------------------------------

        Template Name: Artificial Intelligence Startup HTML5 Template
        Author: RRDevs
        Support: https://support.rrdevs.net
        Description: Artificial Intelligence Startup HTML5 Template
        Version: 1.0
        Developer: Soukhin khan (https://github.com/Soukhinkhan)

    -----------------------------------------------------------------------------------

      /*======================================
        Preloader activation
        ========================================*/

    handleQuantityButtons();

    $(document.body).on('updated_cart_totals', function () {
        handleQuantityButtons();
    });


    function resourcesHubMasonry() {
        var $grid = $('.resources-hub__masonry');
        $grid.masonry({
            itemSelector: '.col-item',
            columnWidth: '.col-lg-4',
            horizontalOrder: false,
            isAnimated: true,
            // percentPosition: true,
        });

        $grid.masonry('reloadItems');
        $grid.masonry('layout');

        // layout Masonry after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.masonry('layout');
        });
    }

    resourcesHubMasonry();


    $(window).on('load', function (event) {
        $('#preloader').delay(1000).fadeOut(500);

        $('.odometer').waypoint(function (direction) {
            if (direction === 'down') {
                let countNumber = $(this.element).attr("data-count");
                $(this.element).html(countNumber);
            }
        }, {
            offset: '80%'
        });
    });


    $(".preloader-close").on("click", function () {
        $('#preloader').delay(0).fadeOut(500);

        $('.odometer').waypoint(function (direction) {
            if (direction === 'down') {
                let countNumber = $(this.element).attr("data-count");
                $(this.element).html(countNumber);
            }
        }, {
            offset: '80%'
        });
    })


    /////////////////////////////////////////////////////

    //return img gsap
    // gsap.registerPlugin(ScrollTrigger);

    // let revealContainers = document.querySelectorAll(".return");

    // revealContainers.forEach((container) => {
    //     let image = container.querySelector("img");
    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: container,
    //             toggleActions: "restart none none reset"
    //         }
    //     });

    //     tl.set(container, { autoAlpha: 1 });
    //     tl.from(container, 1.5, {
    //         xPercent: -100,
    //         ease: Power2.out
    //     });
    //     tl.from(image, 1.5, {
    //         xPercent: 100,
    //         scale: 1.3,
    //         delay: -1.5,
    //         ease: Power2.out
    //     });
    // });

    //GSAP smooth animation
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    if ($('#smooth-wrapper').length && $('#smooth-content').length) {

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            smooth: 2,
            effects: true,
            smoothTouch: false,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }


    /*======================================
   Data Css js
   ========================================*/
    $("[data-background]").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    /*======================================
      Mobile Menu Js
      ========================================*/
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "992",
        meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
    });

    /*======================================
      Sidebar Toggle
      ========================================*/
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__area").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    });
    // Scroll to bottom then close navbar
    $(window).scroll(function () {
        if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
            $(".offcanvas__area").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        }
    });
    $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__area").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
    });

    /*======================================
      Body overlay Js
      ========================================*/
    $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    /*======================================
      Sticky Header Js
      ========================================*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $("#header-sticky").addClass("rs-sticky");
        } else {
            $("#header-sticky").removeClass("rs-sticky");
        }
    });

    /*** pricing table */
    const pricingMonthlyBtn = $("#monthly-btn"),
        pricingYearlyBtn = $("#yearly-btn"),
        pricingValues = $(".pricing-card-price h2");

    if (pricingMonthlyBtn[0] && pricingYearlyBtn[0] && pricingValues.length > 0) {
        pricingMonthlyBtn[0].addEventListener("click", function () {
            updatePricingValues("monthly");
            pricingYearlyBtn[0].classList.remove("active");
            pricingMonthlyBtn[0].classList.add("active");
        });

        pricingYearlyBtn[0].addEventListener("click", function () {
            updatePricingValues("yearly");
            pricingMonthlyBtn[0].classList.remove("active");
            pricingYearlyBtn[0].classList.add("active");
        });
    }

    function updatePricingValues(option) {
        pricingValues.each(function () {
            const pricingValue = $(this);
            const yearlyValue = pricingValue.attr("data-yearly");
            const monthlyValue = pricingValue.attr("data-monthly");

            const newValue = option === "monthly" ? monthlyValue : yearlyValue;
            pricingValue.html(newValue);
        });
    }

    /*======================================
      MagnificPopup image view
      ========================================*/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    /*======================================
      MagnificPopup video view
      ========================================*/
    $(".popup-video").magnificPopup({
        type: "iframe",
    });


    /*======================================
      Wow Js
      ========================================*/
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    // /*======================================
    //   Button scroll up js
    //   ========================================*/

    // /*======================================
    // One Page Scroll Js
    // ========================================*/
    // /*** Scroll Nav */
    // var link = $('.mean-nav ul li a');

    // link.on('click', function (e) {
    //     var target = $($(this).attr('href'));
    //     $('html, body').animate({
    //         scrollTop: target.offset().top - 76
    //     }, 600);
    //     $(this).parent().addClass('active');
    //     e.preventDefault();
    // });

    // $(window).on('scroll', function () {
    //     scrNav();
    // });

    // function scrNav() {
    //     var sTop = $(window).scrollTop();
    //     $('section').each(function () {
    //         var id = $(this).attr('id'),
    //             offset = $(this).offset().top - 1,
    //             height = $(this).height();
    //         if (sTop >= offset && sTop < offset + height) {
    //             link.parent().removeClass('active');
    //             $('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
    //         }
    //     });
    // }
    // scrNav();

    /*======================================
    Smoth animatio Js
    ========================================*/
    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 300);
    });


    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: 1

        }
    })


    //count
    function handleQuantityButtons() {
        $('.count-wrap .minus').click(function () {
            var input = $(this).closest('.count-wrap').find('input.qty');
            var currentValue = parseInt(input.val());
            if (currentValue > 1) {
                input.val(currentValue - 1).change();
            }
        });

        $('.count-wrap .plus').click(function () {
            var input = $(this).closest('.count-wrap').find('input.qty');
            var currentValue = parseInt(input.val());
            input.val(currentValue + 1).change();
        });
    }
    // Easy Pie Chart
    const piechart = document.querySelectorAll(".piechart");
    piechart.forEach(function (el) {
        const waypoint = new Waypoint({
            element: el,
            handler: function () {
                const easyPieChart = new EasyPieChart(el, {
                    scaleColor: "transparent",
                    lineWidth: 10,
                    lineCap: "round",
                    trackColor: " rgba(255, 255, 255, 0.3)",
                    barColor: "#fff",
                    size: 150,
                    rotate: 0,
                    animate: 1000,
                    onStep: function (value) {
                        this.el.querySelector("span").textContent = Math.round(value);
                    },
                    onStop: function (value, to) {
                        this.el.querySelector("span").textContent = Math.round(to);
                    },
                });
                this.destroy();
            },
            offset: "80%",
            triggerOnce: true,
        });
    });



    // Popup Search Box
    $(".search-open-btn").on("click", function () {
        $(".search__popup").addClass("search-opened");
    });

    $(".search-close-btn").on("click", function () {
        $(".search__popup").removeClass("search-opened");
    });




    // $('.lan-select select, .nice-select-select select').niceSelect();
    $('.take-appointment-3__form-input-select select, .lan-select select, .nice-select-select select').niceSelect();
    $("#datepicker").datepicker({
        dateFormat: "mm/dd/yy"
    });

    $('#getting-started').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime(' <div><span>%D</span></div>  <div><span>%H</span></div> <div><span>%M</span></div> <div><span>%S</span></div>'));
    });


    /*** lastNobullet */
    function lastNobullet() {
        var lastElement = false;
        $(".footer__copyright-menu ul li, .last_item_not_horizental_bar .col-lg-4").each(function () {
            if (lastElement && lastElement.offset().top != $(this).offset().top) {
                $(lastElement).addClass("no_bullet");
            } else {
                $(lastElement).removeClass("no_bullet");
            }
            lastElement = $(this);
        }).last().addClass("no_bullet");
    };
    lastNobullet();

    $(window).resize(function () {
        lastNobullet();
    });

    $('#contact__form').submit(function (event) {
        event.preventDefault();
        var form = $(this);
        $('.loading-form').show();

        setTimeout(function () {
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize()
            }).done(function (data) {
                $('.loading-form').hide();
                $('.contact__form').append('<p class="success-message mt-3 mb-0">Your message has been sent successfully.</p>');
            }).fail(function (data) {
                $('.loading-form').hide();
                $('.contact__form').append('<p class="error-message mt-3 mb-0">Something went wrong. Please try again later.</p>');

            });
        }, 1000);
    });

    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle(400);
    });
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle(400);
    });


    // Custom Cursor
    $("body").append('<div class="mt-cursor"></div>');
    var cursor = $(".mt-cursor"),
        linksCursor = $("a, .swiper-nav, button, .cursor-effect"),
        crossCursor = $(".cross-cursor");

    $(window).on("mousemove", function (e) {
        cursor.css({
            transform: "translate(" + (e.clientX - 15) + "px," + (e.clientY - 15) + "px)",
            visibility: "inherit",
        });
    });

    // Page Scroll Percentage
    function scrollTopPercentage() {
        const scrollPercentage = () => {
            const scrollTopPos = document.documentElement.scrollTop;
            const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
            const scrollElementWrap = $("#scroll-percentage");

            scrollElementWrap.css("background", `conic-gradient( var(--rr-theme-primary2) ${scrollValue}%, var(--rr-common-white) ${scrollValue}%)`);

            // ScrollProgress
            if (scrollTopPos > 100) {
                scrollElementWrap.addClass("active");
            } else {
                scrollElementWrap.removeClass("active");
            }

            if (scrollValue < 96) {
                $("#scroll-percentage-value").text(`${scrollValue}%`);
            } else {
                $("#scroll-percentage-value").html('<i class="fa-sharp fa-regular fa-arrow-up-long"></i>');
            }
        }
        window.onscroll = scrollPercentage;
        window.onload = scrollPercentage;

        // Back to Top
        function scrollToTop() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        $("#scroll-percentage").on("click", scrollToTop);
    }

    scrollTopPercentage();



    // Progress Item 7
    document.addEventListener("DOMContentLoaded", () => {
        const progressItems = document.querySelectorAll(".progress-7__item");
        const progressBox = document.querySelector(".progress-7__box");

        if (progressItems && progressBox) {
            // Define colors for each step
            const colors = ["#36F165"];

            window.addEventListener("scroll", () => {
                let activeIndex = -1;

                progressItems.forEach((item, index) => {
                    const rect = item.getBoundingClientRect();
                    const isInView = rect.top < window.innerHeight / 2 && rect.bottom > 0;

                    if (isInView) {
                        item.classList.add("active");
                        activeIndex = index;
                    } else {
                        item.classList.remove("active");
                    }
                });

                if (activeIndex >= 0) {
                    const activeItem = progressItems[activeIndex];
                    const boxRect = progressBox.getBoundingClientRect();
                    const itemRect = activeItem.getBoundingClientRect();

                    // Calculate the height for the progress line
                    const newHeight = itemRect.top + itemRect.height / 1 - boxRect.top;

                    // Update the progress line height and color
                    progressBox.style.setProperty("--line-height", `${newHeight}px`);
                    progressBox.style.setProperty("--line-color", colors[activeIndex] || "#36F165");
                } else {
                    // Reset the line height when no item is active
                    progressBox.style.setProperty("--line-height", `0px`);
                }
            });
        }
    });


    // faizen isotope js blog10
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.blog10__filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue })
    });

    $('.blog10__filter button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });



    // jarallax js 
    $('.jarallax').jarallax({
        speed: 0.2,
    });


    // counter js 
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1200
        });
    });



    //////// counter h2 end /////////

    /////////////////////////////// Hero animation ////////////////////////////////////

    // GSAP এবং ScrollTrigger সক্রিয় করতে
    gsap.registerPlugin(ScrollTrigger);

    // ভিডিও এলিমেন্ট সিলেক্ট করা
    const titleVideo = document.querySelector('.title-video');

    // ScrollTrigger এর জন্য matchMedia ব্যবহার করা
    ScrollTrigger.matchMedia({
        // ১২০০ পিক্সেলের উপরের ডিভাইসের জন্য
        "(min-width: 1200px)": function () {
            // GSAP অ্যানিমেশন
            gsap.to(titleVideo, {
                scrollTrigger: {
                    trigger: '.brand',
                    start: 'top 50%',
                    end: 'top 20%',
                    scrub: true,
                    toggleActions: 'play reverse play reverse'
                },
                x: '100%',
                y: '750px',
                scale: 4,
                width: '500px',
                height: '200px',
                borderRadius: '0px',
                ease: 'power1.out',
            });
        },

        // ১২০০ পিক্সেলের নিচের ডিভাইসের জন্য (কোনো অ্যানিমেশন হবে না)
        "(max-width: 1199px)": function () {
            // এখানে আপনি অ্যানিমেশন নিষ্ক্রিয় রাখতে কিছু না করলেও হবে।
        },
    });





    // Scroll-triggered border and background color change
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.tp-portfolio-top-text-border',
    //         start: 'top center',
    //         end: 'bottom center',
    //         scrub: true
    //     }
    // })
    // .to('.tp-portfolio-top-text-border', {
    //     borderColor: '#ff0000',
    //     duration: 0.5
    // })
    // .to('.tp-portfolio-top-text-border-icon', {
    //     backgroundColor: '#151515',
    //     duration: 0.5
    // }, '<');

  










    // Natrix js ----------------------------------

    // Register GSAP and ScrollTrigger plugins
    gsap.registerPlugin(ScrollTrigger);

    //button animation
    // ----------------------------------------------------------------------------
    // Button Effect
    var buttons = document.querySelectorAll('.default-btn, .hover-anim');
    const btnCheck = document.getElementsByClassName('hover-anim').length > 0;
    if (btnCheck) {
        buttons.forEach(function (button) {
            button.addEventListener('mouseenter', function (e) {
                var parentOffset = this.getBoundingClientRect(),
                    relX = e.clientX - parentOffset.left,
                    relY = e.clientY - parentOffset.top;
                if (this.querySelector('.hover-bg')) {
                    this.querySelector('.hover-bg').style.top = relY + 'px';
                    this.querySelector('.hover-bg').style.left = relX + 'px';
                }
            });

            button.addEventListener('mouseout', function (e) {
                var parentOffset = this.getBoundingClientRect(),
                    relX = e.clientX - parentOffset.left,
                    relY = e.clientY - parentOffset.top;
                if (this.querySelector('.hover-bg')) {
                    this.querySelector('.hover-bg').style.top = relY + 'px';
                    this.querySelector('.hover-bg').style.left = relX + 'px';
                }
            });
        });
    }


    if ($('.projects-section__area').length > 0 && window.innerWidth > 768) {
        let projectText = gsap.timeline({
            scrollTrigger: {
                trigger: ".projects-section__area",
                start: "top center-=450",
                end: "bottom 120%",
                pin: ".section-title__wrapper_2",
                markers: false,
                pinSpacing: false,
                scrub: 1,
            },
        });

        projectText.set(".section-title__wrapper_2", {
            scale: 1,
        });
        projectText.to(".section-title__wrapper_2", {
            scale: 1.2,
            duration: 2,
        });
        projectText.to(".section-title__wrapper_2", {
            scale: 1.2,
            duration: 2,
        }, "+=2");
    }



    if ($('.work-process__section').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            return gsap.to('.work-process-panel-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.work-process__section',
                    scrub: 1,
                    start: 'top -30%',
                    end: "bottom 108%",
                    pin: '.work-process-panel-pin',
                    markers: false,
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }

    if ($('.project-section-3').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            return gsap.to('.project-section-3-panel-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.project-section-3',
                    scrub: 1,
                    start: 'top -5%',
                    end: "bottom 45%",
                    pin: '.project-section-3-panel-pin',
                    markers: false,
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }

    if ($('.faq-section').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
            return gsap.to('.faq-section-panel-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.faq-section',
                    scrub: 1,
                    start: 'top 10%',
                    end: "bottom 25%",
                    pin: '.faq-section-panel-pin',
                    markers: false,
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }



    if (window.innerWidth > 768) {
        gsap.set('.title-slide-section-text', { x: '0%' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.title-slide-section-text-animation',
                start: '-750 0%',
                end: 'bottom 0%',
                scrub: true,
                invalidateOnRefresh: true,
                markers: false,
                toggleActions: 'play reverse play reverse',
            }
        }).to('.title-slide-section-text', { x: '-35%' });
    }




    if (document.querySelectorAll(".funfact-area-2").length > 0) {
        gsap.to(".funfact-area-2 .thumb img", {
            scale: "1",
            scrollTrigger: {
                trigger: ".funfact-area-2 .thumb",
                start: "top top",
                end: "100% top",
                pin: true,
                scrub: 2,
                markers: false,
                toggleActions: 'play reverse play reverse',
            }
        })
    }



    document.addEventListener("DOMContentLoaded", () => {
        const mainImage = document.getElementById("main-image");
        const textItems = document.querySelectorAll(".services-section__item");

        textItems.forEach(item => {
            item.addEventListener("mouseover", () => {
                const newImage = item.getAttribute("data-image");
                mainImage.style.opacity = "0";

                setTimeout(() => {
                    mainImage.src = newImage;
                    mainImage.style.opacity = "1";
                }, 500);
            });
        });
    });



    if ($('.rr-char-animation').length > 0 && window.innerWidth > 768) {
        let char_come = gsap.utils.toArray(".rr-char-animation");
        char_come.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 5%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none reverse',
                }
            });

            const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
            gsap.set(splitTextLine, { perspective: 300 });

            itemSplitted.split({ type: "chars, words" });

            tl.from(itemSplitted.chars, {
                duration: 0.3,
                delay: 0.1,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05
            });
        });
    }



    if ($(".fade-wrapper").length > 0 && window.innerWidth > 768) {
        $(".fade-wrapper").each(function () {
            var section = $(this);
            var fadeItems = section.find(".fade-top");

            fadeItems.each(function (index, element) {
                var delay = index * 0.1;

                gsap.set(element, {
                    opacity: 0,
                    y: 70,
                });

                ScrollTrigger.create({
                    trigger: element,
                    start: "top 95%",
                    end: "bottom bottom",
                    scrub: false,
                    markers: true,
                    toggleActions: "play none none reverse",
                    onEnter: function () {
                        gsap.to(element, {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            delay: delay
                        });
                    },
                    onLeaveBack: function () {
                        gsap.to(element, { opacity: 0, y: 70, duration: 0.3 });
                    }
                });
            });
        });
    }



    if ($('.rr_fadeIn_anim').length > 0) {
        let splitTitleLines = gsap.utils.toArray(".rr_fadeIn_anim");
        splitTitleLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 5%',
                    scrub: false,
                    markers: true,
                    toggleActions: "play reverse play reverse",
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "words, lines"
            });
            gsap.set(splitTextLine, {
                perspective: 400
            });
            itemSplitted.split({
                type: "lines"
            })
            tl.from(itemSplitted.lines, {
                duration: 0.8,
                delay: 0.3,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1
            });
        });
    }

    //split-text animation
    let animation = document.querySelectorAll(".animation");

    animation.forEach(animation => {
        let split = new SplitText(animation.querySelector(".rr_title_animation"), { type: "chars, words" }),
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: animation,
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                    onEnter: () => {
                        tl.timeScale(2.3);
                    },

                    onLeaveBack: () => {
                        tl.timeScale(2.3).reverse();
                    },
                }
            });
        tl.to(animation.querySelector(".sup_animation"), { opacity: 1, x: -50, ease: "back" })
            .from(split.chars, {
                opacity: 0,
                y: 50,
                rotation: 1,
                duration: 2,
                ease: "back",
                stagger: 0.05
            });
    });
    //split-text animation end



    if ($(".img-custom-anim-img").length > 0 && window.innerWidth > 68) {
        gsap.utils.toArray(".img-custom-anim-img").forEach((img) => {
            gsap.set(img, { opacity: 0, x: -50, clipPath: "inset(0 100% 0 0)" });

            ScrollTrigger.create({
                trigger: img,
                start: "top 95%",
                end: "bottom 5%",
                toggleActions: "play none none reverse",
                markers: true,
                onEnter: () => {
                    gsap.to(img, {
                        opacity: 1,
                        x: 0,
                        clipPath: "inset(0 0 0 0)",
                        duration: 0.3,
                        ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
                    });
                },
                onLeaveBack: () => {
                    gsap.to(img, {
                        opacity: 0,
                        x: -50,
                        clipPath: "inset(0 100% 0 0)",
                        duration: 0.3,
                    });
                }
            });
        });
    }



    const panelsContainer = document.querySelector(".panels-container");
    const panels = gsap.utils.toArray(".panel");
    let totalPanelsWidth = panels.reduce((acc, panel) => acc + panel.offsetWidth, 0);

    gsap.set(panelsContainer, { width: totalPanelsWidth });

    gsap.to(panelsContainer, {
        x: -(totalPanelsWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".panels",
            pin: true,
            pinSpacing: true, 
            scrub: true, 
            start: "-33% top",
            end: "+=" + (totalPanelsWidth - window.innerWidth + 500), 
            anticipatePin: 3,
            markers: false,
            toggleActions: "play none none reverse",
        }
    });



    // hover reveal start
    const hoveritem = document.querySelectorAll(".rr-hover-reveal-item");

    function moveImage(e, hoveritem, index) {
        const item = hoveritem.getBoundingClientRect();
        const x = e.clientX - item.x;
        const y = e.clientY - item.y;
        if (hoveritem.children[index]) {
            hoveritem.children[index].style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    hoveritem.forEach((item, i) => {
        item.addEventListener("mousemove", (e) => {
            setInterval(moveImage(e, item, 1), 50);
        });
    });
    // hover reveal end




    if ($(".progress-ring__circle").length > 0 && window.innerWidth > 68) {
        document.addEventListener("DOMContentLoaded", () => {
            
            const circle = document.querySelector(".progress-ring__circle");
            const stepCounter = document.getElementById("step-counter");
            const section = document.querySelector(".work-process__section");

            const totalSteps = 4;
            let currentStep = 1;
            const circumference = 830;

            function resetProgress() {
                circle.style.strokeDashoffset = circumference;
                stepCounter.textContent = `1/4`;
            }

            function updateProgress(step) {
                const progress = (step / totalSteps) * circumference;
                circle.style.strokeDashoffset = circumference - progress;
                stepCounter.textContent = `${step}/4`;
            }

            window.addEventListener("scroll", () => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPos = window.scrollY;
                const windowHeight = window.innerHeight;
                const maxScroll = sectionHeight - windowHeight;

                if (scrollPos < sectionTop + (sectionHeight * 0.1)) {
                    resetProgress();
                    return;
                }

                if (scrollPos > sectionTop + (sectionHeight * 0.9)) {
                    resetProgress();
                    return;
                }

                const relativeScroll = scrollPos - sectionTop;
                const step = Math.ceil((relativeScroll / maxScroll) * totalSteps);

                if (step >= 1 && step <= totalSteps && step !== currentStep) {
                    currentStep = step;
                    updateProgress(step);
                }
            });

            resetProgress();
        });
    }




    var testimonial = new Swiper(".testimonial-slide__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: false,
        autoplay: true,
        centerMode: true,
        speed: 1000,
    });


    document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper(".brand-slide__active", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
            speed: 3000,
            loop: true,
            freeMode: true,
            autoplay: {
                delay: 1,
                reverseDirection: false,
                disableOnInteraction: false
            },
            touchReleaseOnEdges: true,  
            simulateTouch: false,       
            allowTouchMove: false,       
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper(".title-slide__active", {
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
            speed: 25000,
            loop: true,
            freeMode: true,
            autoplay: {
                delay: 1,
                reverseDirection: false,
                disableOnInteraction: false,
            },
            touchReleaseOnEdges: true,
            simulateTouch: false,
            allowTouchMove: false,
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper(".title-slider-3__active", {
            slidesPerView: 'auto',
            spaceBetween: 0,
            centeredSlides: true,
            speed: 25000,
            loop: true,
            freeMode: true,
            autoplay: {
                delay: 1,
                reverseDirection: false,
                disableOnInteraction: false
            },
            touchReleaseOnEdges: true,
            simulateTouch: false,
            allowTouchMove: false,
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper(".title-slider-3__active-2", {
            slidesPerView: 'auto',
            spaceBetween: 0,
            centeredSlides: true,
            speed: 25000,
            loop: true,
            freeMode: true,
            autoplay: {
                delay: 1,
                reverseDirection: true,
                disableOnInteraction: false
            },
            touchReleaseOnEdges: true,
            simulateTouch: false,
            allowTouchMove: false,
        });
    });


    var swiperProject = new Swiper(".project-section-2__active", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        centeredSlides: false,
        autoplay: true,
        centerMode: true,
        speed: 400,
        pagination: {
            el: ".project-section-2__pagination",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    var swiperfeedback = new Swiper(".feedback-section__active", {
        slidesPerView: 4,
        spaceBetween: 50,
        loop: true,
        centeredSlides: true,
        autoplay: true,
        centerMode: false,
        speed: 400,
        navigation: {
            nextEl: ".feedback-section__button__next",
            prevEl: ".feedback-section__button__prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: false,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1700: {
                slidesPerView: 4,
            },
        },
    });




 




    


})(jQuery);