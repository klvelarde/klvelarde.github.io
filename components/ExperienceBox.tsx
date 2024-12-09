import Typography from "./Typography";

const ExperienceBox = ({
  title,
  company,
  year,
  children,
}: {
  title: string;
  company?: string;
  year: string;
  children: React.ReactNode;
}) => (
  <div className="relative flex flex-col md:flex-row justify-between gap-[20px] py-2">
    <div className="w-2 h-2 rounded-full bg-retama absolute -left-[20px] top-[18px]" />
    <div className="grow">
      <Typography tag="h4" customClass="text-retama">
        {title}
      </Typography>
      {company && (
        <span className="text-xs font-semibold text-white">
          {company}
          <br />
        </span>
      )}
      <span className="text-sm text-white/80">{year}</span>
    </div>
    <p className="max-w-[440px]">{children}</p>
  </div>
);

export default ExperienceBox;
