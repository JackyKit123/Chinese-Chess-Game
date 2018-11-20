$(() => {
    drawBoard();
});
/*name CheatSheet
Generals 帥
Chariots 車 
Knight 馬
Cannon 炮
Guards 士
Bishop 象
Pawns  卒
*/
let dx = dy = 0;
const drawChess = () => {
    const x = Math.min($(window).width(), $(window).height()) * 0.9;
    const y = x / 9 * 10;
    $('#chess').prop('width', x).prop('height', y);
    $('#chess').clearCanvas()
        .removeLayerGroup('all')
    $('#chess')
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            bringToFront: true,
            groups: ['Black_Chariot_Left', 'all'],
            dragGroups: ['Black_Chariot_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.05, y: y * 0.05,
            width: x * 0.09, height: x * 0.09,
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Chariot_Left', 'all'],
            dragGroups: ['Black_Chariot_Left'],
            fillStyle: "Bisque",
            x: x * 0.05, y: y * 0.05,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Chariot_Left', 'all'],
            dragGroups: ['Black_Chariot_Left'],
            x: x * 0.05, y: y * 0.05,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '車',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Chariot_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Knight_Left', 'all'],
            dragGroups: ['Black_Knight_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.1625, y: y * 0.05,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Knight_Left', 'all'],
            dragGroups: ['Black_Knight_Left'],
            fillStyle: "Bisque",
            x: x * 0.1625, y: y * 0.05,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Knight_Left', 'all'],
            dragGroups: ['Black_Knight_Left'],
            x: x * 0.1625, y: y * 0.05,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '馬',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Knight_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Bishop_Left', 'all'],
            dragGroups: ['Black_Bishop_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.275, y: y * 0.05,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Bishop_Left', 'all'],
            dragGroups: ['Black_Bishop_Left'],
            fillStyle: "Bisque",
            x: x * 0.275, y: y * 0.05,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Bishop_Left', 'all'],
            dragGroups: ['Black_Bishop_Left'],
            x: x * 0.275, y: y * 0.05,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '象',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Bishop_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Guard_Left', 'all'],
            dragGroups: ['Black_Guard_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.3875, y: y * 0.05,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Guard_Left', 'all'],
            dragGroups: ['Black_Guard_Left'],
            fillStyle: "Bisque",
            x: x * 0.3875, y: y * 0.05,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Guard_Left', 'all'],
            dragGroups: ['Black_Guard_Left'],
            x: x * 0.3875, y: y * 0.05,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '士',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Guard_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_General', 'all'],
            dragGroups: ['Black_General'],
            fillStyle: "SaddleBrown",
            x: x * 0.5, y: y * 0.05,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_General', 'all'],
            dragGroups: ['Black_General'],
            fillStyle: "Bisque",
            x: x * 0.5, y: y * 0.05,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_General', 'all'],
            dragGroups: ['Black_General'],
            x: x * 0.5, y: y * 0.05,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '將',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_General', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Guard_Right', 'all'],
            dragGroups: ['Black_Guard_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.6125, y: y * 0.05,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Guard_Right', 'all'],
            dragGroups: ['Black_Guard_Right'],
            fillStyle: "Bisque",
            x: x * 0.6125, y: y * 0.05,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Guard_Right', 'all'],
            dragGroups: ['Black_Guard_Right'],
            x: x * 0.6125, y: y * 0.05,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '士',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Guard_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Bishop_Right', 'all'],
            dragGroups: ['Black_Bishop_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.725, y: y * 0.05,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Bishop_Right', 'all'],
            dragGroups: ['Black_Bishop_Right'],
            fillStyle: "Bisque",
            x: x * 0.725, y: y * 0.05,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Bishop_Right', 'all'],
            dragGroups: ['Black_Bishop_Right'],
            x: x * 0.725, y: y * 0.05,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '象',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Bishop_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Knight_Right', 'all'],
            dragGroups: ['Black_Knight_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.8375, y: y * 0.05,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Knight_Right', 'all'],
            dragGroups: ['Black_Knight_Right'],
            fillStyle: "Bisque",
            x: x * 0.8375, y: y * 0.05,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Knight_Right', 'all'],
            dragGroups: ['Black_Knight_Right'],
            x: x * 0.8375, y: y * 0.05,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '馬',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Knight_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Chariot_Right', 'all'],
            dragGroups: ['Black_Chariot_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.95, y: y * 0.05,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Chariot_Right', 'all'],
            dragGroups: ['Black_Chariot_Right'],
            fillStyle: "Bisque",
            x: x * 0.95, y: y * 0.05,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Chariot_Right', 'all'],
            dragGroups: ['Black_Chariot_Right'],
            x: x * 0.95, y: y * 0.05,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '車',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Chariot_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_A', 'all'],
            dragGroups: ['Black_Pawn_A'],
            fillStyle: "SaddleBrown",
            x: x * 0.05, y: y * 0.35,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_A', 'all'],
            dragGroups: ['Black_Pawn_A'],
            fillStyle: "Bisque",
            x: x * 0.05, y: y * 0.35,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_A', 'all'],
            dragGroups: ['Black_Pawn_A'],
            x: x * 0.05, y: 0.35 * y,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '卒',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Pawn_A', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_B', 'all'],
            dragGroups: ['Black_Pawn_B'],
            fillStyle: "SaddleBrown",
            x: x * 0.275, y: y * 0.35,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_B', 'all'],
            dragGroups: ['Black_Pawn_B'],
            fillStyle: "Bisque",
            x: x * 0.275, y: y * 0.35,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_B', 'all'],
            dragGroups: ['Black_Pawn_B'],
            x: x * 0.275, y: 0.35 * y,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '卒',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Pawn_B', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_C', 'all'],
            dragGroups: ['Black_Pawn_C'],
            fillStyle: "SaddleBrown",
            x: x * 0.5, y: y * 0.35,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_C', 'all'],
            dragGroups: ['Black_Pawn_C'],
            fillStyle: "Bisque",
            x: x * 0.5, y: y * 0.35,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_C', 'all'],
            dragGroups: ['Black_Pawn_C'],
            x: x * 0.5, y: 0.35 * y,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '卒',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Pawn_C', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_D', 'all'],
            dragGroups: ['Black_Pawn_D'],
            fillStyle: "SaddleBrown",
            x: x * 0.725, y: y * 0.35,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_D', 'all'],
            dragGroups: ['Black_Pawn_D'],
            fillStyle: "Bisque",
            x: x * 0.725, y: y * 0.35,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_D', 'all'],
            dragGroups: ['Black_Pawn_D'],
            x: x * 0.725, y: 0.35 * y,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '卒',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Pawn_D', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_E', 'all'],
            dragGroups: ['Black_Pawn_E'],
            fillStyle: "SaddleBrown",
            x: x * 0.95, y: y * 0.35,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_E', 'all'],
            dragGroups: ['Black_Pawn_E'],
            fillStyle: "Bisque",
            x: x * 0.95, y: y * 0.35,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Pawn_E', 'all'],
            dragGroups: ['Black_Pawn_E'],
            x: x * 0.95, y: 0.35 * y,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '卒',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Pawn_E', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Cannon_Right', 'all'],
            dragGroups: ['Black_Cannon_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.8375, y: y * 0.25,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Cannon_Right', 'all'],
            dragGroups: ['Black_Cannon_Right'],
            fillStyle: "Bisque",
            x: x * 0.8375, y: y * 0.25,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Cannon_Right', 'all'],
            dragGroups: ['Black_Cannon_Right'],
            x: x * 0.8375, y: 0.25 * y,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '砲',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Cannon_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Cannon_Left', 'all'],
            dragGroups: ['Black_Cannon_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.1625, y: y * 0.25,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Cannon_Left', 'all'],
            dragGroups: ['Black_Cannon_Left'],
            fillStyle: "Bisque",
            x: x * 0.1625, y: y * 0.25,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Black_Cannon_Left', 'all'],
            dragGroups: ['Black_Cannon_Left'],
            x: x * 0.1625, y: 0.25 * y,
            fillStyle: 'black',
            strokeStyle: 'black',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '砲',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Black_Cannon_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Cannon_Right', 'all'],
            dragGroups: ['Red_Cannon_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.8375, y: y * 0.75,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Cannon_Right', 'all'],
            dragGroups: ['Red_Cannon_Right'],
            fillStyle: "Bisque",
            x: x * 0.8375, y: y * 0.75,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Cannon_Right', 'all'],
            dragGroups: ['Red_Cannon_Right'],
            x: x * 0.8375, y: 0.75 * y,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '炮',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Cannon_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Cannon_Left', 'all'],
            dragGroups: ['Red_Cannon_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.1625, y: y * 0.75,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Cannon_Left', 'all'],
            dragGroups: ['Red_Cannon_Left'],
            fillStyle: "Bisque",
            x: x * 0.1625, y: y * 0.75,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Cannon_Left', 'all'],
            dragGroups: ['Red_Cannon_Left'],
            x: x * 0.1625, y: 0.75 * y,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '炮',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Cannon_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_A', 'all'],
            dragGroups: ['Red_Pawn_A'],
            fillStyle: "SaddleBrown",
            x: x * 0.05, y: y * 0.65,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_A', 'all'],
            dragGroups: ['Red_Pawn_A'],
            fillStyle: "Bisque",
            x: x * 0.05, y: y * 0.65,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_A', 'all'],
            dragGroups: ['Red_Pawn_A'],
            x: x * 0.05, y: 0.65 * y,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '兵',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Pawn_A', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_B', 'all'],
            dragGroups: ['Red_Pawn_B'],
            fillStyle: "SaddleBrown",
            x: x * 0.275, y: y * 0.65,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_B', 'all'],
            dragGroups: ['Red_Pawn_B'],
            fillStyle: "Bisque",
            x: x * 0.275, y: y * 0.65,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_B', 'all'],
            dragGroups: ['Red_Pawn_B'],
            x: x * 0.275, y: 0.65 * y,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '兵',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Pawn_B', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_C', 'all'],
            dragGroups: ['Red_Pawn_C'],
            fillStyle: "SaddleBrown",
            x: x * 0.5, y: y * 0.65,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_C', 'all'],
            dragGroups: ['Red_Pawn_C'],
            fillStyle: "Bisque",
            x: x * 0.5, y: y * 0.65,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_C', 'all'],
            dragGroups: ['Red_Pawn_C'],
            x: x * 0.5, y: 0.65 * y,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '兵',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Pawn_C', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_D', 'all'],
            dragGroups: ['Red_Pawn_D'],
            fillStyle: "SaddleBrown",
            x: x * 0.725, y: y * 0.65,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_D', 'all'],
            dragGroups: ['Red_Pawn_D'],
            fillStyle: "Bisque",
            x: x * 0.725, y: y * 0.65,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_D', 'all'],
            dragGroups: ['Red_Pawn_D'],
            x: x * 0.725, y: 0.65 * y,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '兵',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Pawn_D', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_E', 'all'],
            dragGroups: ['Red_Pawn_E'],
            fillStyle: "SaddleBrown",
            x: x * 0.95, y: y * 0.65,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_E', 'all'],
            dragGroups: ['Red_Pawn_E'],
            fillStyle: "Bisque",
            x: x * 0.95, y: y * 0.65,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Pawn_E', 'all'],
            dragGroups: ['Red_Pawn_E'],
            x: x * 0.95, y: 0.65 * y,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '兵',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Pawn_E', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Chariot_Left', 'all'],
            dragGroups: ['Red_Chariot_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.05, y: y * 0.95,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Chariot_Left', 'all'],
            dragGroups: ['Red_Chariot_Left'],
            fillStyle: "Bisque",
            x: x * 0.05, y: y * 0.95,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Chariot_Left', 'all'],
            dragGroups: ['Red_Chariot_Left'],
            x: x * 0.05, y: y * 0.95,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '車',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Chariot_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Knight_Left', 'all'],
            dragGroups: ['Red_Knight_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.1625, y: y * 0.95,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Knight_Left', 'all'],
            dragGroups: ['Red_Knight_Left'],
            fillStyle: "Bisque",
            x: x * 0.1625, y: y * 0.95,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Knight_Left', 'all'],
            dragGroups: ['Red_Knight_Left'],
            x: x * 0.1625, y: y * 0.95,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '馬',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Knight_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Bishop_Left', 'all'],
            dragGroups: ['Red_Bishop_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.275, y: y * 0.95,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Bishop_Left', 'all'],
            dragGroups: ['Red_Bishop_Left'],
            fillStyle: "Bisque",
            x: x * 0.275, y: y * 0.95,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Bishop_Left', 'all'],
            dragGroups: ['Red_Bishop_Left'],
            x: x * 0.275, y: y * 0.95,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '相',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Bishop_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Guard_Left', 'all'],
            dragGroups: ['Red_Guard_Left'],
            fillStyle: "SaddleBrown",
            x: x * 0.3875, y: y * 0.95,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Guard_Left', 'all'],
            dragGroups: ['Red_Guard_Left'],
            fillStyle: "Bisque",
            x: x * 0.3875, y: y * 0.95,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Guard_Left', 'all'],
            dragGroups: ['Red_Guard_Left'],
            x: x * 0.3875, y: y * 0.95,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '仕',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Guard_Left', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_General', 'all'],
            dragGroups: ['Red_General'],
            fillStyle: "SaddleBrown",
            x: x * 0.5, y: y * 0.95,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_General', 'all'],
            dragGroups: ['Red_General'],
            fillStyle: "Bisque",
            x: x * 0.5, y: y * 0.95,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_General', 'all'],
            dragGroups: ['Red_General'],
            x: x * 0.5, y: y * 0.95,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '帥',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_General', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Guard_Right', 'all'],
            dragGroups: ['Red_Guard_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.6125, y: y * 0.95,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Guard_Right', 'all'],
            dragGroups: ['Red_Guard_Right'],
            fillStyle: "Bisque",
            x: x * 0.6125, y: y * 0.95,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Guard_Right', 'all'],
            dragGroups: ['Red_Guard_Right'],
            x: x * 0.6125, y: y * 0.95,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '仕',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Guard_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Bishop_Right', 'all'],
            dragGroups: ['Red_Bishop_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.725, y: y * 0.95,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Bishop_Right', 'all'],
            dragGroups: ['Red_Bishop_Right'],
            fillStyle: "Bisque",
            x: x * 0.725, y: y * 0.95,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Bishop_Right', 'all'],
            dragGroups: ['Red_Bishop_Right'],
            x: x * 0.725, y: y * 0.95,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '相',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Bishop_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Knight_Right', 'all'],
            dragGroups: ['Red_Knight_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.8375, y: y * 0.95,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Knight_Right', 'all'],
            dragGroups: ['Red_Knight_Right'],
            fillStyle: "Bisque",
            x: x * 0.8375, y: y * 0.95,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Knight_Right', 'all'],
            dragGroups: ['Red_Knight_Right'],
            x: x * 0.8375, y: y * 0.95,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '馬',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Knight_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Chariot_Right', 'all'],
            dragGroups: ['Red_Chariot_Right'],
            fillStyle: "SaddleBrown",
            x: x * 0.95, y: y * 0.95,
            width: x * 0.09, height: x * 0.09
        })
        .drawEllipse({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Chariot_Right', 'all'],
            dragGroups: ['Red_Chariot_Right'],
            fillStyle: "Bisque",
            x: x * 0.95, y: y * 0.95,
            width: x * 0.08, height: x * 0.08
        })
        .drawText({
            layer: true,
            draggable: true,
            cursors: {
                mouseover: 'grab',
                mousedown: 'grabbing',
                mouseup: 'grab'
            },
            groups: ['Red_Chariot_Right', 'all'],
            dragGroups: ['Red_Chariot_Right'],
            x: x * 0.95, y: y * 0.95,
            fillStyle: 'Red',
            strokeStyle: 'Red',
            strokeWidth: 2,
            fontSize: x * 0.07,
            fontFamily: 'DFKai-sb',
            text: '車',
            updateDragX: function (layer, x) {
                dx = x;
                return x;
            },
            updateDragY: function (layer, y) {
                dy = y;
                return y;
            },
            dragstop: function (layer) {
                $('#chess').setLayerGroup('Red_Chariot_Right', {
                    x: (Math.min(Math.floor(dx / x * 9), 8) * x * 0.1125 + x * 0.05),
                    y: (Math.min(Math.floor(dy / y * 10), 9) * y * 0.1 + y * 0.05)
                }).drawLayers();
            },
        })
}