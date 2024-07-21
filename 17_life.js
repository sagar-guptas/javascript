// immediately invocked function 

(function chai(){
    //named iife
    console.log(`Db connect `);
})();         // why we use iife because to protect the pollution of the other function 

((name) => {
    console.log(`Db connect two ${name}`);
})("sagar")