interface Props {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input: React.FC<Props> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => (
  <div className="input-wrapper">
    <label className="label">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
  </div>
);
