import React from 'react';

// Components
import { Container, Segment, Icon } from 'semantic-ui-react';

// Styles
import styles from './index.module.less';

// Emoji from Twitter Emoji (MIT License)
// https://github.com/twitter/twemoji/blob/793a6a93f303c08877dd6eb589b2fabb3d1c45ee/assets/svg/1f496.svg
const LoveEmoji: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        height="1.1em"
        width="1.1em"
        style={{ marginBottom: -2 }}
    >
        <path
            fill="#DD2E44"
            d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
        />
        <path
            fill="#FDCB58"
            d="M34.347 23.894l-3.824-1.416-1.416-3.824c-.145-.394-.52-.654-.938-.654-.418 0-.793.26-.938.653l-1.416 3.824-3.824 1.416c-.393.144-.653.519-.653.938 0 .418.261.793.653.938l3.824 1.416 1.416 3.824c.145.393.52.653.938.653.418 0 .793-.261.938-.653l1.416-3.824 3.824-1.416c.392-.145.653-.52.653-.938 0-.418-.261-.793-.653-.937zm-23-16.001l-2.365-.875-.875-2.365C7.961 4.26 7.587 4 7.169 4c-.419 0-.793.26-.938.653l-.876 2.365-2.364.875c-.393.146-.653.52-.653.938 0 .418.26.792.653.938l2.365.875.875 2.365c.146.393.52.653.938.653.418 0 .792-.26.938-.653l.875-2.365 2.365-.875c.393-.146.653-.519.653-.938 0-.418-.26-.792-.653-.938z"
        />
    </svg>
);

export const Footer: React.FC = () => (
    <>
        <Segment vertical>
            <Container textAlign="center">
                <div className={styles.footerIcons}>
                    <code>{window.appVersion.substring(0, 7)}</code>
                    <a
                        href="https://github.com/renbaoshuo/OIerDb"
                        title="GitHub"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icon name="github" style={{ margin: '0 .25rem 0' }} />
                        Source Code
                    </a>
                </div>
                <div className={styles.footerText}>
                    Made with &nbsp;
                    <i>
                        <LoveEmoji />
                    </i>
                    &nbsp; by{' '}
                    <a href="https://baoshuo.ren" target="_blank">
                        Baoshuo
                    </a>
                </div>
            </Container>
        </Segment>
    </>
);
