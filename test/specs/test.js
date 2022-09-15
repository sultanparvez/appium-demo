describe("Navigate",()=>{
    it("find element by Accesbility ID", async()=>{
       const appOption = await $('~App');

       await appOption.click();

       const actionBar = await $('~Action Bar')

       await expect(actionBar).toBeExisting();
    })

    it.skip ("find element by class name", async()=>{
        const eleName = await $('android.widget.TextView');

       await expect(eleName).toHaveText("API Demos");
    })

    it.skip ("find element by xpath", async()=>{

     await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
     await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
     await $('//android.widget.TextView[@text="Command two"]').click()

     const textAssertion =  await $('//android.widget.TextView');
     await expect(textAssertion).toHaveText("You selected: 1 , Command two")
    })

    it.skip ("find element by UIAutomator", async()=>{
         await $('android=new UiSelector().text("Alert Dialogs")').click();
        // const selector = 'new UiSelector().textContains("Alert").className("android.widget.TextView")'
        // const button = await $(`android=${selector}`)
        // await button.click()

    })
    it.skip ("Multiple elements", async()=>{
        const expectedList = [ "API Demos" , "Access'ibility","Accessibility" , "Animation" , "App" , "Content" ,"Graphics","Media","NFC","OS" ]
        const actualList = []

        const textList = await $$('android.widget.TextView');
        for (const $el of textList){
            actualList.push(await $el.getText());
        }
        await expect(actualList).toEqual(actualList);
    })

    it.skip ("Exercise", async()=>{
    
        await $('~Views').click()
        await $('//android.widget.TextView[@content-desc="Auto Complete"]').click()
        await $('//android.widget.TextView[@resource-id="android:id/text1"]').click()
        await $('//*[@resource-id="io.appium.android.apis:id/edit"]').setValue("Canada")
        const countryName =  await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await expect(countryName).toHaveText("Canada");
     })
     
    it ("Vertical Scrolling", async()=>{
        await $('~Activity').click();

        //scroll to end
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        //Scroll to view 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')

        await $('~Secure Surfaces').click();
        await expect($('~Secure Dialog')).toExist();
   })


})