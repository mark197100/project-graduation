

var canvas = document.getElementById('xxx')
var context = canvas.getContext('2d')

/* 定义canvas的宽高 */
setCanvasSize()
window.onresize = function () {
    // setCanvasSize()
}
function setCanvasSize() {/* 定义Canvas的宽高 */
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
}
    /* 通过点击控制 画画和橡皮擦功能 */
black.onclick = function(){
    context.strokeStyle='black'
    pen.style="color:black;transform:scale(1.5);"
    eraserEnabled = false

}
red.onclick = function(){
    context.strokeStyle='red'
    pen.style="color:red;transform:scale(1.5);"
    eraserEnabled = false

}
green.onclick = function(){
    context.strokeStyle='green'
    pen.style="color:green;transform:scale(1.5);"
    eraserEnabled = false

}
blue.onclick =function(){
    context.strokeStyle='blue'
    pen.style="color:blue;transform:scale(1.5);"
    eraserEnabled = false

}
yellow.onclick =function(){
    context.strokeStyle='yellow'
    pen.style="color:yellow;transform:scale(1.5);"
    eraserEnabled = false

}
cyan.onclick =function(){
    context.strokeStyle='cyan'
    pen.style="color:cyan;transform:scale(1.5);"
    eraserEnabled = false

}
white.onclick =function(){
    context.strokeStyle='white'
    pen.style="color:white;transform:scale(1.5);"
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
        // eraser.classList.add('active')
        pen.style="color:black;transform:scale(1.0);"
           
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

