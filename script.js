(function() {
    var score = 0;
    var timeLeft = 30;
    var gameOver = false;
    var gameStarted = false;
    var time = document.getElementById('time');
    var target = document.getElementById('target');
    var points = document.getElementById('points');
    var audio = new Audio('http://soundbible.com/grab.php?id=1949&type=mp3');
    var skins = [
        "https://i.imgur.com/ZmmYRW8.png",
        "https://i.imgur.com/UyrnOtK.png",
        "https://i.imgur.com/1GG4DTE.png"
    ];
    document.onclick = playNoise;
    target.onclick = function() {
        if (!gameStarted) {
            startGame();
        }
        addPoint();
        changeTarget();
    };
    function playNoise() {
        audio.play();
    }
    function addPoint() {
        points.innerText = score + 1;
        score++;
    }
    function changeTarget() {
        var skin = Math.floor(Math.random() * skins.length);
        switch (skin) {
            case 0:
                target.style['margin-top'] = Math.floor(Math.random() * 10) + 20 + "%";
                target.style['margin-left'] = Math.floor(Math.random() * 70) + 10 + "%";
                break;
                
            case 1:
                target.style['margin-top'] = Math.floor(Math.random() * 10) + 20 + "%";
                target.style['margin-left'] = Math.floor(Math.random() * 70) + 10 + "%";
                break;
            
            case 2:
                target.style['margin-top'] = Math.floor(Math.random() * 10) + "%";
                target.style['margin-left'] = Math.floor(Math.random() * 65) + 10 + "%";
                break;
        }
        target.src = skins[skin];
    }
    function endGame() {
        timeLeft = 30;
        gameOver = true;
        alert('Game ended with ' + score + ' points');
    }
    function startGame() {
        gameStarted = true;
        setInterval(() => {
            if (timeLeft < 0) {
                return endGame();
            } else if (!gameOver) {
                time.innerText = timeLeft--;
            }
        }, 1000);
    }
})();