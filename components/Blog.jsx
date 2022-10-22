import Link from "next/link";
import * as Icon from "react-feather";
export default function blog(props) {
  console.log(props.frontmatter);
  return (
    <div className="blog">
      <h1 className="title">{props.frontmatter.title}</h1>
      <div className="blog-moreinfo">
        <Icon.Calendar stroke="#832424" height={12} width={12} />
        <p className="blog-date">{props.frontmatter.date}</p>
        <div className="separator">|</div>
        <Icon.Inbox height={12} width={12} />
        <p className="blog-category">{props.frontmatter.category}</p>
      </div>

      <div
        className="blog-main"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </div>
  );
}
