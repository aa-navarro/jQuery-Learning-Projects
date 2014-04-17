/***********************************************************************************************************************************************
 * CAPITAL GUESS APP
 ***********************************************************************************************************************************************
 * @description On page-load/navigation: 
 */

    //
    // STATES AND CAPITALS
    //------------------------------------------------------------------------------------------//
    // @description Application data for user interaction.
    
    var stateNames = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    ];

    var stateCapitalNames = [
    "Montgomery",
    "Juneau",
    "Phoenix",
    "Little Rock",
    "Sacramento",
    "Denver",
    "Hartford",
    "Dover",
    "Tallahassee",
    "Atlanta",
    "Honolulu",
    "Boise",
    "Springfield",
    "Indianapolis",
    "Des Moines",
    "Topeka",
    "Frankfort",
    "Baton Rouge",
    "Annapolis",
    "Boston",
    "Lansing",
    "Saint Paul",
    "Jackson",
    "Jefferson City",
    "Helena",
    "Lincoln",
    "Carson City",
    "Concord",
    "Trenton",
    "Albany",
    "Raleigh",
    "Bismarck",
    "Columbus",
    "Oklahoma City",
    "Salem",
    "Harrisburg",
    "Providence",
    "Columbia",
    "Pierre",
    "Nashville",
    "Austin",
    "Salt Lake City",
    "Montpellier",
    "Richmond",
    "Olympia",
    "Charleston",
    "Madison",
    "Cheyenne",
    ];

    var stateNum;
    var stateName;

    // Score Tracking
    var righty = 0;
    var wrongy = 0;

    /**
     * REPLAY
     * 
     * @return {[type]} [description]
     */
    function loadState(elems) {
      // load a state number
      stateNum = Math.floor(Math.random() * 47);
      console.log(stateNum);
      stateName = stateNames[stateNum];

      for(var i=0; i<elems.length; i++) {
        elems[i].textContent = stateName;
      }

      // reset the values for the inputs
    };

    //
    // ON DOM READY
    //------------------------------------------------------------------------------------------//
    // @description App code to run when the DOM is available
    $(document).ready(function() {

      var $stateForm = $('#captureUserAnswer');
      var $capitalAnswer = $('#capitalAnswer');
      var stateDisplay = $('.state-name');


      loadState(stateDisplay);

      // Capture DOM submit
      $stateForm.submit(function(e){

        e.preventDefault();

        var correctAnswer = stateCapitalNames[stateNum];
        var userAnswer = $("#capitalAnswer").val();

        //$("#feedback").text("The correct answer is " + correctAnswer + "and the user entered: " + userAnswer);  

        if (userAnswer == correctAnswer) {
          righty += 1;
          wrongy = 0; 
          $("#feedback").text("Ding, ding, ding! Correctomundo, mi amigo! You have a streak of" + " " + righty + " correct answers.");        
        } else {
          wrongy += 1;
          righty = 0;
          $("#feedback").text("Go hit the books, ya bum! You have a streak of" + " " + wrongy + " wrong  answers.");
        }
      });

      $('#playAgain').click(function(){
        loadState(stateDisplay);
              });
    });
    // // Ask the computer to generate a random number from 1 to 48

    // // Use this number to choose a random state, then the user needs to guess the capital. Both arrays are equal in length,
    // // so we can use the random number as the index for the random state and its capital, too.

    // $var randomState = stateNames[stateNum];

    // //Set up a form that tells the user the name of the random state and prompts her for the name of the capital