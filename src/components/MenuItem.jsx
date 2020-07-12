import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
  opacity: ${props => (props.selected ? '1' : '.6')};
  color: ${props => {
    if (props.mobile) {
      if (props.selected) {
        return 'var(--text-color)';
      }
      return 'rgba(255, 255, 255, .7)';
    } else {
      if (props.selected) {
        return 'var(--color-primary-dark)';
      }
      return 'var(--color-primary-dark)';
    }
  }};
  border-color: ${props =>
    props.selected
      ? 'var(--color-primary-dark)'
      : 'var(--color-primary-light)'};
  border: ${props => (props.selected ? '1px solid' : '1px solid transparent')};
  border-radius: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &:hover {
    border: 1px solid;
  }
`;

const MenuItem = ({ title, selected, mobile }) => {
  return (
    <StyledItem selected={selected} mobile={mobile}>
      <FontAwesomeIcon
        icon="arrow-alt-circle-right"
        size="1x"
        style={{ marginRight: "10px" }}
      />
      {title}
    </StyledItem>
  );
};

export default MenuItem;
