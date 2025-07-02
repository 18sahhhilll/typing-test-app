const texts = {
  easy: [
    "The sun is bright and warm. Birds sing high in the blue sky. Children play with balls, swing on swings, and laugh together. It is a simple, happy day filled with smiles and sunshine.",
    "Cats sleep on rooftops under the sun. Kids play in the park with joy. Trees move gently with the wind, and people enjoy their walks. Everyone loves peaceful and quiet days like these.",
    "Today is a fine day. I walk to the shop to buy milk and bread. The sky is blue, the grass is green, and I see butterflies flying around. I smile and enjoy my short walk home.",
    "She reads a book every night. It helps her fall asleep quickly. The stories are fun and exciting. She dreams of castles, magic, and adventure while sleeping soundly.",
    "We love sunny days. Ice cream melts in our hands. Friends run around and play games. Laughter fills the air as the sun shines on a beautiful afternoon.",
    "The puppy plays with a ball. It runs and jumps with joy. Everyone watches and smiles. The dog is happy and full of energy. What a fun little animal to watch.",
    "He goes to the library. He finds a book to read. The pages are full of stories. He reads quietly and enjoys his time. Reading makes him feel calm and happy.",
    "Birds fly in the sky. The wind is cool and light. Leaves fall to the ground slowly. People walk and talk under the trees. It is a calm and quiet day.",
    "The baby laughs at the toy. It makes funny sounds and lights up. Her parents laugh too. Everyone is happy and smiling. It’s a moment full of love.",
    "The cake is on the table. It smells sweet and looks tasty. She lights the candles and sings a song. Everyone claps and smiles during the birthday party."
  ],

  medium: [
    "Learning to type quickly is a valuable skill that saves time and improves productivity. To build both speed and accuracy, it’s important to practice daily. Start with easy sentences, then move to complex ones. With effort and focus, anyone can become a fast and confident typist in a short time.",
    "Typing faster is more than just hitting keys quickly. It requires good hand positioning, knowing where each key is, and avoiding common mistakes. Practicing for just fifteen minutes daily can make a noticeable difference. Over time, your confidence and efficiency will grow.",
    "Programming requires both patience and logic. Writing clear, readable code helps avoid bugs and improves collaboration with others. Consistent practice, code reviews, and small projects are excellent ways to learn. Eventually, complex tasks become easier, and solving problems becomes more enjoyable.",
    "You can improve your typing speed and accuracy with regular effort. Try not to rush in the beginning. Instead, focus on hitting the right keys. As you build muscle memory, you will naturally get faster. Don’t forget to take breaks and maintain good posture while typing.",
    "Many people start typing slowly, but they improve quickly with consistent practice. Using online tools, copying paragraphs, or playing typing games can help. Keeping track of your progress motivates you to continue. Slowly, you’ll see that typing becomes second nature.",
    "A well-structured paragraph improves readability. When writing essays or reports, each idea should be clear. Avoid repeating words or using complicated language. Instead, aim for clarity and flow. This not only helps the reader but also boosts your writing and typing skills over time.",
    "Most students struggle with focus while typing. To stay sharp, remove distractions like phones or loud music. Sit in a quiet place and set short typing goals. These small changes can lead to big improvements. Being mindful during practice sessions will lead to quicker progress.",
    "Fast typing is essential for professionals. Whether you're sending emails, writing code, or taking notes, a good typing speed helps you keep up. It also reduces the time spent editing errors. With time and consistent effort, typing can become a natural and seamless part of your workflow.",
    "Typing isn't just about speed—it’s also about accuracy. Mistakes can lead to confusion, especially in communication. So, always aim for clean and correct typing. Use backspace less and trust your muscle memory. Confidence will grow with every session you complete successfully.",
    "Try reading what you typed out loud. This trick can help identify awkward sentences or typos. It’s useful in both typing tests and real writing. This habit improves your grammar, spelling, and sentence structure. It’s simple, yet very effective for learners of all levels."
  ],

  hard: [
    "In the realm of digital communication, typing efficiently and accurately is no longer optional but essential. The art of typing involves more than physical movement; it is a synchronization of mind, memory, and muscle. Developing this skill demands continuous practice, conscious correction of errors, and a structured approach to improvement. As one's fingers glide over the keyboard, forming words at increasing speeds, confidence builds. The typist begins to think in words per minute, not letters per second. Eventually, the keyboard fades away and the thoughts flow directly into text.",
    "Mastery in typing doesn't arrive overnight. It is the result of deliberate effort, precise hand movements, and an unwavering commitment to improvement. Every typo serves as feedback, a prompt to refine muscle memory. Over time, this process sharpens cognitive speed and decision-making, transforming typing from a manual task to an intellectual extension of thought. Much like learning a musical instrument, the rhythm of the keys begins to resonate with the rhythm of one’s thinking.",
    "Typing is not merely a technical skill; it's a cognitive dance between intention and action. The brain processes ideas, the fingers translate them into symbols, and the screen captures their meaning. Professionals, writers, programmers, and students alike benefit from typing fluency. When mastered, typing becomes a subconscious act, freeing the mind to focus on creativity, logic, or emotion. High-speed typists often describe a state of flow where ideas pour out seamlessly, uninhibited by physical constraints. To reach this state requires effort, discipline, and patience—but the result is profound.",
    "Advanced typists often train using paragraphs filled with uncommon vocabulary and complex punctuation. This intentional challenge strengthens their ability to adapt quickly. Just like musicians practice scales, typists must engage in repetitive drills. These exercises improve reaction time and prepare the mind for unfamiliar tasks. The aim is not perfection, but progress—pushing beyond one’s comfort zone.",
    "Many seasoned typists rely on split keyboards and ergonomic layouts to prevent strain during long sessions. These tools, along with proper hand placement and posture, reduce fatigue and enhance endurance. Over time, typing becomes a rhythmic and meditative practice—each keystroke a part of a larger performance. The body moves effortlessly, while the mind stays focused.",
    "Writers who master typing are better equipped to translate their ideas into structured language without interruption. They can draft entire chapters without losing their train of thought. The connection between speed and creativity becomes apparent—quick typing supports uninterrupted flow. With practice, even complex thoughts can be captured almost as fast as they appear.",
    "As modern workplaces evolve, fast typing is becoming a baseline expectation. Remote jobs, technical documentation, instant messaging, and data entry all rely on quick, accurate input. Typing is no longer a niche skill—it is a pillar of digital literacy. Those who fall behind may struggle in collaborative, time-sensitive environments.",
    "Data analysts, content creators, and developers all benefit from high typing speed. It allows them to focus less on execution and more on problem-solving. Errors become rare, and productivity skyrockets. Tools like code editors, note apps, and writing software become extensions of their skill, amplifying their creative potential.",
    "In competitive environments like coding competitions or academic tests, typing speed is a silent advantage. When thoughts can be typed instantly, more time is available for solving, editing, or reviewing. The mental load is reduced. Efficiency becomes the difference between good and great performance.",
    "Typing is an invisible skill—rarely praised but constantly relied upon. Behind every essay, script, line of code, or report is the quiet mastery of a keyboard. It's not about speed alone, but the ability to express, think, and create without friction. For this reason, typing mastery is both a practical goal and a creative liberation."
  ]
};


