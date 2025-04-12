// dashboard-insight.js

// Sample grant data
const grantsData = {
    "1": {
      title: "Early Childhood Education Research",
      status: "active",
      category: "Research",
      submissionDate: "May 14, 2023",
      awardDate: "Aug 17, 2023",
      amount: "$125,000",
      overview: "This research project aims to investigate effective teaching methods in early childhood education, focusing on ages 3-5. The study examines various pedagogical approaches and their impact on cognitive development.",
      leadName: "Dr. Sarah Johnson",
      leadDept: "Department of Education",
      collaborators: ["Dr. Michael Chen", "Dr. Emily Rodriguez"]
    },
    "2": {
      title: "Technology Integration in Special Education",
      status: "review",
      category: "Technology",
      submissionDate: "June 30, 2023",
      awardDate: "Nov 12, 2023",
      amount: "$300,000",
      overview: "This project focuses on integrating assistive technology into special education classrooms to enhance learning experiences and outcomes.",
      leadName: "Dr. James Wilson",
      leadDept: "Dept. of Education",
      collaborators: ["Dr. David Lee", "Dr. Patricia Stone"]
    },
    "3": {
      title: "Professional Development in Special Education",
      status: "pending",
      category: "Professional Dev.",
      submissionDate: "April 29, 2023",
      awardDate: "Sep 20, 2023",
      amount: "$50,000",
      overview: "This initiative aims to improve professional development programs for special education teachers through workshops and seminars.",
      leadName: "Dr. Lisa Patel",
      leadDept: "State Dept. of Education",
      collaborators: ["Dr. Anna Kim", "Dr. Robert Brown"]
    },
    "4": {
        title: "Literacy Improvement for ESL Students",
        status: "pending",
        category: "Education",
        submissionDate: "July 15, 2023",
        awardDate: "Dec 1, 2023",
        amount: "$80,000",
        overview: "This project focuses on improving literacy among ESL students through targeted reading programs and teacher training.",
        leadName: "Dr. Amanda Lee",
        leadDept: "Department of Language Arts",
        collaborators: ["Dr. John Smith", "Dr. Maria Garcia"]
    },
    "5": {
        title: "Virtual STEM Outreach",
        status: "review",
        category: "STEM",
        submissionDate: "June 20, 2023",
        awardDate: "Oct 5, 2023",
        amount: "$150,000",
        overview: "This project aims to enhance STEM education by providing virtual outreach programs, workshops, and interactive online resources.",
        leadName: "Dr. Kevin Brown",
        leadDept: "Science Education Trust",
        collaborators: ["Dr. Lisa Wong", "Dr. Eric Johnson"]
    }
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    // Get grantId from URL query parameters
    const params = new URLSearchParams(window.location.search);
    const grantId = params.get("grantId");
  
    // Redirect back if grantId is not present or invalid
    if (!grantId || !grantsData[grantId]) {
      window.location.href = "dashboard.html";
      return;
    }
  
    const data = grantsData[grantId];
  
    // Populate header
    document.getElementById("grant-title").textContent = data.title;
    
    const statusElem = document.getElementById("grant-status");
    statusElem.textContent = capitalizeStatus(data.status);
    // Remove any existing status classes and add the new one
    statusElem.classList.remove("active", "review", "pending", "in-progress", "completed");
    statusElem.classList.add(data.status);
    
    document.getElementById("grant-category").textContent = data.category;
  
    // Populate overview tab
    document.getElementById("grant-overview").textContent = data.overview;
  
    // Populate grant details
    document.getElementById("submission-date").innerHTML = `<strong>Submission Date:</strong> ${data.submissionDate}`;
    document.getElementById("award-date").innerHTML = `<strong>Award Date:</strong> ${data.awardDate}`;
    document.getElementById("award-amount").innerHTML = `<strong>Award Amount:</strong> ${data.amount}`;
  
    // Populate Project Lead info
    const leadInfo = document.querySelector(".lead-info");
    leadInfo.querySelector("strong").textContent = data.leadName;
    leadInfo.querySelector("p").textContent = data.leadDept;
  
    // Populate Collaborators list
    const collabList = document.getElementById("collaborators-list");
    collabList.innerHTML = "";
    data.collaborators.forEach(name => {
      const li = document.createElement("li");
      li.innerHTML = `<img src="./images/avatar.png" alt="Collaborator" class="avatar" /><span>${name}</span>`;
      collabList.appendChild(li);
    });
  
    // Tab switching logic
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", function() {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        tabContents.forEach(content => content.classList.remove("active"));
        const tabId = this.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });
  });
  
  function capitalizeStatus(status) {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
  