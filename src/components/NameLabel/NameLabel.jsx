import "./nameLabel.css";

export default function NameLabel(props) {
  return (
    <div className="NameLabel">
      <p>{props.name}</p>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Change
      </button>
    </div>
  );
}
