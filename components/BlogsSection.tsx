import Image from "next/image";
import Link from "next/link";
import styles from "./BlogsSection.module.css";

const blogsData = [
  {
    id: "analytical-betting-venue-splits",
    title: "The Analytical Edge: Using Venue Splits and Pitch Reports in 2026",
    excerpt: "If you are still relying solely on \"team form\" to place your bets in 2026, you are leaving money on the table. Professional cricket bettors know that the most critical variable is the environment where the match is played. Learn how venue-specific data and pitch reports can give you a professional edge.",
    image: "/cricket_pitch_analytics.png",
    link: "/analytical-betting-venue-splits/",
    date: "July 28, 2026",
    category: "Betting Guide"
  }
];

export default function BlogsSection() {
  return (
    <section className={`section-padding ${styles.section}`} id="blogs">
      <div className="container">
        <h2 className="section-title text-center">
          Our Latest <span>Cricket Blogs</span> & Insights
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Stay ahead of the game with analytical guides, strategy insights, and professional tips.
        </p>

        <div className={styles.grid}>
          {blogsData.map((blog) => (
            <div key={blog.id} className={styles.card}>
              <div className={blog.link ? "" : undefined}>
                <Link href={blog.link} className={styles.cardLink}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={340}
                      className={styles.image}
                    />
                    <span className={styles.category}>{blog.category}</span>
                  </div>
                </Link>
              </div>
              <div className={styles.content}>
                <div className={styles.date}>{blog.date}</div>
                <Link href={blog.link}>
                  <h3 className={styles.title}>{blog.title}</h3>
                </Link>
                <p className={styles.excerpt}>{blog.excerpt}</p>
                <div className={styles.footer}>
                  <Link href={blog.link} className={styles.showMoreBtn}>
                    Show More <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
