document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
    const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;

    // Display resume
    const resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        resumeDisplay.style.display = 'block';

        (document.getElementById('display-name') as HTMLElement).textContent = name;
        (document.getElementById('display-email') as HTMLElement).textContent = email;
        (document.getElementById('display-phone') as HTMLElement).textContent = phone;
        (document.getElementById('display-education') as HTMLElement).textContent = education;
        (document.getElementById('display-work-experience') as HTMLElement).textContent = workExperience;

        // Display skills
        const skillsList = document.getElementById('display-skills');
        if (skillsList) {
            skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
        }

        // Display profile picture
        const displayProfilePic = document.getElementById('display-profile-pic') as HTMLImageElement;
        if (profilePicInput.files && profilePicInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                if (e.target?.result) {
                    displayProfilePic.src = e.target.result as string;
                    displayProfilePic.style.display = 'block';
                }
            };
            reader.readAsDataURL(profilePicInput.files[0]);
        } else {
            displayProfilePic.style.display = 'none';
        }
    }
});

// Add event listener for the edit button to toggle editing mode
document.getElementById('edit-resume')?.addEventListener('click', function() {
    const resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        const isEditable = resumeDisplay.querySelector('[contenteditable]')?.getAttribute('contenteditable') === 'true';

        // Toggle contenteditable attribute
        resumeDisplay.querySelectorAll('[contenteditable]').forEach(el => {
            el.setAttribute('contenteditable', isEditable ? 'false' : 'true');
        });
    }
});
