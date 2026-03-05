const menuData = [
    {
        category: "BOCADILLOS",
        basePrice: "6,90€",
        id: "bocadillos",
        items: [
            { name: "POLLO ALI-OLI", desc: "Pollo, Bacon Crispy, Lechuga, Ali oli" },
            { name: "BACON QUESO", desc: "Bacon, Bacon Crispy, Queso y Cheddar" },
            { name: "NOA", desc: "Pollo con Bechamel, Bacon Crispy, Cheddar, Lechuga y Tomate" },
            { name: "PINAR", desc: "Carne mechada, Bacon, Cheddar, Lechuga, Cebolla crujiente y Jalapeños" },
            { name: "DOMINGUERO", desc: "Lomo, York, Bacon Crispy, Queso, Cheddar, Lechuga, Tomate" },
            { name: "EL BARRIO", desc: "Lomo, Queso Cremoso, Lechuga, Cebolla crujiente, Jalapeños y Salsa Mexicana" },
            { name: "RABAS", desc: "Rabas con Salsa a elegir", price: "6,50€" },
            { name: "MIXTO", desc: "Jamón York y Queso a la plancha", price: "6,00€" }
        ]
    },
    {
        category: "QUESADILLAS",
        basePrice: "4,90€",
        id: "quesadillas",
        items: [
            { name: "MEXICANA", desc: "Pollo, Jamón York, Mozzarella y Salsa Mexicana" },
            { name: "WHISKEY", desc: "Carne Mechada, Bacon Crispy, Cheddar Mozzarella y Salsa al Whiskey BBQ" },
            { name: "TERNERA", desc: "Ternera, Mozzarella, Guacamole y Pico de gallo" },
            { name: "PICANTE", desc: "Ternera, Bacon Crispy, Cheddar, Jalapeños y Salsa Picante" }
        ]
    },
    {
        category: "PERRITOS",
        basePrice: "6,30€",
        id: "perritos",
        info: "Salchicha Alemana Bratwurst",
        items: [
            { name: "SCORPIONS", desc: "Bacon Crispy, Cheddar, Lechuga y Cebolla crujiente" },
            { name: "MAIDEN", desc: "Bacon Crispy, Cheddar, Cebolla crujiente y Salsa Barbacoa" },
            { name: "RAMMSTEIN", desc: "Bacon Crispy, Cebolla crujiente, Patatas Paja y Ketchup" },
            { name: "PICANTE", desc: "Bacon Crispy, Patatas Paja, Jalapeños y Salsa Picante" },
            { name: "HALLOWEEN", desc: "Guacamole, Queso Cremoso, Tomate troceado y Cebolla Crujiente" }
        ]
    },
    {
        category: "TACOS",
        basePrice: "4,90€",
        id: "tacos",
        items: [
            { name: "PICANTE", desc: "Ternera, Lechuga, Cebolla crujiente, Patatas paja, Jalapeños y Salsa Picante" },
            { name: "AMERICANO", desc: "Pollo, Lechuga, Cheddar, Cebolla crujiente y Salsa al Whisky" },
            { name: "ESPAÑOL", desc: "Pollo, Lechuga, Guacamole, Queso Cremoso y Pico de Gallo" },
            { name: "MEXICANO", desc: "Ternera, Lechuga, Queso Cremoso, Cebolla crujiente, Jalapeños y Salsa Mexicana" }
        ]
    },
    {
        category: "PATATAS",
        basePrice: "3,50€",
        id: "patatas",
        items: [
            { name: "BRAVAS", desc: "A nuestro estilo" },
            { name: "MIXTAS", desc: "Patatas con nuestra salsa brava y Salsa Barbacoa" },
            { name: "CHORIQUESO", desc: "Patatas, Cheddar, Mozzarella y Chorizo", price: "6,20€" },
            { name: "AMERICANAS", desc: "Patatas, Cheddar, Mozzarella y Bacon Crispy" },
            { name: "KANSAS", desc: "Patata, Cheddar, Mozzarella y Carne Mechada" }
        ]
    },
    {
        category: "RACIONES",
        id: "raciones",
        items: [
            { name: "JALAPEÑOS RELLENOS", desc: "6 Jalapeños rellenos de Cheddar", price: "5,60€" },
            { name: "RABAS", desc: "Rabas bañadas en nuestra salsa suave" },
            { name: "SALCHIPAPAS", desc: "Selección de salchichas con patatitas" },
            { name: "MORRO CHIMICHURRI", desc: "Morro de cerdo frito con salsa chimichurri" },
            { name: "ALITAS DE POLLO / FINGERS", desc: "Normales, Miel-Mostaza, Chimichurri, Picante con Jalapeños, Barbacoa", price: "6,90€" },
            { name: "ALITAS SUPREME", desc: "Sabor Tijuana o Kentucky" },
            { name: "LOMITOS", desc: "2 Lomos de cerdo rellenos de queso y pimiento verde con patatas", price: "7,00€" }
        ]
    },
    {
        category: "NACHOS",
        id: "nachos",
        items: [
            { name: "BÁSICOS", desc: "Cheddar y Mozzarella", price: "4,00€ / 7,00€" },
            { name: "ERIC", desc: "Ternera, Bacon Cryspy, Mozzarella y Salsa Mexicana", price: "6,00€ / 10,00€" },
            { name: "EVA", desc: "Chili con Carne, Cheddar, Mozzarella y Queso Cremoso", price: "6,00€ / 10,00€" },
            { name: "ABUELA", desc: "Ternera, Cheddar, Mozzarella, Guacamole, Queso Cremoso y Pico de Gallo", price: "6,00€ / 10,00€" },
            { name: "JESSY", desc: "Carne Mechada, Bacon Crispy, Cheddar, Mozzarella y Jalapeños", price: "6,00€ / 10,00€" },
            { name: "FERNANDO", desc: "Pollo, Cheddar, Mozzarella, Cebolla crujiente y Salsa al Whisky", price: "6,00€ / 10,00€" },
            { name: "PICANTES", desc: "Ternera, Cheddar, Mozzarella, Jalapeños y Salsa Picante", price: "6,00€ / 10,00€" }
        ]
    },
    {
        category: "HAMBURGUESAS",
        basePrice: "7,90€",
        id: "hamburguesas",
        items: [
            { name: "SUPER BRIAN", desc: "Ternera, York, Bacon Crispy, Queso, Cheddar, Lechuga, Tomate y Cebolla crujiente" },
            { name: "AARÓN", desc: "Pollo Crispy o Ternera, Bacon y Bacon Crispy, Doble de Queso Gouda y Cheddar" },
            { name: "PICANTE", desc: "Ternera, York, Queso, Lechuga, Tomate, Cebolla crujiente, Jalapeños y Salsa Picante" },
            { name: "SUPER POLLO", desc: "Pollo Crispy, York, Bacon Crispy, Queso, Cheddar, Lechuga, Tomate e Cebolla crujiente" },
            { name: "CHESSE BRIAN", desc: "Ternera, Queso, cheddar, rulo de cabra, Lechuga, Tomate y Cebolla crujiente" },
            { name: "JUDITH", desc: "Ternera, York, Bacon Crispy, Queso, Queso Cremoso, Lechuga, Tomate, Cebolla crujiente y Guacamole" },
            { name: "LECHAZO", desc: "Hamburguesa de Lechazo, Lechuga, Tomate, Cebolla crujiente, Mayonesa" },
            { name: "CRYSPY", desc: "Pollo Crispy o Ternera, Lechuga, Tomate, Cebolla crujiente", price: "6,90€" },
            { name: "BRIAN", desc: "Ternera, Lechuga, Tomate, Cebolla crujiente", price: "6,90€" }
        ]
    }
];

