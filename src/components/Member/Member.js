import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Member.css";

const Member = (props) => {
  //   console.log(props.member);
  const { img, name, age, role, salary, working, village } = props.member;
  return (
    <Card className="member-card">
      <img src={img} className="card-image" alt="" />
      <Card.Body className="bg-dark">
        <Card.Title className="fw-bold text-info">{name}</Card.Title>
        <div className="d-flex justify-content-between">
          <p>
            <b>Job:</b> {role}
          </p>
          <p>
            <b>Salary:</b> {salary}&#2547;
          </p>

          <p>
            <b>AGE:</b> {age};
          </p>
        </div>
        <p>
          <b>Working on:</b> {working}
        </p>
        <p></p>
        <Button
          variant="primary"
          onClick={() => props.handleCart(props.member)}
        >
          <FontAwesomeIcon icon={faCartPlus} /> Add Member
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Member;
