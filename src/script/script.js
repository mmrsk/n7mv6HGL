console.log(`whassup gsap?`);

gsap.set(".layer", { opacity: 0 });
gsap.set("#ir_logo", { opacity: 0 });

gsap.registerPlugin(ScrambleTextPlugin);

gsap.to(".tagline_0", { duration: 1, scrambleText: {text:"Your", chars: "01" }});
gsap.to(".tagline_1", { duration: 1.25, chars: "01", scrambleText: "Data." });
gsap.to(".tagline_2", { duration: 1.25, chars: "01", scrambleText: "Business." });
gsap.to(".tagline_3", { duration: 1.25, chars: "01", scrambleText: "Story." });
gsap.to(".tagline", { opacity: 0, delay: 4, duration: 1 });

gsap.to(".layer", { opacity: 0.4, delay: 2, duration: 2, stagger: { each: 0.03, ease: "power2.inOut" } });
gsap.to("#ir_symbol", { x: -269, y: -0.5,  scale: 0.305, rotate: 360, opacity: 1, delay: 4, duration: 2 });
gsap.to("#ir_logo", { opacity: 1, delay: 6, duration: 2, duration: 1 });