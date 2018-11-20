$(() => {
    drawBoard();
    $(window).resize(() => {
        $('#board').clearCanvas();
        drawBoard();
    })
});

const drawBoard = () => {
    const x = Math.min($(window).width(), $(window).height()) * 0.9;
    const y = x / 9 * 10;
    $('#canvas_container').css({height:y, width:x})
    $('#board').prop('width', x).prop('height', y);
    const drawBoardLine = () => {
        //draw board -
        for (let i = 0; i < 10; i++) {
            let tempY = y * (i / 9 * 0.9 + 0.05);
            $('#board').drawLine({
                x1: x * 0.05, y1: tempY,
                x2: x * 0.95, y2: tempY,
                strokeStyle: 'black',
            })
        }
        //draw board |
        for (let i = 0; i < 9; i++) {
            let tempX = x * (i / 8 * 0.9 + 0.05);
            $('#board')
                .drawLine({
                    x1: tempX, y1: y * 0.05,
                    x2: tempX, y2: y * 0.45,
                    strokeStyle: 'black',
                })
                .drawLine({
                    x1: tempX, y1: y * 0.55,
                    x2: tempX, y2: y * 0.95,
                    strokeStyle: 'black',
                })
        }
        $('#board')
            .drawLine({
                x1: x * 0.05, y1: y * 0.95,
                x2: x * 0.05, y2: y * 0.05,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.95, y1: y * 0.95,
                x2: x * 0.95, y2: y * 0.05,
                strokeStyle: 'black',
            })
            //draw X
            .drawLine({
                x1: x * 0.3875, y1: y * 0.75,
                x2: x * 0.6125, y2: y * 0.95,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.6125, y1: y * 0.75,
                x2: x * 0.3875, y2: y * 0.95,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.3875, y1: y * 0.05,
                x2: x * 0.6125, y2: y * 0.25,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.6125, y1: y * 0.05,
                x2: x * 0.3875, y2: y * 0.25,
                strokeStyle: 'black',
            })
            //draw positioner for pawn and cannon
            .drawLine({
                x1: x * 0.06, y1: y * 0.31,
                x2: x * 0.06, y2: y * 0.34,
                x3: x * 0.09, y3: y * 0.34,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.06, y1: y * 0.39,
                x2: x * 0.06, y2: y * 0.36,
                x3: x * 0.09, y3: y * 0.36,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.06, y1: y * 0.61,
                x2: x * 0.06, y2: y * 0.64,
                x3: x * 0.09, y3: y * 0.64,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.06, y1: y * 0.69,
                x2: x * 0.06, y2: y * 0.66,
                x3: x * 0.09, y3: y * 0.66,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.285, y1: y * 0.69,
                x2: x * 0.285, y2: y * 0.66,
                x3: x * 0.315, y3: y * 0.66,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.265, y1: y * 0.69,
                x2: x * 0.265, y2: y * 0.66,
                x3: x * 0.235, y3: y * 0.66,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.265, y1: y * 0.61,
                x2: x * 0.265, y2: y * 0.64,
                x3: x * 0.235, y3: y * 0.64,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.285, y1: y * 0.61,
                x2: x * 0.285, y2: y * 0.64,
                x3: x * 0.315, y3: y * 0.64,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.51, y1: y * 0.61,
                x2: x * 0.51, y2: y * 0.64,
                x3: x * 0.54, y3: y * 0.64,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.51, y1: y * 0.69,
                x2: x * 0.51, y2: y * 0.66,
                x3: x * 0.54, y3: y * 0.66,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.49, y1: y * 0.69,
                x2: x * 0.49, y2: y * 0.66,
                x3: x * 0.46, y3: y * 0.66,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.49, y1: y * 0.61,
                x2: x * 0.49, y2: y * 0.64,
                x3: x * 0.46, y3: y * 0.64,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.715, y1: y * 0.61,
                x2: x * 0.715, y2: y * 0.64,
                x3: x * 0.685, y3: y * 0.64,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.715, y1: y * 0.69,
                x2: x * 0.715, y2: y * 0.66,
                x3: x * 0.685, y3: y * 0.66,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.735, y1: y * 0.69,
                x2: x * 0.735, y2: y * 0.66,
                x3: x * 0.765, y3: y * 0.66,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.735, y1: y * 0.61,
                x2: x * 0.735, y2: y * 0.64,
                x3: x * 0.765, y3: y * 0.64,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.94, y1: y * 0.61,
                x2: x * 0.94, y2: y * 0.64,
                x3: x * 0.91, y3: y * 0.64,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.94, y1: y * 0.69,
                x2: x * 0.94, y2: y * 0.66,
                x3: x * 0.91, y3: y * 0.66,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.94, y1: y * 0.31,
                x2: x * 0.94, y2: y * 0.34,
                x3: x * 0.91, y3: y * 0.34,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.94, y1: y * 0.39,
                x2: x * 0.94, y2: y * 0.36,
                x3: x * 0.91, y3: y * 0.36,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.715, y1: y * 0.31,
                x2: x * 0.715, y2: y * 0.34,
                x3: x * 0.685, y3: y * 0.34,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.715, y1: y * 0.39,
                x2: x * 0.715, y2: y * 0.36,
                x3: x * 0.685, y3: y * 0.36,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.735, y1: y * 0.31,
                x2: x * 0.735, y2: y * 0.34,
                x3: x * 0.765, y3: y * 0.34,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.735, y1: y * 0.39,
                x2: x * 0.735, y2: y * 0.36,
                x3: x * 0.765, y3: y * 0.36,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.285, y1: y * 0.31,
                x2: x * 0.285, y2: y * 0.34,
                x3: x * 0.315, y3: y * 0.34,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.285, y1: y * 0.39,
                x2: x * 0.285, y2: y * 0.36,
                x3: x * 0.315, y3: y * 0.36,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.265, y1: y * 0.31,
                x2: x * 0.265, y2: y * 0.34,
                x3: x * 0.235, y3: y * 0.34,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.265, y1: y * 0.39,
                x2: x * 0.265, y2: y * 0.36,
                x3: x * 0.235, y3: y * 0.36,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.51, y1: y * 0.31,
                x2: x * 0.51, y2: y * 0.34,
                x3: x * 0.54, y3: y * 0.34,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.51, y1: y * 0.39,
                x2: x * 0.51, y2: y * 0.36,
                x3: x * 0.54, y3: y * 0.36,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.49, y1: y * 0.31,
                x2: x * 0.49, y2: y * 0.34,
                x3: x * 0.46, y3: y * 0.34,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.49, y1: y * 0.39,
                x2: x * 0.49, y2: y * 0.36,
                x3: x * 0.46, y3: y * 0.36,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.1725, y1: y * 0.21,
                x2: x * 0.1725, y2: y * 0.24,
                x3: x * 0.2025, y3: y * 0.24,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.1725, y1: y * 0.29,
                x2: x * 0.1725, y2: y * 0.26,
                x3: x * 0.2025, y3: y * 0.26,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.1525, y1: y * 0.21,
                x2: x * 0.1525, y2: y * 0.24,
                x3: x * 0.1225, y3: y * 0.24,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.1525, y1: y * 0.29,
                x2: x * 0.1525, y2: y * 0.26,
                x3: x * 0.1225, y3: y * 0.26,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.1725, y1: y * 0.71,
                x2: x * 0.1725, y2: y * 0.74,
                x3: x * 0.2025, y3: y * 0.74,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.1725, y1: y * 0.79,
                x2: x * 0.1725, y2: y * 0.76,
                x3: x * 0.2025, y3: y * 0.76,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.1525, y1: y * 0.71,
                x2: x * 0.1525, y2: y * 0.74,
                x3: x * 0.1225, y3: y * 0.74,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.1525, y1: y * 0.79,
                x2: x * 0.1525, y2: y * 0.76,
                x3: x * 0.1225, y3: y * 0.76,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.8475, y1: y * 0.71,
                x2: x * 0.8475, y2: y * 0.74,
                x3: x * 0.8775, y3: y * 0.74,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.8475, y1: y * 0.79,
                x2: x * 0.8475, y2: y * 0.76,
                x3: x * 0.8775, y3: y * 0.76,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.8275, y1: y * 0.71,
                x2: x * 0.8275, y2: y * 0.74,
                x3: x * 0.7975, y3: y * 0.74,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.8275, y1: y * 0.79,
                x2: x * 0.8275, y2: y * 0.76,
                x3: x * 0.7975, y3: y * 0.76,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.8475, y1: y * 0.21,
                x2: x * 0.8475, y2: y * 0.24,
                x3: x * 0.8775, y3: y * 0.24,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.8475, y1: y * 0.29,
                x2: x * 0.8475, y2: y * 0.26,
                x3: x * 0.8775, y3: y * 0.26,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.8275, y1: y * 0.21,
                x2: x * 0.8275, y2: y * 0.24,
                x3: x * 0.7975, y3: y * 0.24,
                strokeStyle: 'black',
            })
            .drawLine({
                x1: x * 0.8275, y1: y * 0.29,
                x2: x * 0.8275, y2: y * 0.26,
                x3: x * 0.7975, y3: y * 0.26,
                strokeStyle: 'black',
            })
            .drawText({
                x: 0.2 * x, y: 0.5 * y,
                fillStyle: 'black',
                strokeStyle: 'black',
                strokeWidth: 2,
                fontSize: x * 0.09,
                rotate: 270,
                fontFamily: 'DFKai-sb',
                text: '楚\n\n河'
            })
            .drawText({
                x: 0.8 * x, y: 0.5 * y,
                fillStyle: 'black',
                strokeStyle: 'black',
                strokeWidth: 2,
                fontSize: x * 0.09,
                rotate: 90,
                fontFamily: 'DFKai-sb',
                text: '漢\n\n界'
            })
            drawChess();
    }
    $('#board').drawImage({
        source: 'assets/images/wood texture2.jpeg',
        load: drawBoardLine,
        x: x * 0.03, y: y * 0.03,
        width: x * 0.94, height: y * 0.94,
        fromCenter: false
    })
}