var _a, _b;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    var profilePicInput = document.getElementById('profile-pic');
    // Display resume
    var resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        resumeDisplay.style.display = 'block';
        document.getElementById('display-name').textContent = name;
        document.getElementById('display-email').textContent = email;
        document.getElementById('display-phone').textContent = phone;
        document.getElementById('display-education').textContent = education;
        document.getElementById('display-work-experience').textContent = workExperience;
        // Display skills
        var skillsList = document.getElementById('display-skills');
        if (skillsList) {
            skillsList.innerHTML = skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
        }
        // Display profile picture
        var displayProfilePic_1 = document.getElementById('display-profile-pic');
        if (profilePicInput.files && profilePicInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                    displayProfilePic_1.src = e.target.result;
                    displayProfilePic_1.style.display = 'block';
                }
            };
            reader.readAsDataURL(profilePicInput.files[0]);
        }
        else {
            displayProfilePic_1.style.display = 'none';
        }
    }
});
// Add event listener for the edit button to toggle editing mode
(_b = document.getElementById('edit-resume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a;
    var resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        var isEditable_1 = ((_a = resumeDisplay.querySelector('[contenteditable]')) === null || _a === void 0 ? void 0 : _a.getAttribute('contenteditable')) === 'true';
        // Toggle contenteditable attribute
        resumeDisplay.querySelectorAll('[contenteditable]').forEach(function (el) {
            el.setAttribute('contenteditable', isEditable_1 ? 'false' : 'true');
        });
    }
});
