// Loop through the data and populate the New Jobs section
// Get references to the form elements
const searchForm = document.getElementById("search-form");
const keywordInput = document.getElementById("keyword");
const locationInput = document.getElementById("location");

// Get references to the job sections
const topJobsSection = document.getElementById("top-jobs");
const newJobsSection = document.getElementById("new-jobs");

// Fetch the job data from the JSON file
fetch("jobs-data.json")
    .then(response => response.json())
    .then(data => {
        let topJobsHTML = "";
        let newJobsHTML = "";

        // Loop through the job data and create HTML for each job
        data.forEach(job => {
            // Check if the job is a top job
            if (job.topJob) {
                topJobsHTML += `
          <div class="job">
            <h3 class="job-title">${job.title}</h3>
            <p class="job-company">${job.company}</p>
            <p class="job-location">${job.location}</p>
            <p class="job-description">${job.description}</p>
          </div>
        `;
            } else {
                newJobsHTML += `
          <div class="job">
            <h3 class="job-title">${job.title}</h3>
            <p class="job-company">${job.company}</p>
            <p class="job-location">${job.location}</p>
            <p class="job-description">${job.description}</p>
          </div>
        `;
            }
        });

        // Populate the top jobs section with the generated HTML
        topJobsSection.innerHTML = topJobsHTML;

        // Populate the new jobs section with the generated HTML
        newJobsSection.innerHTML = newJobsHTML;
    });

// Listen for the form to be submitted
searchForm.addEventListener("submit", event => {
    // Prevent the default form behavior
    event.preventDefault();

    // Get the search keyword and location
    const keyword = keywordInput.value;
    const location = locationInput.value;

    // Filter the jobs based on the keyword and location
    const filteredJobs = data.filter(job => {
        return job.title.toLowerCase().includes(keyword.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase());
    });

    // Generate HTML for the filtered jobs
    let filteredJobsHTML = "";
    filteredJobs.forEach(job => {
        filteredJobsHTML += `
      <div class="job">
        <h3 class="job-title">${job.title}</h3>
        <p class="job-company">${job.company}</p>
        <p class="job-location">${job.location}</p>
        <p class="job-description">${job.description}</p>
      </div>
    `;
    });

    // Populate the new jobs section with the filtered jobs HTML
    newJdata.forEach(job => {
        const jobHTML = `
      <div class="job">
        <div class="job-title">${job.title}</div>
        <div class="job-company">${job.company}</div>
        <div class="job-location">${job.location}</div>
        <div class="job-description">${job.description}</div>
      </div>
    `;
        newJobsContainer.innerHTML += jobHTML;
    });

    // Add an event listener to the search button
    searchBtn.addEventListener('click', () => {
        const keyword = searchKeyword.value.toLowerCase();
        const location = searchLocation.value.toLowerCase();

        // Loop through the data and display only the jobs that match the search keyword and location
        data.forEach(job => {
            if (job.title.toLowerCase().includes(keyword) && job.location.toLowerCase().includes(location)) {
                const jobHTML = `
          <div class="job">
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <div class="job-location">${job.location}</div>
            <div class="job-description">${job.description}</div>
          </div>
        `;
                newJobsContainer.innerHTML = jobHTML;
            }
        });
    });
});