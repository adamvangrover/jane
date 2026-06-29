const KnowledgeGraph = {
    // SCIENCE & PHYSICS
    "physics_gravity": {
        id: "physics_gravity",
        title: "Gravity",
        category: "Physics",
        summary: "Gravity is a fundamental interaction which causes mutual attraction between all things that have mass. On Earth, gravity gives weight to physical objects, and the Moon's gravity causes the tides of the oceans.",
        related: ["physics_relativity", "space_solar_system", "science_newton"],
        keywords: ["gravity", "falling", "weight", "attraction", "mass"],
        socratic_questions: [
            "If gravity is a pull between masses, why doesn't a small object like an apple pull you towards it?",
            "Imagine dropping a heavy rock and a light feather in a vacuum with no air resistance. What do you think would happen?",
            "How might gravity differ on a planet with twice the mass of Earth?"
        ]
    },
    "physics_relativity": {
        id: "physics_relativity",
        title: "Theory of Relativity",
        category: "Physics",
        summary: "Developed by Albert Einstein, it encompasses two theories: special relativity (time and space are relative depending on the observer's speed) and general relativity (gravity is a curvature of spacetime).",
        related: ["physics_gravity", "science_einstein", "space_black_holes"],
        keywords: ["relativity", "einstein", "spacetime", "time dilation"],
        socratic_questions: [
            "If time passes slower for someone moving very fast, what would happen if you traveled close to the speed of light for a year?",
            "How does thinking of space as a 'fabric' change the way you understand gravity?"
        ]
    },
    "space_solar_system": {
        id: "space_solar_system",
        title: "The Solar System",
        category: "Astronomy",
        summary: "Our planetary system consists of the Sun and the objects that orbit it, including eight major planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), dwarf planets, moons, and asteroids.",
        related: ["physics_gravity", "space_black_holes"],
        keywords: ["solar system", "planets", "sun", "mars", "jupiter", "orbit"],
        socratic_questions: [
            "Why do you think the inner planets are mostly rocky while the outer ones are massive gas giants?",
            "If the Sun suddenly disappeared, what would happen to Earth's orbit?"
        ]
    },
    "space_black_holes": {
        id: "space_black_holes",
        title: "Black Holes",
        category: "Astronomy",
        summary: "A region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The boundary of no escape is called the event horizon.",
        related: ["physics_relativity", "physics_gravity"],
        keywords: ["black hole", "event horizon", "singularity", "spaghettification"],
        socratic_questions: [
            "If light cannot escape a black hole, how do scientists know they exist?",
            "What do you think happens to the concept of 'time' near a black hole?"
        ]
    },

    // MATHEMATICS
    "math_algebra": {
        id: "math_algebra",
        title: "Algebra",
        category: "Mathematics",
        summary: "Algebra is the branch of mathematics that helps in the representation of problems or situations in the form of mathematical expressions. It involves variables like x, y, z, and mathematical operations.",
        related: ["math_calculus", "math_geometry"],
        keywords: ["algebra", "equation", "variable", "solve for x"],
        socratic_questions: [
            "Why is it useful to use letters like 'x' or 'y' instead of just working with known numbers?",
            "If an equation is like a balanced scale, what happens if you do something to only one side?"
        ]
    },
    "math_calculus": {
        id: "math_calculus",
        title: "Calculus",
        category: "Mathematics",
        summary: "Calculus is the mathematical study of continuous change, just as geometry is the study of shape and algebra is the study of generalizations of arithmetic operations. It has two major branches: differential and integral calculus.",
        related: ["math_algebra", "science_newton"],
        keywords: ["calculus", "derivative", "integral", "rate of change", "area under curve"],
        socratic_questions: [
            "If algebra helps us find exact positions, how might calculus help us understand objects that are constantly speeding up or slowing down?",
            "Can you think of a real-world scenario where knowing the exact rate of change at a single instant is crucial?"
        ]
    },
    "math_geometry": {
        id: "math_geometry",
        title: "Geometry",
        category: "Mathematics",
        summary: "A branch of mathematics concerned with properties of space such as the distance, shape, size, and relative position of figures.",
        related: ["math_algebra", "history_ancient_greece"],
        keywords: ["geometry", "shape", "triangle", "circle", "pythagorean", "angles"],
        socratic_questions: [
            "Why do you think triangles are considered one of the strongest shapes in structural engineering?",
            "How does geometry apply to art or architecture?"
        ]
    },

    // COMPUTER SCIENCE & PROGRAMMING
    "cs_programming": {
        id: "cs_programming",
        title: "Computer Programming",
        category: "Computer Science",
        summary: "The process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. It involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms in a chosen programming language.",
        related: ["cs_algorithms", "cs_python", "cs_web_dev"],
        keywords: ["programming", "coding", "code", "software", "developer"],
        socratic_questions: [
            "If a computer only understands 1s and 0s, how do the words you type in code turn into actions on the screen?",
            "What happens if you give a computer instructions in the wrong order?"
        ]
    },
    "cs_algorithms": {
        id: "cs_algorithms",
        title: "Algorithms",
        category: "Computer Science",
        summary: "An algorithm is a finite sequence of well-defined instructions, typically used to solve a class of specific problems or to perform a computation.",
        related: ["cs_programming", "math_algebra"],
        keywords: ["algorithm", "sorting", "searching", "efficiency", "big o"],
        socratic_questions: [
            "How is an algorithm similar to a recipe for baking a cake?",
            "If you had to find a specific word in a dictionary, what algorithm would you use instead of reading page by page?"
        ]
    },
    "cs_python": {
        id: "cs_python",
        title: "Python (Programming Language)",
        category: "Computer Science",
        summary: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected.",
        related: ["cs_programming", "cs_data_science"],
        keywords: ["python", "script", "indentation", "django", "flask"],
        socratic_questions: [
            "Why might a language that reads almost like English be beneficial for beginners and data scientists?",
            "How does indentation in Python differ from how other languages organize code blocks?"
        ]
    },
    "cs_web_dev": {
        id: "cs_web_dev",
        title: "Web Development",
        category: "Computer Science",
        summary: "The work involved in developing a website for the Internet or an intranet. It ranges from developing simple single static pages to complex web applications, electronic businesses, and social network services.",
        related: ["cs_programming", "cs_html_css", "cs_javascript"],
        keywords: ["web development", "frontend", "backend", "fullstack", "website"],
        socratic_questions: [
            "What is the difference between the 'frontend' and the 'backend' of a website?",
            "When you click a button on a web page, what invisible processes do you think are happening behind the scenes?"
        ]
    },
    "cs_html_css": {
        id: "cs_html_css",
        title: "HTML & CSS",
        category: "Computer Science",
        summary: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.",
        related: ["cs_web_dev", "cs_javascript"],
        keywords: ["html", "css", "markup", "styling", "web page"],
        socratic_questions: [
            "If HTML is the 'skeleton' of a web page, what role does CSS play?",
            "Why is it important to separate the content (HTML) from the design (CSS)?"
        ]
    },
    "cs_javascript": {
        id: "cs_javascript",
        title: "JavaScript",
        category: "Computer Science",
        summary: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It enables interactive web pages and is an essential part of web applications.",
        related: ["cs_web_dev", "cs_html_css"],
        keywords: ["javascript", "js", "interactive", "dom", "node"],
        socratic_questions: [
            "How does JavaScript change a static web page into something you can interact with?",
            "Can you think of an action on a website that definitely uses JavaScript?"
        ]
    },

    // HISTORY
    "history_roman_empire": {
        id: "history_roman_empire",
        title: "The Roman Empire",
        category: "History",
        summary: "The post-Republican period of ancient Rome. As a polity, it included large territorial holdings around the Mediterranean Sea in Europe, North Africa, and Western Asia, ruled by emperors.",
        related: ["history_ancient_greece", "history_middle_ages"],
        keywords: ["roman empire", "rome", "caesar", "gladiator", "aqueducts"],
        socratic_questions: [
            "How do you think the Roman invention of concrete changed architecture forever?",
            "Why is the fall of the Roman Empire considered a turning point in history?"
        ]
    },
    "history_ancient_greece": {
        id: "history_ancient_greece",
        title: "Ancient Greece",
        category: "History",
        summary: "A northeastern Mediterranean civilization, existing from the Greek Dark Ages of the 12th–9th centuries BC to the end of classical antiquity (c. 600 AD). It is known for its contributions to philosophy, mathematics, astronomy, and medicine.",
        related: ["history_roman_empire", "phil_ethics"],
        keywords: ["greece", "athens", "sparta", "philosophy", "democracy", "olympics"],
        socratic_questions: [
            "How does the ancient Athenian concept of democracy differ from modern democracies?",
            "Why do you think Greek mythology remains so popular today?"
        ]
    },
    "history_industrial_revolution": {
        id: "history_industrial_revolution",
        title: "Industrial Revolution",
        category: "History",
        summary: "The transition to new manufacturing processes in Great Britain, continental Europe, and the United States, in the period from about 1760 to sometime between 1820 and 1840.",
        related: ["history_modern_era", "science_electricity"],
        keywords: ["industrial revolution", "factories", "steam engine", "coal", "urbanization"],
        socratic_questions: [
            "How did the shift from hand production to machines change the daily lives of everyday people?",
            "What were some of the negative environmental or social impacts of rapid industrialization?"
        ]
    },

    // BIOLOGY & MEDICINE
    "bio_evolution": {
        id: "bio_evolution",
        title: "Evolution",
        category: "Biology",
        summary: "Evolution is change in the heritable characteristics of biological populations over successive generations. These characteristics are the expressions of genes that are passed on from parent to offspring during reproduction.",
        related: ["bio_genetics", "science_darwin"],
        keywords: ["evolution", "natural selection", "darwin", "survival of the fittest"],
        socratic_questions: [
            "If an environment suddenly becomes much colder, how might 'natural selection' shape the animals living there over many generations?",
            "How does the discovery of DNA support the theory of evolution?"
        ]
    },
    "bio_genetics": {
        id: "bio_genetics",
        title: "Genetics",
        category: "Biology",
        summary: "Genetics is the study of genes, genetic variation, and heredity in organisms.",
        related: ["bio_evolution", "bio_cell_biology"],
        keywords: ["genetics", "dna", "genes", "heredity", "chromosomes"],
        socratic_questions: [
            "If DNA is a 'blueprint' for a living thing, what happens if there is a 'typo' in the blueprint?",
            "How do traits get passed from parents to children?"
        ]
    },
    "bio_cell_biology": {
        id: "bio_cell_biology",
        title: "Cell Biology",
        category: "Biology",
        summary: "A branch of biology that studies the structure, function, and behavior of cells. All living organisms are made of cells. A cell is the basic unit of life.",
        related: ["bio_genetics"],
        keywords: ["cell", "mitochondria", "nucleus", "membrane", "microbiology"],
        socratic_questions: [
            "If a cell is like a tiny city, what part acts like the power plant?",
            "Why are cells so small?"
        ]
    },

    // PHILOSOPHY & PSYCHOLOGY
    "phil_ethics": {
        id: "phil_ethics",
        title: "Ethics",
        category: "Philosophy",
        summary: "Ethics or moral philosophy is a branch of philosophy that involves systematizing, defending, and recommending concepts of right and wrong behavior.",
        related: ["phil_stoicism", "psych_behaviorism"],
        keywords: ["ethics", "morality", "right and wrong", "utilitarianism", "virtue"],
        socratic_questions: [
            "Is something 'good' because of its consequences, or because of the intent behind it?",
            "If you found a wallet with a lot of money and no ID, what would the 'ethical' action be, and why?"
        ]
    },
    "phil_stoicism": {
        id: "phil_stoicism",
        title: "Stoicism",
        category: "Philosophy",
        summary: "A school of Hellenistic philosophy founded by Zeno of Citium in Athens in the early 3rd century BC. It is a philosophy of personal ethics informed by its system of logic and its views on the natural world. It teaches that the path to eudaimonia (happiness) is accepting the moment as it presents itself, by not allowing oneself to be controlled by the desire for pleasure or fear of pain.",
        related: ["phil_ethics", "history_ancient_greece", "history_roman_empire"],
        keywords: ["stoicism", "marcus aurelius", "seneca", "control", "emotion", "resilience"],
        socratic_questions: [
            "How can focusing only on what you can control reduce anxiety?",
            "Is a stoic emotionless, or just in control of their reactions to emotions?"
        ]
    },
    "psych_learning": {
        id: "psych_learning",
        title: "Psychology of Learning",
        category: "Psychology",
        summary: "The study of how people learn and retain knowledge. It covers educational frameworks like the Zone of Proximal Development, constructivism, and cognitive load theory.",
        related: ["psych_behaviorism", "phil_ethics"],
        keywords: ["learning", "memory", "zpd", "scaffolding", "education"],
        socratic_questions: [
            "Why is it that struggling with a problem often makes you remember the solution better than just being told the answer?",
            "What is the difference between rote memorization and true understanding?"
        ]
    },

    // ARTS & LITERATURE
    "art_renaissance": {
        id: "art_renaissance",
        title: "The Renaissance",
        category: "Arts",
        summary: "A fervent period of European cultural, artistic, political and economic 'rebirth' following the Middle Ages. Generally described as taking place from the 14th century to the 17th century, the Renaissance promoted the rediscovery of classical philosophy, literature and art.",
        related: ["history_middle_ages", "art_painting"],
        keywords: ["renaissance", "da vinci", "michelangelo", "rebirth", "florence"],
        socratic_questions: [
            "How did the shift towards humanism change the way artists depicted people compared to the Middle Ages?",
            "Why might wealthy merchants funding art lead to an explosion of creativity?"
        ]
    },
    "lit_shakespeare": {
        id: "lit_shakespeare",
        title: "William Shakespeare",
        category: "Literature",
        summary: "An English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist. He is often called England's national poet.",
        related: ["art_renaissance"],
        keywords: ["shakespeare", "hamlet", "romeo", "juliet", "playwright", "globe theatre"],
        socratic_questions: [
            "Why do you think stories written over 400 years ago still resonate with modern audiences?",
            "How does Shakespeare use soliloquies to show a character's internal conflict?"
        ]
    },

    // GEOGRAPHY
    "geo_plate_tectonics": {
        id: "geo_plate_tectonics",
        title: "Plate Tectonics",
        category: "Geography & Earth Science",
        summary: "The scientific theory that Earth's outer shell is divided into several plates that glide over the mantle, the rocky inner layer above the core. The plates act like a hard and rigid shell compared to Earth's mantle.",
        related: ["geo_climate", "science_earth"],
        keywords: ["plate tectonics", "earthquake", "volcano", "pangea", "continental drift"],
        socratic_questions: [
            "If the continents are constantly moving, what might the Earth look like in a million years?",
            "How do tectonic plates moving against each other cause earthquakes and volcanoes?"
        ]
    },
    "geo_climate": {
        id: "geo_climate",
        title: "Climate Systems",
        category: "Geography & Earth Science",
        summary: "The complex system consisting of the atmosphere, hydrosphere, cryosphere, lithosphere and biosphere, and the interactions between them. Climate is distinct from weather.",
        related: ["geo_plate_tectonics", "history_industrial_revolution"],
        keywords: ["climate", "weather", "global warming", "atmosphere", "ecosystem"],
        socratic_questions: [
            "What is the difference between weather and climate?",
            "How does the ocean regulate the Earth's climate?"
        ]
    }
};

window.KnowledgeGraph = KnowledgeGraph;
