import PostCard from '../components/PostCard';

const dummyPosts = [
  {
    id: 1,
    title: 'Welcome to The Unblog',
    content: 'This is your first post 🎉',
    slug: 'welcome',
  },
  {
    id: 2,
    title: 'Why I started writing what',
    content: 'Because life is too short not to document it.',
    slug: 'why-writing',
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-transparent px-6 py-2">
      <header className="text-center mb-12">
        <p className="text-lg text-gray-600">Random.</p>
      </header>
      {/*
      <section className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </section>
      */}
    </div>
  );
};

export default HomePage;
