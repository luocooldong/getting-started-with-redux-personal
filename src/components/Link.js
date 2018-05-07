const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#' 
       style={{border: '1px solid red'}}
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
      >
      {children}
    </a>
  );
};