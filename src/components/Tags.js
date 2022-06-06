import { Tag } from "antd";

const tagColours = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const getTagColour = () =>
  tagColours[Math.floor(Math.random() * tagColours.length)];

const Tags = ({ tags, setActiveTag }) => {
  if (tags.length === 0) {
    return <></>;
  }
  return (
    <div style={{ width: "80%", margin: "auto", marginBottom: "5px" }}>
      {tags.map((tag, index) => (
        <Tag
          color={getTagColour()}
          key={index}
          style={{ cursor: "pointer", margin: "5px" }}
        >
          <span
            onClick={() => {
              setActiveTag(tag);
            }}
          >
            {tag}
          </span>
        </Tag>
      ))}
    </div>
  );
};

export default Tags;
