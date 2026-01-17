/**
 * Purrfect Kittens - JavaScript Application
 * Fetches random kitten images and displays fun cat facts
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
// DOM Elements
// ===================================
const kittenImage = document.getElementById('kittenImage');
const loader = document.getElementById('loader');
const factText = document.getElementById('factText');
const showAnotherBtn = document.getElementById('showAnotherBtn');
const counterElement = document.getElementById('counter');

// ===================================
// State
// ===================================
let kittenCount = 0;
let isLoading = false;
let lastFactIndex = -1;

// ===================================
// API Configuration
// ===================================
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?size=med';

// ===================================
// Functions
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
 * Show the loading state
 */
function showLoader() {
    loader.classList.remove('hidden');
    kittenImage.style.display = 'none';
    kittenImage.classList.add('loading');
}

/**
 * Hide the loading state
 */
function hideLoader() {
    loader.classList.add('hidden');
    kittenImage.style.display = 'block';
    kittenImage.classList.remove('loading');
}

/**
 * Update the kitten counter
 */
function updateCounter() {
    kittenCount++;
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
 * Fetch and display a new kitten image
 */
async function fetchKitten() {
    if (isLoading) return;
    
    isLoading = true;
    showAnotherBtn.disabled = true;
    showLoader();
    
    try {
        const response = await fetch(CAT_API_URL);
        
        if (!response.ok) {
            throw new Error('Failed to fetch kitten');
        }
        
        const data = await response.json();
        
        if (data && data.length > 0 && data[0].url) {
            // Preload the image
            const img = new Image();
            
            img.onload = () => {
                kittenImage.src = data[0].url;
                kittenImage.alt = 'An adorable kitten';
                hideLoader();
                updateCounter();
                displayFact();
                isLoading = false;
                showAnotherBtn.disabled = false;
                
                // Add fade-in animation
                kittenImage.classList.add('fade-in');
                setTimeout(() => {
                    kittenImage.classList.remove('fade-in');
                }, 500);
            };
            
            img.onerror = () => {
                throw new Error('Failed to load image');
            };
            
            img.src = data[0].url;
        } else {
            throw new Error('No kitten found');
        }
    } catch (error) {
        console.error('Error fetching kitten:', error);
        
        // Show error state with a fallback
        factText.textContent = "Oops! Couldn't fetch a kitten. Please try again! 😿";
        hideLoader();
        
        // Use a fallback placeholder
        kittenImage.src = 'https://placekitten.com/400/300';
        kittenImage.alt = 'A cute placeholder kitten';
        
        isLoading = false;
        showAnotherBtn.disabled = false;
    }
}

/**
 * Initialize the application
 */
function init() {
    // Load saved counter
    loadCounter();
    
    // Add click event listener
    showAnotherBtn.addEventListener('click', fetchKitten);
    
    // Add keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            if (document.activeElement === showAnotherBtn) {
                return; // Let the button handle it
            }
            e.preventDefault();
            fetchKitten();
        }
    });
    
    // Fetch the first kitten
    fetchKitten();
    
    console.log('🐱 Purrfect Kittens initialized! Press Space or click the button for more kittens!');
}

// ===================================
// Start the app when DOM is ready
// ===================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
