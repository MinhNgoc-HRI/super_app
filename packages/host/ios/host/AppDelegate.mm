#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
// FIREBASE SETTING
#import <Firebase.h>
// FIREBASE SETTING
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"host";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  // FIREBASE SETTING
  [FIRApp configure];
  // FIREBASE SETTING
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
