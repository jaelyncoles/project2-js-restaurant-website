
var fetchedData = {};

async function start() {
    // call the api and return a set of menu items for each menu required
    var menu1 = await getMenu(8);
    // update the page with the menu items for the specific menu
    updatePage("lunch", menu1.menu_items);

    var menu2 = await getMenu(5);
    // update the page with the menu items for the specific menu
    updatePage("brunch", menu2.menu_items);

    var menu3 = await getMenu(8);
    // update the page with the menu items for the specific menu
    updatePage("dinner", menu2.menu_items);

    var menu4 = await getMenu(5);
    // update the page with the menu items for the specific menu
    updatePage("late", menu2.menu_items);
    // 
}

async function getMenu(id){
    var url = 'https://entree-f18.herokuapp.com/v1/menu/'+id;
    var menu = await fetch(url, {mode: 'cors'})
        .then(
            function (response) {
                // evaluate the response from the call to the url
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // return the response as json
                response.json().then(function (data) {
                    //console.log(data);
                    // set fetchedData = data returned from the fetch
                    fetchedData = data;
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
        // return the fetchedData
        return fetchedData;
}

function updatePage(menuHolder, menuItems){
    console.log(menuItems);
    str="<ul>";
    
    
    // loop thru all menuItems
    for (var m=0;m<menuItems.length-1;m++){
        str+="<li>";
        str+=menuItems[m].description;
        str+="</li>";
    }

    str += "</ul>";
    
    // create html elements to add to the menu list
    // write html to the specific menu "lunch"
    document.getElementById(menuHolder).innerHTML = str;
}