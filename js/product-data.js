const perfumeDatabase = {
    nox: {
        name: "NOX",
        tagline: "\"Where darkness becomes desire.\"",
        description: "NOX is not worn — it is experienced. <br><br> It opens with a whisper of spice, subtle yet provocative, drawing you into its quiet intensity. As it unfolds, a deep floral heart emerges, wrapped in shadow and elegance. <br><br> In its final moments, warm amber and soft musk settle onto the skin, leaving behind a presence that lingers… long after you’ve gone.",
        notes: { top: "Black Pepper, Bergamot", heart: "Rose, Violet", base: "Amber, Musk" },
        experience: { mood: "Mysterious, Magnetic", occasion: "Evening, Private moments", season: "Autumn / Winter" },
        price: "$285",
        image: "image/NOX.png",
        category: "dark",
        intensity: 85
    },
    aeris: {
        name: "AERIS",
        tagline: "\"Light, redefined.\"",
        description: "AERIS captures the feeling of air just before sunrise — untouched, infinite, alive.<br><br>Bright citrus notes awaken the senses, softened by delicate white florals that drift effortlessly.<br><br>As it settles, a clean, almost weightless warmth remains — like sunlight on skin.",
        notes: { top: "Lemon, Green Apple", heart: "Jasmine, Lily", base: "White Musk, Cedarwood" },
        experience: { mood: "Fresh, Free", occasion: "Daily elegance", season: "Spring / Summer" },
        price: "$250",
        image: "image/AERIS.png",
        category: "fresh"
    },
    velum: {
        name: "VELUM",
        tagline: "\"Softness with a hidden depth.\"",
        description: "VELUM is a quiet statement — subtle, yet unforgettable.<br><br>It begins with a gentle sweetness, almost innocent, before revealing a rich floral core that feels both intimate and refined.<br><br>The base lingers with creamy woods and soft vanilla, wrapping the skin like silk.",
        notes: { top: "Pear, Almond", heart: "Rose, Iris", base: "Vanilla, Sandalwood" },
        experience: { mood: "Elegant, Intimate", occasion: "Signature daily wear", season: "All Seasons" },
        price: "$265",
        image: "image/VELUM.png",
        category: "romantic"
    },
    ignis: {
        name: "IGNIS",
        tagline: "\"Controlled fire.\"",
        description: "IGNIS is an unapologetic declaration of dominance and heat.<br><br>Fiery spices collide with rich, smoky undertones, creating a scent that demands attention without raising its voice.<br><br>A deep, resinous finish leaves a trail of absolute confidence.",
        notes: { top: "Saffron, Cinnamon", heart: "Oud, Leather", base: "Patchouli, Amber" },
        experience: { mood: "Bold, Dominant", occasion: "Power meetings, Late nights", season: "Autumn / Winter" },
        price: "$310",
        image: "image/IGNIS.jpg",
        category: "powerful",
        intensity: 95
    },
    lumen: {
        name: "LUMEN",
        tagline: "\"The glow within.\"",
        description: "LUMEN radiates like golden hour captured in a bottle.<br><br>Luminous florals intertwine with warm honey, wrapping you in a comforting yet opulent glow.<br><br>It is the scent of effortless, undeniable charisma.",
        notes: { top: "Orange Blossom, Mandarin", heart: "Honey, Ylang-Ylang", base: "Amber, Vanilla" },
        experience: { mood: "Radiant, Warm", occasion: "Celebrations, Sunlit days", season: "Summer / Autumn" },
        price: "$275",
        image: "image/LUMEN.jpg",
        category: "balanced"
    },
    umbra: {
        name: "UMBRA",
        tagline: "\"The beauty of shadow.\"",
        description: "UMBRA thrives in the unknown. It is a fragrance built on contradictions.<br><br>Cold incense meets rich, dark leather, creating an atmosphere of absolute mystery.<br><br>It does not reveal itself entirely, always leaving them wanting more.",
        notes: { top: "Incense, Black Pepper", heart: "Leather, Vetiver", base: "Patchouli, Dark Woods" },
        experience: { mood: "Deep, Enigmatic", occasion: "Exclusive events", season: "Winter" },
        price: "$295",
        image: "image/UMBRA.jpg",
        category: "dark",
        intensity: 90
    },
    flora: {
        name: "FLORA",
        tagline: "\"The whisper of petals.\"",
        description: "FLORA is a modern romance. It is soft, poetic, and fiercely beautiful.<br><br>A delicate explosion of spring blooms settles into a creamy, sensual musk.<br><br>It feels like a love letter written in scent.",
        notes: { top: "Peony, Lychee", heart: "Rose, Magnolia", base: "White Musk, Cedar" },
        experience: { mood: "Romantic, Soft", occasion: "Dates, Spring mornings", season: "Spring" },
        price: "$240",
        image: "image/FLORA.jpg",
        category: "romantic"
    },
    eclis: {
        name: "ECLIS",
        tagline: "\"Between light and dark.\"",
        description: "ECLIS is perfect equilibrium. The exact moment day turns to night.<br><br>Sharp, bitter citrus cuts through smooth, grounding earth notes, creating a perfectly balanced duality.<br><br>A scent for those who command both sides of the spectrum.",
        notes: { top: "Grapefruit, Bergamot", heart: "Vetiver, Cedar", base: "Tonka Bean, Musk" },
        experience: { mood: "Balanced, Sophisticated", occasion: "Office to Evening", season: "All Seasons" },
        price: "$260",
        image: "image/ECLIS.jpg",
        category: "balanced"
    },
    sylva: {
        name: "SYLVA",
        tagline: "\"Nature, untouched.\"",
        description: "SYLVA is a grounding force. The absolute stillness of an ancient forest.<br><br>Crisp pine and damp earth blend into a meditative, calming aura that resets the soul.<br><br>Wear it when you need to be unshakeable.",
        notes: { top: "Pine Needle, Juniper", heart: "Oakmoss, Fern", base: "Cedarwood, Vetiver" },
        experience: { mood: "Calm, Grounded", occasion: "Reflective days", season: "Autumn" },
        price: "$245",
        image: "image/SYLVA.jpg",
        category: "fresh"
    },
    glacia: {
        name: "GLACIA",
        tagline: "\"Cold, yet captivating.\"",
        description: "GLACIA is absolute clarity. Like breathing in freezing air atop a glacier.<br><br>Piercing, crystalline top notes slowly melt into smooth, white woods.<br><br>It is minimalist, sharp, and brutally elegant.",
        notes: { top: "Mint, Ice Accord", heart: "White Tea, Jasmine", base: "White Wood, Musk" },
        experience: { mood: "Minimalist, Sharp", occasion: "High-focus days", season: "Summer" },
        price: "$255",
        image: "image/GLACIA.png",
        category: "fresh"
    },
    aura: {
        name: "AURA",
        tagline: "\"Invisible, unforgettable.\"",
        description: "AURA does not smell like perfume. It smells like you, perfected.<br><br>A sheer, skin-like musk that adapts to the wearer, enhancing your natural scent into something hypnotic.<br><br>It is the ultimate stealth luxury.",
        notes: { top: "Ambrette Seed", heart: "Skin Musk, Iris", base: "Ambergris, Cashmeran" },
        experience: { mood: "Signature, Personal", occasion: "Everyday luxury", season: "All Seasons" },
        price: "$300",
        image: "image/AURA.png",
        category: "balanced"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Only run this logic if we are on perfume.html
    const productTitle = document.getElementById("product-title");
    if (!productTitle) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'nox'; // Default to NOX
    
    const product = perfumeDatabase[productId] || perfumeDatabase['nox'];

    document.title = `${product.name} | VELARIS`;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-image").alt = `${product.name} Perfume`;
    productTitle.innerHTML = product.name;
    document.getElementById("product-tagline").innerHTML = product.tagline;
    document.getElementById("product-desc").innerHTML = product.description;
    
    document.getElementById("note-top").innerHTML = product.notes.top;
    document.getElementById("note-heart").innerHTML = product.notes.heart;
    document.getElementById("note-base").innerHTML = product.notes.base;
    
    document.getElementById("exp-mood").innerHTML = product.experience.mood;
    document.getElementById("exp-occasion").innerHTML = product.experience.occasion;
    document.getElementById("exp-season").innerHTML = product.experience.season;
    
    document.getElementById("product-price").innerHTML = product.price;
    document.getElementById("btn-experience").innerHTML = `Experience ${product.name}`;

    // Handle Intensity Bar
    const intensityFill = document.getElementById("intensity-fill");
    if (intensityFill) {
        setTimeout(() => {
            intensityFill.style.width = `${product.intensity || 50}%`;
        }, 800);
    }
});
