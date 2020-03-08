const {I}=inject();


Given('print something here',async function(){
I.amOnPage("https://www.npmjs.com/");
I.saveScreenshot("npmPage.png");
    console.log("+++++++++++++++++++Hi nitin i am printing this+++++++++++++++");
    I.see("heysdf")
});
Given('print something heres',async function(){
    I.amOnPage("https://www.npmjs.com/");
    I.saveScreenshot("npmPage.png");
        console.log("+++++++++++++++++++Hi nitin i am printing this+++++++++++++++");
        
    });