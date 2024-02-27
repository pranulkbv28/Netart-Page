import React from "react";
import styles from "./preFooter.module.css";
import SpanContent from "../spanContent/SpanContent";

const PreFooter = () => {
  return (
    <div className={styles.body}>
      <h4 className={styles.header}>
        C.R.I. FLUID SYSTEMS PRODUCTS TO DIVERSE SEGMENTS
      </h4>
      <div className={styles.spanContainer}>
        <SpanContent />
      </div>
    </div>
  );
};

export default PreFooter;
