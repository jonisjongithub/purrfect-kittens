/**
 * Purrfect Kittens - JavaScript Application
 * Fetches random kitten images with breed info and displays fun cat facts
 * Includes interactive Cat Fact Quiz!
 */

// ===================================
// Cat Facts Database
// ===================================
const catFacts = [
    "Cats sleep for about 70% of their lives – that's around 13-16 hours a day!",
    "A group of cats is called a 'clowder' and a group of kittens is called a 'kindle'.",
    "Cats have over 20 different vocalizations, including the meow, purr, and chirp.",
    "A cat's hearing is much more sensitive than a human's or dog's.",
    "Cats can rotate their ears 180 degrees!",
    "The first cat in space was a French cat named Félicette in 1963.",
    "Cats spend about 30-50% of their day grooming themselves.",
    "A cat's nose print is unique, just like a human's fingerprint.",
    "Cats can jump up to 6 times their length!",
    "The oldest known pet cat was found in a 9,500-year-old grave on Cyprus.",
    "Cats have a specialized collarbone that allows them to always land on their feet.",
    "A cat's purr vibrates at 25-150 Hz, which can promote healing!",
    "Cats can't taste sweetness – they lack the taste receptors for it.",
    "The average cat can run at speeds up to 30 mph!",
    "Cats have whiskers on the backs of their front legs too.",
    "A cat's brain is 90% similar to a human's brain.",
    "Cats can see in light levels six times lower than what humans need.",
    "The longest cat ever measured was 48.5 inches from nose to tail!",
    "Cats have 230 bones in their body (humans have 206).",
    "A cat's heart beats nearly twice as fast as a human heart.",
    "Cats can dream just like humans do!",
    "The richest cat in the world inherited $13 million from its owner.",
    "Cats can make over 100 different sounds.",
    "A cat's sense of smell is 14 times stronger than a human's.",
    "Kittens start to dream when they're about one week old.",
    "Cats use their whiskers to detect if they can fit through a space.",
    "A cat's jaw can't move sideways, only up and down.",
    "Cats have a third eyelid called a 'haw' to protect their eyes.",
    "The first cat video was recorded in 1894!",
    "Cats can drink seawater to survive (their kidneys filter out the salt).",
    "A group of kittens born at the same time is called a 'litter'.",
    "Cats recognize their owner's voice but often choose to ignore it!",
    "The technical term for a cat's hairball is a 'bezoar'.",
    "Cats have been domesticated for over 4,000 years.",
    "A cat's tail contains almost 10% of all the bones in its body.",
    "Cats can't climb head-first down a tree because their claws curve the wrong way.",
    "The heaviest domestic cat on record weighed 46 pounds!",
    "Cats have a special reflective layer behind their eyes called the tapetum lucidum.",
    "A female cat is called a 'queen' and a male cat is called a 'tom'.",
    "Cats spend about 15% of their day playing.",
    "The first cloned cat was named 'CC' (Copy Cat) in 2001.",
    "Cats have scent glands on their cheeks, paws, and the base of their tail.",
    "A cat's field of vision is about 200 degrees.",
    "Cats can't see directly below their nose.",
    "The world's oldest cat lived to be 38 years old!",
    "Cats have a specialized 'righting reflex' that helps them land on their feet.",
    "A cat's meow is almost exclusively used to communicate with humans.",
    "Cats have retractable claws, which helps keep them sharp.",
    "The average cat has 18 toes (5 on each front paw, 4 on each back paw).",
    "Cats can move their ears independently of each other.",
    "A cat named Stubbs was the mayor of a town in Alaska for 20 years!",
    "Cats prefer their food at room temperature – like fresh prey would be.",
    "The pattern on a cat's nose is as unique as a human fingerprint.",
    "Cats have a top speed of about 30 mph, faster than Usain Bolt!"
];

