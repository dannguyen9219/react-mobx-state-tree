import cx from 'classnames'

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  label: string;
}

export const Button = ({ label, disabled = false, ...otherProps }: Props) => {
  return (
    <button {...otherProps}
      disabled={disabled}
      className={cx(
        "px-4 py-2 leading-5 font-medium hover:bg-orange-500 text-gray-50 bg-gray-600 select-none focus:outline-none focus:shadow-outline",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {label}
    </button>
  )
}