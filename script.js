// Map of emojis with associated keywords
const emojiList = [
  { emoji: "😀", keywords: ["happy", "smile", "grin"] },
  { emoji: "😂", keywords: ["laugh", "funny", "joy"] },
  { emoji: "🤣", keywords: ["rofl", "lol", "funny"] },
  { emoji: "😍", keywords: ["love", "heart", "crush"] },
  { emoji: "😎", keywords: ["cool", "sunglasses", "chill"] },
  { emoji: "🥳", keywords: ["party", "celebrate", "birthday"] },
  { emoji: "🤔", keywords: ["think", "hmm", "idea"] },
  { emoji: "🙄", keywords: ["eyeroll", "annoyed", "sassy"] },
  { emoji: "😴", keywords: ["sleep", "tired", "zzz"] },
  { emoji: "😭", keywords: ["cry", "sad", "tears"] },
  { emoji: "🤯", keywords: ["mindblown", "shock", "surprise"] },
  { emoji: "🔥", keywords: ["fire", "lit", "hot"] },
  { emoji: "💡", keywords: ["idea", "light", "smart"] },
  { emoji: "💖", keywords: ["love", "heart", "romance"] },
  { emoji: "✔️", keywords: ["check", "done", "correct"] },
  { emoji: "❌", keywords: ["wrong", "cancel", "error"] },
  { emoji: "🚀", keywords: ["rocket", "fast", "space"] },
  { emoji: "🎶", keywords: ["music", "song", "melody"] },
  { emoji: "🌟", keywords: ["star", "shine", "bright"] },
  { emoji: "🍕", keywords: ["pizza", "food", "slice"] },
  { emoji: "⚽", keywords: ["soccer", "football", "ball"] },
  { emoji: "🎮", keywords: ["game", "play", "controller"] },
  { emoji: "💻", keywords: ["laptop", "computer", "code"] },
  { emoji: "📱", keywords: ["phone", "mobile", "call"] },
];

const emojiContainer = document.getElementById("emojiContainer");
const searchInput = document.getElementById("search");
const copiedMessage = document.getElementById("copiedMessage");

// Display emojis based on search
function displayEmojis(filter = "") {
  emojiContainer.innerHTML = "";
  const filteredEmojis = emojiList.filter(({ keywords }) =>
    keywords.some((keyword) => keyword.includes(filter.toLowerCase()))
  );
  if (filteredEmojis.length === 0) {
    emojiContainer.innerHTML = "<p>No emojis found</p>";
    return;
  }

  filteredEmojis.forEach(({ emoji }) => {
    const span = document.createElement("span");
    span.textContent = emoji;
    span.classList.add("emoji");
    span.onclick = () => copyToClipboard(emoji);
    emojiContainer.appendChild(span);
  });
}

// Copy emoji to clipboard
function copyToClipboard(emoji) {
  navigator.clipboard.writeText(emoji);
  copiedMessage.textContent = `Copied: ${emoji}`;
  setTimeout(() => (copiedMessage.textContent = ""), 2000);
}

// Listen for input
searchInput.addEventListener("input", (e) => displayEmojis(e.target.value));

// Initialize with all emojis
displayEmojis();
