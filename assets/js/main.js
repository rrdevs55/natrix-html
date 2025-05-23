(function ($) {
    "use strict";
    var windowOn = $(window);


    /*-----------------------------------------------------------------------------------

        Template Name: Natrix - Digital Agency HTML Template
        Author: RRDevs
        Support: https://support.rrdevs.net
        Description: Natrix - Digital Agency HTML Template
        Version: 1.0
        Developer: Mamun khan (https://github.com/mk-mamun-khan)

    -----------------------------------------------------------------------------------

      /*======================================
        Preloader activation
        ========================================*/

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

    //GSAP smooth animation
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    if ($('#smooth-wrapper').length && $('#smooth-content').length) {

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            smooth: 1.5,
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

    // data color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"));
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
            boxClass: 'wow', 
            animateClass: 'animated', 
            offset: 0, 
            mobile: false, 
            live: true 
        });
        wow.init();
    }


    /*======================================
    Smoth animatio Js
    ========================================*/
    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 300);
    });


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

    $(window).scroll(function () {
        if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
            $(".search__popup").removeClass("search-opened");
        }
    });

    $(".search-close-btn").on("click", function () {
        $(".search__popup").removeClass("search-opened");
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


    // projects - section
    if ($('.projects-section__area').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            return gsap.to('.section-title__wrapper_2_anim', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.projects-section__area',
                    scrub: 1,
                    start: 'top -10%',
                    end: "bottom 75%",
                    pinSpacing: false,
                    pin: '.section-title__wrapper_2_anim',
                    markers: false,
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }


    // work - process
    if ($('.work-process__section').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            return gsap.to('.work-process-panel-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.work-process__section',
                    scrub: 1,
                    start: 'top -30%',
                    end: "bottom 85%",
                    pin: '.work-process-panel-pin',
                    markers: false,
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }

    // project - section - 3
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

    // faq - section
    if ($('.faq-section').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
            return gsap.to('.faq-section-panel-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.faq-section',
                    scrub: 1,
                    start: 'top 5%',
                    end: "bottom 40%",
                    pin: '.faq-section-panel-pin',
                    markers: false,
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }


    // title - slide - section
    if (document.querySelectorAll(".title-slide-section-text").length > 0 && window.innerWidth > 768) {
        gsap.set('.title-slide-section-text', { x: '0%' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.title-slide-section-text-animation',
                start: '-850 0%',
                end: 'bottom 0%',
                scrub: true,
                invalidateOnRefresh: true,
                markers: false,
                toggleActions: 'play reverse play reverse',
            }
        }).to('.title-slide-section-text', { x: '-35%' });
    }


    // funfact - area - 2
    if (document.querySelectorAll(".funfact-area-2").length > 0 && window.innerWidth > 768) {
        gsap.to(".funfact-area-2 .thumb img", {
            scale: "1",
            scrollTrigger: {
                trigger: ".funfact-area-2",
                start: "top top",
                end: "bottom -50%",
                pin: ".funfact-area-2",
                scrub: 1,
                markers: false,
                toggleActions: 'play reverse play reverse',
            }
        })
    }


    // services-section---- hover-active
    let rightItems = document.querySelectorAll('.services-section__content .services-section__item');
    let leftItems = document.querySelectorAll('.services-section__thumb .service-image');

    rightItems.forEach((rightItem, index) => {
        rightItem.addEventListener('mouseenter', function () {
            handleHover(rightItem, leftItems[index]);
        });
    });

    function handleHover(rightItem, leftItem) {
        rightItems.forEach(item => {
            item.classList.remove('active');
            item.classList.add('services-section__item');
        });
        leftItems.forEach(item => {
            item.classList.remove('active');
            item.classList.add('service-image');
        });
        rightItem.classList.add('active');
        leftItem.classList.add('active');
    }




    // Banner Title anim 
    if (document.querySelectorAll(".rr-char-animation").length > 0 && window.innerWidth > 768) {
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
                duration: 0.4,
                delay: 0.1,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05,
            });
        });
    }


    // fade - item anim 
    if (document.querySelectorAll(".fade-wrapper").length > 0) {
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


    // all title anim 
    if (document.querySelectorAll(".rr_title_animation").length > 0) {
        let elements = document.querySelectorAll(".rr_title_animation");

        elements.forEach(el => {
            let split = new SplitText(el, { type: "chars, words" });

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
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

            tl.from(split.chars, {
                opacity: 0,
                y: 50,
                rotation: 1,
                duration: 2,
                ease: "back",
                stagger: 0.05
            });
        });
    }
    //split-text animation end


    // img - custom - anim - img
    if (document.querySelectorAll(".img-custom-anim-img").length > 0) {
        gsap.utils.toArray(".img-custom-anim-img").forEach((img) => {
            gsap.set(img, { opacity: 0, x: -50, clipPath: "inset(0 100% 0 0)" });

            ScrollTrigger.create({
                trigger: img,
                start: "top 95%",
                end: "bottom 5%",
                toggleActions: "play none none reverse",
                markers: false,
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


    // scroll item Moving anim
    if (document.querySelectorAll(".panels-container").length > 0 && window.innerWidth > 992) {
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
                start: "-53% top",
                end: "+=" + (totalPanelsWidth - window.innerWidth + 500),
                anticipatePin: 3,
                markers: false,
                toggleActions: "play none none reverse",
            }
        });
    }


    
    // Moving project		
    if ($('.project-section-2__inner').length > 0 && window.innerWidth > 1200) {
        gsap.utils.toArray('.project-section-2__inner').forEach((section, index) => {
            const w = section.querySelector('.project-section-2__wrapper');
            const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
            gsap.fromTo(w, {
                x
            }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: ".project-section-2",
                    scrub: 2,
                    start: "bottom 115%",
                    pin: true,
                    // markers: true,
                }
            });
        });
    }



    // hover reveal start
    if (document.querySelectorAll(".rr-hover-reveal-item").length > 0) {
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
    }
    // hover reveal end



    // progress - ring
    if (document.querySelectorAll(".progress-ring__circle").length > 0) {
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


    // testimonial - slide
    if (document.querySelector(".testimonial-slide__active")) {
        var testimonial = new Swiper(".testimonial-slide__active", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 1000,
        });
    }

    // brand - slide
    if (document.querySelector(".brand-slide__active")) {
        document.addEventListener("DOMContentLoaded", function () {
            const swiper = new Swiper(".brand-slide__active", {
                slidesPerView: 'auto',
                spaceBetween: 30,
                centeredSlides: true,
                speed: 3000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    // title - slide
    if (document.querySelector(".title-slide__active")) {
        document.addEventListener("DOMContentLoaded", function () {
            const swiper = new Swiper(".title-slide__active", {
                slidesPerView: 'auto',
                spaceBetween: 40,
                centeredSlides: true,
                speed: 25000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    //title - slider - 3
    if (document.querySelector(".title-slider-3__active")) {
        document.addEventListener("DOMContentLoaded", function () {
            const swiper = new Swiper(".title-slider-3__active", {
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: true,
                speed: 25000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    //title-slider-3_2
    if ('.title-slider-3__active-2') {
        var text_slider = new Swiper(".title-slider-3__active-2", {
            slidesPerView: 'auto',
            loop: true,
            autoplay: true,
            spaceBetween: 20,
            speed: 20000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
            },
        });
    }

    // project - section - 2
    if (document.querySelector(".project-section-2__active")) {
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
    }

    // feedback - section
    if (document.querySelector(".feedback-section__active")) {
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
    }



    // Update 


    // service-section-4 hover reveal start
    if (document.querySelectorAll(".service-section-4__active").length > 0) {
        const hoveritem = document.querySelectorAll(
            ".service-section-4__active"
        );

        function moveImage(e, hoveritem, index) {
            const item = hoveritem.getBoundingClientRect();
            const x = e.clientX - item.x;
            const y = e.clientY - item.y;
            if (hoveritem.children[index]) {
                hoveritem.children[
                    index
                ].style.transform = `translate(${x}px, ${y}px)`;
            }
        }
        hoveritem.forEach((item, i) => {
            item.addEventListener("mousemove", (e) => {
                setInterval(moveImage(e, item, 1), 50);
            });
        });
    }
    // hover reveal 4 end


    // project-4 img 
    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".project-section-4__thumb img").forEach((img) => {
            gsap.fromTo(img,
                { scale: 1.2 },
                {
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    }
                });
        });
    });


    // start testimonial home 4
    var swiper = new Swiper(".testimonials-section-4__slider__active", {
        loop: true,
        speed: 400,
        autoplay: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".testimonials-section-4__pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}" data-index="${index}">${index + 1}</span>`;
            },
        },
        on: {
            init: function () {
                let activeBullet = document.querySelector(".testimonials-section-4__pagination .swiper-pagination-bullet-active");
                if (activeBullet) {
                    let activeIndex = parseInt(activeBullet.getAttribute("data-index")) + 1;
                    activeBullet.innerText = `${activeIndex}/`;
                }
            },
            slideChange: function () {
                document.querySelectorAll(".testimonials-section-4__pagination span").forEach((el, idx) => {
                    el.innerText = idx + 1;
                });

                document.querySelectorAll(".testimonials-section-4__pagination span").forEach((el) => {
                    if (el.classList.contains("swiper-pagination-bullet-active")) {
                        el.innerText = `${parseInt(el.getAttribute("data-index")) + 1}/`;
                    }
                });
            },
        },
    });

    // brand 4 slider 
    var swiper = new Swiper(".brand-4__slide__active", {
        slidesPerView: "auto",
        spaceBetween: 30,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 3900,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    //   footer text slide 4
    var swiper = new Swiper(".footer-4__slide__active", {
        slidesPerView: "auto",
        spaceBetween: 30,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 15000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });


    // team - section - 5
    if (document.querySelector(".team-section-5__active")) {
        var swiperfeedback = new Swiper(".team-section-5__active", {
            slidesPerView: 5,
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
                576: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
                1200: {
                    slidesPerView: 5,
                },
                1700: {
                    slidesPerView: 5,
                },
            },
        });
    }

    // project - section - 5
    if ($('.project-section-5').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            return gsap.to('.project-section-5-panel-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.project-section-5',
                    scrub: 1,
                    start: 'top -5%',
                    end: "bottom 65%",
                    pin: '.project-section-5-panel-pin',
                    markers: false,
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }
    

    // testimonial - section - 5
    if (window.innerWidth > 767) {
        let testiPanels = document.querySelectorAll('.testimonial-section-5__panel');

        testiPanels.forEach((section) => {
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    pin: section,
                    scrub: 1,
                    start: 'top 10%',
                    end: 'bottom 75%',
                    endTrigger: '.testimonial-section-5__panel-area',
                    pinSpacing: false,
                    markers: false
                },
            });
        });
    } else {
        console.log("Scroll animation is disabled for mobile devices.");
    }


    // testimonial - section - 5
    if ($('.testimonial-section-5').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            return gsap.to('.testimonial-section-5-panel-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.testimonial-section-5',
                    scrub: 1,
                    start: 'top 10%',
                    end: "bottom 120.5%",
                    pin: '.testimonial-section-5-panel-pin',
                    markers: false,
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }

    // service - section - 5
    if (document.querySelectorAll(".service-section-5-anim-text").length > 0 && window.innerWidth > 768) {
        gsap.set('.service-section-5-anim-text', { x: '5%' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.service-section-5-text-animation',
                start: '-850 0%',
                end: 'bottom 0%',
                scrub: true,
                invalidateOnRefresh: true,
                markers: false,
                toggleActions: 'play reverse play reverse',
            }
        }).to('.service-section-5-anim-text', { x: '-12%' });
    }

    // title - slider - 5
    if (document.querySelector(".title-slider-5__active")) {
        document.addEventListener("DOMContentLoaded", function () {
            const swiper = new Swiper(".title-slider-5__active", {
                slidesPerView: 'auto',
                spaceBetween: 30,
                centeredSlides: true,
                speed: 25000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    // brand - section - 5
    if (document.querySelector(".brand-section-5__active")) {
        document.addEventListener("DOMContentLoaded", function () {
            const swiper = new Swiper(".brand-section-5__active", {
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: true,
                speed: 2000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    // service - section - 5
    if (document.querySelector(".service-section-5__active")) {
        var swiperservices = new Swiper(".service-section-5__active", {
            slidesPerView: 3.5,
            spaceBetween: 50,
            loop: true,
            centeredSlides: true,
            autoplay: true,
            centerMode: true,
            speed: 400,
            pagination: {
                el: ".service-section-5__pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                767: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 1.8,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 2.2,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 2.5,
                },
                1700: {
                    slidesPerView: 3.5,
                },
            },
        });
    }



        // Update --- 2


    // Text Invert With Scroll 
    const split = new SplitText(".text-invert", {
        type: "lines"
    });
    split.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 15%',
                end: "bottom bottom",
                markers: false,
            }
        });
    });


    // side-toggle animaton
    document.addEventListener("DOMContentLoaded", () => {
        const dotGrid = document.querySelector(".sidebar__toggle");

        if (dotGrid) {
            const dotSize = 4;
            const gapX = 5;
            const gapY = 5;
            const centerOffset = 26;

            const baseOffset = dotSize + gapX;
            const baseOffsetY = dotSize + gapY;

            const positions = [{
                x: 0,
                y: 0
            },
            {
                x: baseOffset,
                y: 0
            },
            {
                x: baseOffset * 2,
                y: 0
            },
            {
                x: 0,
                y: baseOffsetY
            },
            {
                x: baseOffset,
                y: baseOffsetY
            },
            {
                x: baseOffset,
                y: baseOffsetY * 2
            },
            {
                x: baseOffset * 2,
                y: baseOffsetY * 2
            },
            ];

            const originalPositions = [...positions];
            const dots = [];

            function setDotPosition(dot, pos) {
                dot.style.left = `${centerOffset + pos.x - baseOffset}px`;
                dot.style.top = `${centerOffset + pos.y - baseOffsetY}px`;
            }

            positions.forEach(pos => {
                const dot = document.createElement("div");
                dot.classList.add("dot");
                setDotPosition(dot, pos);
                dotGrid.appendChild(dot);
                dots.push(dot);
            });

            function applyShuffledPositions() {
                const shuffled = [...positions].sort(() => Math.random() - 0.5);
                dots.forEach((dot, i) => setDotPosition(dot, shuffled[i]));
            }

            function resetPositions() {
                dots.forEach((dot, i) => setDotPosition(dot, originalPositions[i]));
            }

            dotGrid.addEventListener("mouseenter", applyShuffledPositions);
            dotGrid.addEventListener("mouseleave", resetPositions);
        }
    });





    







})(jQuery);