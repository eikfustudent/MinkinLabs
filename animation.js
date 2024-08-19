document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
        ctx.fill();
    }

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

    animate();
});
