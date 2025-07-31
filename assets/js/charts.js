/*
 * Charts configuration for the About page.
 * Utilises Chart.js to render a radar chart
 * representing Ayush's relative expertise across
 * multiple data science domains. Values range
 * from 0–100 and are meant to be illustrative.
 */
document.addEventListener('DOMContentLoaded', function () {
  const skillsCanvas = document.getElementById('skillsChart');
  if (skillsCanvas) {
    const ctx = skillsCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Data Science', 'ML & AI', 'Cloud & MLOps', 'Geospatial', 'NLP & LLM'],
        datasets: [
          {
            label: 'Skill Level (0–100)',
            data: [90, 85, 80, 75, 80],
            backgroundColor: 'rgba(13, 110, 253, 0.2)',
            borderColor: '#0d6efd',
            borderWidth: 2,
            pointBackgroundColor: '#0d6efd',
            pointBorderColor: '#ffffff',
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: '#0d6efd'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              color: '#495057'
            },
            grid: {
              circular: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            angleLines: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            pointLabels: {
              color: '#212529',
              font: {
                size: 12
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
  }
});