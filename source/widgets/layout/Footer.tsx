import classnames from 'classnames';
import React from 'react';
import { environment } from '../../environment';
import { useI18nFeature } from '../../features/i18n/context';
import styles from './Footer.module.scss';

const tbcoLogo = require('../../public/assets/images/tbco-logo.png');
const twitterIcon = require('../../public/assets/images/twitter-icon.png');
const facebookIcon = require('../../public/assets/images/facebook-icon.png');
const youtubeIcon = require('../../public/assets/images/youtube-icon.png');
const newsletterIcon = require('../../public/assets/images/newsletter-icon.png');
const GitIcon = require('../../public/assets/images/git-icon.svg');

interface IFooterProps {
  rootClassname?: string;
}
export const Footer = (props: IFooterProps) => {
  const { translate } = useI18nFeature().store;
  return (
    <footer
      className={classnames([styles.footerContainer, props.rootClassname])}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerTopContainer}>
          <div className={styles.footerTopContainerLeft}>
            <p className={styles.copyright}>
              © TBCO 2015 - {new Date().getFullYear()}
            </p>
            <a href={environment.PACKAGE.HOMEPAGE} className={styles.gitLink}>
              <GitIcon className={styles.gitIcon} />
            </a>
            <p>{environment.PACKAGE.VERSION}</p>
          </div>
          <div className={styles.logos}>
            <div className={styles.logoText}>
              <a href="https://tbco.io/">
                <img src={tbcoLogo} className={styles.tbcoLogo} />
              </a>
              <p className={styles.tbcoText}>{translate('footer.tbco')}</p>
            </div>
            <div className={styles.socialIcons}>
              <a href="https://twitter.com/blockchaincoio">
                <img src={twitterIcon} className={styles.twitterIcon} />
              </a>
              <a href="https://www.facebook.com/theblockchainco/">
                <img src={facebookIcon} className={styles.facebookIcon} />
              </a>
              <a href="https://www.youtube.com/channel/UCBJ0p9aCW-W82TwNM-z3V2w">
                <img src={youtubeIcon} className={styles.youtubeIcon} />
              </a>
              <a href="https://blockchain-company.io">
                <img src={newsletterIcon} className={styles.newsletterIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerMiddleContainer}>
          <hr className={styles.footerSeparator} />
        </div>
        <div className={styles.footerBottomContainer}>
          <div className={styles.bccTextContainer}>
            <h5 className={styles.bccTextTitle}>
              {translate('footer.textTitle')}{' '}
              <a
                className={styles.highlightedLink}
                href="https://github.com/The-Blockchain-Company"
              >
                {translate('footer.openSource')}
              </a>{' '}
              {translate('footer.project')}
            </h5>
            <div className={styles.bccText}>
              {translate('footer.bccText')}
            </div>
          </div>
          <div className={styles.footerMenusContainer}>
            <div className={styles.aboutBccMenuContainer}>
              <h5 className={styles.aboutBccTitle}>
                {translate('footer.moreAbout')}
              </h5>
              <ul className={styles.aboutBccMenu}>
                <li>
                  <a href={'https://bccfoundation.org/'}>
                    {translate('footer.bccFoundation')}
                  </a>
                </li>
                <li>
                  <a href={'https://bccdocs.com/'}>
                    {translate('footer.documentation')}
                  </a>
                </li>
                <li>
                  <a href={'https://github.com/The-Blockchain-Company'}>
                    {translate('footer.bccSource')}
                  </a>
                </li>
                <li>
                  <a href={'https://whybcc.com/'}>
                    {translate('footer.whyBcc')}
                  </a>
                </li>
                <li>
                  <a href={'https://www.bcc.org/en/ark/'}>
                    {translate('footer.arkAlgorithm')}
                  </a>
                </li>
                <li>
                  <a href={'https://tbco.zendesk.com/hc/en-us/requests/new'}>
                    {translate('footer.submitASupportRequest')}
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.joinTheCommunityMenuContainer}>
              <h5 className={styles.joinTheCommunityTitle}>
                {translate('footer.joinCommunity')}
              </h5>
              <ul className={styles.joinTheCommunityMenu}>
                <li>
                  <a href={'https://www.bcc.org/en/home/'}>
                    {translate('footer.bccCommunity')}
                  </a>
                </li>
                <li>
                  <a href={'https://t.me/BccAnnouncements/'}>
                    {translate('footer.bccChat')}
                  </a>
                </li>
                <li>
                  <a href={'https://forum.bcc.org/'}>
                    {translate('footer.bccForum')}
                  </a>
                </li>
                <li>
                  <a href={'https://www.reddit.com/r/bcc/'}>
                    {translate('footer.bccReddit')}
                  </a>
                </li>
                <li>
                  <a
                    href={
                      'https://www.youtube.com/channel/UCbQ9vGfezru1YRI1zDCtTGg'
                    }
                  >
                    {translate('footer.bccFoundationYoutube')}
                  </a>
                </li>
                <li>
                  <a href={'https://twitter.com/BccStiftung'}>
                    {translate('footer.bccFoundationTwitter')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
