export default function Unauthorized() {
  return (
    <div className="container">
        <h2 className="text-center mb-2 mt-2"><b>You have no access to view this page!</b></h2>
      <img
        className="img w-100 img-fluid"
        src="public/images/unauthorized.png"
        alt="error-image"
      />
    </div>
  );
}
