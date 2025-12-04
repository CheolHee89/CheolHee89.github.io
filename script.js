// Smooth scroll navigation
document.addEventListener('DOMContentLoaded', function() {
    // Navigation links smooth scroll
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting on scroll
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-menu a');
    
    function highlightNavOnScroll() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navHeight = document.querySelector('.navbar').offsetHeight;
            
            if (window.pageYOffset >= (sectionTop - navHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    highlightNavOnScroll(); // Initial call

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // PDF download button click tracking (optional - for analytics)
    const downloadButtons = document.querySelectorAll('.btn-download');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const pdfPath = this.getAttribute('href');
            console.log('PDF 다운로드:', pdfPath);
            
            // If PDF doesn't exist, show alert
            // This is a simple check - in production, you might want to verify file existence via API
            fetch(pdfPath, { method: 'HEAD' })
                .then(response => {
                    if (!response.ok) {
                        e.preventDefault();
                        alert('PDF 파일을 찾을 수 없습니다. 파일이 projects 폴더에 있는지 확인해주세요.');
                    }
                })
                .catch(() => {
                    // If fetch fails, allow default download behavior
                    console.log('PDF 파일 확인 중 오류 발생');
                });
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for fade-in effect
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Mobile menu toggle (if needed in future)
    // This is prepared for future mobile menu implementation
    function handleMobileMenu() {
        // Add mobile menu functionality here if needed
        const navMenu = document.querySelector('.nav-menu');
        if (window.innerWidth <= 768) {
            // Mobile menu logic can be added here
        }
    }
    
    window.addEventListener('resize', handleMobileMenu);
    handleMobileMenu();
});

