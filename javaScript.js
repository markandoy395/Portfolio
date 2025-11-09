 // Infinite Typing Animation
        const typingText = document.querySelector('.typing-text');
        const text = typingText.textContent;
        typingText.textContent = '';
        
        let charIndex = 0;
        let isDeleting = false;
        
        function typeWriter() {
            if (!isDeleting && charIndex < text.length) {
                // Typing forward
                typingText.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            } else if (!isDeleting && charIndex === text.length) {
                // Pause at end before deleting
                isDeleting = true;
                setTimeout(typeWriter, 2000);
            } else if (isDeleting && charIndex > 0) {
                // Deleting backward
                typingText.textContent = text.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWriter, 50);
            } else if (isDeleting && charIndex === 0) {
                // Pause at start before typing again
                isDeleting = false;
                setTimeout(typeWriter, 500);
            }
        }
        
        setTimeout(typeWriter, 500);

        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
        });

        // Form Overlay
        const openFormBtn = document.getElementById('open-form-btn');
        const closeFormBtn = document.getElementById('close-form-btn');
        const formOverlay = document.getElementById('form-overlay');

        openFormBtn.addEventListener('click', () => {
            formOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeFormBtn.addEventListener('click', () => {
            formOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close overlay when clicking outside the form
        formOverlay.addEventListener('click', (e) => {
            if (e.target === formOverlay) {
                formOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Form submission
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent! (This is a demo)');
            formOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            e.target.reset();
        });
