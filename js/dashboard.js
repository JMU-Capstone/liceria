// dashboard.js
document.addEventListener("DOMContentLoaded", function () {
    // Toggle Filter Panel for Grant Overview
    const toggleButton = document.getElementById("toggle-grant-filter");
    const filterPanel = document.getElementById("grant-filter-panel");
    
    if (toggleButton && filterPanel) {
      toggleButton.addEventListener("click", function () {
        filterPanel.classList.toggle("active");
      });
    }
  
    // Sorting functionality for the Grant Overview table
    const sortDropdown = document.getElementById("sort-options");
    if (sortDropdown) {
      sortDropdown.addEventListener("change", function () {
        const sortOption = this.value;
        const table = document.getElementById("grant-table");
        const tbody = table.querySelector("tbody");
        // Convert rows NodeList to array for sorting
        const rows = Array.from(tbody.getElementsByTagName("tr"));
  
        if (sortOption === "status") {
          // Custom order for statuses
          const statusOrder = {
            "active": 1,
            "in review": 2,
            "pending": 3,
            "in progress": 4,
            "completed": 5
          };
  
          rows.sort(function (a, b) {
            const statusA = a.cells[7].textContent.trim().toLowerCase();
            const statusB = b.cells[7].textContent.trim().toLowerCase();
            return (statusOrder[statusA] || 99) - (statusOrder[statusB] || 99);
          });
        } else if (sortOption === "lead-asc") {
          rows.sort(function (a, b) {
            const leadA = a.cells[6].textContent.trim().toLowerCase();
            const leadB = b.cells[6].textContent.trim().toLowerCase();
            return leadA.localeCompare(leadB);
          });
        } else if (sortOption === "lead-desc") {
          rows.sort(function (a, b) {
            const leadA = a.cells[6].textContent.trim().toLowerCase();
            const leadB = b.cells[6].textContent.trim().toLowerCase();
            return leadB.localeCompare(leadA);
          });
        }
        // Re-append sorted rows to the table body
        rows.forEach(function (row) {
          tbody.appendChild(row);
        });
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Existing code for Grant Overview filter (if any)...
  
    // Toggle Filter Panel for Project Grants Overview
    const toggleProjectButton = document.getElementById("toggle-project-filter");
    const projectFilterPanel = document.getElementById("project-filter-panel");
    
    if (toggleProjectButton && projectFilterPanel) {
      toggleProjectButton.addEventListener("click", function () {
        projectFilterPanel.classList.toggle("active");
      });
    }
  
    // Sorting functionality for the Project Grants Overview table
    const projectSortDropdown = document.getElementById("project-sort-options");
    if (projectSortDropdown) {
      projectSortDropdown.addEventListener("change", function () {
        const sortOption = this.value;
        const table = document.getElementById("project-table");
        const tbody = table.querySelector("tbody");
        // Convert rows NodeList to array for sorting
        const rows = Array.from(tbody.getElementsByTagName("tr"));
  
        if (sortOption === "status") {
          // Custom order for statuses
          const statusOrder = {
            "active": 1,
            "in review": 2,
            "pending": 3,
            "in progress": 4,
            "completed": 5
          };
  
          rows.sort(function (a, b) {
            // Status is in the second cell (index 1) for project table
            const statusA = a.cells[1].textContent.trim().toLowerCase();
            const statusB = b.cells[1].textContent.trim().toLowerCase();
            return (statusOrder[statusA] || 99) - (statusOrder[statusB] || 99);
          });
        } else if (sortOption === "lead-asc") {
          rows.sort(function (a, b) {
            // Project Lead is in the third cell (index 2)
            const leadA = a.cells[2].textContent.trim().toLowerCase();
            const leadB = b.cells[2].textContent.trim().toLowerCase();
            return leadA.localeCompare(leadB);
          });
        } else if (sortOption === "lead-desc") {
          rows.sort(function (a, b) {
            const leadA = a.cells[2].textContent.trim().toLowerCase();
            const leadB = b.cells[2].textContent.trim().toLowerCase();
            return leadB.localeCompare(leadA);
          });
        }
        
        // Re-append sorted rows to the table body
        rows.forEach(function (row) {
          tbody.appendChild(row);
        });
      });
    }
  });
    