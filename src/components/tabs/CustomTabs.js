import { Tabs, Tab, TabList } from "react-tabs";
import styles from "./CustomTabs.module.scss";

// should handle {TabPanel} in component that we use CustomTabs

export default function CustomTabs({ tabs, children, setState }) {
  return (
    <>
      <Tabs>
        <TabList className={styles.tabList}>
          {tabs.map((item) => (
            <Tab
              onClick={() => setState(item.key)}
              key={item.id || item.title}
              className={styles.tab}>
              {item.title}
            </Tab>
          ))}
        </TabList>
        {children}
      </Tabs>
    </>
  );
}
