function Cell({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center border'>
      {children}
    </div>
  );
}

export default Cell;
