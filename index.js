const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA",
    },
    {
      skill: "JavaScript",
      level: "intermediate",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "depending",
      color: "#C3DCAF",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "intermediate",
      color: "#60DAFB",
    },
    {
      skill: "talwind",
      level: "beginner",
      color: "green",
    },
  ];

  function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });

    document.getElementById("currentTime").textContent = utcTime;
    document.getElementById("currentDay").textContent = dayOfWeek;
  }

  function displaySkills() {
    const skillsContainer = document.getElementById("skill-list");
    skills.forEach((skill) => {
      const skillElement = document.createElement("li");
      skillElement.classList.add("skill");
      skillElement.style.color = skill.color;
      skillElement.textContent = `${skill.skill} (${skill.level})`;
      skillsContainer.appendChild(skillElement);
    });
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 60000);
  displaySkills();