new Chart(ctx, {
    type: 'bar', // แน่ใจว่าใช้ 'bar' เพื่อสร้างกราฟแท่ง
    data: {
        labels: ['Games', 'Movie', 'Write code'],
        datasets: [{
            label: 'Hours',
            data: [3, 5, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
