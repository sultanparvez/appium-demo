const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver");

describe("Package",()=>{
it ("Use of package", async()=>{
    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
})
it ("Alert Box", async()=>{
    //Access Activity
    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

    //Click on Dialog Box
   await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
    
   //accept Alert
   //await driver.acceptAlert();
  //Dismiss Alert 
//    await driver.dismissAlert();

//   Click on okay
await $('//*[@resource-id="android:id/button1"]').click()
   //Assertion
   await expect($('//*[@resource-id="android:id/button1"]')).not.toExist();
})
it ("Vertical Scrolling", async()=>{
    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1")

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList.scrollForward()')


    await driver.pause(3000);
})

})