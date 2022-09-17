import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({
  url,
  id,
  title,
}: {
  url: string;
  id: string;
  title: string;
}) => {
  const disqusShortname = "little-app";
  const disqusConfig = {
    url: url,
    identifier: id, // Single post id
    title: title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