// ===================================
// Quiz Questions Database
// ===================================
const quizQuestions = [
    {
        question: "How much of their lives do cats spend sleeping?",
        options: ["About 30%", "About 50%", "About 70%", "About 90%"],
        correct: 2,
        factIndex: 0
    },
    {
        question: "What is a group of cats called?",
        options: ["A pack", "A clowder", "A herd", "A flock"],
        correct: 1,
        factIndex: 1
    },
    {
        question: "How many degrees can cats rotate their ears?",
        options: ["90 degrees", "120 degrees", "180 degrees", "360 degrees"],
        correct: 2,
        factIndex: 4
    },
    {
        question: "What was the name of the first cat in space?",
        options: ["Whiskers", "Félicette", "Luna", "Astro"],
        correct: 1,
        factIndex: 5
    },
    {
        question: "What percentage of their day do cats spend grooming?",
        options: ["10-20%", "30-50%", "60-70%", "80-90%"],
        correct: 1,
        factIndex: 6
    },
    {
        question: "How far can cats jump relative to their body length?",
        options: ["2 times their length", "4 times their length", "6 times their length", "8 times their length"],
        correct: 2,
        factIndex: 8
    },
    {
        question: "At what frequency does a cat's purr vibrate?",
        options: ["5-25 Hz", "25-150 Hz", "150-300 Hz", "300-500 Hz"],
        correct: 1,
        factIndex: 11
    },
    {
        question: "What can't cats taste?",
        options: ["Sourness", "Bitterness", "Saltiness", "Sweetness"],
        correct: 3,
        factIndex: 12
    },
    {
        question: "How fast can the average cat run?",
        options: ["Up to 15 mph", "Up to 20 mph", "Up to 30 mph", "Up to 40 mph"],
        correct: 2,
        factIndex: 13
    },
    {
        question: "How many bones do cats have in their body?",
        options: ["180 bones", "206 bones", "230 bones", "260 bones"],
        correct: 2,
        factIndex: 18
    },
    {
        question: "How many sounds can cats make?",
        options: ["Over 20 sounds", "Over 50 sounds", "Over 100 sounds", "Over 200 sounds"],
        correct: 2,
        factIndex: 22
    },
    {
        question: "How much stronger is a cat's sense of smell compared to humans?",
        options: ["5 times stronger", "10 times stronger", "14 times stronger", "20 times stronger"],
        correct: 2,
        factIndex: 23
    },
    {
        question: "What is the technical term for a cat's hairball?",
        options: ["Furball", "Bezoar", "Trichobezoar", "Gastrolith"],
        correct: 1,
        factIndex: 32
    },
    {
        question: "How many years have cats been domesticated?",
        options: ["Over 1,000 years", "Over 2,000 years", "Over 4,000 years", "Over 10,000 years"],
        correct: 2,
        factIndex: 33
    },
    {
        question: "What is a female cat called?",
        options: ["A princess", "A queen", "A duchess", "A dame"],
        correct: 1,
        factIndex: 38
    },
    {
        question: "How many toes does the average cat have?",
        options: ["16 toes", "18 toes", "20 toes", "22 toes"],
        correct: 1,
        factIndex: 48
    },
    {
        question: "How old was the world's oldest cat?",
        options: ["28 years old", "33 years old", "38 years old", "42 years old"],
        correct: 2,
        factIndex: 44
    },
    {
        question: "What is a cat's field of vision?",
        options: ["About 120 degrees", "About 160 degrees", "About 200 degrees", "About 270 degrees"],
        correct: 2,
        factIndex: 42
    }
];

// ===================================
// DOM Elements
// ===================================
const kittenImages = [
    document.getElementById('kittenImage1'),
    document.getElementById('kittenImage2'),
    document.getElementById('kittenImage3')
];
const loaders = [
    document.getElementById('loader1'),
    document.getElementById('loader2'),
    document.getElementById('loader3')
];
const breedNames = [
    document.getElementById('breedName1'),
    document.getElementById('breedName2'),
    document.getElementById('breedName3')
];
const breedOrigins = [
    document.getElementById('breedOrigin1'),
    document.getElementById('breedOrigin2'),
    document.getElementById('breedOrigin3')
];
const breedTemperaments = [
    document.getElementById('breedTemperament1'),
    document.getElementById('breedTemperament2'),
    document.getElementById('breedTemperament3')
];
const factText = document.getElementById('factText');
const showAnotherBtn = document.getElementById('showAnotherBtn');
const counterElement = document.getElementById('counter');
const themeToggle = document.getElementById('themeToggle');

