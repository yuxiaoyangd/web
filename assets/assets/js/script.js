// script.js
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // 向下滚动
            navbar.style.top = '-80px'; // 隐藏导航栏
        } else {
            // 向上滚动
            navbar.style.top = '0'; // 显示导航栏
        }
        lastScrollTop = scrollTop;
    });

    // 动态显示客户评价
    const testimonialList = document.querySelector('.testimonial-list');
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialCount = testimonials.length;
    let currentIndex = 0;

    // 克隆所有的评价并添加到列表末尾
    testimonials.forEach(testimonial => {
        testimonialList.appendChild(testimonial.cloneNode(true));
    });

    function showNextTestimonial() {
        currentIndex++;
        if (currentIndex >= testimonialCount) {
            currentIndex = 0;
            testimonialList.style.transition = 'none';
            testimonialList.style.transform = 'translateX(0)';
            setTimeout(() => {
                testimonialList.style.transition = 'transform 0.5s linear';
                testimonialList.style.transform = `translateX(-${currentIndex * 100 / 3}%)`;
            }, 50);
        } else {
            testimonialList.style.transform = `translateX(-${currentIndex * 100 / 3}%)`;
        }
    }

    setInterval(showNextTestimonial, 3000); // 每3秒显示下一个评价
});

document.addEventListener("scroll", function() {
    let services = document.querySelectorAll(".service-card");
    services.forEach((card, index) => {
        if (card.getBoundingClientRect().top < window.innerHeight * 0.8) {
            card.style.animation = `fadeIn 1s ease-in-out ${index * 0.2}s forwards`;
        }
    });
});

// script.js
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', function() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

