import styles from './post-body.module.css'
import { useState, useEffect } from 'react';



export default function PostBody({ content }) {

    const [render, setRender] = useState(false);
    
    useEffect(() => {
       setRender(true);
    }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 mb-16">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
        suppressHydrationWarning/>
    </div>
  )
}
