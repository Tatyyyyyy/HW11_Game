let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game_block'),
    score = 0,
    time = 0,
    interval = 0;
    
    btn.addEventListener('click', (event) => { // event - это объект
        event.preventDefault() // метод, который предотвращает действия с сылкой
        if(input.value > 4) { // value - ключ со значением того, что вводят в input
            time =  input.value
            input.value = ''
            score = 0
            clearInterval(interval)
            start()
            let result = document.querySelector('.result')
            if(result) {
                result.style.display = 'none'
            }
        } 
        
    })
    
    box.addEventListener('click', (event) => {
        if(event.target.classList.contains('ball')) { // event.target - показывает на что именно мы нажимаем. contains('ball') - включает в себя класс ball
            score++
            event.target.remove() // remove() - удаляет 
            createBall()
        }
    })
    
    function start() {
       interval = setInterval(() => decrease(),1000) 
       createBall()
    }
    
    function decrease() { //уменьшает время на 1 сек
        if(time == 0) {
            endGame()
        }else {
            let currentTime = --time
            if(currentTime < 10) {
                currentTime = '0' + currentTime
            }
            timeOut.innerHTML = '00:' + currentTime
        }
    }
    
    function endGame() {
        box.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
    }
    
    function createBall() {
        let ball = document.createElement('div')
        let size = random(20,100)
        let coor = box.getBoundingClientRect() //
        let x = random(0,coor.width - size)
        let y = random(0,coor.height - size)
        let form = random(1,2)
        
            if(form == 1) {
               ball.style.borderRadius = '50%' 
            }else {
                ball.style.borderRadius = ''
            }
        
        ball.classList.add('ball')
        ball.style.width = size + 'px'
        ball.style.height = size + 'px'
        ball.style.left = x + 'px'
        ball.style.top = y + 'px'
        ball.style.background = `rgb(${random(0,256)}, ${random(0,256)}, ${random(0,256)})`
        
        
        box.append(ball)
    }
    
    function random(min,max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    }
    
    
    