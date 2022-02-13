import styles from "../styles/Home.module.css";
import HeadInfo from "../components/HeadInfo";

const Home = ({ posts }) => {
  // console.log(`Home Component posts: ${JSON.stringify(posts, null, 4)}`);

  return (
    <div>
      <HeadInfo />
      <h1>Welcome to my blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 20,
//   };
// };

export default Home;
