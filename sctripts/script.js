function downloadQR() {
    const qrImage = document.querySelector('.popup img');
    const link = document.createElement('a');
    link.href = qrImage.src;
    link.download = 'qr.jpg';
    link.click();}
const box = document.getElementById('box');
const box2 = document.getElementById('box2');
const NoButton = document.querySelector('.button .no');
const YesButton = document.querySelector('.button .yes');
let YesButtonClickCount = 0;

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function openMess() {
    const link = "https://www.facebook.com/messages/t/hq.bi.05/";
    window.open(link, "_blank");
}
function ramdom() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let randomX, randomY;

    do {
        // Keep generating random positions until "Yes" button is not overlapped by "No" button with at least 10px margin
        randomX = Math.floor(Math.random() * (screenWidth * 0.85)) - (screenWidth * 0.425);
        randomY = Math.floor(Math.random() * (screenHeight * 0.7)) - (screenHeight * 0.4);
    } while (
        // Check if the new position is too close to the "No" button
        Math.abs(randomX - YesButton.offsetLeft) < YesButton.offsetWidth * 1.2 + 10 &&
        Math.abs(randomY - YesButton.offsetTop) < YesButton.offsetHeight * 1.2 + 10
    );

    NoButton.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.2)`;
    YesButtonClickCount++;
    const scaleMultiplier = 1 + (YesButtonClickCount * 0.5); // Increase scale by 0.5 for each click
    YesButton.style.transform = `scale(${scaleMultiplier})`;
};

box.addEventListener('animationend', () => {
    box.remove();
});

box2.addEventListener('animationend', () => {
    box2.remove();
});

// Get device screen size
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Adjust content based on screen size
if (screenWidth < 768) {
    // Small screens
    document.body.style.fontSize = '14px';
} else if (screenWidth < 1024) {
    // Medium screens
    document.body.style.fontSize = '16px';
} else {
    // Large screens
    document.body.style.fontSize = '18px';
}
let flowerCount = 0;

function createFlower() {
    if (flowerCount >= 10) {
        return; // Stop creating flowers if the maximum count is reached
    }

    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Randomly position the flower within the screen width
    const randomX = Math.floor(Math.random() * window.innerWidth -20);
    flower.style.left = `${randomX}px`;

    // Append the flower to the body
    document.body.appendChild(flower);

    // Remove the flower after it falls off the screen
    flower.addEventListener('animationend', () => {
        flower.remove();
        flowerCount--; // Decrease the flower count when a flower is removed
    });

    flowerCount++; // Increase the flower count when a new flower is created
}

// Create flowers periodically
setInterval(createFlower, 1500);

const driver = window.driver.js.driver;

const driverObj = driver({
        nextBtnText: 'Tiếp tục -›',
        prevBtnText: '‹- Quay lại',
        showProgress: false,
        popoverClass: 'driverjs-theme',
        
        steps: [
            { element: '.header', popover: { title: 'Trang nhận và phát xì lì của tôi',    side: "left",
            align: 'end' } },
            { element: '.mess', popover: { title: 'Liên Hệ', description: 'Messsenger' } },
            { element: '.button button.yes', popover: { title: 'Lì xì cho tôi', description: 'Khi ấn vào "Lì xì cho tôi" 1 QR code sễ xuất hiện, ấn vào qr hoặc quét nó để lì xì.',     side: "bottom",
            align: 'center' } },
            { element: '.footer', popover: {   title: 'Hoàn thành hướng dẫn' }},
        ]
    });

setTimeout(() => {
        driverObj.drive();
}, 2100);
