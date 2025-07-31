/*
 * Main JavaScript for Ayush Sharma's portfolio.
 * Handles small interactive behaviours such as
 * updating the copyright year automatically.
 */
document.addEventListener('DOMContentLoaded', function () {
  // Update the year in the footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
});