function Row({ children }: { children: React.ReactNode }) {
  return <div className='grid grid-cols-4 bg-green-100'>{children}</div>;
}

export default Row;
