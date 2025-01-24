import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchPosts() {
  const posts = await prisma.post.findMany({
    orderBy: { created_at: "desc" },
  });
  return posts;
}

export default async function ManagePostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="button-container">
          <button className="button primary fit">MANAGE POSTS</button>
          <button className="button primary fit">MANAGE USERS</button>
          <button className="button primary fit">MANAGE SPOTLIGHTS</button>
          <button className="button primary fit">MANAGE FEATURES</button>
          <button className="button primary fit">MANAGE BANNER</button>
          <button className="button primary fit">MANAGE MISC. INFO</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <h1>Manage Posts</h1>
        <div className="table-container">
          <table className="posts-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Thumbnail</th>
                <th>Short Description</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>
                    <img
                      src={post.thumbnail_img}
                      alt="Thumbnail"
                      className="thumbnail"
                    />
                  </td>
                  <td>{post.short_description}</td>
                  <td>{new Date(post.created_at).toLocaleDateString()}</td>
                  <td>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
