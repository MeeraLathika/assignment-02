(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemsToBuy = this;
	itemsToBuy = ShoppingListCheckOffService.initToBuy();
	console.
	itemsToBuy.checkOff = function (itemIndex){
		ShoppingListCheckOffService.checkOffService(itemIndex);
	};

  
//  itemAdder.addItem = function () {
//    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemsBought = this;
	itemsBought = ShoppingListCheckOffService.initBought();
	

//  showList.items = ShoppingListService.getItems();
//
//  showList.removeItem = function (itemIndex) {
//    ShoppingListService.removeItem(itemIndex);
//  };
}


function ShoppingListService() {
  var service = this;
	var itemsBought = [];

  // List of shopping items
  var itemsToBuy = [
	  {name : "Cookies",
	   quantity : 10
	  },
	  {name : "Coca cola",
	   quantity : 5
	  },
	  {name : "Orange",
	   quantity : 7
	  },
	  {name : "Chocolate",
	   quantity : 20
	  },
	  {name : "Twinkies",
	   quantity : 10
	  }
  ];
	
	service.checkOffService = function (itemIndex){
		itemsBought.push(itemsToBuy[itemIndex]);
		itemsToBuy.splice(itemIndex);
	}
	
	service.initToBuy = function(){
		return itemsToBuy;
	};
	
	service.initBought = function(){
		return itemsBought;
	};

//  service.addItem = function (itemName, quantity) {
//    var item = {
//      name: itemName,
//      quantity: quantity
//    };
//    items.push(item);
//  };
//
//  service.removeItem = function (itemIdex) {
//    items.splice(itemIdex, 1);
//  };
//
//  service.getItems = function () {
//    return items;
//  };
}

})();