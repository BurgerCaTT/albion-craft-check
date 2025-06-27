const currentPath = window.location.pathname.split("/").pop(); // Lấy tên file trang hiện tại
  const navLinks = document.querySelectorAll('.header .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // So sánh tên file với href
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });