// scripts.js
document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let newRecommendationText = document.getElementById('new-recommendation').value;
    if (newRecommendationText) {
        let li = document.createElement('li');
        let blockquote = document.createElement('blockquote');
        blockquote.textContent = newRecommendationText;
        let cite = document.createElement('cite');
        cite.textContent = "– Anonymous";
        blockquote.appendChild(cite);
        li.appendChild(blockquote);
        document.getElementById('recommendations-list').appendChild(li);
        alert('Recommendation added successfully!');
        document.getElementById('new-recommendation').value = '';
    }
});

document.getElementById('skills-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let newSkillName = document.getElementById('new-skill-name').value;
    let newSkillImage = document.getElementById('new-skill-image').value;
    if (newSkillName && newSkillImage) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = newSkillImage;
        img.alt = newSkillName;
        li.appendChild(img);
        li.appendChild(document.createTextNode(' ' + newSkillName));
        document.getElementById('skills-list').appendChild(li);
        alert('Skill added successfully!');
        document.getElementById('new-skill-name').value = '';
        document.getElementById('new-skill-image').value = '';
    }
});

document.getElementById('projects-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let newProjectTitle = document.getElementById('new-project-title').value;
    let newProjectDescription = document.getElementById('new-project-description').value;
    if (newProjectTitle && newProjectDescription) {
        let div = document.createElement('div');
        div.className = 'project';
        let h3 = document.createElement('h3');
        h3.textContent = newProjectTitle;
        let p = document.createElement('p');
        p.textContent = newProjectDescription;
        div.appendChild(h3);
        div.appendChild(p);
        document.getElementById('projects-list').appendChild(div);
        alert('Project added successfully!');
        document.getElementById('new-project-title').value = '';
        document.getElementById('new-project-description').value = '';
    }
});
