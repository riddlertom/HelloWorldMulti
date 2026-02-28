import { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const RUMBLE_EMBED_HTML = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#000">
<script>!function(r,u,m,b,l,e){r._Rumble=b,r[b]||(r[b]=function(){(r[b]._=r[b]._||[]).push(arguments);if(r[b]._.length==1){l=u.createElement(m),e=u.getElementsByTagName(m)[0],l.async=1,l.src="https://rumble.com/embedJS/u692br"+(arguments[1].video?'.'+arguments[1].video:'')+"/?url="+encodeURIComponent(location.href)+"&args="+encodeURIComponent(JSON.stringify([].slice.apply(arguments))),e.parentNode.insertBefore(l,e)}})}(window, document, "script", "Rumble");</script>
<div id="rumble_v70n5ne"></div>
<script>Rumble("play", {"video":"v70n5ne","div":"rumble_v70n5ne"});</script>
</body>
</html>
`;

export default function Test3Screen() {
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return;

    const script1 = document.createElement('script');
    script1.textContent = `!function(r,u,m,b,l,e){r._Rumble=b,r[b]||(r[b]=function(){(r[b]._=r[b]._||[]).push(arguments);if(r[b]._.length==1){l=u.createElement(m),e=u.getElementsByTagName(m)[0],l.async=1,l.src="https://rumble.com/embedJS/u692br"+(arguments[1].video?'.'+arguments[1].video:'')+"/?url="+encodeURIComponent(location.href)+"&args="+encodeURIComponent(JSON.stringify([].slice.apply(arguments))),e.parentNode.insertBefore(l,e)}})}(window, document, "script", "Rumble");`;
    document.body.appendChild(script1);

    const runRumble = () => {
      if (typeof (window as unknown as { Rumble?: (a: string, b: object) => void }).Rumble === 'function') {
        (window as unknown as { Rumble: (a: string, b: object) => void }).Rumble('play', { video: 'v70n5ne', div: 'rumble_v70n5ne' });
      } else {
        setTimeout(runRumble, 50);
      }
    };
    const t = setTimeout(runRumble, 100);

    return () => {
      clearTimeout(t);
      script1.remove();
    };
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <View nativeID="rumble_v70n5ne" style={styles.playerWrapper} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{ html: RUMBLE_EMBED_HTML }}
        style={styles.webview}
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={['*']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  playerWrapper: {
    flex: 1,
    minHeight: 300,
  },
  webview: {
    flex: 1,
    minHeight: 300,
  },
});
