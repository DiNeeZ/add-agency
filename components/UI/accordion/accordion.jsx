import AccordionSection from "./accordion-section";
import styles from "./accordion.module.scss";

const Accordion = ({ list }) => {
  return (
    <ul className={styles.accordion}>
      {list.map((item, index) => {
        return (
          <li key={item.id} className={styles.item}>
            <AccordionSection section={item} open={index === 0} />
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
