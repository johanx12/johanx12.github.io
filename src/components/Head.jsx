/** Encabezado común de sección: kicker + título + bajada. */
export default function Head({ kicker, title, lead }) {
  return (
    <div className="head rev">
      <div className="kicker">{kicker}</div>
      <h2 className="h2">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
