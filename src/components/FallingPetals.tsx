import { useEffect, useRef } from 'react';
const FallingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let petals: Petal[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Petal {
      x: number = Math.random() * canvas.width;
      y: number = Math.random() * canvas.height - canvas.height;
      size: number = Math.random() * 10 + 5;
      speed: number = Math.random() * 1 + 0.5;
      angle: number = Math.random() * Math.PI * 2;
      rotationSpeed: number = Math.random() * 0.02 - 0.01;
      opacity: number = Math.random() * 0.5 + 0.3;

      update() {
        this.y += this.speed;
        this.angle += this.rotationSpeed;
        this.x += Math.sin(this.angle) * 0.5;

        if (this.y > canvas.height) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        // Drawing a simple lotus petal shape (oval-ish)
        ctx.ellipse(0, 0, this.size / 2, this.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 202, 210, ${this.opacity})`; // lotus-pink
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      resizeCanvas();
      petals = Array.from({ length: 50 }, () => new Petal());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach((petal) => {
        petal.update();
        petal.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};

export default FallingPetals;
