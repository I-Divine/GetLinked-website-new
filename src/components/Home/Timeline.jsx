const TimelineSection = () => {
  return (
    <>
      <section className="section-pad">
        <h2 className="heading">Timeline</h2>
        <p className="fs-medium">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        <TimelineComponent
          heading={"Hackathon Announcement"}
          number={1}
          date={"November 18, 2023"}
          content={
            "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
          }
        />
        <TimelineComponent
          heading={"Teams Registration begins"}
          number={2}
          date={"November 18, 2023"}
          content={
            "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
          }
        />
        <TimelineComponent
          heading={"Teams Registration ends"}
          number={3}
          date={"November 18, 2023"}
          content={"Interested Participants are no longer Allowed to register"}
        />
        <TimelineComponent
          heading={"Announcement of the accepted teams and ideas"}
          number={4}
          date={"November 18, 2023"}
          content={
            "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced"
          }
        />
        <TimelineComponent
          heading={"Getlinked Hackathon 1.0 Offically Begins"}
          number={5}
          date={"November 18, 2023"}
          content={
            "Accepted teams can now proceed to build their ground breaking skill driven solutions"
          }
        />
        <TimelineComponent
          heading={"Demo Day"}
          number={6}
          date={"November 18, 2023"}
          content={
            "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day"
          }
        />
      </section>
    </>
  );
};
export default TimelineSection;

function TimelineComponent({ heading, number, date, content }) {
  return (
    <div className="timeline">
      <div className={number % 2 === 0 ? "time-content right" : "time-content"}>
        <h2 className="heading accent-1" style={{ lineHeight: "1.25rem" }}>
          {heading}
        </h2>
        <p className="paragraph">{content}</p>
      </div>
      <div className="numbering-container">
        <div className="fancy-line"></div>
        <div className="timeline-number">{number}</div>
      </div>
      <div
        className={
          number % 2 === 0
            ? "heading accent-1 date left"
            : "heading accent-1 date"
        }
      >
        {date}
      </div>
    </div>
  );
}
