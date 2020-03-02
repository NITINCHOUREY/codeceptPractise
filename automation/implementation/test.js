const {I}=inject();


Given('print something here',async function(){
I.amOnPage("https://www.npmjs.com/");
    console.log("+++++++++++++++++++Hi nitin i am printing this+++++++++++++++");
});