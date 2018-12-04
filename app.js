var player1 = new Vue({
    el: '#player1',
    data: {
        personPicture: '',
        removeInput: '',
        playersName: '',
        playersInput: '',
        player: {
            name: '',
            points: 0
        },
        clplayer: 'player',
        isAdded: false,
        isActive: false,
        activatePlayer: 'display: none',
        health: 100,
    },
    methods: {
        uploadImage() {
            var shortcut = this.$refs.myFile.files.item(0).name;
            this.personPicture = 'images/'+shortcut;
            this.removeInput = 'display: none'
        },
        addPlayer() {
            this.playersInput = 'display: none';
            this.player.name = this.playersName;
        },

    }
});
var player2 = new Vue({
    el: '#player2',
    data: {
        person2Picture: '',
        removeInput: '',
        players2Name: '',
        players2Input: '',
        player2: {
            name: '',
            points: 100
        },
        clplayer: 'player',
        isAdded: false,
        isActive: false,
        activatePlayer: 'display: none',
        health: 100,
    },
    methods: {
        uploadImage2() {
            var shortcut = this.$refs.myFile.files.item(0).name;
            this.person2Picture = 'images/'+shortcut;
            this.removeInput = 'display: none'
        },
        addPlayer2() {
            this.players2Input = 'display: none';
            this.player2.name = this.players2Name;
        },

    }
});
var player3 = new Vue({
    el: '#player3',
    data: {
        person3Picture: '',
        removeInput: '',
        players3Name: '',
        players3Input: '',
        player3: {
            name: '',
            points: 0
        },
        clplayer: 'player',
        isAdded: false,
        isActive: false,
        activatePlayer: 'display: none',
        health: 100,
    },
    methods: {
        uploadImage3() {
            var shortcut = this.$refs.myFile.files.item(0).name;
            this.person3Picture = 'images/'+shortcut;
            this.removeInput = 'display: none'
        },
        addPlayer3() {
            this.players3Input = 'display: none';
            this.player3.name = this.players3Name;
        },

    }
});
var player4 = new Vue({
    el: '#player4',
    data: {
        person4Picture: '',
        removeInput: '',
        players4Name: '',
        players4Input: '',
        player4: {
            name: '',
            points: 0
        },
        clplayer: 'player',
        isAdded: false,
        isActive: false,
        activatePlayer: 'display: none',
        health: 100,
    },
    methods: {
        uploadImage4() {
            var shortcut = this.$refs.myFile.files.item(0).name;
            this.person4Picture = 'images/'+shortcut;
            this.removeInput = 'display: none'
        },
        addPlayer4() {
            this.players4Input = 'display: none';
            this.player4.name = this.players4Name;
        },

    }
});

var newPlayer = new Vue({
    el: '.newPlayer',
    data: {
        players: [],
        newPlayerButton: ''

    },
    methods: {
        addNewPlayer() {
            console.log('button pressed');
            if (player1.isAdded === false) {
                player1.isAdded = true;
                player1.activatePlayer = '';
                this.players.push(player1)
            } else if (player2.isAdded === false) {
                player2.isAdded = true;
                player2.activatePlayer = '';
                this.players.push(player2)
            } else if (player3.isAdded === false) {
                player3.isAdded = true;
                player3.activatePlayer = '';
                this.players.push(player3)
            } else if (player4.isAdded === false) {
                player4.isAdded = true;
                player4.activatePlayer = '';
                this.players.push(player4)
            }
            console.log(this.players);
        }
    }
});

var startNext = new Vue({
    el: '#start-game',
    data: {
        startNext: 'Start game',
        gameStarted: false
    },
    methods: {
        begin() {
            if (this.gameStarted === false) {
                this.gameStarted = true;
                nextPlayer.nextPlayer = 'Sledeci igrac';
                this.startNext = 'Ziveli!';
                player1.clplayer = 'activePlayer';
                player1.isActive = true;
                newPlayer.newPlayerButton = 'display:none'
            }
        }
    }
});