// Quiz DOM Elements
const quizBtn = document.getElementById('quizBtn');
const quizModalOverlay = document.getElementById('quizModalOverlay');
const quizCloseBtn = document.getElementById('quizCloseBtn');
const quizStart = document.getElementById('quizStart');
const quizQuestion = document.getElementById('quizQuestion');
const quizResults = document.getElementById('quizResults');
const startQuizBtn = document.getElementById('startQuizBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const closeQuizBtn = document.getElementById('closeQuizBtn');
const questionText = document.getElementById('questionText');
const quizOptions = document.getElementById('quizOptions');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const quizProgressFill = document.getElementById('quizProgressFill');
const currentScoreEl = document.getElementById('currentScore');
const questionsAnsweredEl = document.getElementById('questionsAnswered');
const resultsEmoji = document.getElementById('resultsEmoji');
const resultsTitle = document.getElementById('resultsTitle');
const finalScoreEl = document.getElementById('finalScore');
const finalTotalEl = document.getElementById('finalTotal');
const resultsMessage = document.getElementById('resultsMessage');
const confettiCanvas = document.getElementById('confettiCanvas');

// ===================================
// State
// ===================================
let kittenCount = 0;
let isLoading = false;
let lastFactIndex = -1;
let isDarkMode = false;

// Quiz State
let quizState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    totalQuestions: 5
};

// ===================================
// API Configuration
// ===================================
// Request images with breed data when available
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?size=med&limit=3&has_breeds=1';
const CAT_API_FALLBACK = 'https://api.thecatapi.com/v1/images/search?size=med&limit=3';

// ===================================
// Kitten & Breed Functions
// ===================================

/**
 * Get a random cat fact (avoiding repeats when possible)
 */
function getRandomFact() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * catFacts.length);
    } while (newIndex === lastFactIndex && catFacts.length > 1);
    
    lastFactIndex = newIndex;
    return catFacts[newIndex];
}

/**
 * Show the loading state for a specific kitten
 */
function showLoader(index) {
    loaders[index].classList.remove('hidden');
    kittenImages[index].style.display = 'none';
    kittenImages[index].classList.add('loading');
}

/**
 * Hide the loading state for a specific kitten
 */
function hideLoader(index) {
    loaders[index].classList.add('hidden');
    kittenImages[index].style.display = 'block';
    kittenImages[index].classList.remove('loading');
}

/**
 * Show all loaders
 */
function showAllLoaders() {
    for (let i = 0; i < 3; i++) {
        showLoader(i);
    }
}

/**
 * Update the kitten counter (adds 3 for each button press)
 */
function updateCounter() {
    kittenCount += 3;
    counterElement.textContent = kittenCount;
    
    // Save to localStorage for persistence
    try {
        localStorage.setItem('purrfectKittensCount', kittenCount.toString());
    } catch (e) {
        // localStorage might not be available
    }
}

/**
 * Load the counter from localStorage
 */
function loadCounter() {
    try {
        const saved = localStorage.getItem('purrfectKittensCount');
        if (saved) {
            kittenCount = parseInt(saved, 10) || 0;
            counterElement.textContent = kittenCount;
        }
    } catch (e) {
        // localStorage might not be available
    }
}

/**
 * Update breed information for a kitten card
 */
