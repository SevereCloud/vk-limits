import { SimpleCell } from "@vkontakte/vkui";
import { DataItem } from "../../../data";
import styles from "./Item.module.css";

export interface ItemProps extends DataItem {
  fill: string;
}

export function Item({ Icon, name, hint, text, link, fill }: ItemProps) {
  return (
    <SimpleCell
      before={<Icon fill={fill} width={28} height={28} aria-hidden />}
      multiline
      subtitle={text}
      href={link}
      target="_blank"
      expandable={link ? "always" : undefined}
    >
      {name}
      {hint && <span className={styles.hint}>{" " + hint}</span>}
    </SimpleCell>
  );
}
