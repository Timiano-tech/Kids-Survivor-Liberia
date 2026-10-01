import DonateCTA from './DonateCTA';

const CTABanner = ({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo = '/donate',
  secondaryLabel,
  secondaryTo = '/partnership',
  secondaryHref,
}) => {
  return (
    <DonateCTA
      eyebrow={eyebrow}
      title={title}
      description={description}
      primaryLabel={primaryLabel}
      primaryTo={primaryTo}
      secondaryLabel={secondaryLabel}
      secondaryTo={secondaryTo}
      secondaryHref={secondaryHref}
    />
  );
};

export default CTABanner;
