#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testAudioDevice(testname){
	try{
		
		//clickOnScroll(Browse_id);
		clickOnScroll(AudioDevice_id);
		clickOnScreen(110,127);
		waitForFewSeconds(3);
		clickOnScreen(184,231);
		waitForFewSeconds(3);
		clickOnScreen(259,223);
		clickOnScroll(UpdateCart_id);
		waitForFewSeconds(1);		
		clickOnScroll(Checkout_id);
		clickOnScreen(259,223);
		waitForFewSeconds(1);
		clickOnScroll(MyCart_id);
		clickOnScreen(259,223);
		waitForFewSeconds(1);
		clickOnScroll(Remove_id);
		waitForFewSeconds(2);
		clickOnScroll(Back_id);
		UIALogger.logPass(testname);
		
	}
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(testname);	
	}
}
testAudioDevice("AudioDeviceTest");