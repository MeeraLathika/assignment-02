(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemsToBuy = this;
	itemsToBuy.items = ShoppingListCheckOffService.initToBuy();
//	console.log(itemsToBuy);
	itemsToBuy.checkOff = function (itemIndex){
		ShoppingListCheckOffService.checkOffService(itemIndex);
	};itemsToBuy.message =function(){return (itemsToBuy.items=="");}
		
//	console.log(itemsToBuy.items.length);
	itemsToBuy.lengthCheck = ShoppingListCheckOffService.lengthCheckToBuy();	
	
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemsBought = this;
	itemsBought.items = ShoppingListCheckOffService.initBought();
	itemsBought.listLength = ShoppingListCheckOffService.lengthBought();
}


function ShoppingListCheckOffService() {
  var service = this;
	var itemsBought = [];

  // List of shopping items
  var itemsToBuy = [
	{name:"Cookie",
	quantity:10
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
	{name : "Twinkie",
	quantity : 10
	}
  ];
	
	service.checkOffService = function (itemIndex){
		itemsBought.push(itemsToBuy[itemIndex]);
		itemsToBuy.splice(itemIndex,1);
//		console.log(itemsToBuy.length);
	}
	
	service.initToBuy = function(){
		return itemsToBuy;
	};
	
	service.initBought = function(){
		return itemsBought;
	};
	service.lengthCheckToBuy = function(){
//		console.log(itemsToBuy.length);
		if(itemsToBuy.length==0)
			return true;
		else
			return false;
	};
	service.lengthBought = function(){
		if(itemsBought.length==0)
		   return true;
		else
			return false;
	};
}

})();
