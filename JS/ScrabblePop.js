
if (typeof ScrabblePopup == 'undefined') {
        var ScrabblePopup = function(aScrabbleManager) {
            var scrabbleManager = aScrabbleManager;
            var popup;
            
            function init() {
                popup = $('<div id="scrabblePopup"></div>');
                
                // Create the window that shows before the game starts.
                let pregamePopup = 
                    $('<div id="pregamePopup">' +
                        '<label for="inputNumberOfPlayers">Select Number of Players:</label>' +
                    '</div>');
                
                // Create input field for the number of players.
                let inputNumberOfPlayers = $(
                    '<select id="inputNumberOfPlayers" name="inputNumberOfPlayers">' +
                        '<option selected>1</option>' +
                        '<option>2</option>' +
                        '<option>3</option>' +
                        '<option>4</option>' +
                    '</select>'
                );
                pregamePopup.append(inputNumberOfPlayers);
                inputNumberOfPlayers.selectmenu({style: 'dropdown'});
                
                // Create start game button.
                let startGameBtn = $('<input id="startGameBtn" type="submit">');
                startGameBtn.button({
                    label: 'Start Game'
                });
                startGameBtn.click(function(e) {
                    aScrabbleManager.start(inputNumberOfPlayers.val());
                    popup.addClass('hidden');
                    e.preventDefault();
                });
                pregamePopup.append(startGameBtn);
                popup.append(pregamePopup);
                
                return popup;
            }
            return {
                init: init
            }
        };
    }