(function(){
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)
//.factory('ShoppingListCheckOffFactory', ShoppingListCheckOffFactory);

ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
function ToBuyShoppingController(ShoppingListCheckOffService){
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.removeItem = function(itemIndex){
    var item = ShoppingListCheckOffService.removeItem(itemIndex);
    if (toBuy.items.length == 0)
      toBuy.errorMessage = "true";
  }
}

AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();

  if (bought.items.length == 0)
    bought.errorMessage = "true";
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuy = [{
    name:'Batatas',
    quantity:6
  },
  {
    name:'Batatas',
    quantity:2
  }];

  var bought = [];

  service.getToBuyItems = function () {
      return toBuy;
  }

  service.getBoughtItems = function(){
      return bought;
  }

  service.removeItem = function(itemIndex){
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex,1);
  }
}
})();
