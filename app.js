gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 80%",
        end: "top 30%",
        scrub: 4,
        toggleActions: "restart none none none",
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem",
        },
    }
})