import React, { useEffect, useRef } from 'react';

const Particule = ({ vitesseMin, vitesseMax }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const particles = [];

    const createParticle = () => {
      const angle = Math.random() * (Math.PI / 3) - Math.PI / 6; // Angle entre -30 et 30 degrés
      const speed = Math.random() * (vitesseMax - vitesseMin) + vitesseMin;

      const particle = {
        x: canvas.width / 2,
        y: canvas.height,
        radius: Math.random() * 5 + 1,
        color: `rgba(255, ${Math.random() * 100}, 0, 1)`, // Nuances de rouge
        velocity: {
          x: speed * Math.cos(angle),
          y: -speed * Math.sin(angle)
        },
        life: Math.random() * 50 + 30
      };

      particles.push(particle);
    };

    const drawParticles = () => {
      particles.forEach((particle, index) => {
        if (particle.life <= 0) {
          particles.splice(index, 1);
        } else {
          particle.x += particle.velocity.x;
          particle.y += particle.velocity.y;
          particle.life--;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      createParticle();
      drawParticles();

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, [vitesseMin, vitesseMax]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default Particule;