var nextPlayer = new Vue({
   el: '#next-player',
   data: {
       nextPlayer: 'Klikni start za pocetak'
   },
   methods: {
        selectNextPlayer() {
            var currentPlayer = 0;
            newPlayer.players.forEach(function (item, index) {
                if (newPlayer.players[index].isActive){
                    currentPlayer = index;
                }
                console.log(currentPlayer);
            });
            newPlayer.players.forEach(function (item, index) {
                if (newPlayer.players[currentPlayer].isAdded){
                if (currentPlayer !== newPlayer.players.length-1) {
                    newPlayer.players[currentPlayer+1].isActive = true;
                    newPlayer.players[currentPlayer+1].clplayer = 'activePlayer';
                    if (newPlayer.players[currentPlayer+1].health <= 0) {
                        newPlayer.players.splice(currentPlayer+1, 1)
                    }
                    newPlayer.players[currentPlayer].isActive = false;
                    newPlayer.players[currentPlayer].clplayer = 'player';
                    if (newPlayer.players[currentPlayer].health <= 0) {
                        newPlayer.players.splice(currentPlayer, 1)
                    }
                } else {
                    newPlayer.players[currentPlayer].isActive = false;
                    newPlayer.players[currentPlayer].clplayer = 'player';
                    if (newPlayer.players[currentPlayer].health <= 0) {
                        newPlayer.players.splice(currentPlayer, 1)
                    }
                    newPlayer.players[0].isActive = true;
                    newPlayer.players[0].clplayer = 'activePlayer';
                    if (newPlayer.players[0].health <= 0) {
                        newPlayer.players[0].isAdded = false;
                        newPlayer.players.splice(0, 1)
                    }
                }
                }
            });
            choices.image1 = 'images/choice.png';
            choices.image2 = 'images/choice.png';
            choices.image3 = 'images/choice.png';
            choices.clickOnce = true;
        }
   }
});

var choices = new Vue({
   el: '.choices',
   data: {
       image1:'images/choice.png',
       image2:'images/choice.png',
       image3:'images/choice.png',
       clickOnce: true


   },
   methods: {
       choice1() {
           if (this.clickOnce) {
               var number = Math.floor(Math.random() * 3 + 1);
               this.image1 = 'images/' + number + '.png';
               newPlayer.players.forEach(function (element) {
                   if (element.isActive) {
                       if (number === 2) {
                           element.health -= 10;
                       } else if (number === 3) {
                           element.health -= 20;
                       }
                   }
                   if (element.health <= 0) {
                       element.health = 0;
                       element.clplayer = 'deadPlayer'
                   }
                   if (element.health === 0 && newPlayer.players.length === 2) {
                       alert('Gotova igra');
                       var winnersName = '';
                       newPlayer.players.forEach(function (element) {
                           if (element.health > 0) {
                               winnersName = element.playersName;
                           }
                       })
                       startNext.startNext = 'Pobednik je ' + winnersName
                   }
               });
               this.clickOnce = false;
           }
       },
       choice2() {
           if (this.clickOnce) {
               var number = Math.floor(Math.random() * 3 + 1);
               this.image2 = 'images/' + number + '.png';
               newPlayer.players.forEach(function (element) {
                   if (element.isActive) {
                       if (number === 2) {
                           element.health -= 10;
                       } else if (number === 3) {
                           element.health -= 20;
                       }
                   }
                   if (element.health <= 0) {
                       element.health = 0;
                       element.clplayer = 'deadPlayer'
                   }
                   if (element.health === 0 && newPlayer.players.length === 2) {
                       alert('Gotova igra');
                       var winnersName = '';
                       newPlayer.players.forEach(function (element) {
                           if (element.health > 0) {
                               winnersName = element.playersName;
                           }
                       });
                       startNext.startNext = 'Pobednik je ' + winnersName
                   }
               });
               this.clickOnce = false
           }
       },
       choice3() {
           if (this.clickOnce){
           var number = Math.floor(Math.random()*3+1);
           this.image3 = 'images/'+number+'.png';
           newPlayer.players.forEach(function (element) {
               if (element.isActive) {
                   if (number === 2) {
                       element.health -= 10;
                   } else if (number === 3) {
                       element.health -= 20;
                   }
               }
               if (element.health <= 0) {
                   element.health = 0;
                   element.clplayer = 'deadPlayer'
               }
               if (element.health === 0 && newPlayer.players.length === 2) {
                   alert('Gotova igra');
                   var winnersName = '';
                   newPlayer.players.forEach(function (element) {
                       if (element.health > 0) {
                           winnersName = element.playersName;
                       }
                   });
                   startNext.startNext = 'Pobednik je '+ winnersName
               }
           });
               this.clickOnce = false;
           }
       },

   }
});