// ==============================================================================
//Budget Controller
// ==============================================================================

var budgetController = (function() {

})();

// ==============================================================================
//UICOntroller
// ==============================================================================

var UIController = (function() {
  
  return {
    
    getInput : function() {
      return {
        type : document.querySelector(".add__types").value,
        description : document.querySelector(".add__description").value,
        value : document.querySelector(".add__value").value
      };
    }
  };
})();

// ==============================================================================
//GLOBAL APP CONTROLLER
// ==============================================================================

var Controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    //1. Get field input data
    var input = UICtrl.getInput();
    console.log(input);
    //2. add item to budget Controller
    //3. add new item to UI
    //4. Calculate the budget
    //5. Display the budget
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
