// Projects Carousel
function createCarousel() {
  const projectsSection = document.getElementById('projects');
  if (!projectsSection) return;
  projectsSection.innerHTML = `
    <h1>Projects</h1>
    <div class="carousel">
      <div class="carousel-track">

        <div class="carousel-slide">
          <div class="carousel-title">This Portfolio</div>
          <div class="carousel-body">
            <div class="carousel-img">
              <img src="images/projects/thisporto.png" alt="this portofolio">
            </div>
            <div class="carousel-desc">
              A portfolio website <br>
              Role: Developer, Designer
            </div>
          </div>
        </div>

        <div class="carousel-slide">
          <div class="carousel-title">Photobooth</div>
          <div class="carousel-body">
            <div class="carousel-img">
              <img src="images/projects/photobooth.png" alt="photobooth">
            </div>
            <div class="carousel-desc">
              A photobooth website <br>
              Role: Frontend Developer, Documentation Writer.
            </div>
          </div>
        </div>

        <div class="carousel-slide">
          <div class="carousel-title">NCFI Prayers</div>
          <div class="carousel-body">
            <div class="carousel-img">
              <img src="images/projects/prayerlink.png" alt="NCFI Prayers">
            </div>
            <div class="carousel-desc">
              A website for prayers and community sharing.<br>
              Role: Lead Tester, Backup Project Manager, Documentation Writer.
            </div>
          </div>
        </div>

        <div class="carousel-slide">
          <div class="carousel-title">Automatic Attendance System</div>
          <div class="carousel-body">
            <div class="carousel-img">
              <img src="images/projects/gkikarawaci.png" alt="Automatic Attendance System">
            </div>
            <div class="carousel-desc">
              Automated attendance using recognition technology.<br>
              Role: Use case/activity diagrams, Frontend Developer.
            </div>
          </div>
        </div>

        <div class="carousel-slide">
          <div class="carousel-title">Flexbox Pricing Table</div>
          <div class="carousel-body">
            <div class="carousel-img">
              <img src="images/projects/flexbox.png" alt="Flexbox Pricing Table">
            </div>
            <div class="carousel-desc">
              Responsive pricing table using CSS Flexbox.<br>
              Role: Developer.
              <a href="https://jennifer-chrstbll.github.io/flex_exercise/" target="_blank">View Project</a>
            </div>
          </div>
        </div>

        <div class="carousel-slide">
          <div class="carousel-title">Rolling Dice Game</div>
          <div class="carousel-body">
            <div class="carousel-img">
              <img src="images/projects/rolldice.png" alt="Dice Game">
            </div>
            <div class="carousel-desc">
              Interactive dice game for learning JS basics.<br>
              Role: Developer.
              <a href="https://jennifer-chrstbll.github.io/dice_exercise/" target="_blank">View Project</a>
            </div>
          </div>
        </div>

        <div class="carousel-slide">
          <div class="carousel-title">Feedback Form</div>
          <div class="carousel-body">
            <div class="carousel-img">
              <img src="images/projects/feedback.png" alt="feedback form">
            </div>
            <div class="carousel-desc">
              Interactive Feedback Form that can be submitted.<br>
              Role: Developer.
            </div>
          </div>
        </div>

      </div>
      <button class="carousel-btn prev">&#10094;</button>
      <button class="carousel-btn next">&#10095;</button>
      <div class="carousel-indicators"></div>
    </div>
  `;

  // Carousel logic
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  // Create indicators
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => {
      current = i;
      showSlide(current);
    };
    indicatorsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.carousel-dot');
  let current = 0;

  function showSlide(idx) {
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[idx].classList.add('active');
  }

  showSlide(current);

  document.querySelector('.carousel-btn.next').onclick = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };
  document.querySelector('.carousel-btn.prev').onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };
}
createCarousel();

// Home photo hover effect
const homePhoto = document.querySelector('.home-photo img');
if (homePhoto) {
  homePhoto.addEventListener('mouseenter', () => {
    homePhoto.style.transform = 'scale(1.12)';
    homePhoto.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)';
  });
  homePhoto.addEventListener('mouseleave', () => {
    homePhoto.style.transform = 'scale(1)';
    homePhoto.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
  });
}
