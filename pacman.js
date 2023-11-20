<!DOCTYPE html>
<html>
<head>
  <title>Quick & Dirty JS Snake</title>
  <style>
    body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #333; }
    #game { background: #111; width: 300px; height: 300px; position: relative; }
    .snake { position: absolute; width: 10px; height: 10px; background: lime; }
    .apple { position: absolute; width: 10px; height: 10px; background: red; }
  </style>
</head>
<body>
<div id="game"></div>
<script>
  const gameArea = document.getElementById('game');
  let snake = [{ x: 50, y: 50 }], apple = { x: 100, y: 100 };
  let xVel = 0, yVel = 0;
  
  document.addEventListener('keydown', e => {
    xVel = e.keyCode === 37 ? -10 : e.keyCode === 39 ? 10 : xVel;
    yVel = e.keyCode === 38 ? -10 : e.keyCode === 40 ? 10 : yVel;
  });
  
  setInterval(() => {
    snake.unshift({ x: snake[0].x + xVel, y: snake[0].y + yVel });
    snake.pop();
    
    if (snake[0].x === apple.x && snake[0].y === apple.y) {
      snake.push({});
      apple.x = Math.floor(Math.random() * 30) * 10;
      apple.y = Math.floor(Math.random() * 30) * 10;
    }
    
    gameArea.innerHTML = '';
    snake.forEach(p => {
      let el = document.createElement('div');
      el.className = 'snake';
      el.style.left = p.x + 'px';
      el.style.top = p.y + 'px';
      gameArea.appendChild(el);
    });
    
    let appleEl = document.createElement('div');
    appleEl.className = 'apple';
    appleEl.style.left = apple.x + 'px';
    appleEl.style.top = apple.y + 'px';
    gameArea.appendChild(appleEl);
  }, 100);
</script>
</body>
</html>