function updateBreedInfo(index, catData) {
    if (catData.breeds && catData.breeds.length > 0) {
        const breed = catData.breeds[0];
        breedNames[index].textContent = breed.name || 'Mystery Kitten';
        breedOrigins[index].textContent = breed.origin || 'Unknown origin';
        
        // Truncate temperament if too long
        let temperament = breed.temperament || 'Adorable';
        if (temperament.length > 40) {
            const temps = temperament.split(', ').slice(0, 3);
            temperament = temps.join(', ');
        }
        breedTemperaments[index].textContent = temperament;
    } else {
        // No breed data available
        breedNames[index].textContent = 'Mystery Kitten';
        breedOrigins[index].textContent = 'Unknown origin';
        breedTemperaments[index].textContent = 'Adorable & Cute';
    }
}

// ===================================
// Theme Functions
// ===================================

/**
 * Set the theme (light or dark)
 */
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        isDarkMode = true;
    } else {
        document.documentElement.removeAttribute('data-theme');
        isDarkMode = false;
    }
    
    // Save preference
    try {
        localStorage.setItem('purrfectKittensTheme', theme);
    } catch (e) {
        // localStorage might not be available
    }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    if (isDarkMode) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

/**
 * Load saved theme preference or detect system preference
 */
function loadTheme() {
    try {
        const savedTheme = localStorage.getItem('purrfectKittensTheme');
        
        if (savedTheme) {
            // Use saved preference
            setTheme(savedTheme);
        } else {
            // Check system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }
    } catch (e) {
        // Default to light theme
        setTheme('light');
    }
}

/**
 * Display a new cat fact with animation
 */
function displayFact() {
    const fact = getRandomFact();
    factText.style.opacity = '0';
    
    setTimeout(() => {
        factText.textContent = fact;
        factText.style.opacity = '1';
    }, 200);
}

/**
 * Fetch and display 3 new kitten images with breed info
 */
async function fetchKittens() {
    if (isLoading) return;
    
    isLoading = true;
    showAnotherBtn.disabled = true;
    showAllLoaders();
    
    try {
        // Try to get images with breed data first
        let response = await fetch(CAT_API_URL);
        let data = await response.json();
        
        // If we don't get enough images with breeds, fall back to regular endpoint
        if (!data || data.length < 3) {
            response = await fetch(CAT_API_FALLBACK);
            data = await response.json();
        }
        
        if (!response.ok) {
            throw new Error('Failed to fetch kittens');
        }
        
        if (data && data.length >= 3) {
            // Track how many images have loaded
            let loadedCount = 0;
            
            // Load all 3 images
            data.forEach((catData, index) => {
                if (index >= 3) return; // Only process first 3
                
                const img = new Image();
                
                img.onload = () => {
                    kittenImages[index].src = catData.url;
                    kittenImages[index].alt = catData.breeds?.[0]?.name 
                        ? `A ${catData.breeds[0].name} kitten` 
                        : 'An adorable kitten';
                    hideLoader(index);
                    
                    // Update breed info
                    updateBreedInfo(index, catData);
                    
                    // Add fade-in animation
                    kittenImages[index].classList.add('fade-in');
                    setTimeout(() => {
                        kittenImages[index].classList.remove('fade-in');
                    }, 500);
                    
                    loadedCount++;
                    
                    // When all 3 are loaded, update counter and re-enable button
                    if (loadedCount === 3) {
                        updateCounter();
                        displayFact();
                        isLoading = false;
                        showAnotherBtn.disabled = false;
                    }
                };
                
                img.onerror = () => {
                    // Use fallback for this image
                    kittenImages[index].src = `https://placekitten.com/${300 + index * 10}/${300 + index * 10}`;
                    kittenImages[index].alt = 'A cute placeholder kitten';
                    hideLoader(index);
                    
                    // Set mystery breed info
                    breedNames[index].textContent = 'Mystery Kitten';
                    breedOrigins[index].textContent = 'Unknown origin';
                    breedTemperaments[index].textContent = 'Adorable';
                    
                    loadedCount++;
                    if (loadedCount === 3) {
                        isLoading = false;
                        showAnotherBtn.disabled = false;
                    }
                };
                
                img.src = catData.url;
            });
        } else {
            throw new Error('Not enough kittens found');
        }
    } catch (error) {
        console.error('Error fetching kittens:', error);
        
        // Show error state with fallbacks
        factText.textContent = "Oops! Couldn't fetch kittens. Please try again! 😿";
        
        // Use fallback placeholders for all 3
        for (let i = 0; i < 3; i++) {
            kittenImages[i].src = `https://placekitten.com/${300 + i * 20}/${300 + i * 20}`;
            kittenImages[i].alt = 'A cute placeholder kitten';
            hideLoader(i);
            
            breedNames[i].textContent = 'Mystery Kitten';
            breedOrigins[i].textContent = 'Unknown origin';
            breedTemperaments[i].textContent = 'Adorable';
        }
        
        isLoading = false;
        showAnotherBtn.disabled = false;
    }
}

// ===================================
// Quiz Functions
// ===================================

/**
 * Shuffle an array (Fisher-Yates algorithm)
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Open the quiz modal
 */
function openQuiz() {
    quizModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    showQuizScreen('start');
}

/**
 * Close the quiz modal
 */
function closeQuiz() {
    quizModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Show a specific quiz screen
 */
function showQuizScreen(screen) {
    quizStart.classList.add('hidden');
    quizQuestion.classList.add('hidden');
    quizResults.classList.add('hidden');
    
    switch (screen) {
        case 'start':
            quizStart.classList.remove('hidden');
            break;
        case 'question':
            quizQuestion.classList.remove('hidden');
            break;
        case 'results':
            quizResults.classList.remove('hidden');
            break;
    }
}

/**
 * Start a new quiz
 */
function startQuiz() {
    // Reset state
    quizState.score = 0;
    quizState.currentIndex = 0;
    
    // Select random questions
    quizState.questions = shuffleArray(quizQuestions).slice(0, quizState.totalQuestions);
    
    // Update UI
    totalQuestionsEl.textContent = quizState.totalQuestions;
    currentScoreEl.textContent = '0';
    questionsAnsweredEl.textContent = '0';
    
    // Show first question
    showQuizScreen('question');
    displayQuestion();
}

/**
 * Display the current question
 */
function displayQuestion() {
    const question = quizState.questions[quizState.currentIndex];
    
    // Update progress
    currentQuestionEl.textContent = quizState.currentIndex + 1;
    const progress = ((quizState.currentIndex) / quizState.totalQuestions) * 100;
    quizProgressFill.style.width = `${progress}%`;
    
    // Display question
    questionText.textContent = question.question;
    
    // Clear and populate options
    quizOptions.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        quizOptions.appendChild(button);
    });
}