const toggleBtn = document.getElementById("toggleMusicBtn");
const music = document.getElementById("bgMusic");

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔇 Mute";
  } else {
    music.pause();
    toggleBtn.textContent = "🔊 Unmute";
  }
});


let testText = "";
const textDisplay = document.getElementById("textDisplay");
const inputBox = document.getElementById("inputBox");
const startBtn = document.getElementById("startBtn");
const timerDisplay = document.getElementById("timer");
const resultDisplay = document.getElementById("result");
const progressBar = document.getElementById("progressBar");
const difficultySelect = document.getElementById("difficulty");

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

function startTest() {
  const selectedDifficulty = difficultySelect.value;
  const paragraphs = texts[selectedDifficulty];
  testText = paragraphs[Math.floor(Math.random() * paragraphs.length)].replace(/\s+/g, " ").trim();
  time = 60;

  inputBox.value = "";
  inputBox.disabled = false;
  inputBox.focus();
  resultDisplay.textContent = "";
  timerDisplay.textContent = `Time ${formatTime(time)}`;
  startBtn.disabled = true;
  renderText();

  timer = setInterval(() => {
    time--;
    timerDisplay.textContent = `Time ${formatTime(time)}`;
    if (time === 0) {
      finishTest();
    }
  }, 1000);
}

function renderText() {
  textDisplay.innerHTML = "";
  for (let char of testText) {
    const span = document.createElement("span");
    span.innerText = char;
    textDisplay.appendChild(span);
  }
}



function finishTest() {
  clearInterval(timer);
  inputBox.disabled = true;
  startBtn.disabled = false;

  const typed = inputBox.value;
  const correctChars = typed.split("").filter((c, i) => c === testText[i]).length;
  const accuracy = Math.round((correctChars / typed.length) * 100) || 0;
  const wpm = Math.round((typed.trim().split(/\s+/).length) / 1); // time = 60s = 1min

  resultDisplay.innerHTML = `WPM: ${wpm} | Accuracy: ${accuracy}%`;

  // 🎉 Trigger confetti
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

}


const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {
  clearInterval(timer);
  resultDisplay.textContent = "";
  inputBox.value = "";
  inputBox.disabled = true;
  startBtn.disabled = false;
  restartBtn.classList.add("hidden");
  progressBar.style.width = "0%";
});


inputBox.addEventListener("input", () => {
  const input = inputBox.value;
  const spans = textDisplay.querySelectorAll("span");
  textDisplay.scrollTop = textDisplay.scrollHeight;
  input.split("").forEach((char, i) => {
    if (!spans[i]) return;
    if (char === testText[i]) {
      spans[i].classList.add("correct");
      spans[i].classList.remove("incorrect");
    } else {
      spans[i].classList.add("incorrect");
      spans[i].classList.remove("correct");
    }
  });

  const progress = Math.min((input.length / testText.length) * 100, 100);
  progressBar.style.width = `${progress}%`;

  if (input.length >= testText.length) {
    finishTest();
  }
});

startBtn.addEventListener("click", startTest);
