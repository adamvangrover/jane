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
    },

    // CHEMISTRY
    "chem_periodic_table": {
        id: "chem_periodic_table",
        title: "The Periodic Table",
        category: "Chemistry",
        summary: "A tabular display of the chemical elements, which are arranged by atomic number, electron configuration, and recurring chemical properties. The structure of the table shows periodic trends.",
        related: ["physics_gravity", "bio_cell_biology"],
        keywords: ["chemistry", "periodic table", "elements", "atoms", "molecules"],
        socratic_questions: [
            "Why is it useful to organize elements into columns and rows?",
            "How does an element's position on the periodic table relate to its reactivity?"
        ]
    },
    "chem_chemical_bonds": {
        id: "chem_chemical_bonds",
        title: "Chemical Bonds",
        category: "Chemistry",
        summary: "A chemical bond is a lasting attraction between atoms, ions or molecules that enables the formation of chemical compounds. The bond may result from the electrostatic force of attraction between oppositely charged ions as in ionic bonds or through the sharing of electrons as in covalent bonds.",
        related: ["chem_periodic_table", "bio_genetics"],
        keywords: ["bond", "covalent", "ionic", "molecule", "chemistry"],
        socratic_questions: [
            "If atoms are neutral, why do they form bonds with other atoms?",
            "How does the sharing or transferring of electrons change the properties of the resulting substance compared to the original elements?"
        ]
    },

    // ADVANCED COMPUTER SCIENCE
    "cs_machine_learning": {
        id: "cs_machine_learning",
        title: "Machine Learning",
        category: "Computer Science",
        summary: "A subfield of artificial intelligence that involves the development of algorithms and statistical models that enable computers to improve their performance on a specific task through experience (data), without being explicitly programmed.",
        related: ["cs_algorithms", "math_algebra", "cs_python"],
        keywords: ["machine learning", "ai", "neural networks", "data", "training"],
        socratic_questions: [
            "How is 'training' a machine learning model different from traditional programming?",
            "If a model only learns from historical data, how might it struggle with completely novel situations?"
        ]
    },
    "cs_quantum_computing": {
        id: "cs_quantum_computing",
        title: "Quantum Computing",
        category: "Computer Science",
        summary: "An area of computing focused on developing computer technology based on the principles of quantum theory, which explains the behavior of energy and material on the atomic and subatomic levels. Quantum computers use qubits.",
        related: ["physics_relativity", "cs_algorithms"],
        keywords: ["quantum", "qubit", "superposition", "entanglement", "computing"],
        socratic_questions: [
            "If a regular bit is either 0 or 1, what does it mean for a qubit to be in 'superposition'?",
            "How might quantum computing impact the way we currently encrypt data?"
        ]
    },
    "cs_artificial_intelligence": {
        id: "cs_artificial_intelligence",
        title: "Artificial Intelligence",
        category: "Computer Science",
        summary: "The simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction.",
        related: ["cs_machine_learning", "phil_ethics"],
        keywords: ["ai", "artificial intelligence", "reasoning", "automation"],
        socratic_questions: [
            "What distinguishes 'intelligence' from a really complex set of programmed rules?",
            "If a machine can mimic human intelligence perfectly, does it have a mind?"
        ]
    },
    "cs_cryptography": {
        id: "cs_cryptography",
        title: "Cryptography",
        category: "Computer Science",
        summary: "The practice and study of techniques for secure communication in the presence of adversarial behavior. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages.",
        related: ["cs_algorithms", "cs_quantum_computing", "math_algebra"],
        keywords: ["encryption", "decryption", "security", "cipher", "keys"],
        socratic_questions: [
            "Why is math so fundamental to modern digital security?",
            "If someone knows the algorithm used to encrypt a message, how can the message still be secure?"
        ]
    },

    // ECONOMICS & FINANCE
    "econ_microeconomics": {
        id: "econ_microeconomics",
        title: "Microeconomics",
        category: "Economics",
        summary: "A branch of economics that studies the behavior of individuals and firms in making decisions regarding the allocation of scarce resources and the interactions among these individuals and firms.",
        related: ["econ_macroeconomics", "psych_behaviorism"],
        keywords: ["supply", "demand", "price", "markets", "consumers"],
        socratic_questions: [
            "If the price of a good increases, what usually happens to the demand for it, and why might there be exceptions?",
            "How do individuals decide what is 'valuable'?"
        ]
    },
    "econ_macroeconomics": {
        id: "econ_macroeconomics",
        title: "Macroeconomics",
        category: "Economics",
        summary: "A branch of economics dealing with the performance, structure, behavior, and decision-making of an economy as a whole. This includes regional, national, and global economies.",
        related: ["econ_microeconomics", "history_industrial_revolution"],
        keywords: ["gdp", "inflation", "unemployment", "monetary policy", "economy"],
        socratic_questions: [
            "Why does a government sometimes intentionally try to slow down a booming economy?",
            "How is measuring the success of an entire nation's economy different from measuring a single business's success?"
        ]
    },
    "econ_cryptocurrency": {
        id: "econ_cryptocurrency",
        title: "Cryptocurrency",
        category: "Economics",
        summary: "A digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology.",
        related: ["cs_cryptography", "econ_macroeconomics"],
        keywords: ["crypto", "bitcoin", "blockchain", "decentralized", "money"],
        socratic_questions: [
            "If a currency is purely digital and backed by no government, what gives it value?",
            "How does a decentralized ledger (blockchain) solve the problem of 'trust' in financial transactions?"
        ]
    },

    // SOCIOLOGY
    "soc_culture": {
        id: "soc_culture",
        title: "Culture",
        category: "Sociology",
        summary: "An umbrella term which encompasses the social behavior and norms found in human societies, as well as the knowledge, beliefs, arts, laws, customs, capabilities, and habits of the individuals in these groups.",
        related: ["history_ancient_greece", "lit_shakespeare", "phil_ethics"],
        keywords: ["culture", "society", "norms", "traditions", "values"],
        socratic_questions: [
            "How much of what we consider 'normal' is actually a constructed part of our specific culture?",
            "In what ways can culture change over time, and what drives those changes?"
        ]
    },
    "soc_stratification": {
        id: "soc_stratification",
        title: "Social Stratification",
        category: "Sociology",
        summary: "A society's categorization of its people into groups based on socioeconomic factors like wealth, income, race, education, ethnicity, gender, occupation, social status, or derived power (social and political).",
        related: ["econ_macroeconomics", "history_industrial_revolution"],
        keywords: ["class", "inequality", "status", "wealth", "hierarchy"],
        socratic_questions: [
            "Why do social hierarchies exist in almost all human societies?",
            "How might education act as both a tool for social mobility and a mechanism for maintaining stratification?"
        ]
    },

    // LINGUISTICS
    "ling_syntax": {
        id: "ling_syntax",
        title: "Syntax",
        category: "Linguistics",
        summary: "The set of rules, principles, and processes that govern the structure of sentences in a given language, specifically word order.",
        related: ["cs_programming", "ling_semantics"],
        keywords: ["grammar", "sentence", "structure", "language", "words"],
        socratic_questions: [
            "Why can a sentence be grammatically correct but completely nonsensical?",
            "How does the syntax of human language differ from the syntax of a programming language?"
        ]
    },
    "ling_semantics": {
        id: "ling_semantics",
        title: "Semantics",
        category: "Linguistics",
        summary: "The linguistic and philosophical study of meaning in language, programming languages, formal logics, and semiotics. It focuses on the relationship between signifiers—like words, phrases, signs, and symbols—and what they stand for.",
        related: ["ling_syntax", "phil_ethics"],
        keywords: ["meaning", "words", "communication", "interpretation", "logic"],
        socratic_questions: [
            "How can two people say the exact same words but mean completely different things?",
            "If words change their meaning over time, who decides what a word means right now?"
        ]
    },

    // MEDICINE & HEALTH
    "med_immunology": {
        id: "med_immunology",
        title: "Immunology",
        category: "Medicine",
        summary: "A branch of biology and medicine that covers the study of immune systems in all organisms. It maps, measures, and contextualizes the physiological functioning of the immune system in states of both health and diseases.",
        related: ["bio_cell_biology", "bio_evolution"],
        keywords: ["immune", "antibodies", "vaccines", "health", "disease"],
        socratic_questions: [
            "How does the body 'remember' a disease it has fought off before?",
            "Why does the immune system sometimes attack the body itself, as in autoimmune diseases?"
        ]
    },
    "med_pharmacology": {
        id: "med_pharmacology",
        title: "Pharmacology",
        category: "Medicine",
        summary: "A branch of medicine, biology and pharmaceutical sciences concerned with drug or medication action, where a drug may be defined as any artificial, natural, or endogenous molecule which exerts a biochemical or physiological effect on the cell, tissue, organ, or organism.",
        related: ["chem_chemical_bonds", "med_immunology"],
        keywords: ["drugs", "medicine", "biochemistry", "treatment", "pharmacy"],
        socratic_questions: [
            "How does a pill you swallow know where to go in your body to fix a problem?",
            "What is the difference between a medicine and a poison?"
        ]
    },
    "med_anatomy": {
        id: "med_anatomy",
        title: "Human Anatomy",
        category: "Medicine",
        summary: "The study of the structure of the human body. An understanding of anatomy is key to the practice of medicine and other areas of health.",
        related: ["bio_cell_biology", "med_pharmacology"],
        keywords: ["body", "organs", "bones", "muscles", "structure"],
        socratic_questions: [
            "If you were designing a human skeleton from scratch, would you change anything about how the joints work?",
            "How do different organ systems rely on each other to keep the body alive?"
        ]
    },

    // POLITICAL SCIENCE
    "poli_democracy": {
        id: "poli_democracy",
        title: "Democracy",
        category: "Political Science",
        summary: "A form of government in which the people have the authority to deliberate and decide legislation, or to choose governing officials to do so.",
        related: ["history_ancient_greece", "phil_ethics"],
        keywords: ["voting", "government", "representation", "freedom", "elections"],
        socratic_questions: [
            "What are the trade-offs between a direct democracy (where everyone votes on everything) and a representative democracy?",
            "How does a democracy protect the rights of the minority against the will of the majority?"
        ]
    },
    "poli_international_relations": {
        id: "poli_international_relations",
        title: "International Relations",
        category: "Political Science",
        summary: "The scientific study of the international system, representing interactions between sovereign states, intergovernmental organizations, non-governmental organizations, and multinational corporations.",
        related: ["econ_macroeconomics", "geo_climate"],
        keywords: ["diplomacy", "treaties", "globalization", "sovereignty", "conflict"],
        socratic_questions: [
            "If there is no global police force, how do nations enforce agreements with each other?",
            "How does economic interdependence between nations affect the likelihood of war?"
        ]
    },

    // ART HISTORY
    "art_impressionism": {
        id: "art_impressionism",
        title: "Impressionism",
        category: "Art History",
        summary: "A 19th-century art movement characterized by relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities (often accentuating the effects of the passage of time).",
        related: ["art_renaissance", "history_industrial_revolution"],
        keywords: ["monet", "painting", "light", "france", "brushstrokes"],
        socratic_questions: [
            "Why did artists start prioritizing capturing 'light and moment' over photorealistic detail during this period?",
            "How might the invention of photography have pushed painters toward Impressionism?"
        ]
    },
    "art_surrealism": {
        id: "art_surrealism",
        title: "Surrealism",
        category: "Art History",
        summary: "A cultural movement that developed in Europe in the aftermath of World War I in which artists depicted unnerving, illogical scenes and developed techniques to allow the unconscious mind to express itself.",
        related: ["psych_learning", "art_impressionism"],
        keywords: ["dali", "dreams", "unconscious", "art", "bizarre"],
        socratic_questions: [
            "What can bizarre, dream-like art tell us about the human mind that realistic art cannot?",
            "How does breaking the 'rules' of reality in art affect the viewer's interpretation?"
        ]
    },

    // PHILOSOPHY (Expanded)
    "phil_existentialism": {
        id: "phil_existentialism",
        title: "Existentialism",
        category: "Philosophy",
        summary: "A form of philosophical inquiry that explores the problem of human existence and centers on the lived experience of the thinking, feeling, acting individual. In the view of the existentialist, the individual's starting point is characterized by what has been called 'the existential attitude', or a sense of disorientation, confusion, or dread in the face of an apparently meaningless or absurd world.",
        related: ["phil_ethics", "phil_stoicism"],
        keywords: ["meaning", "absurdism", "sartre", "camus", "freedom", "choice"],
        socratic_questions: [
            "If life has no inherent, pre-given meaning, how does one go about creating meaning for themselves?",
            "Why is absolute freedom sometimes seen as terrifying rather than liberating?"
        ]
    },
    "phil_epistemology": {
        id: "phil_epistemology",
        title: "Epistemology",
        category: "Philosophy",
        summary: "The branch of philosophy concerned with knowledge. Epistemologists study the nature, origin, and scope of knowledge, epistemic justification, the rationality of belief, and various related issues.",
        related: ["science_newton", "math_logic"],
        keywords: ["knowledge", "truth", "belief", "justification", "reason"],
        socratic_questions: [
            "How do you know that you are not dreaming right now?",
            "What is the difference between believing something that happens to be true, and actually 'knowing' it?"
        ]
    },
    "math_logic": {
        id: "math_logic",
        title: "Logic",
        category: "Mathematics & Philosophy",
        summary: "The study of correct reasoning or good arguments. It is often divided into formal and informal logic.",
        related: ["math_algebra", "cs_programming", "phil_epistemology"],
        keywords: ["logic", "reasoning", "deduction", "induction", "fallacy"],
        socratic_questions: [
            "If all A are B, and all B are C, are all A necessarily C? Why?",
            "What is a logical fallacy, and how can identifying them improve our thinking?"
        ]
    }
};

window.KnowledgeGraph = KnowledgeGraph;
