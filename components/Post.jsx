import Link from "next/link";
import * as Icon from "react-feather";
export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="card ">
        <img className="card-image" src={post.frontmatter.cover_image} alt="" />
        <div class="card-info">
          <span className="content">
            {" "}
            <h3 className="card-title">{post.frontmatter.title}</h3>
            <div className="card-moreinfo">
              <Icon.Calendar stroke="#832424" height={12} width={12} />
              <p className="card-date">{post.frontmatter.date}</p>
              <div className="separator">|</div>
              <Icon.Inbox height={12} width={12} />
              <p className="card-category">{post.frontmatter.category}</p>
            </div>
            <p className="card-excerpt">{post.frontmatter.excerpt}</p>
          </span>
        </div>
      </div>
    </Link>
  );
}
