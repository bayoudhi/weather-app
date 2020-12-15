import * as React from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 * @param {Object} Props
 * @param {boolean=} Props.primary
 * @param {string=} Props.backgroundColor
 * @param {string=} Props.size
 * @param {string} Props.label
 * @param {(event:any)=>void} Props.onClick
 */
export const Button = ({ primary, backgroundColor, size, label, onClick }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
