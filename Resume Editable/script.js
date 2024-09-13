

document.addEventListener('DOMContentLoaded', function() {
  fetch('data.json') // Load data from the JSON file
      .then(response => response.json())
      .then(data => {
          // Populate the resume with data
          document.getElementById('name').textContent = data.name;
          document.getElementById('profile-pic').src = data.profilePic;
          document.getElementById('contact').innerHTML = data.contact;
          document.getElementById('career-objective').textContent = data.careerObjective;
          document.getElementById('executive-profile').textContent = data.executiveProfile;

          // Add Skills
          const skillsList = document.getElementById('skills');
          data.skills.forEach(skill => {
              const skillItem = document.createElement('li');
              skillItem.textContent = skill;
              skillsList.appendChild(skillItem);
          });

          // Add Work Experience
          const workExperienceDiv = document.getElementById('work-experience');
          data.workExperience.forEach(exp => {
              const expItem = document.createElement('p');
              expItem.textContent = exp;
              workExperienceDiv.appendChild(expItem);
          });

          // Add Consultant Experience
          const consultantExpList = document.getElementById('consultant-experience');
          data.consultantExperience.forEach(exp => {
              const expItem = document.createElement('li');
              expItem.textContent = exp;
              consultantExpList.appendChild(expItem);
          });

          // Add Education
          document.getElementById('education').textContent = data.education;
      })
      .catch(error => console.error('Error loading the JSON data:', error));
});
