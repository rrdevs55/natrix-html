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
    
        $(document.body).on('updated_cart_totals', function() {
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

        $('.odometer').waypoint(function(direction) {
            if (direction === 'down') {
                let countNumber = $(this.element).attr("data-count");
                $(this.element).html(countNumber);
            }
        }, {
            offset: '80%'
        });
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


    $(".preloader-close").on("click", function () {
        $('#preloader').delay(0).fadeOut(500);

        $('.odometer').waypoint(function(direction) {
            if (direction === 'down') {
                let countNumber = $(this.element).attr("data-count");
                $(this.element).html(countNumber);
            }
        }, {
            offset: '80%'
        });
    })

    //GSAP START

    // Check if any elements with the class ".end" exist
        if (document.querySelector('.end')) {
            // 31. Folks animation
            let endTl = gsap.timeline({
                repeat: -1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: '.end',
                    start: 'bottom 100%-=50px'
                }
            });

            gsap.set('.end', {
                opacity: 0
            });

            gsap.to('.end', {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.end',
                    start: 'bottom 100%-=50px',
                    once: true
                }
            });

            let mySplitText = new SplitText(".end", {
                type: "words,chars"
            });
            let chars = mySplitText.chars;
            let endGradient = chroma.scale(['#F9D371', '#F47340', '#EF2F88', '#8843F2']);
            
            endTl.to(chars, {
                duration: 0.5,
                scaleY: 0.6,
                ease: "power3.out",
                stagger: 0.04,
                transformOrigin: 'center bottom'
            });
            endTl.to(chars, {
                yPercent: -20,
                ease: "elastic",
                stagger: 0.03,
                duration: 0.8
            }, 0.5);
            endTl.to(chars, {
                scaleY: 1,
                ease: "elastic.out(2.5, 0.2)",
                stagger: 0.03,
                duration: 1.5
            }, 0.5);
            endTl.to(chars, {
                color: (i, el, arr) => {
                    return endGradient(i / arr.length).hex();
                },
                ease: "power2.out",
                stagger: 0.03,
                duration: 0.3
            }, 0.5);
            endTl.to(chars, {
                yPercent: 0,
                ease: "back",
                stagger: 0.03,
                duration: 0.8
            }, 0.7);
            endTl.to(chars, {
                color: '#FFDA59',
                duration: 1.4,
                stagger: 0.05
            });
        }

    /////////////////////////////////////////////////////

    //return img gsap
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".return");

    revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
        scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset"
        }
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
    });
    });

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

    //GSAP title animation
    if ($('.rr_title_anim').length > 0) {
        let splitTitleLines = gsap.utils.toArray(".rr_title_anim");
        splitTitleLines.forEach(splitTextLine => {
           const tl = gsap.timeline({
              scrollTrigger: {
                 trigger: splitTextLine,
                 start: 'top 90%',
                 end: 'bottom 60%',
                 scrub: false,
                 markers: false,
                 toggleActions: 'play none none reverse'
              }
           });
    
           const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
           gsap.set(splitTextLine, { perspective: 400 });
           itemSplitted.split({ type: "lines" })
           tl.from(itemSplitted.lines, {
              duration: 1,
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
     let heroes = document.querySelectorAll(".hero");
     
     heroes.forEach(hero => {
       let split = new SplitText(hero.querySelector("._split_text"), { type: "chars, words" }),
           tl = gsap.timeline({
           scrollTrigger: {
             trigger: hero,
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
       tl.to(hero.querySelector(".sup_hero"), { opacity: 1, x: -50, ease: "back" })
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

    //fade-top gsap animation
    if ($(".fade-wrapper").length > 0) {
        $(".fade-wrapper").each(function () {
            var section = $(this);
            var fadeItems = section.find(".fade-top");
    
            fadeItems.each(function (index, element) {
            var delay = index * 0.15;
    
            gsap.set(element, {
                opacity: 0,
                y: 100,
            });
    
            ScrollTrigger.create({
                trigger: element,
                start: "top 100%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
                scrub: 0.5,
                onEnter: function () {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: delay,
                });
                },
                once: true,
            });
            });
        });
    }

    //GSAP END
    
    /*======================================
   Data Css js
   ========================================*/
    $("[data-background]").each(function() {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function() {
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
  $(window).scroll(function(){
    if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
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

  /*======================================
	Button scroll up js
	========================================*/
    
    /*======================================
	One Page Scroll Js
	========================================*/
    /*** Scroll Nav */
    var link = $('.mean-nav ul li a');

    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 76
        }, 600);
        $(this).parent().addClass('active');
        e.preventDefault();
    });

    $(window).on('scroll', function(){
        scrNav();
    });

    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function() {
            var id = $(this).attr('id'),
                offset = $(this).offset().top-1,
                height = $(this).height();
            if(sTop >= offset && sTop < offset + height) {
                link.parent().removeClass('active');
                $('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }
    scrNav();

    /*======================================
	Smoth animatio Js
	========================================*/
    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 300);
    });

  /*======================================
    All Swiper Slide
  ========================================*/

    // Faizen testimonial__carousel
    var swiperProject = new Swiper(".testimonial-4__slider", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        slidesPerGroupSkip: 3,
        centeredSlides: true,
        autoplay: true,
        centerMode: true,
        speed: 400,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        navigation: {
            prevEl: ".testimonial-4__slider-arrow-prev",
            nextEl: ".testimonial-4__slider-arrow-next",
        },
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
        $('.count-wrap .minus').click(function() {
            var input = $(this).closest('.count-wrap').find('input.qty');
            var currentValue = parseInt(input.val());
            if (currentValue > 1) {
                input.val(currentValue - 1).change();
            }
        });

        $('.count-wrap .plus').click(function() {
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

      // Project Style3
    if ($(".slider_hover__item li").length) {
        $(".slider_hover__item li").each(function () {
            let self = $(this);

            self.on("mouseenter", function () {
                console.log($(this));
                $(".slider_hover__item li").removeClass("active");
                $(this).addClass("active");
            });
        });
    }

      $('.col-custom').on("click", function () {
		$('#features-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
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
    $( "#datepicker" ).datepicker({
        dateFormat: "mm/dd/yy" 
    });

    $('#getting-started').countdown('2025/01/01', function(event) {
        $(this).html(event.strftime(' <div><span>%D</span></div>  <div><span>%H</span></div> <div><span>%M</span></div> <div><span>%S</span></div>'));
      });


      /*** lastNobullet */
    function lastNobullet() {
        var lastElement = false;
        $(".footer__copyright-menu ul li, .last_item_not_horizental_bar .col-lg-4").each(function() {
            if (lastElement && lastElement.offset().top != $(this).offset().top) {
                $(lastElement).addClass("no_bullet");
            } else {
                $(lastElement).removeClass("no_bullet");
            }
            lastElement = $(this);
        }).last().addClass("no_bullet");
    };
    lastNobullet();

    $(window).resize(function(){
        lastNobullet();
    });

    $('#contact__form').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        $('.loading-form').show();

        setTimeout(function() { 
            $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize()
            }).done(function(data) {
                $('.loading-form').hide();
                $('.contact__form').append('<p class="success-message mt-3 mb-0">Your message has been sent successfully.</p>');
            }).fail(function(data) {
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
            if ( scrollTopPos > 100 ) {
                scrollElementWrap.addClass("active");
            } else {
                scrollElementWrap.removeClass("active");
            }

            if( scrollValue < 96 ) {
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

    // slider js -----------
    $(document).ready(function () {
        function sliderAnimations(elements) {
            var animationEndEvents = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data("delay");
                var $animationDuration = $this.data("duration");
                var $animationType = "pixfix-animation " + $this.data("animation");
                $this.css({
                    "animation-delay": $animationDelay,
                    "-webkit-animation-delay": $animationDelay,
                    "animation-duration": $animationDuration,
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        var sliderOptions = {
            speed: 1500,
            autoplay: {
                delay: 7000,
            },
            disableOnInteraction: false,
            initialSlide: 0,
            parallax: false,
            mousewheel: false,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: ".slider-arrow .slider-next",
                prevEl: ".slider-arrow .slider-prev",
            }
        };
        sliderOptions.on = {
            slideChangeTransitionStart: function () {
                var swiper = this;
                var animatingElements = $(swiper.slides[swiper.activeIndex]).find("[data-animation]");
                sliderAnimations(animatingElements);
            },

            resize: function () {
                this.update();
            },
        };

        var swiper = new Swiper(".banner-4__active", sliderOptions);
    });
    
    // Progress Item 7
    document.addEventListener("DOMContentLoaded", () => {
        const progressItems = document.querySelectorAll(".progress-7__item");
        const progressBox = document.querySelector(".progress-7__box");

        if(progressItems && progressBox){
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

    // Register GSAP plugins
    var device_width = window.screen.width;

    // Pin Active
    var pin_fixed = document.querySelector('.pin-element');
    if (pin_fixed && device_width > 1199) {

        gsap.to(".pin-element", {
            scrollTrigger: {
                trigger: ".pin-area",
                pin: ".pin-element",
                start: "top top",
                end: "bottom 60%",
                pinSpacing: false,
            }
        });
    }

    var pin_fixed = document.querySelector('.pin-element_2');
    if (pin_fixed && device_width > 1199) {

        gsap.to(".pin-element_2", {
            scrollTrigger: {
                trigger: ".pin-area-2",
                pin: ".pin-element_2",
                start: "top top",
                end: "bottom botttom",
                pinSpacing: false,
            }
        });
    }
    var lates_update__item = document.querySelectorAll(".lates-update__item");
    var counter = 0

    if (device_width > 1199) {
        lates_update__item.forEach((gallery) => {
            gsap.to(gallery, {
                scrollTrigger: {
                    trigger: gallery,
                    pin: gallery,
                    pinSpacing: false,
                    start: "top 80px",
                    delay: 1,
                },
            });
        });
    }

    ///// Fiazen js 
    var logoslide = new Swiper(".logo-slide__active", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        centeredSlides: false,
        autoplay: true,
        centerMode: true,
        speed: 600,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            575: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    });

    // Faizen-testimonial-2__slider
    var swiperProject = new Swiper(".testmonial2-slide-active", {
        slidesPerView: 2.5,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: true,
        centerMode: true,
        speed: 400,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            993: {
                sliderPerView: 1,
            },
            1200: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1800: {
                slidesPerView: 2.4,
                spaceBetween: 30,
            },
            1920: {
                slidesPerView: 2.4,
                spaceBetween: 30,
            },

        },
    });


    //Faizar title H1 hero title animation/////////////////////////////////////
    if ($('.rr-title-animation').length > 0) {
        // 25. Title Animation
        let char_come = gsap.utils.toArray(".rr-title-animation");
    
        gsap.matchMedia().add("(min-width: 768px)", () => {
            char_come.forEach(splitTextLine => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: splitTextLine,
                        start: 'top 90%',
                        end: 'bottom 60%',
                        scrub: false,
                        markers: false,
                        toggleActions: 'play none none none'
                    }
                });
    
                const itemSplitted = new SplitText(splitTextLine, {
                    type: "chars, words"
                });
    
                gsap.set(splitTextLine, { perspective: 300 });
    
                itemSplitted.split({ type: "chars, words" });
    
                tl.from(itemSplitted.chars, {
                    duration: 1,
                    delay: 0.5,
                    x: 100,
                    autoAlpha: 0,
                    stagger: 0.05
                });
            });
        });
    }

    // faizen isotope js blog10
    var $grid = $('.grid').isotope({
        // options
        } );
        // filter items on button click
        $('.blog10__filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue })
        });

        $('.blog10__filter button').on( 'click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
        });

    // Faizen home 1 video GSAP scroll animation start///////////////////////
    let imageTl_8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".portfolio__big",
            endTrigger:".service1__area",
            start: "top top+=85",
            pin: true,
            markers: false,
            scrub: 1,
            pinSpacing: true,
            end: "top bottom-=200",
        }
    });
    imageTl_8.to(".portfolio__big-inner", {
        width: "100%",
        borderRadius: "0px",
    });
    // Faizen home 1 video GSAP scroll animation end////////////////////////

    document.querySelectorAll(".img_anim_reveal").forEach(e => {
        let t = e.querySelector("img"),
            o = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "top 70%"
                }
            });
        o.set(e, {
            autoAlpha: 1
        }), o.from(e, 1.5, {
            xPercent: -200,
            ease: Power2.out
        }), o.from(t, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        })
    });
    document.querySelectorAll(".img_anim_reveal-2").forEach(e => {
        let t = e.querySelector("img"),
            o = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "top 70%"
                }
            });
        o.set(e, {
            autoAlpha: 1
        }), o.from(e, 1.5, {
            xPercent: 220,
            ease: Power2.out
        }), o.from(t, 1.5, {
            xPercent: 100,
            scale: 1.2,
            delay: -1.5,
            ease: Power2.out
        })
    });

    /* portfolio animation start */
    gsap.set('.tp-portfolio-bg-text', {
        x: '25%'
    });

    gsap.timeline({
            scrollTrigger: {
                trigger: '.tp-portfolio-bg-text-animation',
                start: '-500 0%',
                end: 'bottom -10%',
                scrub: true,
                invalidateOnRefresh: true
            }
        })
        .to('.tp-portfolio-bg-text', {
            x: '-45%'
        });


    // button hover animation
    $('.tp-hover-btn').on('mouseenter', function(e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.tp-btn-circle-dot').css({
            top: y,
            left: x
        });
    });

    $('.tp-hover-btn').on('mouseout', function(e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.tp-btn-circle-dot').css({
            top: y,
            left: x
        });
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

    //////// counter h2 start /////////

    
    // project panel start
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 768) { 
        let projectPanels = document.querySelectorAll('.project-panel');

        projectPanels.forEach((section) => {
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,           
                    pin: section,              
                    scrub: 1,                  
                    start: 'top 10%',           
                    end: 'bottom 67%',          
                    endTrigger: '.project-panel-area', 
                    pinSpacing: false,          
                    markers: false              
                },
            });
        });
    } else {
        console.log("Scroll animation is disabled for mobile devices.");
    }
    // project panel end

    // Team Hover Js
    function Team_animation() {
        var active_bg = $(".team-section-2__wrapper .active-bg");
        var element = $(".team-section-2__wrapper .current");
        $(".team-section-2__wrapper .team-section-2__item").on("mouseenter", function () {
            var e = $(this);
            activeTeam(active_bg, e);
        });
        $(".team-section-2__wrapper").on("mouseleave", function () {
            element = $(".team-section-2__wrapper .current");
            activeTeam(active_bg, element);
            element.closest(".team-section-2__item").siblings().removeClass("mleave");
        });
        activeTeam(active_bg, element);
    }
    Team_animation();

    function activeTeam(active_bg, e) {
        if (!e.length) {
            return false;
        }
        var topOff = e.offset().top;
        var height = e.outerHeight();
        var menuTop = $(".team-section-2__wrapper").offset().top;
        e.closest(".team-section-2__item").removeClass("mleave");
        e.closest(".team-section-2__item").siblings().addClass("mleave");
        active_bg.css({
            top: topOff - menuTop + "px",
            height: height + "px"
        });
    }

    $(".team-section-2__wrapper .team-section-2__item").on("click", function () {
        $(".team-section-2__wrapper .team-section-2__item").removeClass("current");
        $(this).addClass("current");
    });
    // End Team Hover Js
    

    //////// counter h2 start /////////

    document.querySelectorAll(".img_anim_reveal-3").forEach(e => {
        let t = e.querySelector("img"),
            o = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "top 70%",
                }
            });
        o.set(e, {
            autoAlpha: 1
        }), o.from(e, 1.5, {
            xPercent: -100,
            ease: Power2.out
        }), o.from(t, 1.5, {
            xPercent: 100,
            scale: 1.5,
            delay: -2.9,
            ease: Power2.out
        })
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

    /////////////////////////////// Hero animation ////////////////////////////////////

    /////////////////////////////// Hero arrow animation ////////////////////////////////////

        // // GSAP এবং ScrollTrigger সক্রিয় করতে
        // gsap.registerPlugin(ScrollTrigger);

        // // ইমেজ এলিমেন্ট সিলেক্ট করা
        // const arrowImage = document.querySelector('.arrow img');

        // // GSAP অ্যানিমেশন
        // gsap.to(arrowImage, {
        // scrollTrigger: {
        //     trigger: '.brand', // .brand টেক্সট এলিমেন্টকে টার্গেট করা
        //     start: 'top 60%',  // কখন অ্যানিমেশন শুরু হবে
        //     end: 'top 20%',    // কখন অ্যানিমেশন শেষ হবে
        //     scrub: true,       // স্ক্রলের সঙ্গে সঙ্গে অ্যানিমেশন চলবে
        // },
        // y: '50px',
        // scale: 2,          // ইমেজ আকারে ২০% বড় হবে
        // ease: 'power1.out',  // মসৃণ অ্যানিমেশন
        // });

    /////////////////////////////// Hero arrow animation ////////////////////////////////////




    var hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");

    const hoverBtnItem = gsap.utils.toArray(".tp-hover-btn-item");
    hoverBtns.forEach((btn, i) => {
        $(btn).mousemove(function(e) {
            callParallax(e);
        });

        function callParallax(e) {
            parallaxIt(e, hoverBtnItem[i], 80);
        }

        function parallaxIt(e, target, movement) {
            var $this = $(btn);
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            gsap.to(target, 0.5, {
                x: ((relX - $this.width() / 2) / $this.width()) * movement,
                y: ((relY - $this.height() / 2) / $this.height()) * movement,
                ease: Power2.easeOut,
            });
        }
        $(btn).mouseleave(function(e) {
            gsap.to(hoverBtnItem[i], 0.5, {
                x: 0,
                y: 0,
                ease: Power2.easeOut,
            });
        });
    });

    //tp-btn-trigger-2
    if ($('.tp-btn-trigger-2').length > 0) {

        gsap.set(".tp-btn-bounce-2", {
            y: -100,
            opacity: 0
        });
        var mybtn = gsap.utils.toArray(".tp-btn-bounce-2");
        mybtn.forEach((btn) => {
            var $this = $(btn);
            gsap.to(btn, {
                scrollTrigger: {
                    trigger: $this.closest('.tp-btn-trigger-2'),
                    start: "top bottom",
                    markers: false
                },
                duration: 1,
                ease: "bounce.out",
                y: 0,
                opacity: 1,
            })
        });
    }

    // button hover animation
    $('.tp-hover-btn').on('mouseenter', function(e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.tp-btn-circle-dot').css({
            top: y,
            left: x
        });
    });

    $('.tp-hover-btn').on('mouseout', function(e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.tp-btn-circle-dot').css({
            top: y,
            left: x
        });
    });

    // Scroll-triggered border and background color change
    gsap.timeline({
        scrollTrigger: {
            trigger: '.tp-portfolio-top-text-border',
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }
    })
    // .to('.tp-portfolio-top-text-border', {
    //     borderColor: '#ff0000',
    //     duration: 0.5
    // })
    // .to('.tp-portfolio-top-text-border-icon', {
    //     backgroundColor: '#151515',
    //     duration: 0.5
    // }, '<');

    if ($('.project-section__area').length > 0 && window.innerWidth > 768) { 
        let projectText = gsap.timeline({
            scrollTrigger: {
                trigger: ".project-section__area",
                start: "top center-=200",
                end: "bottom 165%",
                pin: ".section__title-wrapper-2-title",
                markers: false,
                pinSpacing: false,
                scrub: 1,
            },
        });

        projectText.set(".section__title-wrapper-2-title", {
            scale: 0.6,
        });
        projectText.to(".section__title-wrapper-2-title", {
            scale: 1,
            duration: 2,
        });
        projectText.to(".section__title-wrapper-2-title", {
            scale: 1,
            duration: 2,
        }, "+=2");
    }

    /// title slider
    // swiper = new titleslider(".title-slide__active", {
    //     slidesPerView: 'auto',
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     speed: 20000,
    //     loop: true,
    //     freeMode: true,
    //     autoplay: {
    //         delay: 0.9,
    //         reverseDirection: false,
    //         disableOnInteraction: false,
    //     }
    // });
    document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper(".title-slide__active", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
            speed: 20000,
            loop: true,
            freeMode: true,
            autoplay: {
                delay: 1,
                reverseDirection: false,
                disableOnInteraction: false,
            }
        });
    });


    document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper(".heading-slide__active", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
            speed: 8000,
            loop: true,
            freeMode: true,
            autoplay: {
                delay: 1,
                reverseDirection: false,
                disableOnInteraction: false
            }
        });
    });


    // swiper = new Swiper(".heading-slide__active", {
    //     slidesPerView: 'auto',
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     speed: 8000,
    //     loop: true,
    //     freeMode: true,
    //     autoplay: {
    //         delay: 0.9,
    //         reverseDirection: false,
    //         disableOnInteraction: false
    //     }
    // });
    // swiper = new Swiper(".logo-slide__active", {
    //     slidesPerView: 'auto',
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     speed: 8e3,
    //     loop: !0,
    //     freemode: true,
    //     autoplay: {
    //         delay: 0.9,
    //         reverseDirection: true,
    //         disableOnInteraction: !1
    //     }
    // }) 




  


    // Natrix js ----------------------------------


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
            gsap.to('.work-process-panel-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.work-process__section',
                    scrub: 1,
                    start: 'top -30%',
                    end: "bottom 108%",
                    pin: '.work-process-panel-pin',
                    markers: false,
                }
            })
        })
    }

    gsap.set('.title-slide-section-text', {
        x: '20%'
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.title-slide-section-text-animation',
            start: '-650 0%',
            end: 'bottom 0%',
            scrub: true,
            invalidateOnRefresh: true,
            markers: false
        }
    }).to('.title-slide-section-text', {
            x: '0%'
        });


    if (document.querySelectorAll(".funfact-area-2").length > 0) {
        gsap.to(".funfact-area-2 .thumb img", {
            scale: "1",
            scrollTrigger: {
                trigger: ".funfact-area-2 .thumb",
                start: "top top",
                end: "100% top",
                pin: true,
                scrub: 2,
                markers: false
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
                }, 300);
            });
        });
    });

    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.portfolio-list-scroll-text-animation',
    //         start: '-500 0%',
    //         end: 'bottom -10%',
    //         scrub: true,
    //         invalidateOnRefresh: true
    //     }
    // })
    //     .to('.portfolio-list-scroll-text', {
    //         x: '-80%'
    //     });

    // gsap.set('.title-slide-section-text', {
    //     x: window.innerWidth / 4
    // });

    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.title-slide-section-text-animation',
    //         start: '0% 0%',
    //         end: 'bottom -10%',
    //         scrub: true,
    //         invalidateOnRefresh: true
    //     }
    // })
    //     .to('.title-slide-section-text', {
    //         x: () => -window.innerWidth / 10
    //     });



    // const panelsSections = gsap.utils.toArray(".panels");
    // for (var i = 0; i < panelsSections.length; i++) {

    //     var thePanelsSection = panelsSections[i];
    //     const panels = gsap.utils.toArray(".panels-container .panel", thePanelsSection);
    //     const panelsContainer = thePanelsSection.querySelector(".panels-container");

    //     gsap.set(panelsContainer, {
    //         height: window.innerHeight
    //     });
    //     gsap.set(panels, {
    //         height: window.innerHeight
    //     });

    //     var totalPanelsWidth = 0;
    //     panels.forEach(function (panel) {
    //         totalPanelsWidth += $(panel).width();
    //     });

    //     gsap.set(panelsContainer, {
    //         width: totalPanelsWidth
    //     });
    //     gsap.to(panels, {
    //         x: -totalPanelsWidth + innerWidth,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: panelsContainer,
    //             pin: true,
    //             pinSpacing: true,
    //             start: "-10%  top",
    //             end: "-80% bottom",
    //             scrub: 1,
    //             end: (st) => "+=" + (st.vars.trigger.offsetWidth - innerWidth),
    //         }
    //     });

    // }



    // gsap.registerPlugin(ScrollTrigger);

    // const panelsContainer = document.querySelector(".panels-container");
    // const panels = gsap.utils.toArray(".panel");

    // let totalPanelsWidth = 0;
    // // panels.forEach(panel => {
    // //     totalPanelsWidth += panel.offsetWidth + 20; 
    // // });
    // panels.forEach(panel => {
    //     totalPanelsWidth += panel.offsetWidth; 
    // });

    // gsap.set(panelsContainer, { width: totalPanelsWidth });

    // gsap.to(panelsContainer, {
    //     x: -totalPanelsWidth + innerWidth,
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".panels",
    //         pin: true,
    //         scrub: 1,
    //         start: "-20% top",
    //         end: "+=" + totalPanelsWidth,
    //         anticipatePin: 3
    //     }
    // });


    gsap.registerPlugin(ScrollTrigger);

    const panelsContainer = document.querySelector(".panels-container");
    const panels = gsap.utils.toArray(".panel");

    let totalPanelsWidth = panels.reduce((acc, panel) => acc + panel.offsetWidth, 0);

    gsap.set(panelsContainer, { width: totalPanelsWidth });

    // ✅ GSAP Horizontal Scroll Animation (Bug Fixed)
    gsap.to(panelsContainer, {
        x: -(totalPanelsWidth - window.innerWidth), 
        ease: "none",
        scrollTrigger: {
            trigger: ".panels",
            pin: true,
            scrub: 3,
            start: "-20% top",
            end: "+=" + (totalPanelsWidth - window.innerWidth), 
            anticipatePin: 3,
            markers: true
        }
    });



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


    var testimonial = new Swiper(".testimonial-slide__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
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
            }
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
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                sliderPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });



    

   

    // const videoBox = document.getElementById("videoBox");
    // const closeBtn = document.getElementById("closeBtn");

    // // ভিডিও ওপেন করা
    // videoBox.addEventListener("click", function () {
    //     videoBox.classList.add("full-screen");
    //     closeBtn.style.display = "flex";
    // });

    // // মাউস মুভ করলে ক্লোজ বাটন অনুসরণ করবে
    // document.addEventListener("mousemove", function (e) {
    //     closeBtn.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    // });

    // // ক্লোজ বাটনে ক্লিক করলে ভিডিও ছোট হয়ে যাবে
    // closeBtn.addEventListener("click", function () {
    //     videoBox.classList.remove("full-screen");
    //     closeBtn.style.display = "none";
    // });








})(jQuery);