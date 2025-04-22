import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);
    
    const NEURON_COUNT = 200;
    const EDGE_DISTANCE = 200;
    const CURSOR_RADIUS = 200;
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let mouse = { x: null, y: null };
        
        const resizeCanvas = () => {
            const dpi = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpi;
            canvas.height = document.body.scrollHeight * dpi;
            ctx.scale(dpi, dpi);
        };
        
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        
        const handleClick = (e) => {
            neurons.forEach((neuron) => {
                const distance = neuron.distanceToCursor();
                if (distance < CURSOR_RADIUS) {
                    neuron.pulse = 1 - distance / CURSOR_RADIUS;
                }
            });
        };
        
        resizeCanvas();
        
        //window.addEventListener('resize', resizeCanvas);
        window.addEventListener('click', handleClick);
        window.addEventListener('mousemove', handleMouseMove);
        
        class Neuron {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = 2 + Math.random() * 2;
            }
            
            draw() {
                const distanceToCursor = this.distanceToCursor();
                const glow = distanceToCursor < CURSOR_RADIUS ? 1 - distanceToCursor / CURSOR_RADIUS : 0;
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 255, 255, ${0.1 + glow})`;
                ctx.fill();
                
                if (this.pulse > 0) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius * (1 + this.pulse), 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(0, 255, 255, ${this.pulse})`;
                    ctx.stroke();
                    
                    this.pulse -= 0.05;
                    if (this.pulse <= 0) {
                        this.pulse = 0;
                    }
                }
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            
            distanceToCursor() {
                return Math.hypot(this.x - mouse.x, this.y - mouse.y);
            }
        }
        
        const neurons = [];
        for (let i = 0; i < NEURON_COUNT; i++) {
            neurons.push(new Neuron());
        }
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            neurons.forEach((neuron, i) => {
                neuron.update();
                neuron.draw();
                
                // Draw lines between close nodes
                for (let j = i + 1; j < neurons.length; j++) {
                    const other = neurons[j];
                    const dx = neuron.x - other.x;
                    const dy = neuron.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < EDGE_DISTANCE) {
                        const lineGlow = 1 - dist / EDGE_DISTANCE;
                        ctx.beginPath();
                        ctx.moveTo(neuron.x, neuron.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = `rgba(0, 255, 255, ${lineGlow * 0.2})`;
                        ctx.stroke();
                    }
                }
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
            //window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
        };
    }, []);
    
    return (
        <canvas
        ref={canvasRef}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #0a0a0a, #111c1f)',
            filter: 'drop-shadow(0 0 2px #00ffff) blur(0.2px)',
        }}
        />
    );
};

export default Background;