/**
 * Handle answer selection
 */
function selectAnswer(selectedIndex) {
    const question = quizState.questions[quizState.currentIndex];
    const options = quizOptions.querySelectorAll('.quiz-option');
    
    // Disable all options
    options.forEach(opt => opt.classList.add('disabled'));
    
    // Mark selected and correct/incorrect
    options[selectedIndex].classList.add('selected');
    
    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        quizState.score++;
        currentScoreEl.textContent = quizState.score;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    questionsAnsweredEl.textContent = quizState.currentIndex + 1;
    
    // Move to next question after delay
    setTimeout(() => {
        quizState.currentIndex++;
        
        if (quizState.currentIndex >= quizState.totalQuestions) {
            showResults();
        } else {
            displayQuestion();
        }
    }, 1500);
}

/**
 * Show quiz results
 */
function showResults() {
    showQuizScreen('results');
    
    const score = quizState.score;
    const total = quizState.totalQuestions;
    const percentage = (score / total) * 100;
    
    finalScoreEl.textContent = score;
    finalTotalEl.textContent = total;
    
    // Update progress bar to 100%
    quizProgressFill.style.width = '100%';
    
    // Set results based on score
    if (percentage === 100) {
        resultsEmoji.textContent = '🎉';
        resultsTitle.textContent = 'Purrfect!';
        resultsMessage.textContent = "You're a cat genius! Amazing job!";
        triggerConfetti();
    } else if (percentage >= 80) {
        resultsEmoji.textContent = '😸';
        resultsTitle.textContent = 'Almost Purrfect!';
        resultsMessage.textContent = "Wow, you really know your cat facts!";
    } else if (percentage >= 60) {
        resultsEmoji.textContent = '😺';
        resultsTitle.textContent = 'Not Bad!';
        resultsMessage.textContent = "Keep viewing kittens to learn more!";
    } else if (percentage >= 40) {
        resultsEmoji.textContent = '🐱';
        resultsTitle.textContent = 'Getting There!';
        resultsMessage.textContent = "A few more kitten sessions will help!";
    } else {
        resultsEmoji.textContent = '😿';
        resultsTitle.textContent = 'Keep Learning!';
        resultsMessage.textContent = "Time to view more kittens and facts!";
    }
}

