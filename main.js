// Toggle submenus
document.querySelectorAll('.has-submenu').forEach(item => {
    item.addEventListener('click', function (e) {
        if (e.target.classList.contains('has-submenu') ||
            e.target.classList.contains('menu-item') ||
            e.target.tagName === 'SPAN' ||
            e.target.tagName === 'I') {
            const submenu = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');

            submenu.classList.toggle('show');
            arrow.classList.toggle('fa-chevron-down');
            arrow.classList.toggle('fa-chevron-up');
        }
    });
});

// Set active menu item
document.querySelectorAll('.menu-item, .submenu-item').forEach(item => {
    item.addEventListener('click', function () {
        if (!this.classList.contains('has-submenu')) {
            document.querySelectorAll('.menu-item, .submenu-item').forEach(i => {
                i.classList.remove('active');
            });
            this.classList.add('active');

            // If this is a submenu item, also highlight its parent
            if (this.classList.contains('submenu-item')) {
                const parent = this.closest('.submenu').previousElementSibling;
                parent.classList.add('active');
            }
        }
    });
});

// Responsive sidebar toggle
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header').prepend(menuToggle);

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
});