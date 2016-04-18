# ReactNativeBlurImageViewSample
Sample project for React Native module: react-native-blur-image-view

Set up project:

## 0 Setup npm
`$npm install react-native-blur-image-view`

## 1 Setup android


Add following config to **settings.gradle**:

    include ':react-native-blur-image-view'
    project(':react-native-blur-image-view').projectDir = new File(rootProject.projectDir.parent, 'node_modules/react-native-blur-image-view/android')


Add following code to **build.gradle**:

	dependencies {
   	  ...
   	  compile project(path: ':react-native-blur-image-view')
	}
	
	
## 2 Setup react native Js
    import BlurImageView from 'react-native-blur-image-view';

       ... 

       <BlurImageView style={{width:400, height:200}}
                       imageUrl={imageData}
          />
          
###TODO: Add sample and radius params.
