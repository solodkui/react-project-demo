// * Base
import useTitle from '../../hooks/use-title.hook';
import { useEffect } from 'react';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';
import Card from '../../components/Card/Card';

// * Styles
import styles from './Blog.module.css';

function Blog() {
  useTitle({ title: 'Блог' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://camelot-academy-blog.disqus.com/embed.js';
    script.setAttribute('data-timestamp', (+new Date()).toString());
    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <div className={styles.blog}>
      <Wrapper>
        <Card>
          <h1 className={styles.title}>Блог</h1>
          <div id='disqus_thread'></div>
        </Card>
      </Wrapper>
    </div>
  );
}

export default Blog;
