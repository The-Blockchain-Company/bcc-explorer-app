import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { DEFAULT_LOCALE } from '../features/i18n';
import { bccExplorerTheme } from '../styles/theme/theme';

class BccExplorerDocument extends Document {
  public render() {
    const lang =
      this.props.__NEXT_DATA__.props?.pageProps?.locale || DEFAULT_LOCALE;
    return (
      <Html style={bccExplorerTheme} lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BccExplorerDocument;
