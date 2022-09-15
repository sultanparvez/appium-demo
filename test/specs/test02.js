
describe("Package",()=>{
it ("Use of package", async()=>{
    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
})
})