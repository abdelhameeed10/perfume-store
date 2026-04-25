const quizData = {
    moods: {
        dark: {
            name: "NOX",
            desc: "The silence of midnight, captured. Where darkness becomes desire.",
            img: "image/NOX.png",
            link: "perfume.html?id=nox"
        },
        fresh: {
            name: "AERIS",
            desc: "Light, redefined. Untouched, infinite, alive.",
            img: "image/AERIS.png",
            link: "perfume.html?id=aeris"
        },
        romantic: {
            name: "VELUM",
            desc: "Softness with a hidden depth. A quiet statement.",
            img: "image/VELUM.png",
            link: "perfume.html?id=velum"
        },
        powerful: {
            name: "IGNIS",
            desc: "Controlled fire. A statement of pure dominance.",
            img: "image/IGNIS.jpg",
            link: "perfume.html?id=ignis"
        },
        balanced: {
            name: "ECLIS",
            desc: "Between light and dark. Perfect equilibrium.",
            img: "image/ECLIS.jpg",
            link: "perfume.html?id=eclis"
        }
    }
};

function selectMood(mood) {
    const resultSection = document.getElementById('quiz-result');
    const optionsContainer = document.getElementById('quiz-options');
    const question = document.getElementById('quiz-question');
    const introBox = document.getElementById('quiz-intro-box');

    // Smoothly fade out everything
    gsap.to([optionsContainer, question, introBox], {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.inOut",
        onComplete: () => {
            optionsContainer.style.display = 'none';
            question.style.display = 'none';
            introBox.style.display = 'none';

            // Populate the result
            const result = quizData.moods[mood];
            document.getElementById('result-title').innerText = result.name;
            document.getElementById('result-desc').innerText = result.desc;
            document.getElementById('result-img').src = result.img;
            document.getElementById('result-link').href = result.link;

            // Prepare result section
            resultSection.style.display = 'flex';
            
            // Cinematic Reveal
            gsap.to(resultSection, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.2
            });

            // Specific animation for the product image
            gsap.from("#result-img", {
                scale: 0.8,
                opacity: 0,
                duration: 2,
                ease: "expo.out",
                delay: 0.5
            });
        }
    });
}
