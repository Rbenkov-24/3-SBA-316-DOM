document.addEventListener("DOMContentLoaded", function () {
  // Cache elements
  // Cache at least one element using selectElementById
  const resumeContainer = document.getElementById("resume-container");

  // Create and append elements
  // Use createElement to create new elements
  const header = document.createElement("header");
  const name = document.createElement("h1");
  name.innerText = "Ramy Benkov"; // Modify the HTML or text content of an element
  const contactInfo = document.createElement("div");
  contactInfo.id = "contact-info";
  contactInfo.innerHTML = `
          <span>+617-431-6496</span> &bull; 
          <span>benkovrj@gmail.com</span> &bull; 
          <span>Salem, MA 01970</span>
      `;

// Use appendChild to add new elements to the DOM
  header.appendChild(name);
  header.appendChild(contactInfo);
  resumeContainer.appendChild(header);

  const sections = [
    {
      id: "summary",
      title: "Professional Summary",
      content:
        "Self-motivated and results-driven professional with a robust foundation in front-end development and over a decade of customer service experience. I excel in problem-solving, teamwork, and adapting to new challenges. Fluent in Arabic and English, I am eager to contribute my expertise and continuously grow in a dynamic work environment.",
    },
    {
      id: "skills",
      title: "Skills",
      content: 
        `<ul>
            <li>Frontend Development</li>
            <li>Coding Languages</li>
            <li>Team Player</li>
            <li>Ability to Work with Different Personalities</li>
        </ul>`,
    },
    {
      id: "education",
      title: "Education",
      content: 
        `<p>
            <b>Software Engineering Cert</b><br>Perscholas | Jul - Nov 2024<br>Remote<br>Intensive training in full-stack development, covering HTML, CSS, JavaScript, DOM, React, Node.js, Express, TypeScript, Redux, and MongoDB, with hands-on projects to build real-world skills.
        </p>
        <p><b>
            Bachelor of Arts in Psychology</b><br>University of Massachusetts Lowell | 2021<br>Boston, MA<br>Theoretical foundations in various subfields of psychology, including experimental, developmental, social, community, personality, and clinical psychology.
        </p>`,
    },
    {
      id: "experience",
      title: "Experience",
      content: 
     `<p>
            <b>
              Customer Experience Specialist
            </b>    
            <br>Air Canada | Boston, MA | Aug 2023 – Jun 2024<br>
            <ul>
                <li> Managed passenger check-ins, boarding, and immigration documentation while providing essential travel information.
                </li>
                <li>Addressed disruptions and passenger issues, including handling special accommodations and ensuring compliance with regulations.
                </li>
            </ul>
      </p>
        <p>   
            <b>Airport Operation Crewmember</b>
            <br>JetBlue Airways | Boston, MA | Jul 2018 – Nov 2021<br>
                <ul>
                    <li>Managed gate operations, checked in passengers, and verified documentation for domestic and international flights.
                    </li>
                
                    <li>Provided information on flight schedules, boarding procedures, and changes in company policies.
                    </li>
                </ul>
        </p>
        <p>
            <b>Chorist/Vocal Instructor/Songwriter & Composer</b><br>Freelancer | Casa, MAR | Mar 2006 – Sep 2012<br>
            <ul>
                <li>Composed, recorded, and produced music using various software and instruments, while providing vocal training.
                </li>
                <li>Collaborated with national and international artists, delivering high-quality performances and music education.
                </li>
            </ul>
        </p>`,
    },
  ];

  // Iterate over a collection of elements to accomplish some task
  sections.forEach((section) => {
    const sectionElement = document.createElement("section");
    sectionElement.id = section.id;
    sectionElement.innerHTML = `<h2>${section.title}</h2>${section.content}`;
    resumeContainer.appendChild(sectionElement);
  });

  // Create and append contact form
  // Use createElement to create new elements
  const contactSection = document.createElement("section");
  contactSection.id = "contact";
  contactSection.innerHTML = `
          <h2>Contact Information</h2>
          <form id="contact-form">
              <label for="name-input">Name:</label>
              <input type="text" id="name-input" name="name" required>
              <label for="email-input">Email:</label>
              <input type="email" id="email-input" name="email" required>
              <label for="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Submit</button>
          </form>
      `;
  resumeContainer.appendChild(contactSection);

  // Event handling
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Simple validation
    const nameInput = document.getElementById("name-input").value;
    const emailInput = document.getElementById("email-input").value;
    const messageInput = document.getElementById("message").value;

    // Modify HTML content in response to user interaction
    if (nameInput && emailInput && messageInput) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Modify style
  const button = form.querySelector("button");
  button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "#0f8d83"; // Modify the style of an element
  });
  button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "#17ccfe"; // Modify the style of an element
  });
  // Example of BOM usage
  // Use at least two Browser Object Model (BOM) properties or methods
  console.log(`Page URL: ${window.location.href}`);
  console.log(`Screen Width: ${window.screen.width}px`);
});
