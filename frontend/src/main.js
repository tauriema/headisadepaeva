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
