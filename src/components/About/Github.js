import React from "react";
import { Row } from "react-bootstrap";

function LeetcodeStats() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Activity
      </h1>

      <img
        src="https://leetcard.jacoblin.cool/darpan2004?theme=dark&animation=true"
        alt="LeetCode Stats"
        style={{
          maxWidth: "100%",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      />
    </Row>
  );
}

export default LeetcodeStats;
