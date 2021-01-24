let question = prompt("what do you want to buy from my website");
const products = [];
while(question !== "quit" && question !== "q"){
    if(question === "list"){
        console.log("*******");
        for(let i = 0; i < products.length; i++){
            console.log(`${i}: ${products[i]}`)
        }
        console.log("*******");
    }
    else if(question == "new"){
        const item = prompt(' buy a new something');
        products.push(item)
        alert(`${item} added to the list`);
    }
    else if(question === 'delete'){
        const deleteItem = prompt("ok, what do you want to delete");
        for(let i = 0; i<products.length; i++){
            if(products[i]===deleteItem){
                alert(`you have deleted ${products[i]}`);
                products.splice(i,1);
            }
            else if(Number.isNaN(deleteItem)){
                const deleted =products.splice(i,1);
                alert(`ok, deleted ${deleted[0]}`)
            }
            else{
                alert("unknown in the list");
            }
        }
    }
    question = prompt("what do you want to buy from my website");
}
alert('you quit the app');