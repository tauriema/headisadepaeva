<<<<<<< HEAD
import "./style.css";

document.querySelector("#app").innerHTML = `
  <!-- Navigation Header -->
  <header class="navbar">
    <div class="container">
      <div class="nav-brand">
        <h1>⭐ PoskaRate</h1>
        <p>Rate. Review. Share.</p>
      </div>
      <nav class="nav-links">
        <a href="#" class="nav-link">Browse Courses</a>
        <a href="#" class="nav-link">My Reviews</a>
        <a href="#" class="nav-link">Login</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h2>Share Your Course Experience</h2>
        <p>Help fellow students find the best courses. Read authentic reviews and ratings from your classmates.</p>
        <div class="hero-buttons">
          <button class="btn btn-primary">Explore Courses</button>
          <button class="btn btn-secondary">Write a Review</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features">
    <div class="container">
      <h3>Why PoskaRate?</h3>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">📚</div>
          <h4>Comprehensive Reviews</h4>
          <p>Detailed reviews covering difficulty, teaching quality, and workload for each course.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⭐</div>
          <h4>Easy Ratings</h4>
          <p>Quick 5-star ratings system that helps you make informed decisions fast.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h4>Community Driven</h4>
          <p>Honest feedback from students like you, helping build a better learning community.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔍</div>
          <h4>Search & Filter</h4>
          <p>Find courses by department, difficulty level, and professor ratings.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="stats">
    <div class="container">
      <div class="stat-item">
        <h4>500+</h4>
        <p>Courses</p>
      </div>
      <div class="stat-item">
        <h4>2000+</h4>
        <p>Reviews</p>
      </div>
      <div class="stat-item">
        <h4>800+</h4>
        <p>Active Users</p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <div class="container">
      <h3>Start Rating & Reviewing Today</h3>
      <p>Join thousands of students sharing their course experiences</p>
      <button class="btn btn-primary btn-large">Get Started</button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 PoskaRate. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  </footer>
`;
=======
import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src=${viteLogo} class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src=${viteLogo} alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img class="button-icon" src="${javascriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))
>>>>>>> 3b34103 (Add frontend UI and deploy setup)
