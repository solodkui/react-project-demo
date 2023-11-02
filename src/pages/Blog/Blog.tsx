// * Base
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import useTitle from '../../hooks/use-title.hook';
import { BREADCRUMBS_LIST } from './Blog.data';
import { useEffect, memo } from 'react';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';
import Card from '../../components/Card/Card';

// * Styles
import styles from './Blog.module.css';

function Blog() {
  const title = useTitle({ title: 'Блог' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://camelot-academy-blog.disqus.com/embed.js';
    script.setAttribute('data-timestamp', (+new Date()).toString());
    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <div className={styles.blog}>
      <Wrapper>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1 className={styles.title}>{title}</h1>
        <Card>
          <div id="disqus_thread"></div>
        </Card>
      </Wrapper>
    </div>
  );
}

export default memo(Blog);
