var cm = Packages.net.canarymod;
var cmRecipe = cm.api.inventory.recipes.CraftingRecipe;
var cmRecipeRow = cm.api.inventory.recipes.RecipeRow;

function addRecipe( recipe ){
  return server.addRecipe( createRecipe( recipe ) );
}
function createRecipe( recipe ){
  if (!recipe){
    return null;
  }
  var result,
    rows,
    i,j,
    cells,
    rr;
  if (recipe.shape){
    rows = [];
    for (i = 0; i < recipe.shape.length; i++){
      cells = recipe.shape[i].split('');
      rr = [];
      for ( j = 0; j < cells.length ; j++){
      	if (cells[j] != ' '){
      	  rr.push(recipe.ingredients[cells[j]]);
      	}
      }
      rows.push( new cmRecipeRow(recipe.shape[i], rr) );
    }
    switch(rows.length){
      case 1 :
        result = cmRecipe.createShapedRecipe( recipe.result, rows[0]);
        break
      case 2 :
        result = cmRecipe.createShapedRecipe( recipe.result, rows[0], rows[1]);
        break
      case 3 :
        result = cmRecipe.createShapedRecipe( recipe.result, rows[0], rows[1], rows[2]);
        break
    }
  } else {
    var ri = recipe.ingredients
    switch(ri.length){
      case 1 :
        result = cmRecipe.createShapelessRecipe( recipe.result, ri[0] );
        break
      case 2 :
        result = cmRecipe.createShapelessRecipe( recipe.result, ri[0], ri[1] );
        break
      case 3 :
        result = cmRecipe.createShapelessRecipe( recipe.result, ri[0], ri[1], ri[2] );
        break
      case 4 :
        result = cmRecipe.createShapelessRecipe( recipe.result, ri[0], ri[1], ri[2], ri[3] );
        break
      case 5 :
        result = cmRecipe.createShapelessRecipe( recipe.result, ri[0], ri[1], ri[2], ri[3], ri[4] );
        break
      case 6 :
        result = cmRecipe.createShapelessRecipe( recipe.result, ri[0], ri[1], ri[2], ri[3], ri[4], ri[5] );
        break
      case 7 :
        result = cmRecipe.createShapelessRecipe( recipe.result, ri[0], ri[1], ri[2], ri[3], ri[4], ri[5], ri[6] );
        break
      case 8 :
        result = cmRecipe.createShapelessRecipe( recipe.result, ri[0], ri[1], ri[2], ri[3], ri[4], ri[5], ri[6], ri[7] );
        break
      case 9 :
        result = cmRecipe.createShapelessRecipe( recipe.result, ri[0], ri[1], ri[2], ri[3], ri[4], ri[5], ri[6], ri[7], ri[8] );
        break
    }
  }
  return result;
}
function removeRecipe( recipe ){
  server.removeRecipe( recipe );
}
exports.create = createRecipe;
exports.add = addRecipe;
exports.remove = removeRecipe;
