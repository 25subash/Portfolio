// Projects Data
const projects = [
  {
    title: "Coryer Staffing Automation",
    subtitle: "A lightweight automation platform that cleaned and synced candidate data for a local staffing company. It replaced slow manual work with a system that organizes information on its own.",
    description: "This project started as an effort to understand why data kept getting duplicated or lost in the staffing process. I mapped out their workflow, connected their forms and CRM, and built a small automation tool that cleans, merges, and fills their system without human copying. It helped them focus on people instead of spreadsheets.",
    technologies: ["Python", "Pandas", "REST API", "Jotform API", "Bullhorn API"],
    image: "coryer.png"
  },
  {
    title: "Project Two",
    subtitle: "A modern web application",
    description: "A brief description of your second project and what it does.",
    technologies: ["Next.js", "TypeScript", "CSS"],
    website: "https://example.com",
    image: "dscribe.webp"
  },
  {
    title: "Project Three",
    subtitle: "Another amazing project",
    description: "A brief description of your third project and what it does.",
    technologies: ["React", "Node.js", "MongoDB"],
    website: "https://example.com",
    image: ""
  },
  {
    title: "Project Four",
    subtitle: "The final showcase",
    description: "A brief description of your fourth project and what it does.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    website: "https://example.com",
    image: ""
  }
];

// Render Projects Grid
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  
  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openPanel(project);
    
    card.innerHTML = `
      <div class="project-image">
        ${project.image 
          ? `<img src="${project.image}" alt="${project.title}" />`
          : `<div class="project-placeholder">${project.title}</div>`
        }
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// Open Side Panel
function openPanel(project) {
  const overlay = document.getElementById('panelOverlay');
  const panel = document.getElementById('projectPanel');
  const content = document.getElementById('panelContent');
  
  // Build panel content
  let panelHTML = `
    <div class="panel-body">
      <h1 class="panel-title">${project.title}</h1>
      <p class="panel-subtitle">${project.subtitle}</p>

      <div class="panel-image-preview">
        ${project.image 
          ? `<img src="${project.image}" alt="${project.title}" />`
          : `<div class="image-placeholder">Project Preview</div>`
        }
      </div>

      <div class="panel-section">
        <h2 class="section-title">About</h2>
        <p class="section-text">${project.description}</p>
      </div>

      <div class="panel-section">
        <h2 class="section-title">Technologies</h2>
        <div class="tech-tags">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
  `;
  
  // Add website section if exists
  if (project.website) {
    panelHTML += `
      <div class="panel-section">
        <h2 class="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          Website
        </h2>
        <a href="${project.website}" target="_blank" rel="noopener noreferrer" class="website-link">
          ${project.website}
        </a>
      </div>
    `;
  }
  
  panelHTML += `</div>`;
  
  content.innerHTML = panelHTML;
  
  // Show panel
  overlay.style.display = 'block';
  panel.classList.add('active');
  overlay.classList.add('active');
  document.documentElement.style.overflow = 'hidden';
  
  // Scroll panel to top
  setTimeout(() => {
    panel.scrollTop = 0;
  }, 0);
}

// Close Side Panel
function closePanel() {
  const overlay = document.getElementById('panelOverlay');
  const panel = document.getElementById('projectPanel');
  
  overlay.style.display = 'none';
  panel.classList.remove('active');
  overlay.classList.remove('active');
  document.documentElement.style.overflow = '';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});
