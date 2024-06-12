// JavaScript
const video = document.getElementById('myVideo');

// Double-tap on right side
document.addEventListener('dblclick', (e) => {
  if (e.clientX > window.innerWidth / 2) {
    video.currentTime += 10;
  }
});

// Double-tap on left side
document.addEventListener('dblclick', (e) => {
  if (e.clientX < window.innerWidth / 2) {
    video.currentTime -= 10;
  }
});

// Single-tap in the middle
document.addEventListener('click', (e) => {
  if (
    e.clientX > window.innerWidth / 4 &&
    e.clientX < (window.innerWidth * 3) / 4 &&
    e.clientY > window.innerHeight / 4 &&
    e.clientY < (window.innerHeight * 3) / 4
  ) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
});

// Triple-tap in the middle (move to next video)
// Triple-tap on right side (close website)
// Triple-tap on left side (show comment section)
// Single-tap on top right corner (show location and temperature)
// Hold right side (play 2X speed)
// Hold left side (play 0.5X speed)







const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startCallBtn = document.getElementById('startCall');
const shareScreenBtn = document.getElementById('shareScreen');
const recordCallBtn = document.getElementById('recordCall');

// Set up WebRTC peer connection
const pc = new RTCPeerConnection();

// Set up media streams
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then((stream) => {
    localVideo.srcObject = stream;
    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
  })
  .catch((err) => console.error(err));

// Handle start call button
startCallBtn.addEventListener('click', () => {
  // Start WebRTC signaling process
  // ...
});

// Handle share screen button
shareScreenBtn.addEventListener('click', () => {
  navigator.mediaDevices.getDisplayMedia()
    .then((stream) => {
      // Share the screen stream with the peer
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));
    })
    .catch((err) => console.error(err));
});

// Handle record call button
recordCallBtn.addEventListener('click', () => {
  // Set up recording functionality
  // ...
});

// Disable video call option before 6 PM and after 12 AM
const now = new Date();
const hour = now.getHours();
if (hour < 18 || hour >= 24) {
  startCallBtn.disabled = true;
}