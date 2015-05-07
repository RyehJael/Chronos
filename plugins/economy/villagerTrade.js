events.villagerTrade(trade)




function trade(event){
	var player = event.getPlayer()
	var trade = event.getTrade()
	var villager = event.getVillager()
	var trades = villager.getTrades()

	if (trade.requiresTwoItems()){
		return
	}
	var itemSold = trade.getSelling()
	var itemBought = trade.getBuyingOne()
	echo(player, itemSold)



	var itemsSold = []
	var itemsBuying = []
	for (var i in trades){
		itemsSold.push(trades[i].getSelling())
		itemsBuying.push(trades[i].getBuyingOne())
	}

	var reverseTrade = trade.clone()
	villager.addTrade(reverseTrade)
	reverseTrade.setSelling(itemBought)
	reverseTrade.setBuyingOne(itemSold)


// 	var tradeExists = false
// 	for (var i in trades){
// 		echo(player, trades[i].getBuyingOne())
// 		try {
// 			if ( itemSold == trades[i].getBuyingOne() && itemBought == trades[i].getSelling() ){
// 			tradeExists = true
// 			break
// 			}
// 		} catch(error) {
// 			tradeExists = false
// 		}
		
// 	}
// 	if (!tradeExists){
// 		villager.addTrade(reverseTrade)
// 	}

}



function isTrading(item){

}


function getValues(object,key){
	var values = []
	for (var i in object){
		object[i][key]
	}
}