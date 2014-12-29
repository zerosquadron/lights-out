/*global require, $, _, console */
'use strict';

var game = { 

    render: function() {
        var gameView = $('#game-template').html(),
            playBoard;

        $('.container').append(_.template(gameView, playBoard));
        game.lightInit();
    },

    lightInit: function(){  //randomly light between 10 and 15 lights at the start
        var maxStart = 16, 
            minStart = 10,
            aMin = 0,
            aMax = 5,
            i,
            lightSelected,
            j,
            lStart = Math.floor(Math.random() * (maxStart - minStart)) + minStart;
        console.log(lStart);
        for (var k = 0; k <= lStart; k++) {
            i = Math.floor(Math.random() * (aMax - aMin) + aMin);
            j = Math.floor(Math.random() * (aMax - aMin) + aMin);
            lightSelected = i+'-'+j;
            $('.light[data-light="'+lightSelected+'"]').addClass('on');
        }  
    },

    won: function () {
        if (!$('.light').hasClass('on')) {
            console.log('bang!')
        }
    },

    board: function () {
        var playBoard = [],
            size = 5;

        for (var i = 0; i < size; i++) {
            playBoard[i] = [];
            for (var j = 0; j < size; j++) {
                playBoard[i][j] = [];
            }
        }
        return playBoard;
    }, 

    game: function(){
        game.render();
        $('.container').on('click', '.light', function (){
            $(this).toggleClass('on', console.log($(this).data('light')));
            game.won();
        });
        $('#instructions').on('click', function() {
            $('.instructions').toggleClass('hide show');
        });
    }
};

window.Game = game.game();
