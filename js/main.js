// ============================================
// DATOS DE PROYECTOS
// ============================================
const projects = [
    {
        title: "TaskFlow - Gestión de Tareas",
        description: "Aplicación full stack para gestión de tareas tipo Trello/Asana con autenticación, tableros y tareas.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Bcrypt", "Axios", "CSS3", "HTML5"],
        image: "assets/taskflow.png",
        liveUrl: "https://jadirlevario152.github.io/taskflow/",
        codeUrl: "https://github.com/JadirLevario152/taskflow"
    },
    {
        title: "E-commerce Plant Mini",
        description: "Tienda online de plantas con carrito de compras, categorías y diseño responsive.",
        technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "React Router", "Context API", "CSS Modules"],
        image: "assets/E-commerce.png",
        liveUrl: "https://jadirlevario152.github.io/e-plantShoppingMyProyect/",
        codeUrl: "https://github.com/JadirLevario152/e-plantShoppingMyProyect"
    },
    {
        title: "TravelBloom Recommendation",
        description: "Aplicación para buscar y descubrir destinos de viaje con recomendaciones personalizadas.",
        technologies: ["HTML5", "CSS3", "JavaScript", "API", "Fetch", "Responsive Design"],
        image: "assets/travelBloom.png",
        liveUrl: "https://jadirlevario152.github.io/travelRecommendation/index.html",
        codeUrl: "https://github.com/JadirLevario152/travelRecommendation"
    },
    {
        title: "Clima App",
        description: "App del clima usando API de OpenWeatherMap. Muestra temperatura y condiciones actuales.",
        technologies: ["JavaScript", "API", "Fetch", "CSS"],
        image: "🔥",
        liveUrl: "https://tu-demo.com/clima",
        codeUrl: "https://github.com/tu-usuario/clima-app"
    },
    {
        title: "Buscador de Películas",
        description: "Busca información de películas consumiendo la API de OMDB.git ",
        technologies: ["React", "API", "Hooks", "Axios"],
        image: "🎬",
        liveUrl: "https://tu-demo.com/peliculas",
        codeUrl: "https://github.com/tu-usuario/movie-search"
    },
    {
        title: "Dashboard Analytics",
        description: "Dashboard con gráficos interactivos y datos en tiempo real.",
        technologies: ["React", "Chart.js", "Node.js"],
        image: "📊",
        liveUrl: "https://tu-demo.com/dashboard",
        codeUrl: "https://github.com/tu-usuario/dashboard"
    }
];

// ============================================
// EMAILJS CONFIGURACIÓN
// ============================================
(function() {
    emailjs.init('JWZlK2HQjYahUVUow');
    console.log('✅ EmailJS inicializado');
})();

async function sendEmail(formData) {
    const serviceID = 'service_npomow5';
    const templateID = 'template_khtpzbp';
    
    try {
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>⏳ Enviando...</span>';
        
        const templateParams = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            title: "Nuevo mensaje desde portafolio"
        };
        
        const response = await emailjs.send(serviceID, templateID, templateParams);
        
        console.log('✅ Éxito:', response);
        showNotification('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
        
        document.getElementById('contact-form').reset();
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        return true;
        
    } catch (error) {
        console.error('❌ Error:', error);
        showNotification('Error al enviar. Intenta de nuevo o escríbeme directamente a jadirlevarioo@outlook.es', 'error');
        
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Enviar Mensaje</span>';
        
        return false;
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? 'linear-gradient(135deg, #48bb78, #38a169)' : 'linear-gradient(135deg, #f56565, #c53030)'};
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        max-width: 350px;
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ============================================
// RENDERIZAR PROYECTOS
// ============================================
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    if (!container) return;
    
    container.innerHTML = projects.map(project => `
    <div class="project-card">
        <div class="project-image">
            ${project.image.startsWith('assets') || project.image.startsWith('http') 
                ? `<img src="${project.image}" alt="${project.title}">` 
                : project.image}
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">
                    <span>🔗</span> Demo
                </a>
                <a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer">
                    <span>💻</span> Código
                </a>
            </div>
        </div>
    </div>
`).join('');
}

// ============================================
// FUNCIONES DE NAVEGACIÓN Y SCROLL
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupScrollAnimation() {
    const elements = document.querySelectorAll('.tech-card, .project-card, .about-main, .contact-form');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
}

function setupActiveNav() {
    const sections = document.querySelectorAll('section');
    const navBtns = document.querySelectorAll('.nav-btn');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('href') === `#${current}`) {
                btn.classList.add('active');
            }
        });
    });
}

function typeWriter() {
    const title = document.querySelector('header h1');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 500);
}

function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    if (!scrollBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        scrollBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            scrollBtn.style.transform = '';
        }, 200);
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// MODO OSCURO/CLARO
// ============================================
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) return;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            themeToggle.classList.add('visible');
        } else {
            themeToggle.classList.remove('visible');
        }
    });
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        updateThemeButton(newTheme);
        
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 200);
        
        showNotification(`Modo ${newTheme === 'light' ? 'claro' : 'oscuro'} activado`, 'success');
    });
}

function updateThemeButton(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('.theme-icon');
    const text = themeToggle.querySelector('.theme-text');
    
    if (theme === 'light') {
        icon.textContent = '🌙';
        text.textContent = 'Modo Oscuro';
    } else {
        icon.textContent = '☀️';
        text.textContent = 'Modo Claro';
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portafolio iniciado');
    
    renderProjects();
    setupSmoothScroll();
    setupScrollAnimation();
    setupActiveNav();
    setupScrollToTop();
    setupThemeToggle();
    typeWriter();
    
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            
            if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
                showNotification('Por favor completa todos los campos', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.get('email'))) {
                showNotification('Por favor ingresa un email válido', 'error');
                return;
            }
            
            await sendEmail(formData);
        });
    }
    
    const header = document.querySelector('header');
    if (header) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 5 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(255,255,255,0.3)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 3 + 2}s infinite`;
            header.appendChild(particle);
        }
    }
});

// Agregar estilos para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);