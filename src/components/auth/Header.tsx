type TextsProps = {
  header: string;
  paragraph: string | React.ReactNode;
};

export const Header = ({ header, paragraph }: TextsProps) => {
  return (
    <div>
      <h2 className="text-[24px] font-semibold mt-[24px]">{header}</h2>
      <p className="text-[16px] text-[#71717a] mb-[24px]">{paragraph}</p>
    </div>
  );
};
