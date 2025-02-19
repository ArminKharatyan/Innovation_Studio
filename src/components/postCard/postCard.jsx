import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

const PostCard = ({ post }) => {
  const formattedDate = formatDate(post.createdAt);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image 
              src={post.img} 
              alt="Post image" 
              fill 
              className={styles.img} 
              unoptimized
            />
          </div>
        )}
        <span className={styles.date}>{formattedDate}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
