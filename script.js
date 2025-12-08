// Custom Cursor with Lag Effect
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');

  if (cursor) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.15; // Lower = more lag (0.1-0.2 recommended)

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Animate cursor with lag
    const animate = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      requestAnimationFrame(animate);
    };

    animate();

    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }

  // Scroll to top on page load
  window.scrollTo(0, 0);
});
