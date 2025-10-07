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
              <img src="images/projects/thisporto.png" alt="Portofolio Website">
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
              <img src="images/projects/photobooth.png" alt="photobooth website">
            </div>
            <div class="carousel-desc">
              A photobooth website. <br>
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
              Role: Developer, Designer.<br>
              <a href="https://jennifer-chrstbll.github.io/flex_exercise/" target="_blank">View Project</a>
            </div>
          </div>
        </div>

        <div class="carousel-slide">
          <div class="carousel-title">Dice Game</div>
          <div class="carousel-body">
            <div class="carousel-img">
              <img src="images/projects/rolldice.png" alt="Dice Game">
            </div>
            <div class="carousel-desc">
              Interactive dice game for learning JS basics.<br>
              Role: Developer, Designer.<br>
              <a href="https://jennifer-chrstbll.github.io/dice_exercise/" target="_blank">View Project</a>
            </div>
          </div>
        </div>

        <div class="carousel-slide">
          <div class="carousel-title">Feedback Form</div>
          <div class="carousel-body">
            <div class="carousel-img">
              <img src="images/projects/feedback.png" alt="NCFI Prayers">
            </div>
            <div class="carousel-desc">
              Interactive Feedback Form that can be submitted.<br>
              Role: Developer, Designer.
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
  const projectImages = [
    "images/projects/thisporto.png",
    "images/projects/photobooth.png",
    "images/projects/prayerlink.png",
    "images/projects/gkikarawaci.png",
    "images/projects/flexbox.png",
    "images/projects/rolldice.png",
    "images/projects/feedback.png",
  ];

  // Create thumbnail indicators
  projectImages.forEach((imgSrc, i) => {
    const thumb = document.createElement('img');
    thumb.src = imgSrc;
    thumb.classList.add('carousel-thumb');
    if (i === 0) thumb.classList.add('active');
    thumb.onclick = () => {
      current = i;
      showSlide(current);
    };
    indicatorsContainer.appendChild(thumb);
  });

  const thumbs = document.querySelectorAll('.carousel-thumb');
  let current = 0;

  function showSlide(idx) {
    track.style.transform = `translateX(-${idx * 100}%)`;
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[idx].classList.add('active');
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

// Skills Tab Switcher
const skillButtons = document.querySelectorAll('.skills-btn');
const skillContents = document.querySelectorAll('.skills-content');

skillButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active state
    skillButtons.forEach(b => b.classList.remove('active'));
    skillContents.forEach(c => c.classList.remove('active'));

    // Add active state to selected
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

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
