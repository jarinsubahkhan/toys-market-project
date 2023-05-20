

const Blogs = () => {
    return (
        <div className="m-10 p-5">
      <h2 className="text-3xl font-bold text-slate-700 my-5">Blog Page</h2> 
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-sky-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is an access token and refresh token? How do they work and where should we store them on the client-side?
  </div>
  <div className="collapse-content">
    <p>Refresh tokens allow you to balance your users access needs with your organizations security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.</p>
    <p>You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.</p>
  </div>
</div>       
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-sky-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Compare SQL and NoSQL databases?
  </div>
  <div className="collapse-content">
    <p>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
  </div>
</div>       
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-sky-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is express js? What is Nest JS? 
  </div>
  <div className="collapse-content">
    <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
  </div>
</div>       
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-sky-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is MongoDB aggregate and how does it work ?
  </div>
  <div className="collapse-content">
    <p>In MongoDB, the aggregate operation is a powerful tool that allows you to perform complex data analysis and transformation tasks on your collections. It provides a way to process and combine multiple documents within a collection to produce aggregated results.

The aggregate operation uses a pipeline-based approach, where you define a sequence of stages that are applied to the documents in the collection. Each stage performs a specific operation on the input documents and passes the result to the next stage in the pipeline. The output of the last stage is the aggregated result.</p>
  </div>
</div>       
        </div>
    );
};

export default Blogs;