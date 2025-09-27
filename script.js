// Home photo hover effect
const homePhoto = document.querySelector('.home-photo img');
if (homePhoto) {
  homePhoto.addEventListener('mouseenter', () => {
    homePhoto.style.transform = 'scale(1.12)';
    homePhoto.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)';
    homePhoto.style.transition = 'transform 0.3s, box-shadow 0.3s';
    homePhoto.style.cursor = 'pointer';
  });
  homePhoto.addEventListener('mouseleave', () => {
    homePhoto.style.transform = 'scale(1)';
    homePhoto.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
  });
}

// About Me Timeline & Achievements
function createTimeline() {
  const aboutSection = document.getElementById('aboutme');
  if (!aboutSection) return;
  aboutSection.innerHTML = `
    <h1>About Me</h1>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2023 – Now</div>
        <div class="timeline-content">Universitas Pelita Harapan (Majored in Informatics)</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2020 – 2023</div>
        <div class="timeline-content">High School, Kairos Gracia (Majored in ICT, Physics, and Business Studies)</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2017 – 2019</div>
        <div class="timeline-content">Middle School, Kairos Gracia</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2010 – 2016</div>
        <div class="timeline-content">Primary School, Kairos Gracia</div>
      </div>
    </div>
    <h2>Achievements</h2>
    <ul class="achievements">
      <li>Rank 2 in Conversational Chinese Competition (Daerah)</li>
      <li>Best in ICT Cambridge Curriculum in Secondary School Kairos</li>
    </ul>
  `;
}
createTimeline();

// Projects Carousel
function createCarousel() {
  const projectsSection = document.getElementById('projects');
  if (!projectsSection) return;
  projectsSection.innerHTML = `
    <h1>Projects</h1>
    <div class="carousel">
      <div class="carousel-track">
        <div class="carousel-item">
          <strong>NCFI Prayers</strong><br>
          <span>This project is a website built to serve as a digital platform for prayers and community sharing.<br>
          Lead Tester, Backup Project Manager, documentation writer.</span>
        </div>
        <div class="carousel-item">
          <strong>Automatic Attendance System</strong><br>
          <span>Automatic attendance using recognition technology.<br>
          Use case/activity diagrams, frontend dev.</span>
        </div>
        <div class="carousel-item">
          <strong>Flexbox Pricing Table</strong><br>
          <a href="https://jennifer-chrstbll.github.io/flex_exercise/" target="_blank">flexbox</a>
        </div>
        <div class="carousel-item">
          <strong>Dice</strong><br>
          <a href="https://jennifer-chrstbll.github.io/dice_exercise/" target="_blank">dice</a>
        </div>
      </div>
      <button class="carousel-btn prev">&#10094;</button>
      <button class="carousel-btn next">&#10095;</button>
    </div>
  `;

  // Carousel logic
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  let current = 0;
  function showItem(idx) {
    track.style.transform = `translateX(-${idx * 100}%)`;
  }
  showItem(current);
  document.querySelector('.carousel-btn.next').onclick = () => {
    current = (current + 1) % items.length;
    showItem(current);
  };
  document.querySelector('.carousel-btn.prev').onclick = () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
  };
}
createCarousel();

// Responsive adjustments
window.addEventListener('resize', () => {
  // You can add more responsive logic here if needed
});
