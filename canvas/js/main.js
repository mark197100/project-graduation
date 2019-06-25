var canvas = document.getElementById('xxx')
var context = canvas.getContext('2d')

/* 定义canvas的宽高 */
setCanvasSize()
window.onresize = function () {
    setCanvasSize()
}
function setCanvasSize() {/* 定义Canvas的宽高 */
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
}
    /* 通过点击控制 画画和橡皮擦功能 */
red.onclick = function(){
    context.strokeStyle='red'
    red.classList.add('active')
    yellow.classList.remove('active')
    black.classList.remove('active')
    
}
yellow.onclick = function(){
    context.strokeStyle='yellow'
    yellow.classList.add('active')
    red.classList.remove('active')
    black.classList.remove('active')
}
black.onclick = function(){
    context.strokeStyle='black'
    black.classList.add('active')
    red.classList.remove('active')
    yellow.classList.remove('active')
}
context.lineWidth=5

thin.onclick = function(){
    context.lineWidth = 5
            
}
thick.onclick = function(){
    context.lineWidth = 10
}

var eraserEnabled = false
pen.onclick = function () {
    eraserEnabled = false
    actions.className = 'actions'
    pen.classList.add('active')
    eraser.classList.remove('active')
    
}    
eraser.onclick = function () {
        eraserEnabled = true
        /* actions.className = 'actions x' */
        eraser.classList.add('active')
        pen.classList.remove('active')
        yellow.classList.remove('active')
        red.classList.remove('active')
        black.classList.remove('active')    
    }
clear.onclick=function(){
    context.clearRect(0,0,canvas.width,canvas.height)
}
save.onclick = function(){
    var url =canvas.toDataURL('image/png')
    var a =document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = '我的杰作'
    a.target = '_blank'
a.click()
}

/* 检测鼠标设备或者触屏设备 */
if (document.body.ontouchstart !== undefined) {
    var using = false
    canvas.ontouchstart = function (aaa) {
        x = aaa.touches[0].clientX
        y = aaa.touches[0].clientY
        using = true/* 鼠标按下时 画画 或 擦除 */
        if (eraserEnabled) {
            context.clearRect(x, y, 10, 10)
        } else {
            context.beginPath()
            context.arc(x, y, 1, 0, 8, true)
            context.stroke()
            context.closePath()
        }
    }
    canvas.ontouchmove = function (aaa) {
        x2 = aaa.touches[0].clientX
        y2 = aaa.touches[0].clientY
        if (eraserEnabled && using) {/* 橡皮擦被按下 且 鼠标被按下 才可以清除 if(!using){return}*/
            context.clearRect(x2, y2, 10, 10)
        } else {
            if (using) {
                context.moveTo(x, y)
                context.lineTo(x2, y2)
                /* context.arc(x2, y2, 1, 0, 8, true) */
                context.stroke()
                context.closePath()
                x = x2
                y = y2
            }
        }
    }
    canvas.ontouchend = function () {
        using = false
    }
} else {
    var using = false
    canvas.onmousedown = function (aaa) {
        x = aaa.clientX
        y = aaa.clientY
        using = true/* 鼠标按下时 画画 或 擦除 */
        if (eraserEnabled) {
            context.clearRect(x, y, 10, 10)
        } else {
            context.beginPath()
            context.arc(x, y, 1, 0, 8, true)
            context.stroke()
            context.closePath()
        }
    }
    canvas.onmousemove = function (aaa) {
        var x2 = aaa.clientX
        var y2 = aaa.clientY
        if (eraserEnabled && using) {/* 橡皮擦被按下 且 鼠标被按下 才可以清除 if(!using){return}*/
            context.clearRect(x2, y2, 10, 10)
        } else {
            if (using) {
                context.moveTo(x, y)
                context.lineTo(x2, y2)
                /* context.arc(x2, y2, 1, 0, 8, true) */
                context.stroke()
                context.closePath()
                x = x2
                y = y2
            }
        }
    }
    canvas.onmouseup = function () {
        using = false
    }
}




/* 按钮被选中 */

