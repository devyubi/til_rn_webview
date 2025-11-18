import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
// 컴포넌트 JS 자리
const App = () => {
  const webViewUrl = 'https://bab-mu.vercel.app/member';
  return (
    <SafeAreaView style={style.container}>
      <WebView
        style={style.webview}
        source={{ uri: webViewUrl }} // 웹뷰에 보여줄 URL 주소
        startInLoadingState={true} // 웹뷰가 로딩중인 인디케이터 표시
        renderLoading={() => (
          <View style={style.loadingContainer}>
            <ActivityIndicator
              size={'large'}
              color={'#c4ffbd'}
            ></ActivityIndicator>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
// 컴포넌트 CSS 오브젝트자리
const style = StyleSheet.create({
  // 전체 컨테이너 영역
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  // 웹뷰영역
  webview: {
    flex: 1,
  },
});

export default App;
