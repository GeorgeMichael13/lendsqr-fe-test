import React from "react";
import "./Button.module.scss"; // Scoped

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  onClick?: () => void;
}
export const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
}) => (
  <button className={`button ${variant} ${size}`} onClick={onClick}>
    {children}
  </button>
);
