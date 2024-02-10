import './TabButton.css';

function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? 'tab-button active' : 'tab-button'}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}

export default TabButton;
