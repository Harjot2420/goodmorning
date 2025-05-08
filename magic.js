document.addEventListener('DOMContentLoaded', () => {
    const seal = document.getElementById('seal');
    const scroll = document.getElementById('scroll');
    const kissStorm = document.querySelector('.kiss-storm');
    const floatingHearts = document.querySelector('.floating-hearts');
    const harp = document.getElementById('harp');
    
    // Break the royal seal to reveal the message
    seal.addEventListener('click', () => {
        seal.style.animation = 'none';
        seal.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => {
            seal.style.display = 'none';
            scroll.classList.add('show');
            harp.play();
            startHeartAnimation();
        }, 500);
    });
    
    // Create a kiss storm when clicking anywhere
    document.addEventListener('click', (e) => {
        if (e.target !== seal) {
            createKiss(e.clientX, e.clientY);
        }
    });
    
    // Create individual kisses
    function createKiss(x, y) {
        const kiss = document.createElement('div');
        kiss.className = 'kiss';
        kiss.innerHTML = '😗';
        kiss.style.left = `${x}px`;
        kiss.style.top = `${y}px`;
        kiss.style.animationDuration = `${Math.random() * 3 + 2}s`;
        kissStorm.appendChild(kiss);
        
        // Remove after animation completes
        setTimeout(() => {
            kiss.remove();
        }, 5000);
    }
    
    // Create floating hearts background
    function startHeartAnimation() {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
            floatingHearts.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 15000);
        }, 300);
    }
    
    // Create initial floating hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💖';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
            floatingHearts.appendChild(heart);
        }, i * 150);
    }
});