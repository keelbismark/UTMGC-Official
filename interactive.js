document.addEventListener('DOMContentLoaded', () => {
    initCalculator();
    initCanvasBackground();
    initScrollAnimations();
    initMobileMenu();
});

// === 1. ВИЗУАЛЬНЫЙ КАЛЬКУЛЯТОР ===
function initCalculator() {
    const inputs = {
        meat: document.getElementById('input-meat'),
        fat: document.getElementById('input-fat'),
        time: document.getElementById('input-time'),
        salt: document.getElementById('input-salt')
    };

    const displays = {
        meat: document.getElementById('val-meat'),
        fat: document.getElementById('val-fat'),
        time: document.getElementById('val-time'),
        salt: document.getElementById('val-salt')
    };

    const resultOmega = document.getElementById('result-omega');
    const resultVerdict = document.getElementById('result-verdict');
    const gaugeCircle = document.getElementById('gauge-circle');
    
    const circumference = 552;

    function calculate() {
        const rhoMeat = parseFloat(inputs.meat.value);
        const rhoFat = parseFloat(inputs.fat.value);
        const tCooking = parseFloat(inputs.time.value);
        const kSalt = parseFloat(inputs.salt.value);

        displays.meat.textContent = `${rhoMeat}%`;
        displays.fat.textContent = `${rhoFat}%`;
        displays.time.textContent = `${tCooking} млрд`;
        displays.salt.textContent = kSalt;

        let rawOmega = (rhoMeat + rhoFat) / (tCooking * kSalt) * 10;
        let omega = parseFloat(rawOmega.toFixed(2));

        resultOmega.textContent = omega.toFixed(2);

        const maxScale = 30;
        const percent = Math.min(omega / maxScale, 1);
        const offset = circumference - (percent * circumference);
        gaugeCircle.style.strokeDashoffset = offset;

        let verdict = "";
        let colorClass = "";
        let gaugeColor = "";

        if (omega < 1) {
            verdict = "⚠️ Состояние: Гомеопатический бульон";
            colorClass = "text-blue-400";
            gaugeColor = "#60a5fa";
        } else if (omega >= 1 && omega < 5) {
            verdict = "✅ Идеальный Баланс. Жизнь возможна.";
            colorClass = "text-emerald-400";
            gaugeColor = "#34d399";
        } else if (omega >= 5 && omega < 20) {
            verdict = "🍲 Густой Навар. Гравитационный коллапс.";
            colorClass = "text-yellow-400";
            gaugeColor = "#fbbf24";
        } else {
            verdict = "🛑 ОПАСНОСТЬ: Состояние 'Холодец'.";
            colorClass = "text-red-500";
            gaugeColor = "#f87171";
        }

        resultVerdict.textContent = verdict;
        resultVerdict.className = `text-lg font-serif italic ${colorClass}`;
        gaugeCircle.style.stroke = gaugeColor;
    }

    Object.values(inputs).forEach(input => input.addEventListener('input', calculate));
    calculate();
}

// === 2. BACKGROUND CANVAS WITH MOUSE INTERACTION (Feature 1) ===
function initCanvasBackground() {
    const canvas = document.getElementById('soup-canvas');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let bubbles = [];
    
    // Отслеживание мыши
    let mouse = { x: -1000, y: -1000 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Bubble {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + 20;
            this.size = Math.random() * 4 + 1; 
            this.speed = Math.random() * 0.5 + 0.2;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.wobble = Math.random() * Math.PI * 2;
            this.wobbleSpeed = Math.random() * 0.02 + 0.01;
            
            // Инерция для отталкивания
            this.vx = 0;
            this.vy = 0;
        }

        update() {
            // Естественное всплытие
            this.y -= this.speed;
            this.wobble += this.wobbleSpeed;
            this.x += Math.sin(this.wobble) * 0.5;

            // === ЛОГИКА ОТТАЛКИВАНИЯ ОТ МЫШИ ===
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            let maxDist = 150; // Радиус взаимодействия

            if (distance < maxDist) {
                // Вектор силы
                const force = (maxDist - distance) / maxDist;
                const angle = Math.atan2(dy, dx);
                
                // Отталкиваем в противоположную сторону
                const pushX = -Math.cos(angle) * force * 2; // Сила
                const pushY = -Math.sin(angle) * force * 2;

                this.vx += pushX;
                this.vy += pushY;
            }

            // Применяем инерцию и затухание
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= 0.95; // Трение
            this.vy *= 0.95;

            // Сброс, если улетел за экран
            if (this.x > width + 50) this.x = -50;
            if (this.x < -50) this.x = width + 50;
            if (this.y < -50) this.reset();
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`;
            ctx.fill();
            
            if (Math.random() > 0.98) {
                ctx.strokeStyle = `rgba(251, 191, 36, ${this.opacity * 0.5})`;
                ctx.stroke();
            }
        }
    }

    function initBubbles() {
        bubbles = [];
        const count = Math.floor(width / 10); 
        for (let i = 0; i < count; i++) {
            bubbles.push(new Bubble());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        bubbles.forEach(b => {
            b.update();
            b.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        initBubbles();
    });

    resize();
    initBubbles();
    animate();
}

// === 3. SCROLL REVEAL ANIMATION ===
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// === 4. MOBILE MENU ===
function initMobileMenu() {
    const btn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    btn.addEventListener('click', () => {
        if (sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.remove('-translate-x-full');
        } else {
            sidebar.classList.add('-translate-x-full');
        }
    });
}