function toggleSkills() {
    const relevant = document.getElementById('relevant-skills');
    const irrelevant = document.getElementById('irrelevant-skills');
    const title = document.getElementById('skills-title');
    const button = document.querySelector('button');
    
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
