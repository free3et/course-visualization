import { Textarea } from "../UI/textarea/textarea";
import "./cardItem.css";

export function CardItem({ item }) {
  const {
    type,
    keyPoints = [],
    hometask = [],
    links = [],
    takeaways = [],
  } = item;

  return (
    <>
      <div className="card">
        <h4>Type: {type}</h4>
        {keyPoints.length > 0 && (
          <div>
            <h4>Key Points:</h4>
            <ul>
              {keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        {hometask.length > 0 && (
          <div>
            <h4>Hometask:</h4>
            <div className="border_list">
              {hometask.map((task) => (
                <p key={task}>{task}</p>
              ))}
            </div>
          </div>
        )}
        <div>
          <h4>Links</h4>
          <div className="links_block">
            {links.map((link) => {
              Object.values(link);
              return (
                <a
                  className="hometask_links"
                  href={link[1]}
                  key={link}
                  target="_blank"
                >
                  {link[0]}
                </a>
              );
            })}
          </div>
        </div>
        {takeaways.length > 0 && (
          <div>
            <h4>Take Aways:</h4>
            <ul className="three-column">
              {takeaways.map((takeaway) => (
                <li key={takeaway}>{takeaway}</li>
              ))}
            </ul>
          </div>
        )}
        <Textarea />
      </div>
    </>
  );
}
