let buffer;
const image = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 750" xml:space="preserve">
      <path d="M614 304.5c-5.3 4.1-6.9 8.1-6.5 14.5 2.5 39 3.1 78.1 2.4 117.1-.6 31.3-4.1 62.4-8.2 93.4-3.6 27.4-7.3 54.7-11.8 82-2.3 14.3-4.8 28.5-7.4 42.7-9.3 50-80.2 45.5-116.2 34.8-24.8-7.4-36.2-27.6-39.7-52-1.7-12-1.3-24.1-1.7-36.2-.6-18.7-6.7-17.1-24.2-22.1-5.2-1.5-5.2-1.6-5.7 3.6-1.7 18.5.6 41.5-1.2 62.8-1.6 19-6.4 36.7-20.1 48.7-43.1 38.1-114.7 31.9-145.5-18.8-6.1-10-8.4-21.4-10.6-32.7-3.9-19.5-6-39.3-7.7-59.1-.3-3.5-1.4-4.3-4.7-4.3-15 .1-29.7-2.1-43.9-7-29.1-10.1-47.4-29.6-53.6-60.4-6.7-33.4-7.5-67-7.1-100.9.3-30.6 2.3-61.1 5.6-91.5 2.3-20.5 5.2-40.8 10.2-60.9 6.7-26.9 24.6-41.5 50.7-47.3 11.9-2.6 31.6 2.8 41.5-1.1 9.6-3.9 8-25.5 9.5-33.8 2.5-14.1 5.7-28.1 9.9-41.9 6.8-22.1 16.1-43 31.7-60.4 18.7-20.9 42.9-32 70.1-36.6 36.4-6.2 73.2-7.2 109.8-4.1 34.1 2.9 66.3 15.7 92.2 38.3 20.5 17.9 32.6 42.8 50.7 62.8 19.3 21.2 42.7 32.4 56.2 59.5 20.6 40.9 11.4 82.7-24.7 110.9z"/>
        <path d="M597 267.1c-13.5 13.6-30.2 21.9-47.9 28.3-25.9 9.3-52.8 13.7-87.3 13.7-14.7-.1-35.9-2.6-56-11.4-11.2-4.9-22-11.1-27.3-22.4-11.6-24.7-16-50.6-7.5-77.4.8-2.6 2-5.1 3.3-7.6 3.6-7.3 8.6-12.4 16.8-15.4 30.8-11.1 62.1-19.5 95.1-20.1 31-.6 60.6 4.8 86.9 22.2 17 11.2 30 25.6 35.5 45.7 4.6 16.9.9 31.9-11.6 44.4z"
              fill="#93cadf"/>
        <path d="M569.5 466.5c-2.2 30.5-6.7 60.7-10.9 91-3.9 28.2-8.5 56.3-13.3 84.4-1 5.6-3.4 8.8-8.7 10.6-13.2 4.5-26.7 4.4-40.3 2.8-7.4-.9-14.7-2.4-21.7-5-4.2-1.5-6.7-4-7.9-8.5-3.9-15.6-4-31.3-1.9-47 1-7.4 1.2-7.4 8.6-8.8 10.9-2.1 21.2-5.3 29.8-12.8 6.6-5.7 10.7-12.9 13.1-22.1-27.5 9.9-53.8 4.3-79.9-2.8-13.1-3.5-26-7.8-39-11.6-6.9-2-14-3.3-21.1-.7-9.9 3.5-14.2 11.5-16.5 21.1-3.4 14-4.4 28.3-5.2 42.6-1.1 18.7-1.7 37.4-1.8 56.1 0 1.9-.7 3.3-1.9 4.7-29.1 30.9-66.7 21.8-87.8-4-5.6-6.8-6.2-15.7-7.7-24-5.6-31.6-8-63.5-9.9-95.5-3.2-54.2-4.1-108.5-3.2-162.8.6-41 2.2-81.9 5.8-122.7 2.5-28.5 5.4-57 11.6-85.1 3.3-14.7 7.7-29 13.8-42.8C286.2 94.9 308.2 79 339 74.4c32-4.8 64.2-5.1 96.3-3.1 34 2.1 62.5 17.2 85 43 .9 1.1 2.2 1.9 2.4 3.9-6.5-.6-13-1.4-19.5-1.8-31.3-1.7-61.8 3-91.8 11.3-13.5 3.7-26.6 8.7-39.8 13.4-9.7 3.4-16.8 9.8-22.8 17.7-12.9 16.9-19.2 36.2-20.5 57.3-1.4 23 2.7 45.2 10.7 66.6 9.9 26.5 30.3 42.3 55.6 52.7 18.6 7.6 38.1 11.1 58 12.3 39 2.3 76.9-3.2 113.6-16.8 2.7-1 3.5-.6 3.6 2.4 1.4 44.2 2.9 88.7-.3 133.2zM206.4 247.6c-12.4-.8-24.9-1.6-36.9 2.5-7.7 2.6-12.8 7.7-14.9 15.8-5.5 21.4-8.3 43.3-10.5 65.2-2.9 29.1-4.7 58.3-4.6 87.6v11.9c.2 23.7 1.3 47.4 6.2 70.6 2 9.6 4.4 19 13.2 25.3 13.7 9.8 29.3 12.5 45.6 13.2 3.1.1 2.1-2 2.1-3.6-2.5-47.5-3.4-95-3.1-142.6.2-24.6.7-49.1 1.6-73.7.9-22.8 2.3-45.6 4-68.3.1-2.2-.1-3.7-2.7-3.9z"
              fill="#dc2227"/>
