#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testMovieAndMusic(testname){
	try{
		
		//clickOnScroll(Browse_id);
		waitForFewSeconds(7);
		target.logElementTree();
		clickOnScroll("\nBrowse\n");
		
		target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["Movies and Music (10)"].tap();
		target.logElementTree();
target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["Coby TFDVD7009 Portable DVD Player"].tap();		clickOnScroll(UpdateCart_id);
		waitForFewSeconds(2);		
		clickOnScroll(Checkout_id);
		clickOnScreen(259,223);
		waitForFewSeconds(1);
		clickOnScroll(MyCart_id);
		clickOnScreen(259,223);
		waitForFewSeconds(1);
		clickOnScroll(Remove_id);
		clickOnScroll(Back_id);		
		UIALogger.logPass(testname);
		
		
	}
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(testname);	
	}
}
testMovieAndMusic("MovieandMusicTest");






