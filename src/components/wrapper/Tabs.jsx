function Tabs({ buttons, children, ButtonContainer = 'menu' }) {
  return (
    <>
      <ButtonContainer className="tab-buttons">{buttons}</ButtonContainer>
      {children}
    </>
  );
}

export default Tabs;