</svg>`, colors = ['#dc2227', '#132FD2', '#127F2D', '#ED54BA', '#f17d0e', '#f3f457', '#3F484E', '#D6E0F0', '#6A2FB9'],
    soundURL = 'https://freesound.org/data/previews/577/577028_6512859-lq.mp3', context = new AudioContext(),
    play = () => {
        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start();
    }, createAmongUs = () => document.body.appendChild(document.createElement('among-us'))

customElements.define('among-us', class AmongUs extends HTMLElement {
    constructor() {
        super()
        this.killed = false
        this.maxAcceleration = 4
        this.acceleration = {x: 0, y: 0}
        this.position = {x: 0, y: 0}
        this.frame = {x: 0, y: 0}
    }

    connectedCallback() {
        this.innerHTML = image;
        this.addEventListener('click', this.kill)
        this.addEventListener('mouseup', this.kill)
        this.addEventListener('mousedown', this.kill)
        this.addEventListener('touchstart', this.kill)
        this.addEventListener('touchmove', this.kill)
        this.addEventListener('touchend', this.kill)
        this.run();
    }

    updateFrame() {
        this.frame.x = document.body.offsetWidth;
        this.frame.y = document.body.offsetHeight;
    }

    setRandomPosition() {
        this.position = {
            x: Math.floor(Math.random() * this.frame.x), y: Math.floor(Math.random() * this.frame.y)
        }
    }

    setRandomAcceleration() {
        this.acceleration = {
            x: (Math.floor(Math.random() * this.maxAcceleration) + 1) * (Math.round(Math.random()) ? 1 : -1),
            y: (Math.floor(Math.random() * this.maxAcceleration) + 1) * (Math.round(Math.random()) ? 1 : -1)
        }
    }

    setRandomColor() {
        this.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    }

    run() {
        this.updateFrame();
        this.setRandomColor();
        this.setRandomPosition();
        this.setRandomAcceleration();
        return this.loop = setInterval(this.handleFrame.bind(this), 10);
    }

    stop() {
        if (this.loop) return clearInterval(this.loop)
    }

    kill() {
        if (this.killed) return;
        this.killed = true;
        this.style.pointerEvents = 'none';
        this.stop();
        play();
        this.remove();
        setTimeout(createAmongUs, 1000)
    }

    handleFrame() {
        this.updatePosition();
        this.syncPosition();
    }

    updatePosition() {
        let {x, y} = this.position;
        x += this.acceleration.x;
        y += this.acceleration.y;
        this.position = {x, y};
        if (x < 0 || x > this.frame.x) this.acceleration.x *= -1;
        if (y < 0 || y > this.frame.y) this.acceleration.y *= -1;
    }

    syncPosition() {
        this.style.setProperty('--x', this.position.x + "px");
        this.style.setProperty('--y', this.position.y + "px");
    }
})

window.addEventListener('resize', () =>
    document.querySelectorAll('among-us').forEach(amongUs => amongUs.updateFrame()))

window.fetch(soundURL)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
        buffer = audioBuffer;
    });

Array(10).fill(true).forEach(createAmongUs)
