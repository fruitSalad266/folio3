function toggleSkills() {
    const relevant = document.getElementById('relevant-skills');
    const irrelevant = document.getElementById('irrelevant-skills');
    const title = document.getElementById('skills-title');
    const button = document.getElementById('skills-toggle-btn');
    
    if (relevant.style.display !== 'none') {
        relevant.style.display = 'none';
        irrelevant.style.display = 'block';
        title.textContent = 'Irrelevant Skills';
        button.textContent = 'Show Relevant Skills';
    } else {
        relevant.style.display = 'block';
        irrelevant.style.display = 'none';
        title.textContent = 'Relevant Skills';
        button.textContent = 'Show Irrelevant Skills';
    }
}

function showSection(sectionId, buttonEl) {
    const sections = document.querySelectorAll('.content-section');
    const sidebarButtons = document.querySelectorAll('.sidebar-option');

    sections.forEach((section) => section.classList.remove('active'));
    sidebarButtons.forEach((button) => button.classList.remove('active'));

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    if (buttonEl) {
        buttonEl.classList.add('active');
    }
}
