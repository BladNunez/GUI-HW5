
if (typeof ScrabbleDictionary == 'undefined') {
        var ScrabbleDictionary = function() {
            var dictionary = {};
            
            function init() {
               // Get dictionary file.
                $.get('dictionary.txt', function(txt) {
                    
                    // Split dictionary words into array.
                    let words = txt.split("\n");
                    
                    // Store words in dictionary object.
                    for(let i = 0; i < words.length; i++) {
                        dictionary[words[i]] = true;
                    }
                }); 
            }
            
            function validateWord(aWord) {
                
                // If word is in dictionary, return true. Otherwise return false.
                return (dictionary[aWord.toLowerCase()]) ? true : false;
            }
            
            return {
                init: init,
                validateWord: validateWord
            }
        };
    }