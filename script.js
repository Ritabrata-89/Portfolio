const container = document.getElementById('kissContainer');
const button = document.getElementById('sendKissesBtn');
const audio = document.getElementById('loveAudio');

// Play music automatically when page loads (some browsers require interaction)
window.addEventListener('load', () => {
  audio.volume = 0.15;
  audio.play().catch(() => {
    // If auto-play blocked, wait for user interaction
    button.textContent = 'Play Music & Send Kisses';
  });
});

button.addEventListener('click', () => {
  // Play music if paused
  if (audio.paused) {
    audio.play();
    button.textContent = 'Send More Kisses';
  }
  sendMoreKisses();
});

function sendMoreKisses() {
  for (let i = 0; i < 7; i++) {
    const kiss = document.createElement('div');
    kiss.className = 'kiss';
    kiss.textContent = '💋';

    // Randomize horizontal position within container
  kiss.style.position = 'absolute';
kiss.style.left = `${Math.random() * (container.clientWidth - 30)}px`;
kiss.style.bottom = '0';

    // Add title on hover for romance
    const titles = ['You', 'My Love', 'Forever', 'Always', 'Sweetheart', 'Darling', 'Mine'];
    kiss.title = titles[Math.floor(Math.random() * titles.length)];

    container.appendChild(kiss);

    // Remove kiss after animation ends to keep DOM clean
    kiss.addEventListener('animationend', () => {
      kiss.remove();
    });

    // Click kiss to send a little message
   kiss.addEventListener('click', () => {
  alert(`Sending you a kiss titled "${kiss.title}"!`);
});}}