/**
 * Trigger confetti animation for perfect score
 */
function triggerConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#FFB6C1', '#E6E6FA', '#98FB98', '#FFD700', '#FF9AAC', '#87CEEB'];
    
    // Create confetti pieces
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }
    
    let animationFrame;
    const animate = () => {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        let stillVisible = false;
        
        confettiPieces.forEach(piece => {
            piece.y += piece.speedY;
            piece.x += piece.speedX;
            piece.rotation += piece.rotationSpeed;
            
            if (piece.y < confettiCanvas.height + 20) {
                stillVisible = true;
            }
            
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate((piece.rotation * Math.PI) / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size / 2);
            ctx.restore();
        });
        
        if (stillVisible) {
            animationFrame = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }
    };
    
    animate();
    
    // Clear after 5 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }, 5000);
}

// ===================================
// Initialize the application
// ===================================
function init() {
    // Load saved theme
    loadTheme();
    
    // Load saved counter
    loadCounter();
    
    // Add click event listener for kittens button
    showAnotherBtn.addEventListener('click', fetchKittens);
    
    // Add click event listener for theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Quiz event listeners
    quizBtn.addEventListener('click', openQuiz);
    quizCloseBtn.addEventListener('click', closeQuiz);
    startQuizBtn.addEventListener('click', startQuiz);
    playAgainBtn.addEventListener('click', startQuiz);
    closeQuizBtn.addEventListener('click', closeQuiz);
    
    // Close modal on overlay click
    quizModalOverlay.addEventListener('click', (e) => {
        if (e.target === quizModalOverlay) {
            closeQuiz();
        }
    });
    
    // Add keyboard support
    document.addEventListener('keydown', (e) => {
        // Escape to close quiz
        if (e.code === 'Escape' && quizModalOverlay.classList.contains('active')) {
            closeQuiz();
            return;
        }
        
        // Don't handle other keys if quiz is open
        if (quizModalOverlay.classList.contains('active')) {
            return;
        }
        
        // Space or Enter for new kittens
        if (e.code === 'Space' || e.code === 'Enter') {
            if (document.activeElement === showAnotherBtn || 
                document.activeElement === themeToggle ||
                document.activeElement === quizBtn) {
                return; // Let the button handle it
            }
            e.preventDefault();
            fetchKittens();
        }
        
        // 'D' key to toggle dark mode
        if (e.code === 'KeyD' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                toggleTheme();
            }
        }
        
        // 'Q' key to open quiz
        if (e.code === 'KeyQ' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                openQuiz();
            }
        }
    });
    
    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't set a preference
            if (!localStorage.getItem('purrfectKittensTheme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    // Fetch the first 3 kittens
    fetchKittens();
    
    console.log('🐱 Purrfect Kittens initialized!');
    console.log('   Press Space for more kittens');
    console.log('   Press D to toggle dark mode');
    console.log('   Press Q to open the quiz');
}

// ===================================
// Start the app when DOM is ready
// ===================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
