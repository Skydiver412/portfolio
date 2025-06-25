const EscapeRoom = () => (
  <iframe
    src={`${process.env.PUBLIC_URL}/../escapeRoomGame/story.html`}
    title="Escape Room"
    width="100%"
    height="100%"
    style={{ border: "none" }}
  />
);

export default EscapeRoom;