function renderMenu() {
    const container = document.getElementById('menu-container');
    
    menuData.forEach(cat => {
        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = cat.id;

        const header = document.createElement('div');
        header.className = 'category-title';
        header.innerHTML = `
            <span>${cat.category}</span>
            ${cat.basePrice ? `<span class="category-price-info">Desde ${cat.basePrice}</span>` : ''}
        `;
        section.appendChild(header);

        if (cat.info) {
            const info = document.createElement('p');
            info.className = 'category-info';
            info.style.marginBottom = '1rem';
            info.style.color = 'var(--text-secondary)';
            info.style.fontSize = '0.9rem';
            info.innerText = cat.info;
            section.appendChild(info);
        }

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        cat.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';
            itemEl.innerHTML = `
                <div class="item-header">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">${item.price || cat.basePrice || ''}</span>
                </div>
                <div class="item-desc">${item.desc}</div>
            `;
            grid.appendChild(itemEl);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

// Intersection Observer for scroll animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-section').forEach(section => {
        observer.observe(section);
    });
}

// Active link highlighting on scroll
function initScrollTracking() {
    window.addEventListener('scroll', () => {
        let current = "";
        document.querySelectorAll('.category-section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
}

// Category tabs smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 140,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    initAnimations();
    initScrollTracking();
});
