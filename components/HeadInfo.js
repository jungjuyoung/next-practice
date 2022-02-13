import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <div>
      <Head>
        <title> {title}</title>
        <meta charset="UTF-8" />
        <meta keyword={keyword} content={contents} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </div>
  );
};

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "Blog powered by Next",
  contents: "let's practice Next js",
};

export default HeadInfo;
