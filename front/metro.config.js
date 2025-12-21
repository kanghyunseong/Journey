const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // 추가적인 파일 확장자를 포함시키고 싶을 때
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'cjs'],
  },
  watchFolders: [
    // 추가로 감시하고 싶은 폴더를 지정할 수 있습니다
    // 예를 들어, 외부 라이브러리 폴더나 공통 모듈이 있을 때
    // path.resolve(__dirname, '../some-other-folder'),
  ],
  transformer: {
    // 이미지와 같은 특정 파일 타입을 처리하기 위한 추가 설정
    // 예: 주로 사용하는 변환기 설정
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
