# GUI-HW5
- For the JS files I use multiple files so I could better keep track of everything. 

# ScrabbleBag.js
- Inside the init function, an HTML div element with the id "scrabbleBag" is created using jQuery ($('<div id="scrabbleBag"></div>')). The created bag div is then made droppable, meaning it can accept other elements being dropped onto it. When a drop event occurs, the code performs several operations.First, it detaches the dragged tile from the UI and retrieves its owner's ID. It then removes the owner ID attribute from the tile. It searches for the rack element that corresponds to the tile's owner ID and assigns it to the rack variable.

# ScrabbleBoard.js
- Overall, this code provides functionality for initializing and managing a Scrabble game board, tracking placed tiles, calculating scores, and identifying new words formed after each turn.

# ScrabbleDictionary.js
- The function starts by declaring a dictionary object that will store the words from the Scrabble dictionary.This code sets up a Scrabble dictionary object that can be used to initialize the dictionary with words from a file and validate if a given word is present in the dictionary.

# ScrabblePop.js
- This code sets up a Scrabble popup object that can be used to initialize and configure a popup element with a pregame form for selecting the number of players and starting the game. The popup is hidden by default and can be shown later using JavaScript or CSS manipulation.

# ScrabbleRack.js
- This code sets up a Scrabble rack object that can be used to initialize and manage a rack element for a specific player in the game. The rack contains a label displaying the player number, a drop zone for tiles, and functions to add tiles to the rack and retrieve the rack element.

# ScrabbleScore.js
- This code sets up a Scrabble scorecard object that can be used to initialize and manage a scorecard element for the game. It provides functions to populate the scorecard with player scores, update the scores based on player actions, and retrieve the scorecard element.

# ScrabbleTile.js
- This code sets up a Scrabble tile object that represents an individual tile in the game. Each tile has a letter, a value, and a unique ID. The object provides functions to initialize the tile element, retrieve the letter, value, and ID of the tile, and interact with the draggable behavior of the tile.

# ScrabbleManager.js
-  sets up the necessary components for a Scrabble game, including the board, scorecard, dictionary, tile bag, player racks, and various game functions.