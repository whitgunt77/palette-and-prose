// Project: Palette & Prose - This code demonstrates core Unit 0 foundations.

// --- 1. Values, Data Types, and Operations ---
// Identifying the skill: Using numbers and strings for color data.
let colorName = "Sunset Peach";
let hexCode = "FFDAB9";
let totalLikes = 142 + 1;   // Incrementing likes using math operations
console.log("Color Name:", colorName, "| Likes:", totalLikes);

// --- 2. Stringing Characters Together ---
// Identifying the skill: Concatenation and Template Literals.
// Pseudocode: Format the hex code into a CSS-ready string.
let cssHex = `#${hexCode}`;
let displayTitle = `Collection: ${colorName.toUpperCase()}`;
console.log(displayTitle);   // Output: COLLECTION: SUNSET PEACH

// --- 3. Control Structures and Logic ---
// Identifying the skill: If-Else Logic.
// Pseudocode: Check if the prose entry is too long for a 'micro-essay'.
let proseLength = 150; 
if (proseLength > 200) {
    console.log("Logic: Entry too long. Please edit for Zen Mode.");
} else {
    console.log("Logic: Entry perfect for Palette & Prose.");
}


// --- 4. Building Arrays ---
// Identifying the skill: Creating a list of hex codes.
let palette = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261"];
console.log("Building Arrays: Initial Palette", palette);


// --- 5. Using Arrays ---
// Identifying the skill: Array Methods (push/pop).
// Pseudocode: Add a new aesthetic color to the user's board.
palette.push("#e76f51"); 
console.log("Using Arrays: Added new color", palette);


// --- 6. Working With Loops ---
// Identifying the skill: For-Loops.
// Pseudocode: Iterate through the palette and log each CSS-ready value.
console.log("Working With Loops: Rendering Palette Blocks...");
for (let i = 0; i < palette.length; i++) {
    console.log(`Rendering color block: ${palette[i]}`);
}